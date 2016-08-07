'use strict';
const immutable = {}
const RealImmutable = require('./iammutable')(immutable)
console.log(Object.isFrozen(RealImmutable))

RealImmutable.test = true
console.log('RealImmutable.teste', RealImmutable.test)
