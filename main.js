// 实现xx.xx，可以操作一个节点
// 方式1原型链
// 方式2-实际上就是jquery的原理
window.myQuery=function(nodeOrSelector){
    let node
    if(typeof nodeOrSelector==='string'){
        node=document.querySelector(nodeOrSelector)
    }
    else{
        node=nodeOrSelector
    }

    return{
        getSiblings:function(){
            var allChildren=node.parentNode.children
            var array={
                length:0
            }
            for(let i=0;i<allChildren.length;i++){
                if(allChildren[i]!==node){
                    array[array.length]=allChildren[i]
                    array[length]+=1
                }
            }
            return array
        },
        addClass:function(classes){
            var classes={'a':true,'b':false,'c':true}
            for(let key in classes){
                var value=classes[key]
                var methodName=value?'add':'remove'
                node.classList[methodName](key)
            }
        }
    }
}
 