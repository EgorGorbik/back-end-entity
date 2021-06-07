import { SeasonsService } from "./season.service";
import { Season } from "./season.model";
export declare class SeasonsController {
    private seasonService;
    constructor(seasonService: SeasonsService);
    getAll(): Promise<Season[]>;
    getTeamsInLeaguesBySeasons(seasonId: string): Promise<Season[]>;
    getScoreTeamsInRacesByLeaguesBySeasons(seasonId: string, leagueId: string): Promise<Season[]>;
}
