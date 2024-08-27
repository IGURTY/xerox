<?php include_once(__DIR__."/../adm/includes/configuracoes.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

class Email {
	public function enviaEmail($email_de, $email_para, $titulo, $conteudo, $dados = '', $retorno = 1, $bcc = 0, $external = 0, $email_adicional = '', $arquivos = '') {

		$cabecalho = "MIME-Version: 1.0\n";
		$cabecalho .= "Content-Type: text/html; charset=UTF-8\n";
		$cabecalho .= "From: ".$email_de."\n";
		$cabecalho .= "Return-Path: " . $email_de . "\n";

		$html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
				<html xmlns="http://www.w3.org/1999/xhtml">
					<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
						<title>{TITULO}</title>
					</head>
					<body>
						<div style="width:770px; font-family:Arial, Helvetica, sans-serif; font-size: 13px; margin: 0px auto;">
							<table width="770" cellpadding="0" cellspacing="0"  border="0" style="width:770px; padding: 10px 0px; margin:0px; text-align:center; border: 1px solid #999;">
								<tr><td>
									<div style="color: #000;font-size: 25px;font-family: fantasy;">Cria Confecções</div>
								</td></tr>
							</table>
							<div style="padding: 10px 0px;width:700px;">
								{MENSAGEM}
							</div>
						</div>
					</body>
				</html>';

		$arrayTags = array('{TITULO}', '{MENSAGEM}');
		$arrayDados = array($titulo, $conteudo);
		$html = str_replace($arrayTags, $arrayDados, $html);

		/*$header = "From: Cria Confecções <mail@simuladorcriaconfecções.com>\r\n";
		$header.= "Reply-To: ".$email_de."\r\n";
		$header.= "MIME-Version: 1.0\r\n";
		$header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		$header.= "X-Priority: 1\r\n";

		$email = mail($email_para,$titulo,$html,$header);*/

		$mail = new PHPMailer();
		//$mail->IsSMTP();
		$mail->SMTPDebug = 0;
		$mail->Host = 'smtp.kinghost.net';
		$mail->SMTPAuth = true;
		//$mail->SMTPOptions = array( 'ssl' => array( 'verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true ) );
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;
		$mail->Username = "mail@jumptec.com.br";
		$mail->Password = 'AVISOs!2016';

		$mail->From = $mail->Username;
		$mail->FromName = 'Cria Confecções';

		if ($dados['email_cliente'] != $email_para) {
			$mail->addReplyTo($dados['email_cliente']);
		}
		else {
			$mail->addReplyTo($email_de);
		}

		$mail->AddAddress($email_para);
		if (!empty($email_adicional) && $email_adicional != $email_para) $mail->AddAddress($email_adicional);

		$mail->WordWrap = 50;

		$mail->IsHTML(true);
		$mail->CharSet = 'UTF-8';

		$mail->Subject = $titulo;
		$mail->MsgHTML($html);

		$i = 0;
		if(!empty($arquivos)) {
			foreach ($arquivos as $anexo) {
				if (isset($anexo) && $anexo['error'] == UPLOAD_ERR_OK && $i < 5)
					$mail->addStringAttachment(file_get_contents($anexo["tmp_name"]), $anexo["name"]);
				
				$i++;
			}
		}

		$email = $mail->Send();
		
		if ($email) {
			if ($retorno == 1) {
				echo 'ok';
			}
			return true;
		}
		else {
			echo 'erro: '.$mail->ErrorInfo;
			return false;
		}

	}
}
?>