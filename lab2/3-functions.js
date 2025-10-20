<<<<<<< HEAD
function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
function calculate() {
    const array = [];
    for (let i = 0; i <= 9; i++) {
        const sqr = square(i);
        const cub = cube(i);
        const avr = average(sqr, cub);
        array.push(avr);
    }

    return array;
}

console.log(average(2, 9));
console.log(square(9));
console.log(cube(9));
=======
function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
function calculate() {
    const array = [];
    for (let i = 0; i <= 9; i++) {
        const sqr = square(i);
        const cub = cube(i);
        const avr = average(sqr, cub);
        array.push(avr);
    }

    return array;
}

console.log(average(2, 9));
console.log(square(9));
console.log(cube(9));
>>>>>>> bebafca (Додано папку lab3)
console.log(calculate());