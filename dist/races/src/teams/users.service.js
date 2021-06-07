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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const teams_model_1 = require("./teams.model");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(dto) {
        try {
            const user = await this.userRepository.create(dto);
            return user;
        }
        catch (e) {
            if (e && e.errors && e.errors[0] && e.errors[0].message) {
                throw new common_1.HttpException(e.errors[0].message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async getUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id }, include: { all: true } });
        return user;
    }
    async changeUserById(dto, id) {
        const user = await this.userRepository.update(dto, { where: { id } });
        return user;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(teams_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map