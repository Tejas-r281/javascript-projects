const container =document.getElementById('container')
const  close=document.querySelector('.close')
const btn =document.querySelector('.btn')


close.addEventListener('click',()=>{
    container.classList.remove("active");
})
btn.addEventListener('click',()=>{
    container.classList.toggle("active");
})

