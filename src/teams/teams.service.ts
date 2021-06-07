import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Team} from "./teams.model";

@Injectable()
export class TeamsService {
    constructor(@InjectModel(Team) private teamRepository: typeof Team) {}

    async getTeams() {
        const teams = await this.teamRepository.findAll();
        return teams;
    }
}
