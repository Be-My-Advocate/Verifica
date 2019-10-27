import * as argon2 from "argon2";
import * as fnv from 'fnv-plus';
import { User } from "../entity/user";

export const register = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne(username)

    if (user) {
        res.status(409).send('Confict: User already exists with this username!')
        return
    }

    const hash = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 64*1024,
        hashLength: 32,
        timeCost: 1,
    })

    let u = new User();
    u.username = username;
    u.password = hash;
    u.accountId = parseInt(fnv.hash(username, 64).dec())
    u.deviceId = req.body.deviceId;

    await u.save();

    req.session.username = username;
    res.status(200).send({
        accountId: u.accountId,
        deviceId: u.deviceId
    })
}

export const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne(username)

    if (!user) {
        res.status(401).send('Username/Password could not be verified')
        return
    }

    if (!argon2.verify(user.password, password)) {
        res.status(401).send('Username/Password could not be verified')
        return
    }

    req.session.username = username;
    res.status(200).send()
}