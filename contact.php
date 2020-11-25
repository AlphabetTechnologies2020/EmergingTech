<?php 

    if(isset($_POST['btn-send']))
    {
       $fname = $_REQUEST['fname'];
        $lname = $_REQUEST['lname'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

       if(empty($fname) || empty($email) || empty($message))
       {
          echo "Please Fill All Required Fields";
       }
       else
       {
           $to = "info@emergingteck.com";
           $suject = "Emerging Tech Message";
           $from = $fname. $lname. " ". $email;

           if(mail($to,$suject,$message,$from))
           {
               echo "<script type='text/javascript'>alert('Your message sent successfully'); 
                    window.history.go(-1);
                    </script>";
           }
       }
    }
    else
    {
        echo "Getting Some Issues";
    }
?>