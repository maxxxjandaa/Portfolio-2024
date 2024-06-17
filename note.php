// if(isset($_POST["submit"])){
//     $name = $_POST["name"];
//     $email = $_POST["email"];
//     $message = $_POST["message"];
    

//     $mailTo = "info@maxjanda.cz";
//     $headers = "From: " . $name . " | " . "Email: " . $email;
//     $txt = $message;

//     mail($mailTo, $headers,  $txt);

//     header("Location: contact.php?mailsend");
    
    
// }


// if($_SERVER["REQUEST_METHOD"]  == "POST"){
//     $name = htmlspecialchars($_POST["name"]); 
//     $email = filter_var($email, FILTER_VALIDATE_EMAIL);
//     $message = htmlspecialchars($_POST["message"]);


//     if (empty($name) || empty($email) || empty($message)) {
//         header("Location: contact.html");
//         exit();
//     }

//     if ($email === false) {
//         header("Location: contact.html");
//         exit();
//     }

//     // $mailTo = "info@maxjanda.cz";
//     // $headers = "From: " . $name . " | " . "Email: " . $email;
//     // $txt = $message;

//     $mailTo = "info@maxjanda.cz";
//     $headers = "From: webmaster@yourdomain.com" . "\r\n" .
//                "Reply-To: " . $email . "\r\n" .
//                "X-Mailer: PHP/" . phpversion();
//     $subject = "New contact form submission";
//     $txt = "You have received an email from " . $name . ".\n\n" . $message;

//     // mail($mailTo, $headers,  $txt);
//     mail($mailTo, $subject, $txt, $headers);

//     header("Location: contact.html");
//     exit();
// }else{
//     header("Location: contact.html");
//     exit();
// }