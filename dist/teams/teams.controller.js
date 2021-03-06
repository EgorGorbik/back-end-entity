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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("./teams.service");
const swagger_1 = require("@nestjs/swagger");
const teams_model_1 = require("./teams.model");
let TeamsController = class TeamsController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    getAll() {
        return this.teamService.getTeams();
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all teams' }),
    swagger_1.ApiResponse({ status: 200, type: [teams_model_1.Team] }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "getAll", null);
TeamsController = __decorate([
    swagger_1.ApiTags('Teams'),
    common_1.Controller('teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams.controller.js.map