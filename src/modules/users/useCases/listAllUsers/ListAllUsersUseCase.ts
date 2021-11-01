import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: any;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);
        const users = this.usersRepository.list();

        if (!user) {
            throw new Error(" Usuário não encontrado");
        } else if (user.admin === false) {
            throw new Error(" Usuário não autorizado");
        }

        return users;
    }
}

export { ListAllUsersUseCase };
