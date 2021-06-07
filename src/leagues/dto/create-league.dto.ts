import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class createLeagueDto {
    @ApiProperty({example: 'title', description: 'Title'})
    @IsString({message: 'Must be a string'})
    readonly title: string;
}
