<?php
$txtName=$_POST['txtName'];
$txtNumber=$_POST['txtNumber'];
$txtEmail=$_POST['txtEmail'];
$txtDetails=$_POST['txtDetails'];

$conn = new mysqli('localhost','root','','sem6');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into contactus(txtName,txtNumber, txtEmail,txtDetails) values(?, ?, ?, ?)");
    $stmt->bind_param("siss", $txtName, $txtNumber,  $txtEmail, $txtDetails);
    $execval = $stmt->execute();
    echo $execval;
    echo "Response submitted successfully";

    header("Location:index.html");
    $stmt->close();
    $conn->close();
}

?>