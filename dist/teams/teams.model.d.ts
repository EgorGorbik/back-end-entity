import { Model } from "sequelize-typescript";
import { SeasonsRelLeagues } from "../seasons/season_rel_leagues.model";
import { RaceRelSeasonsLeagues } from "../races/race-rel-seasonsLeagues.model";
interface TeamCreationAttrs {
    title: string;
    description: string;
    city: string;
}
export declare class Team extends Model<Team, TeamCreationAttrs> {
    id: number;
    title: string;
    description: string;
    city: string;
    seasonsRelLeagues: SeasonsRelLeagues[];
    raceRelSeasonsLeagues: RaceRelSeasonsLeagues[];
}
export {};
