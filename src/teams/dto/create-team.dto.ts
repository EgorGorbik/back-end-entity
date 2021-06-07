import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class createTeamDto {
    @ApiProperty({example: 'title', description: 'Title'})
    @IsString({message: 'Must be a string'})
    readonly title: string;

    @ApiProperty({example: 'description', description: 'Description'})
    @IsString({message: 'Must be a string'})
    readonly description: string;

    @ApiProperty({example: 'city', description: 'City'})
    @IsString({message: 'Must be a string'})
    readonly city: string;
}
