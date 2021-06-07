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
exports.SeasonsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const season_service_1 = require("./season.service");
const season_model_1 = require("./season.model");
let SeasonsController = class SeasonsController {
    constructor(seasonService) {
        this.seasonService = seasonService;
    }
    getAll() {
        return this.seasonService.getSeasons();
    }
    getTeamsInLeaguesBySeasons(seasonId) {
        return this.seasonService.getTeamsInLeaguesBySeasons(seasonId);
    }
    getScoreTeamsInRacesByLeaguesBySeasons(seasonId, leagueId) {
        return this.seasonService.getScoreTeamsInRacesByLeaguesBySeasons(seasonId, leagueId);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all seasons' }),
    swagger_1.ApiResponse({ status: 200, type: [season_model_1.Season] }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeasonsController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get teams sorted by league of a specific season' }),
    swagger_1.ApiResponse({ status: 200, type: [season_model_1.Season] }),
    common_1.Get('/getTeamsInLeaguesBySeasons/:seasonId'),
    __param(0, common_1.Param('seasonId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeasonsController.prototype, "getTeamsInLeaguesBySeasons", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get the results of teams in the races of a certain league in a certain season' }),
    swagger_1.ApiResponse({ status: 200, type: [season_model_1.Season] }),
    common_1.Get('/getScoreTeamsInRacesByLeaguesBySeasons/:seasonId/:leagueId'),
    __param(0, common_1.Param('seasonId')), __param(1, common_1.Param('leagueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SeasonsController.prototype, "getScoreTeamsInRacesByLeaguesBySeasons", null);
SeasonsController = __decorate([
    swagger_1.ApiTags('Seasons'),
    common_1.Controller('seasons'),
    __metadata("design:paramtypes", [season_service_1.SeasonsService])
], SeasonsController);
exports.SeasonsController = SeasonsController;
//# sourceMappingURL=season.controller.js.map