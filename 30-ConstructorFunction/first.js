function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function () {
        console.log("work");
    }
}

let alien = new Alien('Navin', 'JS')
console.log(alien);