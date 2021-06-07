import { Team } from "./teams.model";
export declare class TeamsService {
    private teamRepository;
    constructor(teamRepository: typeof Team);
    getTeams(): Promise<Team[]>;
}
