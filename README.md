# I am mutable

But not.


```js
const immutable = {}
const RealImmutable = require('iammutable')(immutable)
console.log(Object.isFrozen(RealImmutable))
```

