import { Team } from "./teams.model";
import { createTeamDto } from "./dto/create-team.dto";
export declare class TeamsService {
    private teamRepository;
    constructor(teamRepository: typeof Team);
    createTeam(dto: createTeamDto): Promise<Team>;
}
