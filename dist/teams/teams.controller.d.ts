import { TeamsService } from "./teams.service";
import { Team } from "./teams.model";
export declare class TeamsController {
    private teamService;
    constructor(teamService: TeamsService);
    getAll(): Promise<Team[]>;
}
