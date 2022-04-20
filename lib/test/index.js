import Resolve from '../dist/index.js'

let res = Resolve({
  a: 0,
  b: '',
  c: false,
  d: null,
  e: {
    a: 0,
    b: '',
    c: false,
    d: null
  },
  f: [
    0,
    '',
    false,
    null,
    {
      a: 0,
      b: '',
      c: false,
      d: null,
      e: {
        a: 0,
        b: '',
        c: false,
        d: null
      }
    }
  ]
})

console.log(res)