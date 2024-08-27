<?php
define('PASTA_RAIZ_SITE','');
define('PASTA_RAIZ_SIMULADOR','');
define('NOME_SITE','Cria Confecções');

$db_user = "u412259522_simuser";
$db_password = "a!@8fGz5#@Aw";
$db_base = "u412259522_simulador";
$db_host = "localhost";
$connection = mysqli_connect($db_host, $db_user, $db_password) or die('Site indisponivel.');
mysqli_select_db($connection, $db_base) or die(mysqli_error($connection));
mysqli_query($connection, "SET SQL_BIG_SELECTS=1");
mysqli_set_charset($connection, 'UTF8');
mysqli_query($connection, "SET sql_mode = '';");
?>