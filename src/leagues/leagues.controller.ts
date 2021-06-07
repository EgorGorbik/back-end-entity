import {Body, Controller, Get, Param, Post, Req, UseGuards, UsePipes} from '@nestjs/common';
import {LeaguesService} from "./leagues.service";
import {createLeagueDto} from "./dto/create-league.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {League} from "./leagues.model";

@ApiTags('Leagues')
@Controller('leagues')
export class LeaguesController {
    constructor(private leagueService: LeaguesService) {}

    @ApiOperation({summary: 'Get all leagues'})
    @ApiResponse({status: 200, type: [League]})
    @Get()
    getAll() {
        return this.leagueService.getLeagues();
    }
}
