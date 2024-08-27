<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . '/../includes/configuracoes.php');   $v75221cbcd28c=f42e3f489802e($_GET['modal'], 'int'); $vbc664d472cf9="SELECT * FROM colecao_detalhes WHERE idtipo_modalidade=".$v75221cbcd28c;$vc7c0ca8f9d1c=mysqli_query($connection, $vbc664d472cf9);$v0b5f9075e391=mysqli_num_fields($vc7c0ca8f9d1c);$vdc378e0881c1=array();while ($v4c409f7f4827=mysqli_fetch_array($vc7c0ca8f9d1c, MYSQLI_ASSOC)){  foreach ($v4c409f7f4827 as $vcf260d4fb620=>$v7d0596c36891){    if (strstr($vcf260d4fb620,'mostrar_')==true && $v4c409f7f4827[$vcf260d4fb620]=="1"){      array_push($vdc378e0881c1, $vcf260d4fb620);   } }} echo json_encode($vdc378e0881c1); mysqli_close($connection);?>