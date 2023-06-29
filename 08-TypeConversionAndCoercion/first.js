let x = String(6)
console.log(x, typeof x);

x = Number("123")
console.log(x, typeof x);

let y
console.log(y, typeof y);
y = 8
console.log(y, typeof y);
y = y + ""
console.log(y, typeof y);
y = y - 2
console.log(y, typeof y);
y = !y
console.log(y, typeof y);

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

let z = String(8)
// z = z + 2
// console.log(z, typeof z);
z = +z + 2
console.log(z, typeof z);

let i = parseInt("123 Navin")
console.log(i);

i = parseInt("N123 Navin")
console.log(i);
