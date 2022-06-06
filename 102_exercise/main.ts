import {Person} from "./person.model";
import {GenderEnum} from "./gender.enum";
import {Student} from "./student.model";
import {Employee} from "./employee.model";
import {PersonInterface} from "./person.interface";

const p = new Person({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    gender: GenderEnum.MALE
});
const p2 = new Person({
    firstname: 'Maria',
    lastname: 'Kowalska',
    age: 18,
    gender: GenderEnum.FEMALE
});

const s = new Student({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    gender: GenderEnum.MALE,
    grades: [2, 3, 4, 5, 5]
});
const s2 = new Student({
    firstname: 'Kasia',
    lastname: 'Dowbor',
    age: 55,
    gender: GenderEnum.FEMALE,
    grades: [2, 3, 5, 5, 2, 4]
});
const s3 = new Student({
    firstname: 'Jan',
    lastname: 'Kowalski',
    age: 66,
    gender: GenderEnum.MALE,
    grades: [2, 3, 4]
});
const s4 = new Student({
    firstname: 'Iwona',
    lastname: 'Nowak',
    age: 25,
    gender: GenderEnum.FEMALE,
    grades: [4, 5, 4, 5, 5]
});

const e = new Employee({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    gender: GenderEnum.MALE,
    salary: 1000
});
const e2 = new Employee({
    firstname: 'Piotr',
    lastname: 'Wiśniewski',
    age: 29,
    gender: GenderEnum.MALE,
    salary: 5000
});
const e3 = new Employee({
    firstname: 'Zuzanna',
    lastname: 'Dąbrowska',
    age: 22,
    gender: GenderEnum.FEMALE,
    salary: 5432
});

const arr: PersonInterface[] = [p, p2, s, s2, s3, s4, e, e2, e3];

function printMale(arr: PersonInterface[]) {
    const maleArr = arr.filter((person) => person.gender === GenderEnum.MALE);
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
