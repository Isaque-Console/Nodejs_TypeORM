import { Request, Response } from 'express';
import { AuthenticateUserUC } from '../usecase/AuthenticateUserUC';
import { UserRepository } from '../repository/UserRepository';

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { username, password } = request.body;
            
            const useCase = new AuthenticateUserUC(new UserRepository());
            const authenticatedUser: any = await useCase.execute({ username, password });

            return response.status(200).json(authenticatedUser);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}