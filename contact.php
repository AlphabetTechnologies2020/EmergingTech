<$php 
$fname = $_REQUEST['fname'];
$lname = $_REQUEST['lname'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

if(empty($fname) || empty($email) || empty($message))
{
    echo "Please Fill All Required Fields";
}
else
<!-- info@emergingteck.com -->
{
    mail("talhahussain570@gmail.com", "Emerging Tech Message", $message, "from: $fname + $lname <$email>");
    echo "<script type='text/javascript'>alert("Your message sent successfully")<script>";
    window.history.log(-1);
}
?>