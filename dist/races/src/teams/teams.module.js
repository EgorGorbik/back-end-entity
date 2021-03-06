"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsModule = void 0;
const common_1 = require("@nestjs/common");
const teams_controller_1 = require("./teams.controller");
const teams_service_1 = require("./teams.service");
const sequelize_1 = require("@nestjs/sequelize");
const teams_model_1 = require("./teams.model");
let TeamsModule = class TeamsModule {
};
TeamsModule = __decorate([
    common_1.Module({
        controllers: [teams_controller_1.TeamsController],
        providers: [teams_service_1.TeamsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([teams_model_1.Team]),
        ],
        exports: [
            teams_service_1.TeamsService
        ]
    })
], TeamsModule);
exports.TeamsModule = TeamsModule;
//# sourceMappingURL=teams.module.js.map