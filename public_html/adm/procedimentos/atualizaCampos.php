<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . '/../includes/configuracoes.php');   $v75221cbcd28c=f42e3f489802e($_POST['idmodalidade'], 'int');$v915cc18f4013=f42e3f489802e($_POST['tabela']); $vdf290005fab1=array(); $v9cce473e9c78=mysqli_query($connection, "SELECT rotacionar, verso FROM tipo_modalidade WHERE id=".$v75221cbcd28c);$v124650429bc9=mysqli_fetch_array($v9cce473e9c78, MYSQLI_ASSOC);$vdf290005fab1["angulos_camada"]=array($v124650429bc9); $v8d485f584bb9="SELECT item.nome, detalhes.goleiro, detalhes.idtipo_item          FROM tipo_modalidade_detalhes AS detalhes         INNER JOIN tipo_item AS item ON detalhes.idtipo_item=item.id         WHERE idtipo_modalidade=".$v75221cbcd28c." AND ativo=1";$v6a2f5e816c05=mysqli_query($connection, $v8d485f584bb9);$vdf290005fab1["itens"]=array();while ($vad7fb3a93e4a=mysqli_fetch_array($v6a2f5e816c05)){  array_push($vdf290005fab1["itens"], $vad7fb3a93e4a["idtipo_item"]);   if ($v915cc18f4013=="pacote" && $vad7fb3a93e4a["goleiro"]==1){    $ve9cb59df33f6="SELECT id FROM tipo_item WHERE nome LIKE '".$vad7fb3a93e4a["nome"]."%' AND goleiro=1";    $vb62f74e55258=mysqli_query($connection, $ve9cb59df33f6);    $vbf2588219167=mysqli_fetch_array($vb62f74e55258);    array_push($vdf290005fab1["itens"], $vbf2588219167["id"]); }} echo json_encode($vdf290005fab1); mysqli_close($connection);?>