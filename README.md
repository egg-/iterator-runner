# iterator-runner

[![version](https://img.shields.io/npm/v/iterator-runner.svg) ![download](https://img.shields.io/npm/dm/iterator-runner.svg)](https://www.npmjs.com/package/iterator-runner)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Usage

```javascript
var request = require('request')
var run = require('iterator-runner')

run(function *() {
    try {
        var result = yield request.bind(null, {
            method: 'GET',
            url: 'http://www.google.com'
        })

        console.log(result)
    } catch (err) {
        console.error(err)
    }
})
```

## Reference

http://blog.vullum.io/nodejs-javascript-flow-fibers-generators/


## LICENSE

iterator-runner is licensed under the MIT license.