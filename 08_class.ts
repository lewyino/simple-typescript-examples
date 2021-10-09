class Person {
    public firstname: string;
    private lname: string;
    public age: number;

    constructor(opts?: {
        firstname?: string,
        lastname?: string,
        age?: number;
    }) {
        opts = opts || {};
        this.firstname = opts.firstname;
        this.lastname = opts.lastname;
        this.age = opts.age;
    }

    set lastname(name: string) {
        this.lname = name.toUpperCase();
    }

    get lastname(): string {
        return this.lname;
    }
}

let p = new Person({
    firstname: 'Mateusz',
    lastname: 'Lewandowski',
    age: 22,
});
console.log(p);
// Person { firstname: 'Mateusz', lname: 'Lewandowski', age: 22 }

p.lastname = 'Kowalski';
console.log(p);
