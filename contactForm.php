<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mailTo = "maxmilian.janda@gmail.com";
    $headers = "From: " . $email;
    $txt = "Máš tady email od " . $name . ".\n\n" . $message;

    mail($mailTo, $txt, $headers);

    header("Location: contact.php?mailsend");
}