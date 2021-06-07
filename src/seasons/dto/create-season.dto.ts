import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class createSeasonDto {
    @ApiProperty({example: 'title', description: 'Title'})
    @IsString({message: 'Must be a string'})
    readonly title: string;
}
