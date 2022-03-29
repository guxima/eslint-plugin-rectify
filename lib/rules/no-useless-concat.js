/**
 * @description 数组函数 concat 调用后需要赋值才有意义
 */

const RequiredTypes = [
    'VariableDeclarator', 
    'AssignmentExpression',
    'Property',
    'MemberExpression',
    'ReturnStatement',
    'ConditionalExpression'
]

module.exports = {
    meta: {
        type: 'problem'
    },
    create: (context) => {
        return {
            CallExpression: (node)=>{
                const ncaller = node.callee;
                // bugfix: 直接调用函数 func() 时 node.callee.property 为 null
                if(ncaller.type === 'MemberExpression' && ncaller.property.name === 'concat'){
                    // 父节点类型是所需类型则通过
                    if(RequiredTypes.includes(node.parent.type)) return;
                    // 父节点不在所需类型中则失败
                    context.report({
                        node: node,
                        message: `useless concat invoked`
                    });
                }
            }
        }
    }
}