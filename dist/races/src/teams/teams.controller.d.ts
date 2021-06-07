import { TeamsService } from "./teams.service";
import { createTeamDto } from "./dto/create-team.dto";
import { Team } from "./teams.model";
export declare class TeamsController {
    private teamService;
    constructor(teamService: TeamsService);
    create(teamDto: createTeamDto): Promise<Team>;
}
