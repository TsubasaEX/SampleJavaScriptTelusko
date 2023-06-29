let nums = [];

nums[0] = 5;
nums[99] = 9;

console.log(nums);

for (let n of nums) {
    console.log(n);
}

for (let key in nums) {
    console.log(nums[key]);
}