import {Entity, PrimaryColumn, Column, OneToMany, BaseEntity, Generated} from "typeorm";
import {Message} from './message'

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;
    
    @Column()
    accountId: number;

    @Column()
    deviceId: number;

    @Column({ nullable: true })
    identityKey: string;

    @Column("simple-json", { nullable: true })
    preKeys: Key[];

    @Column("simple-json", { nullable: true })
    signedPreKey: SignedKey;

    @OneToMany(type => Message, message => message.sender)
    sent: Message[];

    @OneToMany(type => Message, message => message.recipient)
    received: Message[];

}

interface Key {
    id: number;
    key: string;
}

interface SignedKey {
    signature: string;
    key: Key;
}