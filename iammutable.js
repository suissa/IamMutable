'use strict'

module.exports = function iammutable (obj) {
  const propNames = Object.getOwnPropertyNames(obj)
  propNames.forEach((propName) => {
    const prop = obj[propName]
    if (typeof prop === 'object' && typeof prop !== 'null') {
      iammutable(prop)
    }
  })
  
  if(Object.isFrozen(obj)) return obj 
  return Object.freeze(obj)
}
