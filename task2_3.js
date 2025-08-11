const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMaxSequenceOfOnes(str) {
    let maxCount = 0;
    let currentCount = 0;
    for (let char of str) {
        if (char === '1') {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
}

rl.question('Введите строку из 0 и 1: ', (input) => {
    console.log('Максимальная последовательность единиц:', findMaxSequenceOfOnes(input));
    rl.close();
});