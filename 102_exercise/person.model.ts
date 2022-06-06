import {PersonInterface} from "./person.interface";
import {GenderEnum} from "./gender.enum";

export class Person implements PersonInterface {
    public firstname: string;
    public lastname: string;
    public age: number;
    public gender: GenderEnum;

    constructor(opts: Partial<PersonInterface> = {}) {
        this.firstname = opts.firstname;
        this.lastname = opts.lastname;
        this.age = opts.age;
        this.gender = opts.gender;
    }

    public print(): string {
        return `${this.firstname} ${this.lastname} (age: ${this.age}, gender: ${this.gender})`;
    }
}
