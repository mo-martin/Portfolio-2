<?php

    $to = "momartin1@hotmail.co.uk"; 
    $from = $_REQUEST['Email']; 
    $name = $_REQUEST['Name']; 
    $headers = "From: $from"; 
    $subject = "$name has sent you a message from your website!"; 

    $fields = array(); 
    $fields{"Name"} = "Name"; 
    $fields{"Email"} = "Email"; 
    $fields{"Message"} = "Message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);
	
	header( 'Location: index.html' ) ;
	
	
?>