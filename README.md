# I am mutable

But not.

![](https://abhirockzz.files.wordpress.com/2014/01/immutable-defined.png)

```js
const immutable = {}
const RealImmutable = require('iammutable')(immutable)
console.log(Object.isFrozen(RealImmutable))
```

If you want to use as a `GLOBAL`, **CAUTION!!!**:

```js
'use strict'
// Not a good practice
require('./iammutable.global')

const immutable = {
  name: 'Webschool',
  sayName: (name) => 'Nome: ' + name
}
const RealImmutable = Immutable(immutable)
console.log(Object.isFrozen(RealImmutable))

RealImmutable.test = true
```

Now you have `Immutable()` as a **global function**!


```js
// iammutable.global.js
'use strict'

global.Immutable = (obj) => {
  if(Object.isFrozen(obj)) return obj 
  return Object.freeze(obj)
}
```