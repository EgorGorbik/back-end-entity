import { Model } from "sequelize-typescript";
import { Team } from "./teams.model";
import { SeasonsRelLeagues } from "../seasons/season_rel_leagues.model";
export declare class TeamRelSeasonsLeagues extends Model<TeamRelSeasonsLeagues> {
    id: number;
    teamId: number;
    seasonRelLeaguesId: number;
    seasonRelLeagues: SeasonsRelLeagues;
    teams: Team;
}
