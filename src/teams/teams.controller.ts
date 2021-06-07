import {Body, Controller, Get, Post, Req, UseGuards, UsePipes} from '@nestjs/common';
import {TeamsService} from "./teams.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Team} from "./teams.model";

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
    constructor(private teamService: TeamsService) {}

    @ApiOperation({summary: 'Get all teams'})
    @ApiResponse({status: 200, type: [Team]})
    @Get()
    getAll() {
        return this.teamService.getTeams();
    }
}
