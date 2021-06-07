import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Team} from "./teams.model";
import {SeasonsRelLeagues} from "../seasons/season_rel_leagues.model";

@Table({tableName: 'team_rel_seasons_leagues', createdAt: false, updatedAt: false})
export class TeamRelSeasonsLeagues extends Model<TeamRelSeasonsLeagues> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Team)
    @Column({type: DataType.INTEGER})
    teamId: number;

    @ForeignKey(() => SeasonsRelLeagues)
    @Column({type: DataType.INTEGER})
    seasonRelLeaguesId: number;

    @BelongsTo(() => SeasonsRelLeagues)
    seasonRelLeagues: SeasonsRelLeagues

    @BelongsTo(() => Team)
    teams: Team

}
