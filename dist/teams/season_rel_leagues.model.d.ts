import { Model } from "sequelize-typescript";
import { Team } from "./teams.model";
import { Season } from "../seasons/season.model";
import { League } from "../leagues/leagues.model";
import { TeamRelSeasonsLeagues } from "./team-rel-seasonsLeagues.model";
import { Race } from "../races/race.model";
import { RaceRelSeasonsLeagues } from "../races/race-rel-seasonsLeagues.model";
export declare class SeasonsRelLeagues extends Model<SeasonsRelLeagues> {
    id: number;
    seasonId: number;
    leagueId: number;
    seasons: Season;
    leagues: League;
    teams: Team[];
    races: Race[];
    raceRelSeasonsLeagues: RaceRelSeasonsLeagues;
    teamRelSeasonsLeagues: TeamRelSeasonsLeagues;
}
