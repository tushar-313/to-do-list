let btn=document.querySelector('button');
let ul=document.querySelector('ol');
let i=document.querySelector('input');

function add(){
    let li=document.createElement('li');
    ul.append(li);
    li.innerHTML=i.value;
    i.value='';
    let bn=document.createElement('button');
    li.prepend(bn);
    bn.innerHTML='Done';
    bn.onclick=function(){
                li.remove();
    };
}

btn.addEventListener('click', add);
