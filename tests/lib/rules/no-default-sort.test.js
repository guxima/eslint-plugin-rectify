const RuleTester = require('eslint').RuleTester,
    rule = require('../../../lib/rules/no-default-sort');

const ruleTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});

ruleTester.run('no-default-sort', rule, {
    valid: [
        {
           name: 'arrow function as sort arg',
           code: `   
            const a =[]
            a.sort((x,y) => x-y)
           ` 
        },
        {
            name: 'function name as sort arg',
            code: `  
             function fn(x, y){ return x-y } 
             const a =[]
             a.sort(fn)
            ` 
         }
    ],
    invalid: []
})