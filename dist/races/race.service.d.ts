import { Race } from "./race.model";
export declare class RacesService {
    private raceRepository;
    constructor(raceRepository: typeof Race);
    getRaces(): Promise<Race[]>;
}
