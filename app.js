const arr = ["name", "John", "lastname", "Black", "age", "23"];
const result = {};

for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    result[key] = value;
}

console.log(result);

function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum / numbers.length;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(10, 20, 30));
console.log(average());

function logTypeOf(value) {
    console.log(typeof value);
}

logTypeOf(false);
logTypeOf('hello world!');
logTypeOf(10);