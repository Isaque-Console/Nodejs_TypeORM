import { Request, Response } from 'express';
import { DeleteUserUC } from '../usecase/DeleteUserUC';
import { User } from '../entity/user';
import { IUserRepository, UserRepository } from '../repository/UserRepository';

export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;

            const userRepository: IUserRepository = new UserRepository();
            const deleteUserUC: DeleteUserUC = new DeleteUserUC(userRepository);
            const result: User = await deleteUserUC.deleteUserById(userId);

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}