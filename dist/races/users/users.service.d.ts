import { User } from "./users.model";
import { createUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: createUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    changeUserById(dto: any, id: string): Promise<[number, User[]]>;
}
