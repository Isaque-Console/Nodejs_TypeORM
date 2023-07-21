import { User, UserProps } from "../entity/user";
import { IUserRepository } from "../repository/UserRepository";
import bcrypt from "bcrypt";

export class CreateUserUC {
    constructor(
        private usersRepository: IUserRepository,
    ) { }

    async usernameIsUnique(username: string): Promise<boolean> {
        return !(await this.usersRepository.getUserByUsername(username));
    }

    async validUsername(username: string): Promise<boolean> {
        if (username.length > 2) {
            if (await this.usernameIsUnique(username)) return true;
            throw new Error("Nome de usuario existente.");
        }
        throw new Error("O nome de usuário deve conter pelo menos 3 caracteres.");
    }

    validPassword(password: string): boolean {
        // pelo menos 8 chars, um numero e uma letra maiuscula
        const pattern: RegExp = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (pattern.test(password) && password.length > 7) return true;
        throw new Error("Senha inválida.");
    }

    passwordHash(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);
        const hash: string = bcrypt.hashSync(password, salt);

        return hash
    }

    async create(props: UserProps, id?: string | undefined): Promise<User> {
        try {
            await this.validUsername(props.username)
            this.validPassword(props.password);
        } catch (error: any) {
            throw new Error(error.message);
        }

        const hashedPassword: string = this.passwordHash(props.password);

        return new User({ ...props, password: hashedPassword }, id);
    }

    async execute(userProps: UserProps, userId?: string): Promise<User> {
        const user: User = await this.create(userProps, userId);
        const createdUser: User = await this.usersRepository.createUser(user.props, user.id);
        return createdUser;
    }
}