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
exports.TeamRelRaceSeasonsLeagues = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const race_rel_seasonsLeagues_model_1 = require("./race-rel-seasonsLeagues.model");
const teams_model_1 = require("../teams/teams.model");
let TeamRelRaceSeasonsLeagues = class TeamRelRaceSeasonsLeagues extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], TeamRelRaceSeasonsLeagues.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'test description', description: 'this is description' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], TeamRelRaceSeasonsLeagues.prototype, "score", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], TeamRelRaceSeasonsLeagues.prototype, "raceRelSeasonsLeagues", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => teams_model_1.Team),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], TeamRelRaceSeasonsLeagues.prototype, "teamId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => teams_model_1.Team, { as: 'teamData' }),
    __metadata("design:type", teams_model_1.Team)
], TeamRelRaceSeasonsLeagues.prototype, "teams", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues),
    __metadata("design:type", race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues)
], TeamRelRaceSeasonsLeagues.prototype, "raceRelSeasonsLeagues2", void 0);
TeamRelRaceSeasonsLeagues = __decorate([
    sequelize_typescript_1.Table({ tableName: 'team_rel_race_seasons_leagues', createdAt: false, updatedAt: false })
], TeamRelRaceSeasonsLeagues);
exports.TeamRelRaceSeasonsLeagues = TeamRelRaceSeasonsLeagues;
//# sourceMappingURL=team_rel_raceSeasonsLeagues.model.js.map