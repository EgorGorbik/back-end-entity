"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const season_service_1 = require("./season.service");
const season_controller_1 = require("./season.controller");
const season_model_1 = require("./season.model");
let SeasonsModule = class SeasonsModule {
};
SeasonsModule = __decorate([
    common_1.Module({
        controllers: [season_controller_1.SeasonsController],
        providers: [season_service_1.SeasonsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([season_model_1.Season]),
        ],
        exports: [
            season_service_1.SeasonsService
        ]
    })
], SeasonsModule);
exports.SeasonsModule = SeasonsModule;
//# sourceMappingURL=season.module.js.map