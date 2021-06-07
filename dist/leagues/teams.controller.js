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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("./teams.service");
const create_league_dto_1 = require("./dto/create-league.dto");
const swagger_1 = require("@nestjs/swagger");
const teams_model_1 = require("./teams.model");
const validation_pipe_1 = require("../pipes/validation.pipe");
let TeamsController = class TeamsController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    create(teamDto) {
        console.log('post');
        return this.teamService.createTeam(teamDto);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create team' }),
    swagger_1.ApiResponse({ status: 200, type: teams_model_1.Team }),
    common_1.UsePipes(validation_pipe_1.ValidationPipe),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_league_dto_1.createLeagueDto]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "create", null);
TeamsController = __decorate([
    swagger_1.ApiTags('Teams'),
    common_1.Controller('teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams.controller.js.map