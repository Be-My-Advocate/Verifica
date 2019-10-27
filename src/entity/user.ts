import {Entity, PrimaryColumn, Column, OneToMany, BaseEntity, Generated} from "typeorm";
import {Message} from './message'

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;
    
    @Column()
    registrationId: number;

    @Column()
    deviceId: number;

    @Column({ nullable: true })
    identityKey: string;

    @Column("simple-json", { nullable: true })
    preKeys: Key[];

    @Column("simple-json", { nullable: true })
    signedPreKey: SignedKey;

    @OneToMany(type => Message, message => message.sender, {eager: true})
    sent: Message[];

    @OneToMany(type => Message, message => message.recipient, {eager: true})
    received: Message[];

}

interface Key {
    keyId: number;
    publicKey: string;
}

interface SignedKey {
    keyId: number;
    signature: string;
    publicKey: string;
}