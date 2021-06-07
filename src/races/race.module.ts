import {CacheModule, forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {RacesService} from "./race.service";
import {Season} from "../seasons/season.model";
import {RacesController} from "./race.controller";
import {Race} from "./race.model";

@Module({
    controllers: [RacesController],
    providers: [RacesService],
    imports: [
        SequelizeModule.forFeature([Race]),
    ],
    exports: [
        RacesService
    ]
})

export class RacesModule {}
