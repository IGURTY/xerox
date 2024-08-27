<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include("../adm/includes/configuracoes.php");$v983781db82b5=f42e3f489802e($_POST['senha']);if ($v983781db82b5 !=''){$vbd875f27f623="UPDATE cliente SET senha='".md5($v983781db82b5)."' WHERE id=".$_SESSION['idCliente'];$v395eae619731=mysqli_query($connection, $vbd875f27f623);}if ($v395eae619731){header("Location: ".URL_SIMULADOR);}mysqli_close($connection);?>