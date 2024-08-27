<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include("../adm/includes/configuracoes.php");setcookie("carrinho", "", time()-3600*24*10,'/',$_SERVER['HTTP_HOST']);session_destroy();mysqli_close($connection);if (PASTA_RAIZ_SIMULADOR !="")   header("Location: ".PASTA_RAIZ_SIMULADOR);else   header("Location: /");?>