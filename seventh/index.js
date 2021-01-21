// const box =document.querySelector('.container')

// box.addEventListener('mousemove',(e)=>{
//     console.log(e.target.tagName,'clicked');
//     console.log('clientX', e.clientX);
//     console.log('pageX',e.pageX);
//     console.log('screenX',e.screenX);
//     console.log('offsetX',e.offsetX);
// })
// const img=document.querySelector('img');

// box.addEventListener('mousemove',(e)=>{
//     const x=e.clientX-e.target.offsetLeft;
//     const y=e.clientX-e.target.offsetTop;

//     console.log(x,y);

//     img.style.transformOrigin=`${x}px ${y}px`;
//     img.style.transform="scale(5)";
// })
// box.addEventListener('mouseleave',()=>{
//     img.style.transformOrigin="center center";
//     img.style.transform='scale(1)';
// })



const magnifying_area = document.getElementById('magnifying_area');
const magnifying_img = document.getElementById('magnifying_img')

magnifying_area.addEventListener("mousemove", function (e) {
    console.log(e);
    // console.log(magnifying_area.offsetTop);
    var clientX = e.clientX - magnifying_area.offsetLeft
    var clientY = e.clientY - magnifying_area.offsetTop
    var mwidth = magnifying_area.offsetWidth;
    var mheight = magnifying_area.offsetHeight;
    clientX = clientX / mwidth * 100;
    clientY = clientY / mheight * 100;
    // magnifying_img.style.transformOrigin=`${clientX}px ${clientY}px`;
    // magnifying_img.style.transform="scale(2)";
   magnifying_img.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)';
    console.log('clicked');
});
magnifying_area.addEventListener('mouseout', function () {
     magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)';
    // magnifying_img.style.transformOrigin="center center";
    // magnifying_img.style.transform="scale(1)"
})
