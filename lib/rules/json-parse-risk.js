/**
 * @description 期望 json.parse 流程外层有 try..catch 流程，避免发生异常
 */

module.exports = {
    meta: {
        type: 'problem'
    },
    create: (context) => {
        return {
            CallExpression: (node) => {
                const ncaller = node.callee;
                if(
                    ncaller.type === 'MemberExpression' 
                        && ncaller.property.name === 'parse'
                        && ncaller.object.name === 'JSON'
                ){
                    let tmp = node.parent;
                    while(tmp){
                        if(tmp.type === 'TryStatement') return;
                        tmp = tmp.parent;
                    }
                    // parent 节点找不到 TryStatement 类型报错
                    context.report({
                        node,
                        message: 'json parse should be surrounded by try...catch'
                    })
                }
            }
        }
    }
}