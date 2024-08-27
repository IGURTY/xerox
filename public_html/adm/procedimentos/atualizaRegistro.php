<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 include(__DIR__ . '/../includes/configuracoes.php');   $v3584859062ea=f42e3f489802e($_GET['id'], 'int');$v915cc18f4013=f42e3f489802e($_GET['tabela']);$v53fdb6822289=f42e3f489802e($_GET['campo']);$v1b5e915afac8=f42e3f489802e($_GET['valor']); f7e140f4fd2ac($v915cc18f4013, $v53fdb6822289, $v1b5e915afac8, $v3584859062ea);if ($v6c7b43d251e2=mysqli_query($connection, "UPDATE ".$v915cc18f4013." SET `".$v53fdb6822289."`='".$v1b5e915afac8."' WHERE id='".$v3584859062ea."' LIMIT 1;") or die(mysqli_error($connection))){ }else{ echo 'Erro inesperado.';} mysqli_close($connection);?>