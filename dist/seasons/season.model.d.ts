import { Model } from "sequelize-typescript";
import { SeasonsRelLeagues } from "./season_rel_leagues.model";
import { League } from "../leagues/leagues.model";
interface SeasonCreationAttrs {
    title: string;
}
export declare class Season extends Model<Season, SeasonCreationAttrs> {
    id: number;
    title: string;
    seasonsRelLeagues: SeasonsRelLeagues[];
    leagues: League[];
}
export {};
