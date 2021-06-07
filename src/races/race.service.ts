import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Race} from "./race.model";

@Injectable()
export class RacesService {
    constructor(@InjectModel(Race) private raceRepository: typeof Race) {}

    async getRaces() {
        const races = await this.raceRepository.findAll();
        return races;
    }
}
