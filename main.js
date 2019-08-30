// 实现xx.xx
// 方式1原型链
Node.prototype.getSiblings=function(){/*API*/
    var allChildren=this.parentNode.children
    var array={
        length:0
    }
    for(let i=0;i<allChildren.length;i++){
        if(allChildren[i]!==this){
            array[array.length]=allChildren[i]
            array[length]+=1
        }
    }
    return array
}
Node.prototype.addClass=function(classes){
    var classes={'a':true,'b':false,'c':true}
    for(let key in classes){
        var value=classes[key]
        var methodName=value?'add':'remove'
        this.classList[methodName](key)
    }
}
// 方式2-实际上就是jquery的原理
window.myQuery=function(node){
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