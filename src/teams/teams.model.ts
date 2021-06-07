import {BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {TeamRelSeasonsLeagues} from "./team-rel-seasonsLeagues.model";
import {SeasonsRelLeagues} from "../seasons/season_rel_leagues.model";
import {RaceRelSeasonsLeagues} from "../races/race-rel-seasonsLeagues.model";
import {TeamRelRaceSeasonsLeagues} from "./team_rel_raceSeasonsLeagues.model";

interface TeamCreationAttrs {
    title: string;
    description: string;
    city: string;
}

@Table({tableName: 'teams'})
export class Team extends Model<Team, TeamCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'testName', description: 'this is title'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string;

    @ApiProperty({example: 'test description', description: 'this is description'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    description: string;

    @ApiProperty({example: 'testName', description: 'this is city'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    city: string;

    @BelongsToMany(() => SeasonsRelLeagues, () => TeamRelSeasonsLeagues)
    seasonsRelLeagues: SeasonsRelLeagues[];

    @BelongsToMany(() => RaceRelSeasonsLeagues, () => TeamRelRaceSeasonsLeagues)
    raceRelSeasonsLeagues: RaceRelSeasonsLeagues[];
}
