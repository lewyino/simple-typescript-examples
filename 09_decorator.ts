function decorator1(target) {
    console.log(JSON.stringify(target));
}

function decorator2(args) {
    return function (target) {
        console.log(args);
        console.log(target);
    }
}

@decorator1
class MyClass1 {}

@decorator2('my decorator')
class MyClass2 {}
