let map = new Map();

map.set("a", "A")
map.set("b", "B")
map.set("c", "C")

console.log(map.keys());

for (let [k, v] of map) {
    console.log(k, v);
}

map.forEach((v, k) => {
    console.log(k, v);
})