import { LeaguesService } from "./leagues.service";
import { League } from "./leagues.model";
export declare class LeaguesController {
    private leagueService;
    constructor(leagueService: LeaguesService);
    getAll(): Promise<League[]>;
}
