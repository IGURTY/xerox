// Posições detalhes
{POSICOES}

function ajusteConfig(){
	// config. específicas
}

$(document).ready(function (){
	var url_simulador = '{URL_SIMULADOR}';
	var nome_site = url_simulador.split('://')[1].replace('www.', '');
	if (window.self != window.top) {
		try {
			if (window.parent.location.hostname.indexOf(nome_site) == -1) {
				$('#site').remove();
				throw new Error('ERROR');
			} 
		} catch (ex) {
			$('#site').remove();
			throw new Error('ERROR');
		}
	}
	if (window.top.location.href.replace('xn--simuladorcriaconfeces-k4b63a', 'simuladorcriaconfecções').indexOf(nome_site) == -1) {
		$('#site').remove();
		throw new Error('ERROR');
	}
	if ($('.box_contatos_whatsapp').length) {
		$('#menu_edicao .atendimento, #box_visualizar .atendimento, .bt_whatsapp_flutuante, .conteudo-box_contato .atendimento').removeAttr('href');
		$('#menu_edicao .atendimento, #box_visualizar .atendimento, .bt_whatsapp_flutuante, .conteudo-box_contato .atendimento').on('click', function(e){
			e.stopPropagation();
			abrirMensagem('<div id="box_contatos_whatsapp" style="display:flex;flex-direction:column;">'+$('.box_contatos_whatsapp').html()+'</div>');
		});
	}
});