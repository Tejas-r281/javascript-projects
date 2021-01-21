setInterval(() =>createheart(),1000 );

function createheart()
{
    const heart= document.createElement('div')
    heart.setAttribute('class','heart');
    heart.innerHTML="💙";
    heart.style.left=Math.random()*100 +"vw";
    heart.style.animationDuration= Math.random()*2 +3+"s";
    document.body.appendChild(heart);
    console.log(heart.scrollHeight)
      if(window.innerHeight)
      {
     
      }
    setTimeout(() => {
        heart.remove();
    }, 5000);
}