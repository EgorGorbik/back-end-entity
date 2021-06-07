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
exports.LeaguesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const leagues_model_1 = require("./leagues.model");
let LeaguesService = class LeaguesService {
    constructor(leagueRepository) {
        this.leagueRepository = leagueRepository;
    }
    async getLeagues() {
        const leagues = await this.leagueRepository.findAll();
        return leagues;
    }
};
LeaguesService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(leagues_model_1.League)),
    __metadata("design:paramtypes", [Object])
], LeaguesService);
exports.LeaguesService = LeaguesService;
//# sourceMappingURL=leagues.service.js.map