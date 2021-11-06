import {PersonInterface} from "./person.interface";

export interface EmployeeInterface extends PersonInterface {
    salary: number;
}
