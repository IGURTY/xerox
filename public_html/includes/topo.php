<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include_once("adm/includes/configuracoes.php");function fa439e3919fa9($v5e17ad96aa2d){ global $v949c95331c08; global $connection;  $v961381852ec3=mysqli_query($connection, $v5e17ad96aa2d) or die("erro na consulta sql=>".$v5e17ad96aa2d); $vf8f440f53e2a=mysqli_num_rows($v961381852ec3); if ($vf8f440f53e2a>0){ while ($vdf80ba670807=mysqli_fetch_array($v961381852ec3)){ $v949c95331c08->NOME_LISTA=$vdf80ba670807['nome'];  $v949c95331c08->FOTO_LISTA=$vdf80ba670807['foto'];  $vf43e41595dd8=$vdf80ba670807['modelo_simulador'];    if ($vf43e41595dd8<>0){  $v949c95331c08->ACT_FORM='salvar-simulador';  $v949c95331c08->IDPRODUTO_LISTA=$vdf80ba670807['id'];  $v949c95331c08->QTD=$vdf80ba670807['quantidade_minima'];  $v949c95331c08->ESPORTE=$vdf80ba670807['categoria'];     $v949c95331c08->URL_LISTA=URL_SIMULADOR."/".f920e1658fbfc($vdf80ba670807['categoria'])."?inicial=".$vf43e41595dd8;  $v949c95331c08->LINK_MODELO=URL_SIMULADOR."/".f920e1658fbfc($vdf80ba670807['categoria'])."?inicial=".$vf43e41595dd8;  $v949c95331c08->MODELO=$vf43e41595dd8;  $v949c95331c08->block("BLOCK_EDITAR_PRODUTO");  $v949c95331c08->block("BLOCK_COMPRA_NA_LISTA"); }  else{  if ($vdf80ba670807['sub_qtd']<2){   $v949c95331c08->ACT_FORM='salvar';   $v949c95331c08->IDPRODUTO_LISTA=$vdf80ba670807['id'];   $v949c95331c08->QTD=$vdf80ba670807['quantidade_minima'];   $v949c95331c08->ESPORTE='';   $v949c95331c08->MODELO='';   $v949c95331c08->block("BLOCK_COMPRA_NA_LISTA"); }    $v949c95331c08->URL_LISTA=PASTA_RAIZ_SITE.'/'.f920e1658fbfc($vdf80ba670807['grupo']).'/'.f920e1658fbfc($vdf80ba670807['categoria']).'/'.f920e1658fbfc($vdf80ba670807['nome']).'/?id='.$vdf80ba670807['id'];  $v949c95331c08->block('BLOCK_DETALHE_PRODUTO'); }    $v949c95331c08->block("BLOCK_PRODUTOS");}   $v949c95331c08->block('BLOCK_LISTA_PRODUTOS');}} if ($_SESSION['idCarrinho']>0){ $v8d485f584bb9="SELECT SUM(quantidade) AS totalitens FROM carrinho_produto    WHERE idcarrinho=".$_SESSION['idCarrinho']." AND adicional=0;"; $v6a2f5e816c05=mysqli_query($connection, $v8d485f584bb9); $vad7fb3a93e4a=mysqli_fetch_array($v6a2f5e816c05);} $v949c95331c08->ITENS=(int)$vad7fb3a93e4a['totalitens']; $vc0c5ca32d0fc=trim($ve3e11f69503a['tags_head']);if (!empty($vc0c5ca32d0fc)){ $v949c95331c08->TAGS_HEAD=$ve3e11f69503a['tags_head']; $v949c95331c08->block('BLOCK_TAGS_HEAD');}$v893e5b1fbec9=trim($ve3e11f69503a['tags_body']);if (!empty($v893e5b1fbec9)){ $v949c95331c08->TAGS_BODY=$ve3e11f69503a['tags_body']; $v949c95331c08->block('BLOCK_TAGS_BODY');}  $v949c95331c08->PASTA_RAIZ_SIMULADOR=PASTA_RAIZ_SIMULADOR;$v949c95331c08->PASTA_RAIZ_SITE=PASTA_RAIZ_SITE;$vebf2cbc420eb=explode('@', $ve3e11f69503a['email_contato']);$v949c95331c08->EMAIL_NOME=$vebf2cbc420eb[0];$va88d482883eb=explode('.', $vebf2cbc420eb[1], 2);$v949c95331c08->EMAIL_DOMAIN=$va88d482883eb[0];$v949c95331c08->EMAIL_TLD=$va88d482883eb[1];$v949c95331c08->ENDERECO=$ve3e11f69503a['endereco'];$v949c95331c08->TELEFONE=$ve3e11f69503a['telefone'];$v949c95331c08->CELULAR=$ve3e11f69503a['whatsapp'];$v4f8f05d7c924=array('-','.','(',')',' ');$v949c95331c08->NUM_TELEFONE=trim($ve3e11f69503a['codigo_ddi']);$v949c95331c08->NUM_TELEFONE .=str_replace($v4f8f05d7c924,"",$ve3e11f69503a['telefone']);$v949c95331c08->NUM_WHATSAPP=trim($ve3e11f69503a['codigo_ddi']);$v949c95331c08->NUM_WHATSAPP .=str_replace($v4f8f05d7c924,"",$ve3e11f69503a['whatsapp']);$v949c95331c08->URL_FACEBOOK=$ve3e11f69503a['url_facebook'];$v949c95331c08->URL_INSTAGRAM=$ve3e11f69503a['url_instagram'];?>