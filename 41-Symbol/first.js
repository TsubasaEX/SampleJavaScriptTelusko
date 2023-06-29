let log = console.log

const s1 = Symbol()
const s2 = Symbol(123) // Symbol(description)
const s3 = Symbol('steve')

log(s1);
log(s2);
log(s3);

log(typeof s1)
log(s3.toString())
log(Symbol(42) == Symbol(42))
log(Symbol(42) === Symbol(42))

log(Symbol.keyFor(s2)) //no key for s2
log(Symbol.for(123) === Symbol(123)) //Symbol.for(key)
log(Symbol.for(123) === Symbol.for(123))

let s5 = Symbol.for(555)
log(Symbol.keyFor(s5))


let obj = {};
obj['prop1'] = 'value1'
obj['prop2'] = 'value2'
obj[Symbol()] = 'value3'
obj['prop4'] = Symbol()

for (let p in obj) {
    log(p, obj[p])
}
log(JSON.stringify(obj))

let s4 = Symbol.for('fred')
log(s4)

let k4 = Symbol.keyFor(s4)
log(k4)