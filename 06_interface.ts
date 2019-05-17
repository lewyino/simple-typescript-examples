interface Person {
    firstname: string;
    lastname: string;
    age: number;
}

let p: Person;

p = {
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
};

p.firstname = 'Krzysztof';

console.log(p);
