import {SexEnum} from "./sex.enum";

export interface PersonInterface {
    firstname: string;
    lastname: string;
    age: number;
    sex: SexEnum;
    print(): string;
}
