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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("./teams.service");
const create_team_dto_1 = require("./dto/create-team.dto");
const swagger_1 = require("@nestjs/swagger");
const teams_model_1 = require("./teams.model");
const validation_pipe_1 = require("../pipes/validation.pipe");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    create(userDto) {
        return this.userService.createUser(userDto);
    }
    getAll() {
        return this.userService.getUsers();
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create user' }),
    swagger_1.ApiResponse({ status: 200, type: teams_model_1.User }),
    common_1.UsePipes(validation_pipe_1.ValidationPipe),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.createTeamDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all users' }),
    swagger_1.ApiResponse({ status: 200, type: [teams_model_1.User] }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map