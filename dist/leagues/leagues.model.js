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
exports.League = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const season_rel_leagues_model_1 = require("../seasons/season_rel_leagues.model");
const season_model_1 = require("../seasons/season.model");
let League = class League extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'Unique identifier' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], League.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'testTitle', description: 'this is title' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], League.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => season_model_1.Season, () => season_rel_leagues_model_1.SeasonsRelLeagues),
    __metadata("design:type", Array)
], League.prototype, "seasons", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => season_rel_leagues_model_1.SeasonsRelLeagues),
    __metadata("design:type", Array)
], League.prototype, "seasonsRelLeagues", void 0);
League = __decorate([
    sequelize_typescript_1.Table({ tableName: 'leagues' })
], League);
exports.League = League;
//# sourceMappingURL=leagues.model.js.map