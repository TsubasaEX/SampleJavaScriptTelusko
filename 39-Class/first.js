function makeClass() {

    class SpaceShuttle {
        constructor(n) {
            this._myName = n
        }
        get name() {
            return this._myName
        }
        set name(n) {
            this._myName = n
        }
    }
    return SpaceShuttle;
}

const SP = makeClass();
const sp = new SP("ABC");
console.log(sp);
console.log(sp.name);
console.log(sp._myName);
sp.name = "ZZZ"
console.log(sp.name);