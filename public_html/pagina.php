<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . "/adm/includes/configuracoes.php");include("class/Template.php");$v949c95331c08=new Template("template/recuperar_senha.html");if (!empty($_GET['token'])){$vb46e5b0cf3cd="SELECT id, idcliente FROM token WHERE token LIKE '".mysqli_real_escape_string($connection, $_GET['token'])."' LIMIT 1";$v63c3d385971d=mysqli_query($connection, $vb46e5b0cf3cd);$vdbff9f627b44=mysqli_num_rows($v63c3d385971d); if ($vdbff9f627b44==0){ header("Location: ".URL_SIMULADOR); exit;}else{ $vabef2e430cde=mysqli_fetch_array($v63c3d385971d); fa87a709184d9($vabef2e430cde['idcliente']);  $v2e0f72627cd7=mysqli_query($connection, "DELETE FROM token WHERE id='".$vabef2e430cde['id']."';");}}$v949c95331c08->PASTA_RAIZ_SIMULADOR=PASTA_RAIZ_SIMULADOR;$v949c95331c08->show();mysqli_close($connection);?>