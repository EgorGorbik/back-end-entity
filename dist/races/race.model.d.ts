import { Model } from "sequelize-typescript";
import { SeasonsRelLeagues } from "../seasons/season_rel_leagues.model";
interface RaceCreationAttrs {
    title: string;
}
export declare class Race extends Model<Race, RaceCreationAttrs> {
    id: number;
    title: string;
    seasonsRelLeagues: SeasonsRelLeagues[];
}
export {};
