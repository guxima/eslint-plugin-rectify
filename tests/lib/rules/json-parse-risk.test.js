const RuleTester = require('eslint').RuleTester,
    rule = require('../../../lib/rules/json-parse-risk');

const ruleTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});

ruleTester.run('json-parse-risk', rule, {
    valid: [
        {
           name: 'json parse should be surrounded by try...catch',
           code: `   
            try{
                const obj = JSON.parse({})
            }catch(e){}
           ` 
        },
        {
            name: 'json parse should be surrounded by try...catch inner function',
            code: `   
             function fn (){
                 try{
                     const obj = JSON.parse({})
                 }catch(e){}
             }
             // 函数调用外层的 try...catch 不符合
             try{
                 fn()
             }catch(e){}
            ` 
         }
    ],
    invalid: []
})