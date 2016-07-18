'use strict'
// Não é uma boa prática!
require('./iammutable.global')

const immutable = {
  name: 'Webschool',
  sayName: (name) => 'Nome: ' + name
}
const RealImmutable = Immutable(immutable)
console.log(Object.isFrozen(RealImmutable))

RealImmutable.test = true
