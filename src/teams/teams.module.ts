import {Module} from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Team} from "./teams.model";

@Module({
    controllers: [TeamsController],
    providers: [TeamsService],
    imports: [
        SequelizeModule.forFeature([Team]),
    ],
    exports: [
        TeamsService
    ]
})

export class TeamsModule {}
