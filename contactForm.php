
<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    

    $mailTo = "info@maxjanda.cz";
    $headers = "From: " . $email;
    $txt = "New email from  " . $name ;

    mail($mailTo, $txt, $headers);

    header("Location: contact.php?mailsend");
    
    
}


