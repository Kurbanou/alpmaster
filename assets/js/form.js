'use strict'

document.addEventListener('DOMContentLoaded', function(){

    const popupInfo = document.querySelector('.gameinfo');  // .gameinfo для опред попапа , если попапов больше => дублировать функции с их именами
    const popBody = document.querySelector('.popup__content');
    const popCls = document.querySelector('.x');
    const form = document.querySelector('.form__body');
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const formFile = document.querySelector('.form__file'); //класс для фала загрузки использовать 'form_file'!!!
    const name = document.getElementById('name');
    const tel = document.getElementById('tel'),
          icon = document.querySelector('.Phone');

    [].forEach.call( document.querySelectorAll('.tel'), function(input) {//маска телефона
      let keyCode;
      function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          let pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          let matrix = "+375 (__) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          let reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
          if (event.type == "blur" && this.value.length < 5)  this.value = ""
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false)

    });

    function openPopupInfo(){ // попап с информацией
        popupInfo.classList.toggle('popup_open')
        document.body.classList.toggle('open')

        if(popupInfo.classList.contains('popup_open')){
            popBody.style.transitionDelay = `0.9s`
            // document.querySelector('.main__nav').style.display ='none' //если использовать burger-nav

        }
        else{
            popBody.style.transitionDelay = '0s'
            // document.querySelector('.menu__nav').style.display ='flex' //если использовать burger-nav
        }

    };

    function popClose (){
        openPopupInfo()
    };

    function formSend(e) {
        e.preventDefault();//отменяем стандартную отправку формы
        let error = formValidate(form);
        if (error === 0) {
            let request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                console.log("readyState=", this.readyState, "statis=", this.status);
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    // success, show this.responseText here
                    console.log("SUCCESS", this);
                    form.reset();
                    openPopupInfo()
                    alert('Запрос отправлен! Ждите звонка.')
                }
              }
            request.open(this.method, this.action, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            let formData = new FormData(this);
            for (let key of formData.keys()){
                console.log(key, formData.get(key));
            }
            request.send(formData);
        } else {
            alert ('Заполните обязательные поля!')
        }
    };

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('.req')
        for (let i = 0; i < formReq.length; i++){
            const input = formReq[i];
            formRemoveError(input);
            if (input.classList.contains('.email')){//класс для поля e-mail использовать 'email'!!!
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'chechbox' && input.checked === false){//проверяем чекбоксы
                formAddError(input);
                error++;

            } else if (tel.value.length !== 18){
                formAddError(tel);
                error++;
                console.log(tel.value.length)

            } else {
                if (input.value === '') {//проверка на пустые поля
                    formAddError(input);
                    error++
                }
            }


        }
        return error;
    };

    function emailTest(input) {
        return EMAIL_REGEXP.test(input);
    };

    function formAddError(input){
        input.classList.add('error');
    };

    function formRemoveError(input){
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    };

    form.addEventListener('submit',formSend);

    popupInfo.addEventListener('click', e => { //закрываем папоп
        let target = e.target
        let its_popup = target == popBody || popBody.contains(target)
        let its_button = target == popCls
        if (!its_popup || its_button ) {
            popClose()
        }
    });

    icon.addEventListener('click', openPopupInfo);

});