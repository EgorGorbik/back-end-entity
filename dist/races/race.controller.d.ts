import { RacesService } from "./race.service";
import { Race } from "./race.model";
export declare class RacesController {
    private racesService;
    constructor(racesService: RacesService);
    getAll(): Promise<Race[]>;
}
