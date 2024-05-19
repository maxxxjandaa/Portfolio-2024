
<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    

    $mailTo = "info@maxjanda.cz";
    $headers = "From: " . $name . " | " . "Email: " . $email;
    $txt = $message;

    mail($mailTo, $headers,  $txt);

    header("Location: contact.php?mailsend");
    
    
}


