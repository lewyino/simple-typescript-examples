interface PersonInterface {
    firstname: string;
    fullname(): string;
}

class Person implements PersonInterface {
    firstname: string;
    private _lastname: string;
    age?: number;

    constructor(name: string, lastname: string, age?: number) {
        this.firstname = name;
        this.lastname = lastname;
        this.age = age || null;
    }

    set lastname(name: string) {
        this._lastname = name;
    }

    get lastname(): string {
        return this._lastname.toUpperCase();
    }

    fullname(): string {
        return `${this.firstname} ${this.lastname || ''}`
    }
}

class Child extends Person implements PersonInterface {
    public favoriteToy: string;

    constructor(name: string, lastname: string, age: number, favoriteToy: string) {
        super(name, lastname, age);
        this.favoriteToy = favoriteToy;
    }

    fullname(): string {
        return super.fullname() + ", favorite toy: " + this.favoriteToy;
    }
}

let p: Child = new Child("Mateusz", "Lewandowski", 18, 'test');
console.log(p.fullname());
console.log(p.favoriteToy);

let p2 = new Person('Jan', 'Kowalski');


// let p2: Person = {
//     firstname: 'Jan',
//     lastname: 'Kowalski',
//     age: 22
// }
// console.log(p2);
// console.log(p2 instanceof Person);
