import { Season } from "./season.model";
export declare class SeasonsService {
    private seasonRepository;
    constructor(seasonRepository: typeof Season);
    getSeasons(): Promise<Season[]>;
    getTeamsInLeaguesBySeasons(seasonId: string): Promise<Season[]>;
    getScoreTeamsInRacesByLeaguesBySeasons(seasonId: string, leagueId: string): Promise<Season[]>;
}
