import { Request, Response } from 'express';
import { UpdateUserUC } from '../usecase/UpdateUserUC';
import { User } from '../entity/user';
import { IUserRepository, UserRepository } from '../repository/UserRepository';

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;
            const updatedDatas = request.body;

            const userRepository: IUserRepository = new UserRepository();
            const updateUserUC: UpdateUserUC = new UpdateUserUC(userRepository);
            const result: User = await updateUserUC.updateUserById(userId, updatedDatas);

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}