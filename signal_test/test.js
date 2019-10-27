var store = new window.SignalProtocolStore();
var KeyHelper = window.libsignal.KeyHelper;
(async () => {
    const username = "tess3233454"
    const password = "123456"

    await Register(username, password);
    //await Login(username, password);

    await SendMessage(username, "Hello, World!")
    await SendMessage(username, "Hello, World 2!")
    await SendMessage(username, "Hello, World 3!")
    console.log(await ReceiveMessages(0))
    
})()
    
    async function Register(username, password) {
        const res = await fetch("http://localhost:8080/register", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, deviceId: 123456, registrationId: window.KeyHelper.generateRegistrationId() }) // body data type must match "Content-Type" header
        })
        
        const registration = await res.json()
        await sendKeys(registration.registrationId)   
    }

    async function Login(username, password) {
        const res = await fetch("http://localhost:8080/login", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }) // body data type must match "Content-Type" header
        })
        
        const login = await res.json()
        await loadKeys(login.registrationId)  
    }

    async function loadKeys(registrationId) {
        window.store.put('registrationId', registrationId);

        // TODO: Save idKeyPair from sendKeys
        //window.store.put('identityKey', null);

        // TODO: save preKeys from sendKeys
        // for (const preKey of listOfPreKeys){
        //     window.store.storePreKey(preKeyObject.keyId, preKeyObject.keyPair);
        // }

        // TODO: save signedPreKey fomr sendKeys
        //  window.store.storeSignedPreKey(signedPreKey.keyId, signedPreKeyObject.keyPair);
    }

    async function sendKeys(registrationId) {    
        window.store.put('registrationId', registrationId);
        
        
        const idKeyPair = await window.KeyHelper.generateIdentityKeyPair()
        
        window.store.put('identityKey', idKeyPair);
        
        let listOfPreKeys = [];
        for(let i = 0; i < 100; i++){
            let key = await window.KeyHelper.generatePreKey(registrationId + i + 1)
            listOfPreKeys.push(key);
        }
        
        let preKeyObjects = [];
        let preKeyObjectsToSend = [];
        
        for (const preKey of listOfPreKeys){
            let preKeyObject = {
                keyId: preKey.keyId,
                keyPair: preKey.keyPair
            };
        
            preKeyObjects.push(preKeyObject);
        
            window.store.storePreKey(preKeyObject.keyId, preKeyObject.keyPair);
        
            let preKeyObjectToSend = {
                keyId: preKeyObject.keyId,
                publicKey: window.arrBuffToBase64(preKeyObject.keyPair.pubKey)
            };
        
            preKeyObjectsToSend.push(preKeyObjectToSend); 
        };
        
        const signedPreKey = await window.KeyHelper.generateSignedPreKey(idKeyPair, registrationId -1)
        
        const signedPreKeyObject = {
            keyId: signedPreKey.keyId,
            keyPair: signedPreKey.keyPair,
            signature: signedPreKey.signature
        }
        
        window.store.storeSignedPreKey(signedPreKey.keyId, signedPreKeyObject.keyPair);
        
        await fetch("http://localhost:8080/keys", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                identityKey: window.arrBuffToBase64(idKeyPair.pubKey),
                signedPreKey: {
                    keyId: signedPreKeyObject.keyId,
                    publicKey: window.arrBuffToBase64(signedPreKeyObject.keyPair.pubKey),
                    signature: window.arrBuffToBase64(signedPreKeyObject.signature)
                },
                preKeys: preKeyObjectsToSend
            })
        })
    }

    async function SendMessage(username, message) {
        const preKeyFetch = await fetch(`http://localhost:8080/users/${username}/keys`)
        const processPreKeyObject = await preKeyFetch.json()
        
        processPreKeyObject.identityKey = window.base64ToArrBuff(processPreKeyObject.identityKey)
        processPreKeyObject.preKey.publicKey = window.base64ToArrBuff(processPreKeyObject.preKey.publicKey)
        processPreKeyObject.signedPreKey.publicKey = window.base64ToArrBuff(processPreKeyObject.signedPreKey.publicKey)
        processPreKeyObject.signedPreKey.signature = window.base64ToArrBuff(processPreKeyObject.signedPreKey.signature)
        
        console.log(processPreKeyObject.registrationId)

        let recipientAddress = new window.libsignal.SignalProtocolAddress(processPreKeyObject.registrationId, processPreKeyObject.deviceId);
        let sessionBuilder = new window.libsignal.SessionBuilder(window.store, recipientAddress);
        await sessionBuilder.processPreKey(processPreKeyObject)
        
        const messageText = new TextEncoder("utf-8").encode(message)
        
        let signalMessageToAddress = new window.libsignal.SignalProtocolAddress(processPreKeyObject.registrationId, processPreKeyObject.deviceId);
        let sessionCipher = new window.libsignal.SessionCipher(window.store, signalMessageToAddress);
          
        const eMessage = await sessionCipher.encrypt(messageText)
        
        await fetch(`http://localhost:8080/users/${username}/send`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(eMessage)
          })
    }
    
    async function ReceiveMessages(lastId) {
        const messages = await fetch(`http://localhost:8080/messages?id=${lastId}`, {credentials: 'include'})
                            .then(response => response.json());
    
        let decryptedMessages = []
    
        for (const m of messages){
            let signalMessageToRec = new window.libsignal.SignalProtocolAddress(m.sender.registrationId, m.sender.deviceId);
            let sessionDecCipher = new window.libsignal.SessionCipher(window.store, signalMessageToRec);
    
            const plainText = await sessionDecCipher.decryptPreKeyWhisperMessage(m.cipherMessage.body, 'binary')
            const decryptedMessage = window.util.toString(plainText);

            decryptedMessages.push({
                id: m.id,
                username: m.sender.username,
                message: decryptedMessage,
            })
        }
        
        return decryptedMessages
    }