/**
 * @description 数组函数 concat 调用后需要赋值才有意义
 */

const RequiredTypes = [
    'VariableDeclarator', 
    'AssignmentExpression'
]

module.exports = {
    meta: {
        type: 'problem'
    },
    create: (context) => {
        return {
            CallExpression: (node)=>{
                debugger
                if(node.callee.property.name === 'concat'){
                    // 遍历方法名为 concat 的父节点树
                    let tmp = node;
                    while(tmp){
                        if(RequiredTypes.includes(tmp.type)) return

                        tmp = tmp.parent
                    }
                    context.report({
                        node: node,
                        message: `useless concat invoked`
                    });
                }
            }
        }
    }
}