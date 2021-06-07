import {CacheModule, forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {SeasonsService} from "./season.service";
import {SeasonsController} from "./season.controller";
import {Season} from "./season.model";

@Module({
    controllers: [SeasonsController],
    providers: [SeasonsService],
    imports: [
        SequelizeModule.forFeature([Season]),
    ],
    exports: [
        SeasonsService
    ]
})

export class SeasonsModule {}
