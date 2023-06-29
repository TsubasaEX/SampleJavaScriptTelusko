let laptop = {
    cpu: 'i9',
    ram: 16,
    greet: () => {
        console.log(this);
        console.log(this.cpu);
    },
    greet2: function () {
        console.log(this);
        console.log(this.cpu);
    }
}

laptop.greet();
laptop.greet2();