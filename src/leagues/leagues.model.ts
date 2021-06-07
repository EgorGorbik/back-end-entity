import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {SeasonsRelLeagues} from "../seasons/season_rel_leagues.model";
import {Season} from "../seasons/season.model";

interface LeagueCreationAttrs {
    title: string;
}

@Table({tableName: 'leagues'})
export class League extends Model<League, LeagueCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'testTitle', description: 'this is title'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string;

    @BelongsToMany(() => Season, () => SeasonsRelLeagues)
    seasons: Season[];

    @HasMany(() => SeasonsRelLeagues)
    seasonsRelLeagues: SeasonsRelLeagues[];

}
