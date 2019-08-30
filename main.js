window.mydom={}
mydom.getSiblings=function(node){/*API*/
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
}
mydom.addClass=function (node,classes){
    var classes={'a':true,'b':false,'c':true}
    for(let key in classes){
        var value=classes[key]
        var methodName=value?'add':'remove'
        node.classList[methodName](key)
    }
}
