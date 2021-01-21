const container = document.querySelector('.container')

let index=0;
// const text=' this project is simple but sufficient';
const text= window.prompt('please enter a sentence ',"");

setInterval(() => writetext(), 100);

function randomcolor(){
    var color = "#";
    var randomHex = "123456ABCDEF";  
    for(var i = 0; i<6;i++){
        color+= randomHex[Math.floor(Math.random()*16)]
    }
   
    return color;
}

function writetext()
{
    // console.log(text);
    container.innerHTML= text.slice(0,index);
    container.style.color=randomcolor();
     index++;
    if(index>text.length)
    {
        index=0;
    }
}

