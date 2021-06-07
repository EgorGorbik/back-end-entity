import {Module} from '@nestjs/common';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {League} from "./leagues.model";

@Module({
    controllers: [LeaguesController],
    providers: [LeaguesService],
    imports: [
        SequelizeModule.forFeature([League]),
    ],
    exports: [
        LeaguesService
    ]
})

export class LeaguesModule {}
