
let alien = {
    name: 'Navin',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Asus'
    }
}

// console.log(alien.laptop.brand.length);

console.log(alien.laptop1?.brand1?.length);

delete alien.laptop
console.log(alien);