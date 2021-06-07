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
exports.RacesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const race_service_1 = require("./race.service");
const race_model_1 = require("./race.model");
let RacesController = class RacesController {
    constructor(racesService) {
        this.racesService = racesService;
    }
    getAll() {
        return this.racesService.getRaces();
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all races' }),
    swagger_1.ApiResponse({ status: 200, type: [race_model_1.Race] }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RacesController.prototype, "getAll", null);
RacesController = __decorate([
    swagger_1.ApiTags('Races'),
    common_1.Controller('races'),
    __metadata("design:paramtypes", [race_service_1.RacesService])
], RacesController);
exports.RacesController = RacesController;
//# sourceMappingURL=race.controller.js.map