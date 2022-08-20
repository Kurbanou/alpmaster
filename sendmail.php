<?php
    $fio = $_POST['name'];
    $tel = $_POST['tel'];

    $fio = htmlspecialchars($fio);//преобразует все символы, которые пользователь попытается добавить в форму
    $tel = htmlspecialchars($tel);

    $fio = urldecode($fio);//декодирует url, если пользователь попытается его добавить в форму
    $tel = urldecode($tel);

    $fio = trim($fio);//удалим пробелы с начала и конца строки, если таковые имеются
    $tel = trim($tel);

    // mail("adm.skidlhz@tut.by", "Заявка с сайта", "Перезвоните мне: ".$fio.". Телефон: ".$tel ,"facade.alpmaster@by \r\n");

    if (mail("alpinist2013@yandex.by", "Заказ с сайта facade.alpmaster.by", "Перезвоните мне: ".$fio.". Телефон: ".$tel ,"facade.alpmaster@by \r\n")) {
        echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }

?>