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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceRelSeasonsLeagues = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const race_model_1 = require("./race.model");
const season_rel_leagues_model_1 = require("../seasons/season_rel_leagues.model");
const team_rel_raceSeasonsLeagues_model_1 = require("../teams/team_rel_raceSeasonsLeagues.model");
const teams_model_1 = require("../teams/teams.model");
let RaceRelSeasonsLeagues = class RaceRelSeasonsLeagues extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], RaceRelSeasonsLeagues.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => race_model_1.Race),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], RaceRelSeasonsLeagues.prototype, "raceId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => season_rel_leagues_model_1.SeasonsRelLeagues),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], RaceRelSeasonsLeagues.prototype, "seasonRelLeaguesId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => season_rel_leagues_model_1.SeasonsRelLeagues),
    __metadata("design:type", season_rel_leagues_model_1.SeasonsRelLeagues)
], RaceRelSeasonsLeagues.prototype, "seasonRelLeagues", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => race_model_1.Race, { as: 'raceData' }),
    __metadata("design:type", race_model_1.Race)
], RaceRelSeasonsLeagues.prototype, "race", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => teams_model_1.Team, () => team_rel_raceSeasonsLeagues_model_1.TeamRelRaceSeasonsLeagues),
    __metadata("design:type", teams_model_1.Team)
], RaceRelSeasonsLeagues.prototype, "teams", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => team_rel_raceSeasonsLeagues_model_1.TeamRelRaceSeasonsLeagues, { as: 'scoreData' }),
    __metadata("design:type", Array)
], RaceRelSeasonsLeagues.prototype, "teamRelRaceSeasonsLeagues", void 0);
RaceRelSeasonsLeagues = __decorate([
    sequelize_typescript_1.Table({ tableName: 'race_rel_seasons_leagues', createdAt: false, updatedAt: false })
], RaceRelSeasonsLeagues);
exports.RaceRelSeasonsLeagues = RaceRelSeasonsLeagues;
//# sourceMappingURL=race-rel-seasonsLeagues.model.js.map