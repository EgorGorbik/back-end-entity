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
exports.SeasonsRelLeagues = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const teams_model_1 = require("./teams.model");
const season_model_1 = require("../seasons/season.model");
const leagues_model_1 = require("../leagues/leagues.model");
const team_rel_seasonsLeagues_model_1 = require("./team-rel-seasonsLeagues.model");
const race_model_1 = require("../races/race.model");
const race_rel_seasonsLeagues_model_1 = require("../races/race-rel-seasonsLeagues.model");
let SeasonsRelLeagues = class SeasonsRelLeagues extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], SeasonsRelLeagues.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => season_model_1.Season),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], SeasonsRelLeagues.prototype, "seasonId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => leagues_model_1.League),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], SeasonsRelLeagues.prototype, "leagueId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => season_model_1.Season),
    __metadata("design:type", season_model_1.Season)
], SeasonsRelLeagues.prototype, "seasons", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => leagues_model_1.League, { as: 'leagueData' }),
    __metadata("design:type", leagues_model_1.League)
], SeasonsRelLeagues.prototype, "leagues", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => teams_model_1.Team, () => team_rel_seasonsLeagues_model_1.TeamRelSeasonsLeagues),
    __metadata("design:type", Array)
], SeasonsRelLeagues.prototype, "teams", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => race_model_1.Race, () => race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues),
    __metadata("design:type", Array)
], SeasonsRelLeagues.prototype, "races", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues, { as: 'teamsScore' }),
    __metadata("design:type", race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues)
], SeasonsRelLeagues.prototype, "raceRelSeasonsLeagues", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => team_rel_seasonsLeagues_model_1.TeamRelSeasonsLeagues),
    __metadata("design:type", team_rel_seasonsLeagues_model_1.TeamRelSeasonsLeagues)
], SeasonsRelLeagues.prototype, "teamRelSeasonsLeagues", void 0);
SeasonsRelLeagues = __decorate([
    sequelize_typescript_1.Table({ tableName: 'seasons_rel_leagues', createdAt: false, updatedAt: false })
], SeasonsRelLeagues);
exports.SeasonsRelLeagues = SeasonsRelLeagues;
//# sourceMappingURL=season_rel_leagues.model.js.map