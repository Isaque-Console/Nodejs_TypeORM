import { Request, Response } from 'express';
import { User, UserProps } from '../entity/user';
import { UserRepository } from '../repository/UserRepository';
import { CreateUserUC } from '../usecase/CreateUserUC';

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, username, password } = request.body;

        const newUserProps: UserProps = { username, password };
        const useCase: CreateUserUC = new CreateUserUC(new UserRepository());
        const result: User = await useCase.execute(newUserProps, userId);

        return response.json(result);
    }
}