import { User } from "../entity/user";

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

