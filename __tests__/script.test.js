// import { sum } from './script.js'
const sum = require('../script')

test('jest setup', ()=>{
    expect(sum(1,2)).toBe(3)
})

// test('resta dos numeros', ()=>{
//     expect(subs(1,3)).toBe(3)
// })


// export default ()=>'tests'