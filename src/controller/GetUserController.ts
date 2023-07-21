import { Request, Response } from 'express';
import { GetUserUC } from '../usecase/GetUserUC';
import { User } from '../entity/user';
import { IUserRepository, UserRepository } from '../repository/UserRepository';

export class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;

            const userRepository: IUserRepository = new UserRepository();
            const getUserUC: GetUserUC = new GetUserUC(userRepository);
            const user: User = await getUserUC.getUserById(userId);

            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}