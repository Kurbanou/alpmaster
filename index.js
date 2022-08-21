'use strict'
document.addEventListener('DOMContentLoaded', function(){


    const slides = document.querySelectorAll('.slide'),
          kontrols = document.querySelectorAll('.in_kontrol'),
          gallery = document.querySelector('.gall'), //прячем togle 'close'
          inner = document.querySelector('.gallery__inner'),
          galleryItems = [
                           {
                               title:'Утепление БЛК',
                               text:`Эту часть фасада мы утепляли в далеком 2012 г. на улице БЛК в Гродно. Из-за вынесенной над
                               фасадом лифтовой шахты не было возможности навесить люльку, леса тоже не выставить потому что
                               снизу тоже была пристройка. Автовышка нужна на метров 30 а то больше, да и если бы поставили, то
                               перегородили бы весь проезд. Поэтому без промышленных альпинистов никуда. Для нас не
                               составляло никакого труда выполнить эти работы. Нужно было только засверлить анкерный болт в
                               вынесенную лифтовую шахту поближе к стене и все встегнулся туда веревкой и работай. Иногда то
                               что оказывается сложно на первый взгляд очень легко осуществимо при использовании
                               определенных техник и навыков.`,
                               img:'<img class="gallery__img" src="./assets/img/01.jpg" alt="img">',
                           },
                           {
                               title:'Утепление БЛК',
                               text:`Эту часть фасада мы утепляли в далеком 2012 г. на улице БЛК в Гродно. Из-за вынесенной над
                               фасадом лифтовой шахты не было возможности навесить люльку, леса тоже не выставить потому что
                               снизу тоже была пристройка. Автовышка нужна на метров 30 а то больше, да и если бы поставили, то
                               перегородили бы весь проезд. Поэтому без промышленных альпинистов никуда. Для нас не
                               составляло никакого труда выполнить эти работы. Нужно было только засверлить анкерный болт в
                               вынесенную лифтовую шахту поближе к стене и все встегнулся туда веревкой и работай. Иногда то
                               что оказывается сложно на первый взгляд очень легко осуществимо при использовании
                               определенных техник и навыков.`,
                               img:'<img class="gallery__img" src="./assets/img/02.jpg" alt="img">',
                           },
                           {
                               title:'Мойка фасада держинского',
                               text:`Этот фасад пострадал от пожара и это был первый опыт мойки после пожара. Было неизвестно и интересно каков же будет результат. С первых минут конечно было попроще, загрязнения было не такими сильными и небольшая копоть отмывалась без труда. Было интересно что будет по мере приближения к месту где был очаг возгорания. И чем ближе мы подходили к самому грязному месту мы не встретили никаких сопротивлений со стороны копоти, все отмывалось без проблем, немного медленнее, но тем не менее не сложно. Только там, где, наверное, фасад подвергся высокой температуре отмыть не удалось, но это мелочи по сравнению с полученным результатом.`,
                               img:'<img class="gallery__img" src="./assets/img/03.jpg" alt="img">',
                           },
                           {
                               title:'Мойка фасада держинского',
                               text:`Этот фасад пострадал от пожара и это был первый опыт мойки после пожара. Было неизвестно и интересно каков же будет результат. С первых минут конечно было попроще, загрязнения было не такими сильными и небольшая копоть отмывалась без труда. Было интересно что будет по мере приближения к месту где был очаг возгорания. И чем ближе мы подходили к самому грязному месту мы не встретили никаких сопротивлений со стороны копоти, все отмывалось без проблем, немного медленнее, но тем не менее не сложно. Только там, где, наверное, фасад подвергся высокой температуре отмыть не удалось, но это мелочи по сравнению с полученным результатом.`,
                               img:'<img class="gallery__img" src="./assets/img/04.jpg" alt="img">',
                           },
                           {
                               title:'утепление квартир',
                               text:`Наша команда промышленных альпинистов выполняет утепление квартир на любой высоте и в
                               любом городе Гродненской области. Мы возьмем на себя доставку и выбор материала. Подберем
                               цвет для краски в цвет фасада чтобы утепленная квартира не выделялась на общем фоне. Все работы
                               выполняются с соблюдением технологии.`,
                               img:'<img class="gallery__img" src="./assets/img/05.jpg" alt="img">',
                           },
                           {
                               title:'утепление квартир',
                               text:`Наша команда промышленных альпинистов выполняет утепление квартир на любой высоте и в
                               любом городе Гродненской области. Мы возьмем на себя доставку и выбор материала. Подберем
                               цвет для краски в цвет фасада чтобы утепленная квартира не выделялась на общем фоне. Все работы
                               выполняются с соблюдением технологии.`,
                               img:'<img class="gallery__img" src="./assets/img/06.jpg" alt="img">',
                           },
                           {
                               title:'утепление квартир',
                               text:`Наша команда промышленных альпинистов выполняет утепление квартир на любой высоте и в
                               любом городе Гродненской области. Мы возьмем на себя доставку и выбор материала. Подберем
                               цвет для краски в цвет фасада чтобы утепленная квартира не выделялась на общем фоне. Все работы
                               выполняются с соблюдением технологии.`,
                               img:'<img class="gallery__img" src="./assets/img/07.jpg" alt="img">',
                           },
                           {
                               title:'Мойка фасада южный',
                               text:`Позвонила женщина и попросила помыть фасад. Было это уже глубокой осенью, и дожди были довольно часто. Сказала, что не может смотреть на грязный фасад, особенно в дождь, когда он намокает и становится очень ужасным и непривлекательным. Она попросила помыть одну самую грязную сторону, а остальное весной и потом уже покрасить. Но когда увидела, как он отмылся, решила, что и нет необходимости красить. Весной мы домыли весь фасад (правда уже с вышки). Хозяйка осталась довольна нами и проделанной нами работой.`,
                               img:'<img class="gallery__img" src="./assets/img/08.jpg" alt="img">',
                           },
                           {
                               title:'Островец РОВД',
                               text:`Покраска фасада с небольшим ремонтом Островецкого РОВД. Фасад был очень сильно загрязнен. Сторона, выходящая на лес, была заросшая мхом и лишайником и естественно портила весь вид. Во многом этому способствовала фактура штукатурки «Короед». Во впадинах очень хорошо задерживается вода и пыльца деревьев из-за которой потом фасад и обрастает. Весь фасад (850 м2) мы отмыли за день, как и многие заказчики этот тоже удивился насколько меняется фасад после мойки. Его зачастую можно и не красить. Но покраска не только эстетика, но еще и защита. Параллельно с покраской выполнялся и мелкий ремонт. На всю работу, а это мойка, небольшой ремонт и покраска ушло 8 дней. Вся работа выполнялась методом промышленного альпинизма.`,
                               img:'<img class="gallery__img" src="./assets/img/09.jpg" alt="img">',
                           },
                         ];

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

    // image gallery

    galleryItems.forEach(elem => {
        inner.innerHTML += elem.img
    });

    const images = document.querySelectorAll('.gallery__img');


    for (let i = 0; i < images.length; i++){
        images[i].addEventListener('click', function(){
            createPopup (galleryItems[i]);
            gallery.classList.toggle('close');
        });
    };

    function createPopup (el){
        const section = document.createElement('section');
        section.className = 'popups lite';
        gallery.after(section);
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapper gallery'
        section.append(wrapper)
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close_btn';
        closeBtn.innerHTML = '&#10007;';
        wrapper.append(closeBtn);
        const popup = document.createElement('div');
        popup.className = 'popup'
        popup.innerHTML = `<div class="content">
            <h4>${el.title}</h4>
            <p>${el.text}</p>
            </div>
            <div class="img">${el.img}</div>`;
        wrapper.append(popup);
        closeBtn.addEventListener('click', function () {
            section.remove()
            gallery.classList.toggle('close')
        })
    };



});








