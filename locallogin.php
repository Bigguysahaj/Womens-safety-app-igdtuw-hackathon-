<?php


$username1=$_POST['username'];
$password1 = $_POST['password'];

$connection= mysqli_connect("localhost","root","","login") or die("connection failed");

$sql= "SELECT * FROM `local` WHERE username='{$username1}' AND `password`='{$password1}'";

$result=mysqli_query($connection,$sql) or die("failed");

// if ($result){
//     echo ($username1);
//     echo($password1);
// }

if(mysqli_num_rows($result)>0)
{
    header("Location:http:local-admin-index.html");
    

}
else{
    header("Location:http:nolocallogin.html");
    
}

?>
