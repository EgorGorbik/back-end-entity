import { Team } from "./teams.model";
import { createLeagueDto } from "./dto/create-league.dto";
export declare class TeamsService {
    private teamRepository;
    constructor(teamRepository: typeof Team);
    createTeam(dto: createLeagueDto): Promise<any>;
}
