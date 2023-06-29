let greet = (user) => {
    console.log("Hello " + user);
    return 1;
}

let greet2 = function (user) {
    console.log("Hello " + user);
    return 1;
}

console.log(greet('Navin'));
console.log(greet2('Navin'));


let add = (num1, num2) => num1 + num2

console.log(greet('Navin'));

console.log(add(2, 3));