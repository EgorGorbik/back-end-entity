import { UsersService } from "./users.service";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userDto: createUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
