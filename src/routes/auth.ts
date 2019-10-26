import * as argon2 from "argon2";
import { User } from "../entity/User";

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

    const u = new User();
    u.username = username;
    u.password = hash;

    await u.save();

    req.session.username = username;
    res.status(200).send()
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