"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const teams_model_1 = require("./teams/teams.model");
const teams_module_1 = require("./teams/teams.module");
const leagues_model_1 = require("./leagues/leagues.model");
const leagues_module_1 = require("./leagues/leagues.module");
const season_model_1 = require("./seasons/season.model");
const season_module_1 = require("./seasons/season.module");
const race_module_1 = require("./races/race.module");
const race_model_1 = require("./races/race.model");
const team_rel_seasonsLeagues_model_1 = require("./teams/team-rel-seasonsLeagues.model");
const season_rel_leagues_model_1 = require("./seasons/season_rel_leagues.model");
const race_rel_seasonsLeagues_model_1 = require("./races/race-rel-seasonsLeagues.model");
const team_rel_raceSeasonsLeagues_model_1 = require("./teams/team_rel_raceSeasonsLeagues.model");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRESS_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [teams_model_1.Team, leagues_model_1.League, season_model_1.Season, race_model_1.Race, team_rel_seasonsLeagues_model_1.TeamRelSeasonsLeagues, season_rel_leagues_model_1.SeasonsRelLeagues, race_rel_seasonsLeagues_model_1.RaceRelSeasonsLeagues, team_rel_raceSeasonsLeagues_model_1.TeamRelRaceSeasonsLeagues],
                autoLoadModels: true
            }),
            teams_module_1.TeamsModule,
            season_module_1.SeasonsModule,
            leagues_module_1.LeaguesModule,
            race_module_1.RacesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map