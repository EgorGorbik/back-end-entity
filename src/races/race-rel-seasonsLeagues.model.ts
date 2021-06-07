import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Race} from "./race.model";
import {SeasonsRelLeagues} from "../seasons/season_rel_leagues.model";
import {TeamRelRaceSeasonsLeagues} from "../teams/team_rel_raceSeasonsLeagues.model";
import {Team} from "../teams/teams.model";

@Table({tableName: 'race_rel_seasons_leagues', createdAt: false, updatedAt: false})
export class RaceRelSeasonsLeagues extends Model<RaceRelSeasonsLeagues> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Race)
    @Column({type: DataType.INTEGER})
    raceId: number;

    @ForeignKey(() => SeasonsRelLeagues)
    @Column({type: DataType.INTEGER})
    seasonRelLeaguesId: number;

    @BelongsTo(() => SeasonsRelLeagues)
    seasonRelLeagues: SeasonsRelLeagues

    @BelongsTo(() => Race, {as: 'raceData'})
    race: Race

    @BelongsToMany(() => Team, () => TeamRelRaceSeasonsLeagues)
    teams: Team

    @HasMany(() => TeamRelRaceSeasonsLeagues, {as: 'scoreData'})
    teamRelRaceSeasonsLeagues: TeamRelRaceSeasonsLeagues[];
}
