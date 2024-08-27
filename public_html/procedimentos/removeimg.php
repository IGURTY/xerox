<?php
/*
Copyright (c) 2024 Jumptec
Se quiser obter a licença para esse produto, acesse https://www.jumptec.com.br
*/
 session_start();$v6e4f14b33524=$_SESSION['camada_imagem'][$_GET['i']][0]; if (!empty($v6e4f14b33524)) @@unlink('../'.$v6e4f14b33524); if ((int)$_GET['i']==0 && count($_SESSION['camada_imagem'])<=1 ) unset($_SESSION['camada_imagem'][(int)$_GET['i']]);?>