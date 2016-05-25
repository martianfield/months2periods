# months2periods

```
'use strict'

const m2p = require('months2periods')

let options = {
    language: 'en',
    zeroBased: false,
    connector: '-'
}

let months = [1, 4, 6]

let result = m2p(months, options)

// output name of months
console.log(result.months)

// output all periods
console.log(result.periods)
```