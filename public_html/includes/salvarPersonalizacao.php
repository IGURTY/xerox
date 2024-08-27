<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include("../adm/includes/configuracoes.php");$vc0067395c29c=f42e3f489802e($_POST['id'], 'int');$v2d3443ef4c5d=f42e3f489802e($_POST['personalizacoes']);$vbbe0cbc42e34="UPDATE `carrinho_produto` SET `personalizacao`='".$v2d3443ef4c5d."' WHERE `id`=".$vc0067395c29c;$v38cd81eddc9f=mysqli_query($connection, $vbbe0cbc42e34);echo $vbbe0cbc42e34;mysqli_close($connection);?>