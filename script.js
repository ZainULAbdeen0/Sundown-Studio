// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
document.addEventListener('DOMContentLoaded', function() {
var box=document.querySelector('#img-box');
var wrapper=document.querySelector('#main-hover');
var elems=wrapper.querySelectorAll('.elem');
var images=document.querySelectorAll('.page2-image');



function hoverImageEffect() {

wrapper.addEventListener('mouseenter', function(){
    box.style.display = 'block';
})

wrapper.addEventListener('mouseleave', function(){
    box.style.display = 'none';
})

    
elems.forEach((e)=>{
    e.addEventListener('mouseenter', function(){
        var bgi=e.getAttribute('data-imu')   ;
    box.style.backgroundImage=`url(${bgi})`;
    })
});
}

function swipeContainer(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
       
      });
}

function init(){
    images.forEach(function(e){
        var Url=e.getAttribute("data-imu");
        e.style.backgroundImage= `url(${Url})`;
    });
}
var black=document.querySelector('.nav-cove');
var nav=document.querySelector('.nav-cover-op');
var button=document.querySelector('#menu-btn');

    button.addEventListener("click",function(){
        if(nav.id == "nav-cover-opt" && black.id == "nav-cover"){
            nav.id = "";
            black.id = ""
        }else{
            nav.id = "nav-cover-opt";
            black.id = "nav-cover"
        }
       
    });
console.log(black + nav);

swipeContainer();
hoverImageEffect();
init();
// navResponsive();
});