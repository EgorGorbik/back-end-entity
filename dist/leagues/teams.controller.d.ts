import { TeamsService } from "./teams.service";
import { createLeagueDto } from "./dto/create-league.dto";
import { Team } from "./teams.model";
export declare class TeamsController {
    private teamService;
    constructor(teamService: TeamsService);
    create(teamDto: createLeagueDto): Promise<Team>;
}
