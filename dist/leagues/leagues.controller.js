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
exports.LeaguesController = void 0;
const common_1 = require("@nestjs/common");
const leagues_service_1 = require("./leagues.service");
const swagger_1 = require("@nestjs/swagger");
const leagues_model_1 = require("./leagues.model");
let LeaguesController = class LeaguesController {
    constructor(leagueService) {
        this.leagueService = leagueService;
    }
    getAll() {
        return this.leagueService.getLeagues();
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all leagues' }),
    swagger_1.ApiResponse({ status: 200, type: [leagues_model_1.League] }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "getAll", null);
LeaguesController = __decorate([
    swagger_1.ApiTags('Leagues'),
    common_1.Controller('leagues'),
    __metadata("design:paramtypes", [leagues_service_1.LeaguesService])
], LeaguesController);
exports.LeaguesController = LeaguesController;
//# sourceMappingURL=leagues.controller.js.map