import { Module } from '@nestjs/common';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Team} from "./teams/teams.model";
import {TeamsModule} from "./teams/teams.module";
import {League} from "./leagues/leagues.model";
import {LeaguesModule} from "./leagues/leagues.module";
import {Season} from "./seasons/season.model";
import {SeasonsModule} from "./seasons/season.module";
import {RacesModule} from "./races/race.module";
import {Race} from "./races/race.model";
import {TeamRelSeasonsLeagues} from "./teams/team-rel-seasonsLeagues.model";
import {SeasonsRelLeagues} from "./seasons/season_rel_leagues.model";
import {RaceRelSeasonsLeagues} from "./races/race-rel-seasonsLeagues.model";
import {TeamRelRaceSeasonsLeagues} from "./teams/team_rel_raceSeasonsLeagues.model";
import {ConfigModule} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,

      models: [Team, League, Season, Race, TeamRelSeasonsLeagues, SeasonsRelLeagues, RaceRelSeasonsLeagues, TeamRelRaceSeasonsLeagues],
      autoLoadModels: true
    }),
    TeamsModule,
    SeasonsModule,
    LeaguesModule,
    RacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
