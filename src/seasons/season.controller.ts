import {Body, Controller, Get, Param, Post, Req, UseGuards, UsePipes} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SeasonsService} from "./season.service";
import {Season} from "./season.model";

@ApiTags('Seasons')
@Controller('seasons')
export class SeasonsController {
    constructor(private seasonService: SeasonsService) {}

    @ApiOperation({summary: 'Get all seasons'})
    @ApiResponse({status: 200, type: [Season]})
    @Get()
    getAll() {
        return this.seasonService.getSeasons();
    }

    @ApiOperation({summary: 'Get teams sorted by league of a specific season'})
    @ApiResponse({status: 200, type: [Season]})
    @Get('/getTeamsInLeaguesBySeasons/:seasonId')
    getTeamsInLeaguesBySeasons(@Param('seasonId') seasonId: string) {
        return this.seasonService.getTeamsInLeaguesBySeasons(seasonId);
    }

    @ApiOperation({summary: 'Get the results of teams in the races of a certain league in a certain season'})
    @ApiResponse({status: 200, type: [Season]})
    @Get('/getScoreTeamsInRacesByLeaguesBySeasons/:seasonId/:leagueId')
    getScoreTeamsInRacesByLeaguesBySeasons(@Param('seasonId') seasonId: string, @Param('leagueId') leagueId: string) {
        return this.seasonService.getScoreTeamsInRacesByLeaguesBySeasons(seasonId, leagueId);
    }
}
