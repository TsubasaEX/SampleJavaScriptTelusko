let laptop1 = {
    cpu: 'i9',
    ram: 16,
    compare: function (lp) {
        return this.ram > lp.ram ? true : false;
    }
}

let laptop2 = {
    cpu: 'i7',
    ram: 32,
}

console.log(laptop1.compare(laptop2));
