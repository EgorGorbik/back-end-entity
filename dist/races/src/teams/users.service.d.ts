import { User } from "./teams.model";
import { createTeamDto } from "./dto/create-team.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: createTeamDto): Promise<any>;
    getUsers(): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
    getUserById(id: string): Promise<any>;
    changeUserById(dto: any, id: string): Promise<any>;
}
