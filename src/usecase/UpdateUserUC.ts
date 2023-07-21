import { UserProps } from "../entity/user";
import { IUserRepository } from "../repository/UserRepository";

export class UpdateUserUC {
    constructor(
        private usersRepository: IUserRepository,
    ) { }

    async updateUserById(userId: string, updatedDatas: UserProps): Promise<any> {
        const user = await this.usersRepository.getUserById(userId);
        if (!user) throw new Error("Não existe usuario com esse Id.");
        const result = await this.usersRepository.updateUserById(userId, updatedDatas);

        return result;
    }
}