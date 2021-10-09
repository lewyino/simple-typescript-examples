class Person {
    firstname: string;
    lastname: string;
    age: number;
}

let p: Person;
p = new Person();

p.firstname = 'Mateusz';
p.lastname = 'Lewandowski';
p.age = 22;

console.log(p.lastname);
console.log(p);
