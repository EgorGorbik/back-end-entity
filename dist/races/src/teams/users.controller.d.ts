import { TeamsService } from "./teams.service";
import { createTeamDto } from "./dto/create-team.dto";
export declare class UsersController {
    private userService;
    constructor(userService: TeamsService);
    create(userDto: createTeamDto): Promise<any>;
    getAll(): Promise<any>;
}
