<?php
$servername = "localhost"; 
$username = "root";       
$password = "";           
$dbname = "memes_db";        

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("failed: " . $conn->connect_error);
}

$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$time = (new DateTime())->format('Y-m-d H:i:s');

$stmt = $conn->prepare("INSERT INTO contact_messages (first_name, last_name, email, message, time) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $first_name, $last_name, $email, $message, $time);

if($stmt->execute()){
    header("Location: http://localhost:3000");
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
