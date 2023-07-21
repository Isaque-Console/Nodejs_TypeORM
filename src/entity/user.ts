import { Entity } from "../core/Entity";

export type UserProps = {
    username: string;
    password: string;
}

export class User extends Entity<UserProps> {
    constructor(props: UserProps, id?: string) {
        super(props, id);
    }
}