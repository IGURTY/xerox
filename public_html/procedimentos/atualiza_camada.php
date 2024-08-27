<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 session_start(); $vf43bacde5d42=(int)$_GET['de'];$v49db241c0add=(int)$_GET['para'];      if($_GET['fim']>0){ $_SESSION['clone_camada_imagem'][$v49db241c0add]=$_SESSION['camada_imagem'][$vf43bacde5d42];  print_r($_SESSION['clone_camada_imagem']);  if($_GET['fim']==1){ echo 'finalizou'; unset($_SESSION['camada_imagem']); $_SESSION['camada_imagem']=$_SESSION['clone_camada_imagem']; unset($_SESSION['clone_camada_imagem']);}}?>