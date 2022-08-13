<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //sender
    $mail->setForm('info@alpmaster.by','Фасадные работы');
    //recipient
    $mail->addAddress('adm.skidlhz@tut.by');
    //subject
    $mail->Subject = 'Привет! Это посетитель Вашего сайта';

    //letter bodyletter subject
    $body = 'Привет перезвоните мне!';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['tel']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    }

    //file

    // if (!empty($_POST['file']['tmp_name'])){
    //     //path upload file
    //     $filePath = __DIR__ . "/files/" . $_FILES['file']['name'];
    //     //douwnload file
    //     if (copy($_FILES['image']['tmp_name'], $filePath)) {
    //         $fileAttach = $filePath;
    //         $body.='<p><strong>Файл в приложении</strong></p>';
    //         $mail->addAttachment($fileAttach);
    //     }
    // }

    $mail->Body = $body;

    //sending
    if (!$mail->send()) {
        $messange = 'mistake';
    } else {
        $messange = 'letter sent'
    }

    $response = ['message' => $messange];

    header('Content-type: application/json');
    echo json_encode($response);
?>











