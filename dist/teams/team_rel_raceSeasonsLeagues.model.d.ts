import { Model } from "sequelize-typescript";
import { RaceRelSeasonsLeagues } from "../races/race-rel-seasonsLeagues.model";
import { Team } from "./teams.model";
export declare class TeamRelRaceSeasonsLeagues extends Model<TeamRelRaceSeasonsLeagues> {
    id: number;
    score: string;
    raceRelSeasonsLeagues: number;
    teamId: number;
    teams: Team;
    raceRelSeasonsLeagues2: RaceRelSeasonsLeagues;
}
