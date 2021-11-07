import {PersonInterface} from "./person.interface";

export interface StudentInterface extends PersonInterface {
    grades: number[];
}
