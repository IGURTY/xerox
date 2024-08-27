<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . '/../includes/configuracoes.php'); $v4baa43b5672b='../../js/temp';$vd411edc054df='../../template/temp/';f551d119253d0($v4baa43b5672b);f551d119253d0($vd411edc054df);function f551d119253d0($v4baa43b5672b){  if(is_dir($v4baa43b5672b)){    $va279e72759b5=glob( $v4baa43b5672b . '*', GLOB_MARK );     foreach( $va279e72759b5 as $v09a33463761e ){      f551d119253d0( $v09a33463761e );   } }elseif(is_file($v4baa43b5672b)){    unlink( $v4baa43b5672b ); }} $v09d26bfc4b05=mysqli_query($connection, "UPDATE configuracoes SET versao=versao + 1;"); ?>