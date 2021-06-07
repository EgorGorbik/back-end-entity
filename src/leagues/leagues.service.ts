import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {League} from "./leagues.model";

@Injectable()
export class LeaguesService {
    constructor(@InjectModel(League) private leagueRepository: typeof League) {}

    async getLeagues() {
        const leagues = await this.leagueRepository.findAll();
        return leagues;
    }
}
