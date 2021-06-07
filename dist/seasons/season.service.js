"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const season_model_1 = require("./season.model");
const leagues_model_1 = require("../leagues/leagues.model");
const teams_model_1 = require("../teams/teams.model");
const season_rel_leagues_model_1 = require("./season_rel_leagues.model");
const team_rel_raceSeasonsLeagues_model_1 = require("../teams/team_rel_raceSeasonsLeagues.model");
const race_rel_seasonsLeagues_model_1 = require("../races/race-rel-seasonsLeagues.model");
const race_model_1 = require("../races/race.model");
let SeasonsService = class SeasonsService {
    constructor(seasonRepository) {
        this.seasonRepository = seasonRepository;
    }
    async getSeasons() {
        const seasons = await this.seasonRepository.findAll();
        return seasons;
    }
    async getTeamsInLeaguesBySeasons(seasonId) {
        const seasons = await this.seasonRepository.findAll({
            where: { id: seasonId },
            include: [
                {
                    model: season_rel_leagues_model_1.SeasonsRelLeagues,
                    as: 'leaguesArray',
                    attributes: {
                        exclude: ['seasonId', 'leagueId']
                    },
                    include: [
                        {
                            model: leagues_model_1.League,
                            as: 'leagueData',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: teams_model_1.Team,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            through: {
                                attributes: []
                            }
                        }
                    ]
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        });
        return seasons;
    }
    async getScoreTeamsInRacesByLeaguesBySeasons(seasonId, leagueId) {
        const seasons = await this.seasonRepository.findAll({
            where: { id: seasonId },
            include: [
                {
                    model: season_rel_leagues_model_1.SeasonsRelLeagues,
                    where: { leagueId: leagueId },
                    as: 'leaguesArray',
                    attributes: {
                        exclude: ['seasonId', 'leagueId']
                    },
                    include: [
                        {
                            model: leagues_model_1.League,
                            as: 'leagueData',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues,
                            as: 'teamsScore',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'raceId', 'seasonRelLeaguesId']
                            },
                            include: [
                                {
                                    model: race_model_1.Race,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    },
                                },
                                {
                                    model: team_rel_raceSeasonsLeagues_model_1.TeamRelRaceSeasonsLeagues,
                                    as: 'scoreData',
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt', 'raceRelSeasonsLeagues', 'teamId']
                                    },
                                    include: [
                                        {
                                            model: teams_model_1.Team,
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
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        });
        return seasons;
    }
};
SeasonsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(season_model_1.Season)),
    __metadata("design:paramtypes", [Object])
], SeasonsService);
exports.SeasonsService = SeasonsService;
//# sourceMappingURL=season.service.js.map