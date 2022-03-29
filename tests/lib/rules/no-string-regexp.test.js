const RuleTester = require('eslint').RuleTester,
    rule = require('../../../lib/rules/no-string-regexp');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-replace-regexp', rule, {
    valid: [
        {
            name: 'no regexp args as string',
            code: `
                let a = 'aaaaaa'.replace(/[a-z]/, 'A');
            `
        }
    ],
    invalid:[
        // {
        //     code: `
        //         let a = 'aaaaaa'.replace('/[a-z]/', 'A');
        //     `,
        //     errors: [{message: 'no regexp args as string'}]
        // }
    ]
})