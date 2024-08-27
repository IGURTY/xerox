<?php session_start();
$pastas = array("geradas/preview/", "geradas/partes/", "geradas/temp/", "geradas/uploads/", "geradas/modelo/", "geradas/uploads/", "geradas/preview/", "geradas/simulacao/", "modelo/pdf/", "template/temp/", "js/temp/");

$path = "../../".$pastas[array_rand($pastas, 1)];
$diretorio = dir($path);

$espaco_disponivel = disk_free_space("/");
echo "Espaço disponivel: <strong>".round(($espaco_disponivel/(1000*1000*1000)),2)."</strong> Gb:<br /><br />";    

echo "Lista de Arquivos do diretório '<strong>".$path."</strong>':<br />";    
$a=0;
$e=0;
while($arquivo = $diretorio->read() ){ // && $a < 1000
	if(strstr($arquivo, '.') == true && strlen($arquivo) > 2) {
		// /preview, partes = 6 meses
		// /temp, uploads = 1 mes
		// /modelo, simulacao = 2 anos
		
		$data_m = filemtime($path.$arquivo);
		$data = date("Y-m-d H:i:s", $data_m);
		
		if(strstr($path, '/temp/') || strstr($path, '/uploads/')) {
			$tempo = 1;
		}
		else if(strstr($path, '/preview/') || strstr($path, '/partes/')) {
			$tempo = 6;
		}
		else if(strstr($path, '/modelo/') || strstr($path, '/simulacao/')) {
			$tempo = 24;
		}
		
		$data_tolerancia = date('Y-m-d H:i:s', strtotime($tempo.' months ago'));
		
		if($data < $data_tolerancia && $tempo > 0) {
			if(unlink($path.$arquivo)) {
				$cor = 'green';
				$e++;
			}
			else $cor = 'red';
		}
		else $cor = 'blue';
		
		echo "<a href='".$path.$arquivo."' style='color:".$cor."'>".$arquivo.' Data:'.date("d/m/Y H:i", $data_m)."</a><br />";
		$a++;
	}
}
echo '<p>Arquivos: '.$a.'</p>';
echo '<p>Excluidos: '.$e.'</p>';
$_SESSION['rotina_imagens'] = 1;
$diretorio->close();
?><?php session_start();
$pastas = array("preview/", "partes/", "temp/", "uploads/", "uploads/", "preview/");

$path = "../../geradas/".$pastas[array_rand($pastas, 1)];
$diretorio = dir($path);

$espaco_disponivel = disk_free_space("/");
echo "Espaço disponivel: <strong>".round(($espaco_disponivel/(1000*1000*1000)),2)."</strong> Gb:<br /><br />";    

echo "Lista de Arquivos do diretório '<strong>".$path."</strong>':<br />";    
$a=0;
$e=0;
while($arquivo = $diretorio->read() ){ // && $a < 1000
	if(strstr($arquivo, '.') == true && strlen($arquivo) > 2) {
		// /preview = 6 meses
		// /partes = 6 mes
		// /temp = 1 mes
		// /jogos = 2 anos
		// /uploads = 1 mes
		
		$data_m = filemtime($path.$arquivo);
		$data = date("Y-m-d H:i:s", $data_m);
		
		if(strstr($path, '/preview/')) {
			$tempo = 6;
		}
		else if(strstr($path, '/temp/')) {
			$tempo = 1;
		}
		else if(strstr($path, '/temp/') || strstr($path, '/partes/')) {
			$tempo = 6;
		}
		else if(strstr($path, '/jogos/')) {
			$tempo = 24;
		}
		else if(strstr($path, '/uploads/')) {
			$tempo = 1;
		}
		
		$data_tolerancia = date('Y-m-d H:i:s', strtotime($tempo.' months ago'));
		
		if($data < $data_tolerancia && $tempo > 0) {
			if(unlink($path.$arquivo)) {
				$cor = 'green';
				$e++;
			}
			else $cor = 'red';
		}
		else $cor = 'blue';
		
		echo "<a href='".$path.$arquivo."' style='color:".$cor."'>".$arquivo.' Data:'.date("d/m/Y H:i", $data_m)."</a><br />";
		$a++;
	}
}
echo '<p>Arquivos: '.$a.'</p>';
echo '<p>Excluidos: '.$e.'</p>';
$_SESSION['rotina_imagens'] = 1;
$diretorio->close();
?>