<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if( $usuario === '' || $pass === '' ) {
    echo json_encode('Llena todos los campos');
} else {
    echo json_encode('Datos completos enviados!!!<br>Usuario: '.$usuario.'<br>Pass: '.$pass);
}