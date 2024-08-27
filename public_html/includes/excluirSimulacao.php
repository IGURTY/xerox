<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include("../adm/includes/configuracoes.php");$vd461a9359110=f42e3f489802e($_POST['id_simulacao'], 'int');$vb801984e4433="DELETE FROM armario_simulacao WHERE id=".$vd461a9359110." AND idarmario=".$_SESSION['idArmario'];$vc2dcb90139eb=mysqli_query($connection, $vb801984e4433);if ($vc2dcb90139eb){echo "ok";}else{echo "erro";}mysqli_close($connection);?>