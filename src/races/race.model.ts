import {BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {SeasonsRelLeagues} from "../seasons/season_rel_leagues.model";
import {RaceRelSeasonsLeagues} from "./race-rel-seasonsLeagues.model";

interface RaceCreationAttrs {
    title: string;
}

@Table({tableName: 'races'})
export class Race extends Model<Race, RaceCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'testTitle', description: 'this is title'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string;

    @BelongsToMany(() => SeasonsRelLeagues, () => RaceRelSeasonsLeagues)
    seasonsRelLeagues: SeasonsRelLeagues[];
}
