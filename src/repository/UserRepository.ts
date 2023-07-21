import { MysqlQueries } from '../database/MysqlQueries';
import { User, UserProps } from '../entity/user';
import { mySqlClient } from '../typeorm/MysqlClient';

export interface IUserRepository {
    getUserById(userId: string): Promise<any>;
    getUserByUsername(username: string): Promise<User | undefined>;
    createUser(props: UserProps, id?: string): Promise<User | undefined>;
    deleteUserById(userId: string): Promise<User | undefined>;
}

export class UserRepository implements IUserRepository {
    async getUserById(userId: string): Promise<any> {
        const queries: MysqlQueries = new MysqlQueries();
        return await queries.getItemById(userId, await mySqlClient());
    }

    async getUserByUsername(username: string): Promise<User | undefined> {
        const queries: MysqlQueries = new MysqlQueries();
        
        return await queries.getUserByUsername(username, await mySqlClient());
    }

    async createUser(props: UserProps, id?: string): Promise<User> {
        const user = new User(props, id);
        const queries: MysqlQueries = new MysqlQueries();
        const result: User | undefined = await queries.createItem(user, await mySqlClient());
        if(!result) throw new Error("Erro ao criar usuário no banco de dados");
        return result;
    }

    async deleteUserById(userId: string): Promise<any> {
        const queries: MysqlQueries = new MysqlQueries();
        return await queries.deleteItemById(userId, await mySqlClient());
    }
}