const RuleTester = require("eslint").RuleTester,
    rule = require('../../../lib/rules/no-useless-concat');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-useless-concat', rule, {
    valid: [
        {   name: 'has VariableDeclarator parent',
            code: `
                const a = [];
                let b = a.concat(2); 
            `
        },
        {   name: 'has AssignmentExpression parent',
            code: `
                const a = [];
                let b;
                b = a.concat(2); 
            `
        },
        {   name: 'has Property parent',
            code: `
                const a = [];
                let b = {
                    p: a.concat(2)
                };
            `
        },
        {
            name: 'has MemberExpression parent',
            code: `
                const a = [1,2,3].concat(4,5,6).forEach(i=>i)
            `
        },
        {
            name: 'has ReturnStatement parent',
            code: `
                function fn(a){return [1].concat(a)}
            `
        },
        {
            name: 'has ConditionalExpression parent',
            code: `
                const a = [];
                const b = true ? a.concat(1) : [];
            `
        }
    ],
    invalid:[]
    // invalid: [
    //     {
    //         code: `
    //             const a = []; a.concat(1)
    //         `,
    //         errors: [{message: 'concat result should be assigned'}]
    //     }
    // ]
})
