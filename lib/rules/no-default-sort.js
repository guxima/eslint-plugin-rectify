/**
 * @description 数组的 sort 默认行为是按元素的字符串进行生序排列，数字排序时不符合预期
 */

module.exports = {
    meta: {
        type: 'problem'
    },
    create: (context) => {
        return {
            CallExpression: (node) => {
                const ncaller = node.callee
                if(ncaller.type === 'MemberExpression' && ncaller.property.name === 'sort'){
                    if(node.arguments.length === 0){
                        context.report({
                            node,
                            message: 'sort need function args'
                        })
                    }
                }
            }
        }
    }
}