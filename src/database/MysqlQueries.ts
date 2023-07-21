import { Entity } from "../core/Entity";
import { UserProps } from "../entity/user";
import { User } from "../typeorm/entity/User";

export class MysqlQueries {
    async getItemById(id: string, mySqlClient: any): Promise<any> {
        return await mySqlClient.manager.findOneBy(User, {
            id
        })
    };

    async getUserByUsername(username: string, mySqlClient: any): Promise<any> {
        return await mySqlClient.manager.findOneBy(User, {
            username
        })
    };

    async createItem(item: Entity<UserProps>, mySqlClient: any): Promise<any> {
        const user = await mySqlClient.manager.create(User, {
            id: item.id,
            ...item.props
        })

        return await mySqlClient.manager.save(user);
    };

    async updateItemById(id: string, updatedDatas: any, mySqlClient: any): Promise<any> {
        return await mySqlClient.manager.update(User, id, { ...updatedDatas });
    }

    async deleteItemById(id: string, mySqlClient: any): Promise<any> {
        return await mySqlClient.manager.delete(User, id)
    };
}