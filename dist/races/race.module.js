"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RacesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const race_service_1 = require("./race.service");
const race_controller_1 = require("./race.controller");
const race_model_1 = require("./race.model");
let RacesModule = class RacesModule {
};
RacesModule = __decorate([
    common_1.Module({
        controllers: [race_controller_1.RacesController],
        providers: [race_service_1.RacesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([race_model_1.Race]),
        ],
        exports: [
            race_service_1.RacesService
        ]
    })
], RacesModule);
exports.RacesModule = RacesModule;
//# sourceMappingURL=race.module.js.map