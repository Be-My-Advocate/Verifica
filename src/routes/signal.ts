import { User } from "../entity/user";
import { Message } from "../entity/message";

export const keys = async (req, res) => {
    const username = req.session.username;

    const user = await User.findOne(username)

    user.identityKey = req.body.identityKey
    user.preKeys = req.body.preKeys
    user.signedPreKey = req.body.signedPreKey

    await user.save()

    res.status(200).send();
}


export const sendMessage = async (req, res) => {
    const username = req.session.username;
    const sender = await User.findOne(username)
    const recipient = await User.findOne(req.params.user)

    const message = new Message()
    message.sender = Promise.resolve(sender);
    message.recipient = Promise.resolve(recipient);
    message.cipherMessage = req.body;

    await message.save()

    // TODO: SSE/WS to recipient

    res.status(200).send();
}

export const getUserKeys = async (req, res) => {
    const recipient = await User.findOne(req.params.user)

    res.status(200).send({
        registrationId: recipient.registrationId,
        deviceId: recipient.deviceId,
        identityKey: recipient.identityKey,
        signedPreKey: recipient.signedPreKey,
        preKey: recipient.preKeys.pop()
    })

    await recipient.save()
}

export const getMessages = async (req, res) => {
    const user = await User.findOne(req.session.username)
    const newMessages = user.received.filter(x => parseInt(x.id) > parseInt(req.query.id || "0"))
    
    let messages = []

    for (const x of newMessages) {
        const sender = await x.sender;
        delete x['__sender__'];
        const senderIds = {
            sender: {
                registrationId: sender.registrationId,
                deviceId: sender.deviceId,
                username: sender.username
            }
        }

        messages.push({...x, ...senderIds})
    }



    if (messages.length < 1) {
        res.status(204).send()
    } else {
        res.status(200).send(messages)
    }
}