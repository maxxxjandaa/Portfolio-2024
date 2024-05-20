
<?php

if (isset($_POST["submit"])) {
    // Získání a validace vstupů
    $name = htmlspecialchars(trim($_POST["name"]), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]), ENT_QUOTES, 'UTF-8');

    // Kontrola, zda jsou všechna pole vyplněna
    if (empty($name) || !$email || empty($message)) {
        header("Location: contact.html");
        exit();
    }

    // Nastavení e-mailových hlaviček
    $mailTo = "info@maxjanda.cz";
    $subject = "New contact form submission";
    $txt = "You have received an email from $name.\n\n$message";
    $headers = "From: info@maxjanda.cz\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Nastavení UTF-8

    // Odeslání e-mailu
    if (mail($mailTo, $subject, $txt, $headers)) {
        header("Location: contact.html?success=1");
    } else {
        header("Location: contact.html?error=1");
    }
    exit();
} else {
    header("Location: contact.html");
    exit();
}


// if(isset($_POST["submit"])){
//     $name = htmlspecialchars(trim($_POST["name"]), ENT_QUOTES, 'UTF-8');
//     $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
//     $message = htmlspecialchars(trim($_POST["message"]), ENT_QUOTES, 'UTF-8');
    

//     if (empty($name) || empty($email) || empty($message)) {
//         header("Location: contact.html");
//         exit();
//     }

//     // Nastavení e-mailových hlaviček
//     $mailTo = "info@maxjanda.cz";
//     $headers = "From: " . $name . " | " . " Email: " . $email;
//     $txt = "You have received an email from $name.\n\n$message";
//     $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

//     // Odeslání e-mailu
//     mail($mailTo, $headers, $txt);

//     header("Location: contact.html");
//     exit();
    
// }else{
//     header("Location: contact.html");
//     exit();
// }