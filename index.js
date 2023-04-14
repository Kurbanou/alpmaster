'use strict'
document.addEventListener('DOMContentLoaded', function(){


    const slides = document.querySelectorAll('.slide'),
          kontrols = document.querySelectorAll('.in_kontrol')
 

    const header = document.querySelector('.header');
    let headerHeight = Number(window.getComputedStyle(header).height.slice(0,-2));
    const slider = document.querySelector('.slider');
    slider.style.padding = `${headerHeight*2}px 0 ${headerHeight}px 0`;

    let index = 0,
        time = 3000,
        timerId = setInterval(nextslide, time);



    function activeSlide(n) {
        for(let slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    };

    function activeKontrol(n) {
        for(let kontrol of kontrols) {
            kontrol.classList.remove('active');
        }
        kontrols[n].classList.add('active');
    };

    function nextslide(){
        if(index == slides.length - 1){
            index = 0;
            active(index);
        } else {
            index++;
            active(index)
        }
    }

    function active(ind) {
        activeSlide(ind);
        activeKontrol(ind);
    };

    slides.forEach((element, i) => {
        element.addEventListener('click', () => {
            if(!element.classList.contains('active')){
                index = i;
                active(index);
                clearInterval(timerId);
                timerId = setInterval(nextslide, time);
            }
        })
    });

    kontrols.forEach((element, i) => {
        element.addEventListener('click', () => {
            if(!element.classList.contains('active')){
                index = i;
                active(index);
                clearInterval(timerId);
                timerId = setInterval(nextslide, time);
            }
        })
    });

});