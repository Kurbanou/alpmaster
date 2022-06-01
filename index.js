const slides = document.querySelectorAll('.slide'),
      kontrols = document.querySelectorAll('.slider_kontrol'),
      inKontrols = document.querySelectorAll('.in_kontrol');





let index = 0;
let time = 3000;
let timerId = setInterval(nextslide, time);


function activeSlide(n) {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

function activeKontrol(n) {
    for(kontrol of kontrols) {
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
        index = i;
        active(index);
        clearInterval(timerId);
        timerId = setInterval(nextslide, time);
    })
});

// kontrols.forEach((element, i) => {
//     element.addEventListener('click', () => {
//         index = i;
//         active(index);
//         clearInterval(timerId);
//         timerId = setInterval(nextslide, time);
//     })
// });

inKontrols.forEach((element, i) => {
    element.addEventListener('click', () => {
        index = i;
        active(index);
        clearInterval(timerId);
        timerId = setInterval(nextslide, time);
    })
});



