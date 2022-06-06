const arr = [1, 2, 3];

const arrMapped = arr.map((item) => item + 1);
console.log(arrMapped); // [2, 3, 4]

const arrFiltered = arr.filter((item) => item > 5);
console.log(arrFiltered); // [2, 3]

const arrFoundElem = arr.find((item) => item > 6);
console.log(arrFoundElem);

const arrFilteredAndMapped = arr.filter((item) => item > 1).map((item) => item + 1);
console.log(arrFilteredAndMapped);

const arrFilteredAndMapped2 = arr.reduce((prev, item) => {
    if (item > 1) {
        return [...prev, item + 1];
    }
    return prev;
}, []);
console.log(arrFilteredAndMapped2);

//arrFilteredAndMapped == arrFilteredAndMapped2
