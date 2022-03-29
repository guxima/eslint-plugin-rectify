/**
 * @description String.replace() 方法调用时避免使用类正则参数 '/abcde/' 执行替换容易产生 bug
 */

module.exports = {
    meta: {
        type: 'problem'
    },
    create: (context) => {
        return {
            CallExpression: (node)=>{
                const ncaller = node.callee
                if(ncaller.type === 'MemberExpression' && ncaller.property.name === 'replace'){
                    const args = node.arguments;
                    if(args.length === 2 
                        && !args[0].regex // 当参数为正则表达式时该属性为真
                        && /\/[^\/]+\//.test(args[0].value)){
                            context.report({
                                node,
                                message: 'no regexp as string for replace'
                            })
                    }
                }
            }
        }
    }
}