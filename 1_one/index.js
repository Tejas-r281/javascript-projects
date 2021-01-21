const button = document.getElementById('text')
const list =document.querySelector('.list')

button.addEventListener('click',()=>{
    list.classList.toggle('active');
    button.classList.toggle('active');
})