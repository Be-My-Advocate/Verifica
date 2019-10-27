import { User } from "../entity/user";
import { Message } from "../entity/message";

export const keys = async (req, res) => {
    const username = req.session.username;

    const user = await User.findOne(username)

    console.log(req.body.preKeys)

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
    message.sender = sender;
    message.recipient = recipient;
    message.cipherMessage = req.body;

    await message.save()

    // TODO: SSE/WS to recipient

    res.status(200).send();

}