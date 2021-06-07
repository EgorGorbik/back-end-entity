import { League } from "./leagues.model";
export declare class LeaguesService {
    private leagueRepository;
    constructor(leagueRepository: typeof League);
    getLeagues(): Promise<League[]>;
}
