'use strict'

const images = document.querySelectorAll('.imagebox');

images.forEach(image => {
    image.addEventListener('click', function(){
        createViewBox();
        const viewBoxContent = document.querySelector('.viewBoxContent');
        viewBoxContent.innerHTML = image.innerHTML;    
    })
})


function createViewBox(){
    const body = document.querySelector('body');
    const viewBox = document.createElement('div');
    viewBox.classList = 'viewBox';
    body.append(viewBox);
    const viewBox__body = document.createElement('div');
    viewBox__body.classList = 'viewBox__body';
    viewBox.append(viewBox__body);
    const viewBoxContent = document.createElement('div');//сюда помещаем
    viewBoxContent.classList = 'viewBoxContent';    
    viewBox__body.append(viewBoxContent);
    viewBox.classList.add('open');
    body.classList.add('over');
    viewBox.addEventListener('click', e => { //закрываем 
        let target = e.target
        let its_popup = target == viewBoxContent || viewBoxContent.contains(target)        
        if (!its_popup  ) {
            viewBox.remove()
            body.classList.remove('over')
        }
    }); 

}

