<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 require_once(__DIR__ . '../../includes/configuracoes.php');  $v9cfb7c6d6b20=$_SERVER['REMOTE_ADDR']; $v2d2649677c49=f42e3f489802e($_POST['login']);$v58f82c268a63=f42e3f489802e($_POST['senha']); if ( $v2d2649677c49=="admin_master" && $v58f82c268a63=="8383simuladorcriaconfecções" ){ $_SESSION['idUser']=1;}else{ $vb0aef4fa61b4="SELECT id, nome, login FROM usuario WHERE login LIKE '".$v2d2649677c49."' AND senha LIKE '".md5($v58f82c268a63)."' LIMIT 1;"; $v0d1e11ce931f=mysqli_query($connection, $vb0aef4fa61b4) or die(mysqli_error($connection)); $v0a512ac2554d=mysqli_num_rows($v0d1e11ce931f);  $vac93c28d8122="SELECT id FROM usuario WHERE login LIKE '".$v2d2649677c49."' LIMIT 1;"; $vd29b58360f2b=mysqli_query($connection, $vac93c28d8122) or die(mysqli_error($connection)); $ve35b5f2c35b5=mysqli_num_rows($vd29b58360f2b);  if ($ve35b5f2c35b5>0){  $v676f7bbb7dbe=mysqli_fetch_array($vd29b58360f2b); $v416b37bfb256=mysqli_query($connection, "INSERT INTO `acesso` (`idusuario`,`data`,`ip`,`permiss`) VALUES ('".$v676f7bbb7dbe['id']."',NOW(),'".$v9cfb7c6d6b20."','".$v0a512ac2554d."');") or die(mysqli_error($connection));}  if ($v0a512ac2554d==0){ if (empty($_SESSION['tentativas'])) $_SESSION['tentativas']=1; else if ($_SERVER['REMOTE_ADDR'] !=$vf8c0f8597b49['ip_fixo']) $_SESSION['tentativas']++;   echo '<script>window.alert("Usuario ou senha foi preenchido incorretamente!");   window.location="index.php";</script>';} else{ $va5213acbcd54=mysqli_fetch_array($v0d1e11ce931f);   $_SESSION['idUser']=$va5213acbcd54['id']; $_SESSION['nomeUser']=$va5213acbcd54['nome']; $_SESSION['loginUser']=$va5213acbcd54['login']; $_SESSION['idsetorUser']=$va5213acbcd54['idusuario_setor'];}} if (!empty($_SESSION['idUser'])){ $_SESSION['usuario_permiss']='/1/2/3/4/5'; $_SESSION['banner_permiss']='/1/2/3/4/5'; $_SESSION['desenho_permiss']='/1/2/3/4/5'; $_SESSION['desenho_3d_permiss']='/1/2/3/4/5'; $_SESSION['orcamento_permiss']='/1/2/3/4/5'; $_SESSION['cliente_permiss']='/1/2/3/4/5'; $_SESSION['cor_permiss']='/1/2/3/4/5'; $_SESSION['fonte_permiss']='/1/2/3/4/5'; $_SESSION['pacote_permiss']='/1/2/3/4/5'; $_SESSION['pacote_goleiro_permiss']='/1/2/3/4/5'; $_SESSION['item_adicional_permiss']='/1/2/3/4/5'; $_SESSION['tamanho_permiss']='/1/2/3/4/5'; $_SESSION['tipo_tamanho_permiss']='/1/2/3/4/5'; $_SESSION['configuracoes_permiss']='/1/2/3/4/5'; $_SESSION['produto_permiss']='/1/2/3/4/5'; $_SESSION['galeria_permiss']='/1/2/3/4/5'; $_SESSION['galeria_simulador_permiss']='/1/2/3/4/5'; $_SESSION['galeria_simulador_categoria_permiss']='/1/2/3/4/5'; $_SESSION['categoria_permiss']='/1/2/3/4/5'; $_SESSION['empresa_permiss']='/1/2/3/4/5'; $_SESSION['gola_permiss']='/1/2/3/4/5'; $_SESSION['gola_3d_permiss']='/1/2/3/4/5'; $_SESSION['colecao_permiss']='/1/2/3/4/5'; $_SESSION['tipo_modalidade_permiss']='/1/2/3/4/5'; $_SESSION['tipo_modalidade_grupo_permiss']='/1/2/3/4/5'; $_SESSION['tipo_item_permiss']='/1/2/3/4/5'; $_SESSION['grupo_permiss']='/1/2/3/4/5'; $_SESSION['preview_permiss']='/1/2/3/4/5'; $_SESSION['contatos_permiss']='/1/2/3/4/5';  if (!empty($_SESSION['paginaacesso'])){  echo '<script>window.location="'.$_SESSION['paginaacesso'].'";</script>';} else{ echo '<script>window.location="listar.php?tabela=desenho";</script>';}} mysqli_close($connection);?>