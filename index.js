// #ref: http://blog.vullum.io/nodejs-javascript-flow-fibers-generators/

module.exports = function (fn) {
  var gen = fn()

  function next (err, res) {
    if (err) {
      return gen.throw(err)
    }
    var ret = gen.next(res)
    if (ret.done) {
      return
    }
    ret.value(next)
  }

  next()
}
