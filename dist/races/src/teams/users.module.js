"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const sequelize_1 = require("@nestjs/sequelize");
const teams_model_1 = require("./teams.model");
const auth_module_1 = require("../auth/auth.module");
const redisStore = require("cache-manager-redis-store");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        imports: [
            common_1.CacheModule.register({
                store: redisStore,
                host: 'localhost',
                port: 6379
            }),
            sequelize_1.SequelizeModule.forFeature([teams_model_1.User]),
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        exports: [
            users_service_1.UsersService
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map