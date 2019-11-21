<?php
require_once './connection.php';
/*define('DB_SERVER', 'remotemysql.com');
define('DB_USERNAME', 'RXWuaQvtL6');
define('DB_PASSWORD', 'w3tA3C2xKM');
define('DB_NAME', 'RXWuaQvtL6');

Attempt to connect to MySQL database 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);*/

$sql = "SELECT username,accion,fechaHora from `Log`";

$temporal = array();
$salida = array();
if ($result = mysqli_query($link, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($temporal, $row['username']);
        array_push($temporal, $row['accion']);
        array_push($temporal, $row['fechaHora']);
        array_push($salida,$temporal);
    }
    echo json_encode($salida);
}

mysqli_close($link);
?>