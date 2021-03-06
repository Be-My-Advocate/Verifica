import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, BaseEntity, Generated} from "typeorm";
import {User} from './user';

@Entity()
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(type => User, user => user.sent)
    sender: Promise<User>;
    
    @ManyToOne(type => User, user => user.received)
    recipient: Promise<User>;

    @Column("simple-json")
    cipherMessage: CipherMessage;
}

interface CipherMessage {
    type: number;
    body: string;
    registrationId: number;
}