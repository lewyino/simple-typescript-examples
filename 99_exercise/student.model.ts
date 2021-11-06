import {Person} from "./person.model";
import {StudentInterface} from './student.interface';

export class Student extends Person implements StudentInterface {
    grades: number[];

    constructor(opts: Partial<StudentInterface> = {}) {
        super(opts);
        this.grades = opts.grades;
    }

    public print(): string {
        return `${super.print()}, grades: ${this.grades}, avg grade: ${this.averageGrade()}`;
    }

    public averageGrade(): number {
        let sum = 0;
        for (let i of this.grades) {
            sum += i;
        }
        return sum / this.grades.length;
    }
}
