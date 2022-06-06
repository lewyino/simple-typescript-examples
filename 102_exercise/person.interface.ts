import {GenderEnum} from "./gender.enum";

export interface PersonInterface {
    firstname: string;
    lastname: string;
    age: number;
    gender: GenderEnum;
    print(): string;
}
