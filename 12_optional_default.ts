function fn(x: string, y?: number): string {
    return `${x}: ${y}`;
}
console.log(fn('ten', 10));
console.log(fn('undefined'));

const fn2 = (x: string, y: number = 1) => `${x}: ${y}`;
console.log(fn2('default'));
console.log(fn2('two', 2));

function fnName(arg1) {
    console.log(arg1);
}
fnName('1');

const fnName1 = function(arg1) {
    console.log(arg1);
}
fnName1('2');
