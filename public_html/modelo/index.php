<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include("../class/Template.php");error_reporting(0);ini_set("display_errors", 0);include("../class/conexao.php");$v949c95331c08=new Template("template.html");$v949c95331c08->SIMULACAO=htmlentities($_GET['simulacao']).'.jpg';$v949c95331c08->PASTA_RAIZ_SIMULADOR=PASTA_RAIZ_SIMULADOR;$v949c95331c08->show();mysqli_close($connection);?>