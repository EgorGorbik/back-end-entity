import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {RaceRelSeasonsLeagues} from "../races/race-rel-seasonsLeagues.model";
import {Team} from "./teams.model";

@Table({tableName: 'team_rel_race_seasons_leagues', createdAt: false, updatedAt: false})
export class TeamRelRaceSeasonsLeagues extends Model<TeamRelRaceSeasonsLeagues> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test description', description: 'this is description'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    score: string;

    @ForeignKey(() => RaceRelSeasonsLeagues)
    @Column({type: DataType.INTEGER})
    raceRelSeasonsLeagues: number;

    @ForeignKey(() => Team)
    @Column({type: DataType.INTEGER})
    teamId: number;

    @BelongsTo(() => Team, {as: 'teamData'})
    teams: Team

    @BelongsTo(() => RaceRelSeasonsLeagues)
    raceRelSeasonsLeagues2: RaceRelSeasonsLeagues
}
