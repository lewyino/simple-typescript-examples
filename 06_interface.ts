interface Person {
    firstname: string;
    lastname?: string;
    age: number;
    fullname(): string;
}

let p: Person = {
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 18,
    fullname(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(p);
console.log(p.fullname());

let p2: Person = {
    firstname: 'Mateusz',
    age: 18,
    fullname(): string {
        return `${this.firstname} ${this.lastname || ''}`;
    }
}
console.log(p2);
console.log(p2.fullname());
p2.lastname = "Lewandowski"
console.log(p2.fullname())

