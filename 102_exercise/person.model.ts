import {PersonInterface} from "./person.interface";
import {SexEnum} from "./sex.enum";

export class Person implements PersonInterface {
    public firstname: string;
    public lastname: string;
    public age: number;
    public sex: SexEnum;

    constructor(opts: Partial<PersonInterface> = {}) {
        this.firstname = opts.firstname;
        this.lastname = opts.lastname;
        this.age = opts.age;
        this.sex = opts.sex;
    }

    public print(): string {
        return `${this.firstname} ${this.lastname} (age: ${this.age}, sex: ${this.sex})`;
    }
}
