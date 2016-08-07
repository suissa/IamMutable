'use strict'

function deepFreeze(obj) {
  // Retrieve the property names
  const propNames = Object.getOwnPropertyNames(obj);
  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    const prop = obj[name];
    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null) {        
      deepFreeze(prop);
    }
  });
  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

module.exports = (obj) => {
  if(obj instanceof Object)
    if(Object.isFrozen(obj)) return obj
    else return deepFreeze(obj)
  else throw new TypeError('You need to send an OBJECT!')
}

