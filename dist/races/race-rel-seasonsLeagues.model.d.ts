import { Model } from "sequelize-typescript";
import { Race } from "./race.model";
import { SeasonsRelLeagues } from "../seasons/season_rel_leagues.model";
import { TeamRelRaceSeasonsLeagues } from "../teams/team_rel_raceSeasonsLeagues.model";
import { Team } from "../teams/teams.model";
export declare class RaceRelSeasonsLeagues extends Model<RaceRelSeasonsLeagues> {
    id: number;
    raceId: number;
    seasonRelLeaguesId: number;
    seasonRelLeagues: SeasonsRelLeagues;
    race: Race;
    teams: Team;
    teamRelRaceSeasonsLeagues: TeamRelRaceSeasonsLeagues[];
}
