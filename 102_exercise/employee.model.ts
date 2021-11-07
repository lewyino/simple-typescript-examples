import {Person} from "./person.model";
import {EmployeeInterface} from './employee.interface';

export class Employee extends Person implements EmployeeInterface {
    public salary: number;

    constructor(opts: Partial<EmployeeInterface> = {}) {
        super(opts);
        this.salary = opts.salary;
    }

    public print(): string {
        return `${super.print()}, salary: ${this.salary}`;
    }
}
