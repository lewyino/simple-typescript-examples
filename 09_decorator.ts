function PrintClassProps<T extends {new(...args: any[])}>(constructor: T) {
    return class extends constructor {
        toString() {
            return `${constructor.name} ${JSON.stringify(this)}`;
        }
    }
}

function AddMagicFunction(target: Function) {
    target.prototype.magic = function () {
        console.log('run magic function');
    }
}

function decorator2(args) {
    return function(target) {
        console.log(args);
        console.log(target);
    }
}

@AddMagicFunction
@PrintClassProps
class MyClass1 {
    prop1 = 'prop1';
    prop2 = 2;
}
const c1 = new MyClass1();
console.log(c1.toString());
c1['magic']();

@decorator2('my decorator')
class MyClass2 {
    prop1 = 'test';
}


const c2 = new MyClass2();
