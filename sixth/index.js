const toggle= document.getElementById('toggle');
const container= document.querySelector('.container');

toggle.addEventListener('click',(e)=>{
    container.classList.toggle('active',e.target.checked);
    
})