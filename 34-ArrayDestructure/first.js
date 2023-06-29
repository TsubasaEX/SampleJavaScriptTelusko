let nums = [5, 7, 2, 4]

console.log(nums);
let [a, b, c, d] = nums;
console.log(d);

let words = "My Name is Navin Reddy Telusko".split(' ');

let [x, y, , ...z] = words;
console.log(z);