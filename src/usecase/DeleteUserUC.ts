import { IUserRepository } from "../repository/UserRepository";

export class DeleteUserUC {
    constructor(
        private usersRepository: IUserRepository,
    ) { }

    async deleteUserById(userId: string): Promise<any> {
        const user = await this.usersRepository.getUserById(userId);
        if (!user) throw new Error("Não existe usuario com esse Id.");
        const result = await this.usersRepository.deleteUserById(userId);

        return result;
    }
}