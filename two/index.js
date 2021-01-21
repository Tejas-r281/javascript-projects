const btn =document.querySelector('.btn')
const container=document.querySelector('.container')

btn.addEventListener('click',()=>{
    console.log('clicked')
    const list = document.createElement('div')
    list.setAttribute('class','list')
    list.innerHTML="This challenge is really amezing"
    container.insertAdjacentElement('beforeend',list);

    setTimeout(() => {
        list.remove();
    }, 3000);
})

    
