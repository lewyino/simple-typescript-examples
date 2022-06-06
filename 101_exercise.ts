enum GenderEnum {
    MALE = 'male',
    FEMALE = 'female'
}

interface PersonInterface {
    firstname: string;
    lastname: string;
    age: number;
    sex: GenderEnum;
    print(): string;
}

interface StudentInterface extends PersonInterface {
    grades: number[];
}

interface EmployeeInterface extends PersonInterface {
    salary: number;
}

class Person implements PersonInterface {
    public firstname: string;
    public lastname: string;
    public age: number;
    public sex: GenderEnum;

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

class Student extends Person implements StudentInterface {
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

class Employee extends Person implements EmployeeInterface {
    public salary: number;

    constructor(opts: Partial<EmployeeInterface> = {}) {
        super(opts);
        this.salary = opts.salary;
    }

    public print(): string {
        return `${super.print()}, salary: ${this.salary}`;
    }
}

const p = new Person({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    sex: GenderEnum.MALE
});
console.log(p.print());
console.log(p);

const s = new Student({
    firstname: "Jan",
    lastname: "Kowalski",
    age: 22,
    sex: GenderEnum.MALE,
    grades: [3, 4, 5],
});
console.log(s.print());
console.log(s);

const e = new Employee({
    firstname: "Mirosława",
    lastname: "Nowak",
    age: 44,
    sex: GenderEnum.FEMALE,
    salary: 1000,
});
console.log(e.print());
console.log(e);
