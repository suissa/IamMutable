# I am mutable

But not.

![](https://abhirockzz.files.wordpress.com/2014/01/immutable-defined.png)

```js
const immutable = {}
const RealImmutable = require('iammutable')(immutable)
console.log(Object.isFrozen(RealImmutable))
```

