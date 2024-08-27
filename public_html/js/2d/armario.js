// ARMÁRIO
function verificarCampo(){
	var campoNome = $('.swal-content').contents().find('#inpt-nome_simulacao').val();
	if (campoNome.length === 0 || !campoNome.trim())
		$('#nome_simulacao .vazio').css({'opacity': '1'});
	else
		$('#nome_simulacao .vazio').css({'opacity': '0'});
}
function salvarNome(){
	nomeSimulacao = $('.swal-content').contents().find('#inpt-nome_simulacao').val();

	if (!nomeSimulacao.length === 0 || nomeSimulacao.trim()) {
		swal.close();
		$('#site').css('pointer-events','none');

		if (logado == 1) {
			salvaSimulacao(nomeSimulacao);
		} 
		else {
			salvando_simulacao = 1;
			$('#bt_login').click();
		}
	}
	else {
		$('#nome_simulacao .vazio').css({'opacity': '1'});
		return false;
	}
}
function salvaSimulacao(nome){
	$('#site').css('pointer-events','none');
	$('#aguarde').show();
	var arrayString = ArrayToString(arrayStatus[iStatus]);
	var id_simu = 0;

	$.post('{PASTA_RAIZ_SIMULADOR}/gerar_preview.php', {
		'img1':$('#canvas')[0].toDataURL('image/png'), 'img2':$('#canvas_verso')[0].toDataURL('image/png'), 'img3':$('#canvas_direita')[0].toDataURL('image/png'), 'img4':$('#canvas_esquerda')[0].toDataURL('image/png'), 
		'rotacionar':modelo_rotacionar, 'esporte':esporte, 'comprar':1, 'armario':1, 'modelagem':'2d'
	}, function(data){
		if (data != null) {
			$.post('{PASTA_RAIZ_SIMULADOR}/includes/gravarSimulacao.php', { preview:data, info:arrayString, modalidade:esporte_dir, nome:nome, id:id_simu }, function(retorno){
				salvando_simulacao = 0;

				if (retorno != 'erro')
					window.location.href = '{PASTA_RAIZ_SIMULADOR}/'+esporte+'?simulacao='+retorno;
				else
					mensagem('','Houve um erro. Tente novamente!','info');
			});
		}
	});
}
function abrirForm(f){
	if (!f == null || !f == '') {
		$('#box_login form').hide();
		$('#formulario_'+f).show();
		$('#abrir-box_login').click();
	}	
}
function trocarForm(){
	$('#formulario_login, #formulario_cadastro').toggle();	
}
function recuperarSenha(){
	swal.close();
	mensagem('', 'Digite seu e-mail', 'input', function(r){
		if (r) {
			$.post('{PASTA_RAIZ_SIMULADOR}/includes/esqueceuSenha.php', {email: r}, function(data) {
				if (data == 'ok')
					mensagem('', 'Foi enviado um email para o email digitado.', 'success');
				else if (data == 'inexistente')
					mensagem('', 'O email informado não existe em nossa base de dados.', 'error');
				else
					mensagem('', 'Ocorreu um erro inesperado.\nTente mais tarde.', 'error');
			});
		}
	});
}
function clickExcluir(id){
	$('#box_excluir #excluir').attr('onclick','excluirSimulacao('+id+');');
	var span = document.createElement('div');
	span.innerHTML = '<div id="box_excluir" style="width:'+parseInt($(document).width()*0.35)+'px">'+$('#box_excluir').html()+'</div>';
	mensagem('',span,'html');
}
function excluirSimulacao(id){
	swal.close();
	if (typeof id != 'undefined') {
		$.post('{PASTA_RAIZ_SIMULADOR}/includes/excluirSimulacao.php', { id_simulacao: id}, function(retorno) {
			if (retorno == 'ok') {
				var url_atual = window.location.href;
				nova_url = url_atual.split('?');

				if ($('#box_armario .armario .opcao').not('[rel="'+id+'"]').length > 0) {
					var novo_id = $('#box_armario .armario .opcao').not('[rel="'+id+'"]').first().attr('rel');
					window.location.href = nova_url[0]+'?simulacao='+novo_id;
				}
				else {
					window.location.href = nova_url[0];
				}
			}
			else {
				mensagem('', 'Houve um erro ao excluir.\nTente novamente!', 'error');
			}
		});
	}
}
function trocarImagem(x){
	if (typeof x != 'undefined') {
		$('#armario #preview_ativo').css('background-image',x);
	}
	else {
		if (typeof preview_simulacao != 'undefined')
			$('#armario #preview_ativo').css('background-image',preview_simulacao);
		else
			$('#armario #preview_ativo').css('background-image','');
	}
}
function carregaSimulacao(id){
	$('#site').css('pointer-events','none');
	$('#aguarde').show();

	var url = window.location.href;
	if (url.indexOf('?') >= 0) {
		retorno = url.split('?');
		var url_atual = retorno[0];
	}
	else {
		var url_atual = url;
	}

	if (url_atual.indexOf('{ESPORTE_PATH}') == -1)
		url_atual += '{ESPORTE_PATH}/';

	window.location.href = (typeof id != 'undefined') ? url_atual+'?simulacao='+id : url_atual;
}
function novaSimulacao(){
	var url = window.location.href;
	if (url.indexOf('?') >= 0) {
		var retorno = url.split('?');
		var url_atual = retorno[0];
	}
	else {
		var url_atual = url;
	}

	window.location.href = url_atual;
}

// LOGIN
function efetuaLogin(){
	var email_cliente = $('.swal-content').contents().find('#membro-email').val();
	var senha_cliente = $('.swal-content').contents().find('#membro-senha').val();

	if (email_cliente == '' || senha_cliente == '') {
		$('#formulario_login .incompleto').show();
	}
	else {		
		$('#formulario_login div[class^="erro_"], #formulario_login .incompleto').hide();
		$('#formulario_login .bt-submit').attr('value','AGUARDE...');

		$.post('{PASTA_RAIZ_SIMULADOR}/includes/efetuaLogin.php', { email: email_cliente, senha: senha_cliente }, function(data) {
			if (data == 'ok') {
				swal.close();
				$('#site').css('pointer-events','none');
				$('#aguarde').show();

				if (salvando_simulacao > 0) {
					logado = 1;
					salvaSimulacao(nomeSimulacao);
				}
				else {
					window.location.href = '{PASTA_RAIZ_SIMULADOR}/'+esporte;	
				}	
			} 
			else {
				$('#formulario_login .bt-submit').attr('value','LOGIN');

				if (data == 'erro_email') 
					$('.erro_email').show();
				else if (data == 'erro_senha')
					$('.erro_senha').show();
			}
		});
	}

	return false;
}
function registrarMembro(){
	var nome_cliente = $('.swal-content').contents().find('#registro-nome').val();
	var telefone_cliente = $('.swal-content').contents().find('#registro-telefone').val();
	var email_cliente = $('.swal-content').contents().find('#registro-email').val();
	var senha_cliente = $('.swal-content').contents().find('#registro-senha').val();

	if (nome_cliente == '' || telefone_cliente == '' || email_cliente == '' || senha_cliente == '') {
		$('#formulario_cadastro .incompleto').show();
	}
	else {
		$('#formulario_cadastro .email_existente, #formulario_cadastro .incompleto, #formulario_cadastro .erro').hide();
		$('#formulario_cadastro .bt-submit').attr('value','AGUARDE...');

		$.post('{PASTA_RAIZ_SIMULADOR}/includes/registrar.php', { nome: nome_cliente, telefone: telefone_cliente, email: email_cliente, senha: senha_cliente }, function(data) {
			if (data == 'ok') {
				swal.close();
				if (salvando_simulacao > 0) {
					logado = 1;
					salvaSimulacao(nomeSimulacao);
				}
				else {
					location.reload();
				}	
			}
			else {
				$('#formulario_cadastro .bt-submit').attr('value','CRIAR CONTA');

				if (data == 'email_existente') 
					$('.email_existente').show();
				else if (data == 'erro')
					$('.erro').show();
			}
		});
	}	

	return false;
}
function esqueceuSenha(){
	mensagem('', 'Digite seu e-mail', 'input', function(r) {
		if (r) {
			$.post('{PASTA_RAIZ_SIMULADOR}/includes/esqueceuSenha.php', {email: r}, function(data) {
				if (data == 'ok')
					mensagem('', 'Foi enviado um email para o email digitado.', 'success');
				else if (data == 'inexistente')
					mensagem('', 'O email informado não existe em nossa base de dados.', 'error');
				else
					mensagem('', 'Ocorreu um erro inesperado.\nTente mais tarde.', 'error');
			});
		}
	});
}
function atualizaCadastro(){
	var nome = $('.swal-content').contents().find('#nomeCliente').val();
	var telefone = $('.swal-content').contents().find('#telefoneCliente').val();
	var cidade = $('.swal-content').contents().find('#cidadeCliente').val();
	var estado = $('.swal-content').contents().find('#estadoCliente').val();

	if (nome != '' || telefone != '' || cidade != '' || estado != '') {
		$.post('{PASTA_RAIZ_SIMULADOR}/includes/atualizarCadastro.php', { acao: 'atualizar_dados', nome: nome, telefone: telefone, cidade: cidade, estado: estado }, function(retorno) {
			if (retorno == 'ok')
				location.reload();	
			else if (retorno == 'erro')
				$('.erro').show();
		});
	}
		
	return false;
} 
function trocaEmail(){
	var senha = $('.swal-content').contents().find('#senhaConfirmacao').val();
	var novo_email = $('.swal-content').contents().find('#emailNovo').val();
	
	if ((senha.length === 0 || !senha.trim()) && (novo_email.length === 0 || !novo_email.trim())) {
		$('.erro').html('Preencha corretamente os campos').show();
	}
	else {
		$.post('{PASTA_RAIZ_SIMULADOR}/includes/atualizarCadastro.php', { acao: 'atualizar_email', senha_atual: senha, novo_email: novo_email }, function(retorno) {
			if (retorno == 'ok') {
				$('.erro').html('');
				swal.close();
				location.reload();	
			}
			else if (retorno == 'erro') {
				$('.erro').html('Senha incorreta').show();
			}
		});
	}
		
	return false;
}
function trocaSenha(){
	var senha_atual = $('.swal-content').contents().find('#senhaAtual').val();
	var nova_senha = $('.swal-content').contents().find('#senhaNova').val();
	var nova_senha_confirmacao = $('.swal-content').contents().find('#senhaNova-2').val();
	
	if ((senha_atual.length === 0 || !senha_atual.trim()) || (nova_senha.length === 0 || !nova_senha.trim())) {
		$('.erro').html('Preencha corretamente os campos').show();
	}
	else if (nova_senha != nova_senha_confirmacao) {
		$('.erro').html('Senhas não batem').show();
	}
	else {
		$.post('{PASTA_RAIZ_SIMULADOR}/includes/atualizarCadastro.php', { acao: 'atualizar_senha', senha_atual: senha_atual, nova_senha: nova_senha }, function(retorno) {
			if (retorno == 'ok') {
				$('.erro').html('');
				swal.close();	
				mensagem('', 'Senha alterado com sucesso!', 'success');
			}
			else if (retorno == 'erro') {
				$('.erro').html('Senha incorreta').show();
				$('#senhaAtual').focus();
			}
		});
	}
		
	return false;
}
function alterarEmail(){
	swal.close();
	var span = document.createElement('div');
	span.innerHTML = '<div id="painel-alterar_email" style="width:'+parseInt($(document).width()*0.50)+'px">'+$('#painel-alterar_email').html()+'</div>';
	mensagem('',span,'html');
}
function alterarSenha(){
	swal.close();
	var span = document.createElement('div');
	span.innerHTML = '<div id="painel-alterar_senha" style="width:'+parseInt($(document).width()*0.50)+'px">'+$('#painel-alterar_senha').html()+'</div>';
	mensagem('',span,'html');
}
function fecharPainel(){
	swal.close();
}
function logout(){
	window.location.href = '{PASTA_RAIZ_SIMULADOR}/includes/logout.php';
}

$(document).ready(function (){
	$('#bt_login, #login_mobile').on('click', function(e){
		e.preventDefault();
		abrirForm('login');
	});
	$(document).on('click', '#bt_sair', function(e){
		e.preventDefault();
		logout();
	});
	$('#nome_membro span, #nome_membro svg').on('click', function(e){
		e.preventDefault();
		var span = document.createElement('div');
		span.innerHTML = '<div id="painel_cliente" style="width:'+parseInt($(document).width()*0.50)+'px">'+$('#painel_cliente').html()+'</div>';
		mensagem('',span,'html');	
	});

	$('.bt_nova-simulacao').on('click', function(e){
		e.preventDefault();
		novaSimulacao();
	});
	$('.bt_armario').on('click', function(e){
		e.stopPropagation();
		abrirMensagem('<div id="box_armario">'+$('#box_armario').html()+'</div>');
	});
	$(document).on('click', '.excluir_simulacao', function(e){
		e.stopPropagation();
		clickExcluir($(this).parent().attr('rel'));
	});
	$('#conta_mobile').on('click', function(e){
		e.stopPropagation();
		abrirMensagem('<div id=painel_cliente style=max-width:'+parseInt($(document).width()*0.95)+'px>'+$('#painel_cliente').html()+'</div>');
	});
	$('#logout').on('click', function(e){
		e.stopPropagation();
		logout();
	});

	$('.salvar-armario').on('click', function(e){
		e.preventDefault();
		$('#site').css('pointer-events','none');

		if ($('.cor_camada[rel="pele"]').length) {
			var cor_pele = $('.paleta_cores[rel="cor_pele"] li[class$="ativo"]').attr('id-cor');
			preencheAtributo('superior', 'cor_pele', cor_pele, 0);
		}

		$('#aguarde h2').html('Salvando...');
		$('#aguarde img').hide();

		desabilitaFerramentasDrag();
		$('#bt_salvar').removeClass('ativo');
		$('.menu_oculto').hide();

		$('#aguarde').show('fast', function() {
			setTimeout(function(){
				salvarImagem(0, 1, 0);
			},500);
		});
	});

	var isMobile = 'ontouchstart' in window;
	if ( isMobile == true ) {
		$(document).on('click', '#armario .box_imagem', function(e){
			carregaSimulacao($(this).parent().attr('rel'));
		});
	}
	else {
		$(document).on('click', '#armario .opcao', function(e){
			carregaSimulacao($(this).attr('rel'));
		});
	}
});