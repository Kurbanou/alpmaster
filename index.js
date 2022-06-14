const slides = document.querySelectorAll('.slide'),
      kontrols = document.querySelectorAll('.in_kontrol');
      
let index = 0,
    time = 3000,
    timerId = setInterval(nextslide, time);


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




// image gallery

const galleryItems = [
    {
        title:'Title1',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/01.jpg" alt="img">',
    },
    {
        title:'Title2',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/02.jpg" alt="img">',
    },
    {
        title:'Title3',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/03.jpg" alt="img">',
    },
    {
        title:'Title4',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/04.jpg" alt="img">',
    },
    {
        title:'Title5',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/05.jpg" alt="img">',
    },
    {
        title:'Title6',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/06.jpg" alt="img">',
    },
    {
        title:'Title7',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/07.jpg" alt="img">',
    },
    {
        title:'Title8',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/08.jpg" alt="img">',
    },
    {
        title:'Title9',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/09.jpg" alt="img">',
    },
    {
        title:'Title10',
        text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea illum id eaque delectus excepturi mollitia in rem, soluta consequuntur, 
        vitae eveniet iste commodi laudantium optio laboriosam repellat libero 
        molestias maiores!`,
        img:'<img class="gallery__img" src="./assets/img/10.jpg" alt="img">'
    }
]

const images = [];
const inner = document.querySelector('.gallery__inner')
galleryItems.forEach(elem => {
    images.push(elem.img)
});

for (let i = 0; i < images.length; i++){
    inner.innerHTML += images[i]
}




console.log(images)