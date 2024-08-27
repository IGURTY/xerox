<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . "/adm/includes/configuracoes.php");  if ($ve3e11f69503a['idtipo_status_simulador']==1){ include("class/Template.php"); $v949c95331c08=new Template("template/construcao.html"); $v949c95331c08->show();} else if ($ve3e11f69503a['idtipo_status_simulador']==2){ include("class/Template.php"); $v949c95331c08=new Template("template/manutencao.html"); $v949c95331c08->show();} else if ($ve3e11f69503a['idtipo_status_simulador']==3){ include("home.php");} else{ include("class/Template.php"); $v949c95331c08=new Template("template/indisponivel.html"); $v949c95331c08->show();}mysqli_close($connection);?>