'use strict'

global.Immutable = (obj) => {
  if(Object.isFrozen(obj)) return obj 
  return Object.freeze(obj)
}
