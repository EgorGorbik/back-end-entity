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
exports.TeamRelSeasonsLeagues = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const teams_model_1 = require("./teams.model");
const season_rel_leagues_model_1 = require("../seasons/season_rel_leagues.model");
let TeamRelSeasonsLeagues = class TeamRelSeasonsLeagues extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], TeamRelSeasonsLeagues.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => teams_model_1.Team),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], TeamRelSeasonsLeagues.prototype, "teamId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => season_rel_leagues_model_1.SeasonsRelLeagues),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], TeamRelSeasonsLeagues.prototype, "seasonRelLeaguesId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => season_rel_leagues_model_1.SeasonsRelLeagues),
    __metadata("design:type", season_rel_leagues_model_1.SeasonsRelLeagues)
], TeamRelSeasonsLeagues.prototype, "seasonRelLeagues", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => teams_model_1.Team),
    __metadata("design:type", teams_model_1.Team)
], TeamRelSeasonsLeagues.prototype, "teams", void 0);
TeamRelSeasonsLeagues = __decorate([
    sequelize_typescript_1.Table({ tableName: 'team_rel_seasons_leagues', createdAt: false, updatedAt: false })
], TeamRelSeasonsLeagues);
exports.TeamRelSeasonsLeagues = TeamRelSeasonsLeagues;
//# sourceMappingURL=team-rel-seasonsLeagues.model.js.map