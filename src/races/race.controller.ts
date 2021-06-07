import {Body, Controller, Get, Post, Req, UseGuards, UsePipes} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RacesService} from "./race.service";
import {Race} from "./race.model";

@ApiTags('Races')
@Controller('races')
export class RacesController {
    constructor(private racesService: RacesService) {}

    @ApiOperation({summary: 'Get all races'})
    @ApiResponse({status: 200, type: [Race]})
    @Get()
    getAll() {
        return this.racesService.getRaces();
    }
}
