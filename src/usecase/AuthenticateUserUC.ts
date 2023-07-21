import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { compare } from "bcryptjs";
import { IUserRepository } from "../repository/UserRepository";

interface IRequest {
    username: string;
    password: string;
}

export class AuthenticateUserUC {
    constructor(
        private usersRepository: IUserRepository
    ) { }

    async passswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        const match: boolean = await compare(password, hashedPassword);

        return match;
    }

    async execute({ username, password }: IRequest): Promise<any> {
        const userAlreadyExists: any = await this.usersRepository.getUserByUsername(username);

        if (!userAlreadyExists) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const passswordMatch = await this.passswordMatch(password, userAlreadyExists.password);

        if (!passswordMatch) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const generateTokenProvider = new GenerateTokenProvider();
        const token: string = await generateTokenProvider.execute(userAlreadyExists.id);

        return { token, user: userAlreadyExists };
    }
}