import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {createSeasonDto} from "./dto/create-season.dto";
import {Season} from "./season.model";
import {League} from "../leagues/leagues.model";
import {Team} from "../teams/teams.model";
import {SeasonsRelLeagues} from "./season_rel_leagues.model";
import {TeamRelRaceSeasonsLeagues} from "../teams/team_rel_raceSeasonsLeagues.model";
import {RaceRelSeasonsLeagues} from "../races/race-rel-seasonsLeagues.model";
import {Race} from "../races/race.model";

@Injectable()
export class SeasonsService {
    constructor(@InjectModel(Season) private seasonRepository: typeof Season) {
    }

    async getSeasons() {
        const seasons = await this.seasonRepository.findAll();
        return seasons;
    }

    async getTeamsInLeaguesBySeasons(seasonId: string) {
        const seasons = await this.seasonRepository.findAll({
            where: {id: seasonId},
            include: [
                {
                    model: SeasonsRelLeagues,
                    as: 'leaguesArray',
                    attributes: {
                        exclude: ['seasonId', 'leagueId']
                    },
                    include: [
                        {
                            model: League,
                            as: 'leagueData',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: Team,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            through: {
                                attributes: []
                            }
                        }
                    ]
                }],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })
        return seasons;
    }

    async getScoreTeamsInRacesByLeaguesBySeasons(seasonId: string, leagueId: string) {
        const seasons = await this.seasonRepository.findAll({
            where: {id: seasonId},
            include: [
                {
                    model: SeasonsRelLeagues,
                    where: {leagueId: leagueId},
                    as: 'leaguesArray',
                    attributes: {
                        exclude: ['seasonId', 'leagueId']
                    },
                    include: [
                        {
                            model: League,
                            as: 'leagueData',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: RaceRelSeasonsLeagues,
                            as: 'teamsScore',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'raceId', 'seasonRelLeaguesId']
                            },
                            include: [
                                {
                                    model: Race,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    },
                                },
                                {
                                    model: TeamRelRaceSeasonsLeagues,
                                    as: 'scoreData',
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt', 'raceRelSeasonsLeagues', 'teamId']
                                    },
                                    include: [
                                        {
                                            model: Team,
                                            as: 'teamData',
                                            attributes: {
                                                exclude: ['createdAt', 'updatedAt']
                                            },
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })
        return seasons;
    }
}
