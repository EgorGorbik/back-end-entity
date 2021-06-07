import { Model } from "sequelize-typescript";
interface TeamCreationAttrs {
    title: string;
    description: string;
    city: string;
}
export declare class Team extends Model<Team, TeamCreationAttrs> {
    id: number;
    title: string;
    description: string;
    city: string;
}
export {};
