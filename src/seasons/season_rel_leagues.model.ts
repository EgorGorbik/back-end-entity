import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {Season} from "./season.model";
import {League} from "../leagues/leagues.model";
import {TeamRelSeasonsLeagues} from "../teams/team-rel-seasonsLeagues.model";
import {Race} from "../races/race.model";
import {RaceRelSeasonsLeagues} from "../races/race-rel-seasonsLeagues.model";

@Table({tableName: 'seasons_rel_leagues', createdAt: false, updatedAt: false})
export class SeasonsRelLeagues extends Model<SeasonsRelLeagues> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Season)
    @Column({type: DataType.INTEGER})
    seasonId: number;

    @ForeignKey(() => League)
    @Column({type: DataType.INTEGER})
    leagueId: number;

    @BelongsTo(() => Season)
    seasons: Season

    @BelongsTo(() => League, {as: 'leagueData'})
    leagues: League

    @BelongsToMany(() => Team, () => TeamRelSeasonsLeagues)
    teams: Team[];

    @BelongsToMany(() => Race, () => RaceRelSeasonsLeagues)
    races: Race[];

    @HasMany(() => RaceRelSeasonsLeagues, {as: 'teamsScore'})
    raceRelSeasonsLeagues: RaceRelSeasonsLeagues

    @HasMany(() => TeamRelSeasonsLeagues)
    teamRelSeasonsLeagues: TeamRelSeasonsLeagues
}
