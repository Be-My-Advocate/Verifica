import * as bcrypt from "bcrypt";
import { User } from "../entity/user";

export const register = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne(username)

    if (user) {
        res.status(409).send('Confict: User already exists with this username!')
        return
    }

    const hash = await bcrypt.hash(password, 10);

    let u = new User();
    u.username = username;
    u.password = hash;
    u.registrationId = req.body.registrationId // parseInt(fnv.hash(username).dec())
    u.deviceId = req.body.deviceId;

    await u.save();

    req.session.username = username;
    res.status(200).send({
        registrationId: u.registrationId,
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

    if (!bcrypt.compare(password, user.password)) {
        res.status(401).send('Username/Password could not be verified')
        return
    }
    
    // for (const m of user.received) {
    //     m.remove()
    // }

    // for (const m of user.sent) {
    //     m.remove()
    // }
    req.session.username = username;
    res.status(200).send({
        registrationId: user.registrationId
    })
}