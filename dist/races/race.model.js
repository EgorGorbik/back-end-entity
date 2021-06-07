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
exports.Race = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const season_rel_leagues_model_1 = require("../seasons/season_rel_leagues.model");
const race_rel_seasonsLeagues_model_1 = require("./race-rel-seasonsLeagues.model");
let Race = class Race extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'Unique identifier' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Race.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'testTitle', description: 'this is title' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Race.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => season_rel_leagues_model_1.SeasonsRelLeagues, () => race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues),
    __metadata("design:type", Array)
], Race.prototype, "seasonsRelLeagues", void 0);
Race = __decorate([
    sequelize_typescript_1.Table({ tableName: 'races' })
], Race);
exports.Race = Race;
//# sourceMappingURL=race.model.js.map