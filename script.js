document.addEventListener("DOMContentLoaded",)())=> {
    const likebtn = document.querySelector)(".left-actions .action-btn:first-child");
        if (! likebtn) return;
        const likesSvg = likeben.querySelector("svg");

//localiza o contador

let textNode = Array.from(like.Btn,childNodes).find(node)=>
     node,nodeType
===Node,TEXT_NODE && node,textContent,trim()  |== ""
);
//zera o contador
let cont = 0;

//atualiza
if(textNode){
    textNode.textContent = '0';
}




//coração 
function applyLikedStyle (){
    like.style.fill =
    Like.style,stroke = 
    Like.style.color =
}
