import { createConnection } from 'typeorm';
import "reflect-metadata";
import {User} from "./entity/User";

(async () => {
    await createConnection();
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.save();
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");

    const users = await User.find();

    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
})();
