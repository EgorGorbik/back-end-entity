import { Model } from "sequelize-typescript";
import { SeasonsRelLeagues } from "../seasons/season_rel_leagues.model";
import { Season } from "../seasons/season.model";
interface LeagueCreationAttrs {
    title: string;
}
export declare class League extends Model<League, LeagueCreationAttrs> {
    id: number;
    title: string;
    seasons: Season[];
    seasonsRelLeagues: SeasonsRelLeagues[];
}
export {};
