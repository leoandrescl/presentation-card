<?php 

    $to = "leoandrescl@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $info = "Name: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone . "\nSubject: " . $subject . "\nMessage: " . $message;
    /*mail($to,$subject,$info);
    header("Location:thanksyou.html");*/

    if(mail($to,$subject,$info)){
        /*echo "mail sended :)<br>";
        echo $name . " message: " . $message;*/
        header("Location:thanksyou.html");
    } else {
        /*echo "error";*/
        header("Location:thanksyou.html");
    }
    
?>