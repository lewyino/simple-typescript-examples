const arr = [1, 2, 3, -1, 4];

const arrMapped = arr.map((item) => item + 1);
console.log(arrMapped); // [2, 3, 4]

const arrFiltered = arr.filter((item) => item > 2);
console.log(arrFiltered); // [2, 3]
console.log(arr);

const arrFoundElem = arr.find((item) => item > 2);
console.log(arrFoundElem);

const arrFilteredAndMapped = arr
    .filter((item) => item > 1)
    .map((item) => item + 10);
console.log(arrFilteredAndMapped);

const x = arr.reduce((prev, item) => {
    return prev + item;
}, 0);
console.log(x);

const arrFilteredAndMapped2 = arr.reduce((prev, item) => {
    if (item > 1) {
        return [...prev, item + 1];
    }
    return prev;
}, []);
console.log(arrFilteredAndMapped2);

//arrFilteredAndMapped == arrFilteredAndMapped2
