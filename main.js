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