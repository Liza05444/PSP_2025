const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function canArraysBeEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return sorted1.every((val, index) => val === sorted2[index]);
}

rl.question('Введите первый массив: ', (input1) => {
    const arr1 = JSON.parse(input1);   
    rl.question('Введите второй массив: ', (input2) => {
        const arr2 = JSON.parse(input2);
        const result = canArraysBeEqual(arr1, arr2);
        console.log('Результат:', result);
        rl.close();
    });
});