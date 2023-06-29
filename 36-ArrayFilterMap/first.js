let nums = [5, 7, 2, 4, 6]

nums.filter(n => n % 2 === 0)
    .map(i => i * 3)
    .forEach(x => {
        console.log(x);
    })

let result = nums.filter(n => n % 2 === 0)
    .map(i => i * 3)
    .reduce((a, b) => a + b);

console.log(result);