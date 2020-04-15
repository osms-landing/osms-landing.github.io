<?php
//$servername = "localhost";
//$username = "mysqladmin";
//$password = "Duke2022";
//$dbname = "UserLocation";

$servername = "sql210.epizy.com";
$username = "epiz_25422906";
$password = "8mp2BvhPlqkAVdP";
$dbname = "epiz_25422906_Users";

$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

function display($connection){
  $sql = "SELECT * FROM local_group";
  $result = mysqli_query($connection, $sql);
  $rows = array();
  while($r = mysqli_fetch_assoc($result)) {
      $rows[] = $r;
    }
  echo json_encode($rows);
}
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'today' : display($conn);break;
    }
}
mysqli_close($conn);

?>
