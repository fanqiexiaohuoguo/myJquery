// 实现xx.xx，可以操作多个节点
window.myQuery=function(nodeOrSelector){
    let nodes
    if(typeof nodeOrSelector==='string'){
        let temp=document.querySelectorAll(nodeOrSelector)
        for(let i=0;i<temp.length;i++){
            nodes[i]=temp[i]//伪数组
        }
        nodes.length=temp.length
    }
    else if(nodeOrSelector instanceof Node){
        node={
            0:nodeOrSelector,
            length:1
        }//伪数组
    } 
    nodes.addClass=function(classes){
        var classes={'a':true,'b':false,'c':true}
        for(let key in classes){
            var value=classes[key]
            var methodName=value?'add':'remove'
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList[methodName](key)
            }
        }
    }

    nodes.text=function(text){
        if(text===undefined){
            var texts=[]
            for(let i=0;i<nodes.length;i++){
                texts.push(nodes[i].textContent)
            }
            return texts
        }
        else{
            for(let i=0;i<nodes.length;i++){
                nodes[i].textContent=text
            }
        }
    }

    return nodes
}
