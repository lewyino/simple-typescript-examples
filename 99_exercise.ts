enum SexEnum {
    MALE = 'male',
    FEMALE = 'female'
}

interface PersonInterface {
    firstname: string;
    lastname: string;
    age: number;
    sex: SexEnum;
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
    sex: SexEnum.MALE
});
const p2 = new Person({
    firstname: 'Maria',
    lastname: 'Kowalska',
    age: 18,
    sex: SexEnum.FEMALE
});

const s = new Student({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    sex: SexEnum.MALE,
    grades: [2, 3, 4, 5, 5]
});
const s2 = new Student({
    firstname: 'Kasia',
    lastname: 'Dowbor',
    age: 55,
    sex: SexEnum.FEMALE,
    grades: [2, 3, 5, 5, 2, 4]
});
const s3 = new Student({
    firstname: 'Jan',
    lastname: 'Kowalski',
    age: 66,
    sex: SexEnum.MALE,
    grades: [2, 3, 4]
});
const s4 = new Student({
    firstname: 'Iwona',
    lastname: 'Nowak',
    age: 25,
    sex: SexEnum.FEMALE,
    grades: [4, 5, 4, 5, 5]
});

const e = new Employee({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    sex: SexEnum.MALE,
    salary: 1000
});
const e2 = new Employee({
    firstname: 'Piotr',
    lastname: 'Wiśniewski',
    age: 29,
    sex: SexEnum.MALE,
    salary: 5000
});
const e3 = new Employee({
    firstname: 'Zuzanna',
    lastname: 'Dąbrowska',
    age: 22,
    sex: SexEnum.FEMALE,
    salary: 5432
});

const arr: PersonInterface[] = [p, p2, s, s2, s3, s4, e, e2, e3];

function printMale(arr: PersonInterface[]) {
    const maleArr = arr.filter((person) => person.sex === SexEnum.MALE);
    maleArr.forEach((person) => console.log(person.print()));
}
printMale(arr);

function printAverageStudentsGrade(arr: PersonInterface[]) {
    const avg = arr.reduce((avgGrade, person) => {
        if (person instanceof Student) {
            return {
                sum: avgGrade.sum + person.averageGrade(),
                count: avgGrade.count + 1
            }
        }
        return avgGrade;
    }, { sum: 0, count: 0 });
    console.log('students avg:', avg.sum / avg.count);
}
console.log();
printAverageStudentsGrade(arr);

function printEmployee(arr: PersonInterface[]) {
    const employeeArr = arr
        .filter((person) => person instanceof Employee)
        .map((employee: Employee) => `${employee.firstname} ${employee.lastname}, ${employee.salary}`)
    employeeArr.forEach((employee) => console.log(employee));
}
console.log();
printEmployee(arr);

function printEmployee2(arr: PersonInterface[]) {
    const employeeArr = arr.reduce((employees, person) => {
        if (person instanceof Employee) {
            return [
                ...employees,
                `${person.firstname} ${person.lastname}, ${person.salary}`
            ]
        }
        return employees;
    }, []);
    employeeArr.forEach((employee) => console.log(employee));
}
console.log();
printEmployee2(arr);
