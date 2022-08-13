'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.form__body');
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const formFile = document.querySelector('.form__file'); //класс для фала загрузки использовать 'form_file'!!!



    form.addEventListener('submit',formSend);


    async function formSend(e) {
        e.preventDefault();//отменяем стандартную отправку формы
        let error = formValidate(form);
        let formData = new FormData(form);
        // formData.append('file',formFile.files[0]);
        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert (result.messange);
                form.reset();
            } else {
                alert('Ошибка!');
            }

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
            }  else {
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
        input.parentElement.classList.add('error');
        input.classList.add('error');
    };

    function formRemoveError(input){
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    };

    function uploadFile(file) {
        //проверяем тип файла
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения');
            formFile.value = '';
            return;
        }
        //проверяем размер файла (< 2 mb)
        if (file.size > 2 * 1024 * 1024) {
            alert ('Файл должен быть меньше 2 МБ.');
            return;
        }
    }

    // formFile.addEventListener('change', () => {
    //     uploadFile(formFile.files[0]);
    // })

});