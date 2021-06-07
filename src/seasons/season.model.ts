import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {SeasonsRelLeagues} from "./season_rel_leagues.model";
import {League} from "../leagues/leagues.model";

interface SeasonCreationAttrs {
    title: string;
}

@Table({tableName: 'seasons'})
export class Season extends Model<Season, SeasonCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'testName', description: 'this is title'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string;

    @HasMany(() => SeasonsRelLeagues, { as: 'leaguesArray' })
    seasonsRelLeagues: SeasonsRelLeagues[];

    @BelongsToMany(() => League, () => SeasonsRelLeagues)
    leagues: League[];
}
