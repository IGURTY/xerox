function iniSimulador(){
	$('#aguarde').hide();
	$('#menu-central, #meio_conteudo, #nav-modalidades, #linha_modelo_superior, #linha_modelo_inferior, #lista-lados__manequim').css('opacity', 1);
	$('.setas_modelos').animate({'opacity': 1}, 500);

	if (colecao == 1)
		$('.edicao_cores .cabecalho').append('<button id="abrirColecoes" onClick="popupColecoes()">Coleções</button>');

	if ($(window).width() >= 1024)
		$('#lista_edicao li').first().click();

	if (url_inicial.indexOf('?simulacao=') != -1 && logado == 0)
		$('#bt_login').click();
}
function ajusteSimulador(){
	if (peca_superior != 'camisa' && modelo_conjunto == 0) {
		$('.edicao_modelos .cabecalho svg').remove();
		$.get('{PASTA_RAIZ_SIMULADOR}/imagens/tipo_modalidade/'+modalidades[esporte_dir].svg+versao_simu, function(data){
			var icone_modalidade = document.importNode(data.documentElement,true);
			$('.edicao_modelos .cabecalho').prepend('<figure class="ico-borda"></figure>');
			$('.edicao_modelos .cabecalho .ico-borda').append(icone_modalidade);
			$('.edicao_modelos .cabecalho .titulo').html('Modelos');
			$('#lista_edicao .opcao[rel="edicao_modelos"] span').html('Modelos');
		});
	}

	($('.cores_superior .box_cores-linha').length) 
		? $('.cores_superior').css('padding-bottom', '30px') 
		: $('.cores_superior .titulo:contains("Detalhes")').remove();

	($('.cores_inferior .box_cores-linha').length)
		? $('.cores_inferior').css('padding-bottom', '30px')
		: $('.cores_inferior .titulo:contains("Detalhes")').remove();

	if (num_modalidades > 5)
		$('.modalidades .seta_direita').removeClass('inativo');

	if (mostrar_pecas == 1) {
		$('#opcoes-modelo_conjunto').remove();
		$('.ipt-checkbox[for="ipt-sincronizar"] span b').html('Sincronizar Peças');

		if (total_modelo['superior'] > 1) {
			$('.edicao_modelos .sub-menu_edicao .opcao_edicao[rel="superior"]').click();

			if (total_modelo['superior'] == total_modelo['inferior'])
				$('.ipt-checkbox[for="ipt-sincronizar"]').click();
		}
	}

	if (mostrar_textos == 1) {
		var ico_texto = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.6 55.7" enable-background="new 0 0 53.6 55.7" xml:space="preserve" height="55.7px">' +
							'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
							'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
							'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
							'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
							'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
							'C1.3,36.8,1,36.5,0.7,36.5"/>' +
							'<text x="50%" y="60%" font-size="55px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
						'</svg>';
		$('.opcao[rel="edicao_texto"] .ico-lista_edicao').html(ico_texto);
		var svg_texto = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
							'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
							'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
							'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
							'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
							'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
							'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
							'C1.3,36.8,1,36.5,0.7,36.5" style="transform: scale(0.55) translate(20px, 18px);"/>' +
							'<text x="50%" y="55%" font-size="25px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
						'</svg>';
		$('#box_edicao .edicao_texto .cabecalho svg').remove();
		$('#box_edicao .edicao_texto .cabecalho').prepend(svg_texto);
	}
}

function detalhesUniforme(){
	var mostrar_escudo = 1;

	<!-- BEGIN BLOCK_REMOVER_SUPERIOR -->
	detalhes_removidos[peca_superior].push('{ANCORA_DETALHE}');

	if ('{REF_DETALHE}' == 'nome' && mostrar_textos == 1) {
		$('.edicao_texto .texto_superior, .edicao_texto .texto_inferior').remove();
		// FERRAMENTA TEXTO
		$('.opcao[rel="edicao_texto"]').attr('alt', 'Textos').attr('title', 'Textos');
		$('.opcao[rel="edicao_texto"] span, .edicao_texto .cabecalho .titulo').html('Textos');
		$('.edicao_texto #info-texto').hide();
		primeira_fonte = $('.menu_fontes li').eq(0).addClass('ativo').attr('data-nome'); 
		$('.fonte_ativa').html(primeira_fonte);
		$('#fonte').val(primeira_fonte);

		$('.edicao_texto .conteudo_edicao:not([rel="ferramenta_texto"])').remove();
		$('.conteudo_edicao[rel="ferramenta_texto"]').show();
	}
	else {
		$('.engloba_'+peca_superior+' .{ANCORA_DETALHE}').remove();
		$('.ipt-checkbox[rel="{ANCORA_DETALHE}_superior"]').remove();

		if ('{ANCORA_DETALHE}' == 'escudo' || '{ANCORA_DETALHE}' == 'logo')
			$('*[rel="escudo_superior"] .icone-{ANCORA_DETALHE}').remove();

		$('.opcao_pers[rel="superior-{ANCORA_DETALHE}-com"]').remove();
		$('.opcao_pers[rel="superior-{ANCORA_DETALHE}-sem"]').remove();

		if ('{ANCORA_DETALHE}' == 'raglan')
			$('.engloba_'+peca_superior+' .manga_raglan').remove();

		if ('{REF_DETALHE}' == 'nome')
			$('*[data-ancora="{ANCORA_DETALHE}"]').remove();

		if ('{ANCORA_DETALHE}' == 'patrocinio')
			$('.engloba_'+peca_superior+' g[class^="{ANCORA_DETALHE}_"]').remove();
	}
	<!-- END BLOCK_REMOVER_SUPERIOR -->

	<!-- BEGIN BLOCK_REMOVER_INFERIOR -->
	detalhes_removidos[peca_inferior].push('{ANCORA_DETALHE}');

	$('.engloba_'+peca_inferior+' .{ANCORA_DETALHE}').remove();
	$('.ipt-checkbox[rel="{ANCORA_DETALHE}_inferior"]').remove();

	if ('{ANCORA_DETALHE}' == 'escudo' || '{ANCORA_DETALHE}' == 'logo')
		$('*[rel="escudo_inferior"] .icone-{ANCORA_DETALHE}').remove();

	if ('{ANCORA_DETALHE}' == 'numero_frente') 
		$('#sub-menu_edicao .opcao_edicao[rel="texto_inferior"]').remove();
	else 
		$('#sub-menu_edicao .opcao_edicao[rel="{REF_DETALHE}_inferior"]').remove();

	$('*[data-ancora="{ANCORA_DETALHE}_inferior"]').remove();

	if ('{ANCORA_DETALHE}' == 'numero_verso') {
		if ($('*[data-ancora^="numero"]').length == 0) {
			if ($('*[data-ancora^="nome"]').length == 0) 
				$('#lista_edicao .opcao[rel="edicao_texto"]').remove();
			else 
				$('.edicao_texto .titulo .destaque').html('Nome > ');
		}
	}

	if ('{REF_DETALHE}' == 'selo') {
		if ($('*[data-ancora^="patrocinio"]').length == 0)
			$('#lista_edicao .opcao[rel="edicao_selos"]').remove();
		else if ($('*[data-ancora="patrocinio_inferior"]').length == 0)
			$('#sub-menu_edicao .opcao_edicao[rel="selos_inferior"]').remove();
	}

	if ('{ANCORA_DETALHE}' == 'escudo' && $('.engloba_'+peca_superior+' .{ANCORA_DETALHE}').length == 0)
		mostrar_escudo = 0;
	<!-- END BLOCK_REMOVER_INFERIOR -->

	<!-- BEGIN BLOCK_REMOVER_ACESSORIO -->
	$('.engloba_'+peca_acessorio+' .{REF_DETALHE}').remove();
	$('*[data-ancora="{ANCORA_DETALHE}_acessorio"]').remove();
	<!-- END BLOCK_REMOVER_ACESSORIO -->

	<!-- BEGIN BLOCK_COR_DETALHE_SUPERIOR -->
	switch ('{DETALHE}') {
		case 'Ilhoses':
			var nome_detalhe = 'Ilhóses';
		 	break;
		case 'Cordao':
			var nome_detalhe = 'Cordão';
			break;
		case 'Alca Mao':
			var nome_detalhe = 'Alça Mão';
			break;
		case 'Alca Fixa':
			var nome_detalhe = 'Alça Fixa';
			break;
		case 'Alca Ombro':
			var nome_detalhe = 'Alça Ombro';
			break;
		case 'Alca':
			var nome_detalhe = 'Alça';
			break;
		case 'Laco':
			var nome_detalhe = 'Laço';
			break;
		case 'Elastico':
			var nome_detalhe = 'Elástico';
			break;
		case 'Cos':
			var nome_detalhe = 'Cós';
			break;
		default:
			var nome_detalhe =  '{DETALHE}';
	}

	arrayDetalhes[peca_superior].push('{ANCORA_DETALHE}');
	
	var detalhe =   '<div class="box_cores-linha" id="box_{ANCORA_DETALHE}" rel="{ANCORA_DETALHE}">' +
						'<div class="lista_camadas" rel="cor_{ANCORA_DETALHE}" data-peca="'+peca_superior+'">' +
							'<div class="cor_camada" rel="{ANCORA_DETALHE}">' +
								'<div class="cor_atual"></div>' +
								'<span class="numero_camada"><span>Cor </span>'+nome_detalhe+'</span>'+
							'</div>' +
							'<ul class="paleta_cores" rel="">' +
								'<div class="camada" rel=""></div>';
	if ('{REF_DETALHE}' != 'gola' && '{REF_DETALHE}' != 'manga' && '{REF_DETALHE}' != 'punho' && '{REF_DETALHE}' != 'nome' && '{REF_DETALHE}' != 'numero' && '{REF_DETALHE}' != 'bolso' && '{REF_DETALHE}' != 'logo')
		detalhe += 				'<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="superior" alt="Sem Cor" title="Sem Cor"></li>';
	detalhe +=					<!-- BEGIN CAIXA_COR_DETALHE_SUPERIOR -->
								'<li class="cor" style="background-color:{COD_COR};" data-i="{I}" id-cor="{ID_COR}" rel="superior" alt="{ALT_COR}" title="{NOME_COR}"></li>' +
								<!-- END CAIXA_COR_DETALHE_SUPERIOR -->
							'</ul>' +
						'</div>' +
					'</div>';

	if ('{REF_DETALHE}' == 'nome') {
		if (mostrar_textos == 0)
			$('.conteudo_edicao[rel="ferramenta_texto"]').remove();

		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .cores_linha').append(detalhe);
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .cores_linha').append(detalhe);
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .box_cores-linha').eq(1).find('.numero_camada').html('Cor Borda');
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .box_cores-linha').eq(1).find('.lista_camadas').attr('rel', 'cor_{ANCORA_DETALHE}_borda');
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .box_cores-linha').eq(1).find('.cor_camada').attr('rel', '{ANCORA_DETALHE}_borda');
		var html = '<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="superior" alt="Sem Cor" title="Sem Cor"></li>';
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .box_cores-linha').eq(1).find('.camada').after(html);
		$('.personalizar_nome .box_cores[data-ancora="{ANCORA_DETALHE}"] .box_cores-linha').eq(1).find('.cor_atual').attr({'alt': 'Sem Cor', 'title': 'Sem Cor', 'rel': 'indisponivel'}).css('background-color', 'rgba(0, 0, 0, 0)');
		preencheAtributo('superior','nome','com',1);

		if ('{ANCORA_DETALHE}' == 'nome_verso') {
			if (!$('*[data-ancora="nome_frente"]').length == 0) 
				$('#opcoes_angulos .opcao_edicao[rel="frente"]').click();

			$('#ipt-posicao_esquerda-verso').click();
			$('.opcao_pers[rel="superior-nome_verso_posicao-baixo"]').click();
		}
		else {
			$('#ipt-posicao_direita-frente').click();
		}

		preencheAtributo('superior', 'cor_{ANCORA_DETALHE}_borda', '', 1);

		if (esporte != 'mascara')
			preencheAtributo('superior', '{ANCORA_DETALHE}_texto', '', 1);

		if ($('.lista-fontes[rel="{ANCORA_DETALHE}"] li').length <= 1)
			$('.lista-fontes[rel="{ANCORA_DETALHE}"]').hide();

		primeira_fonte_nome = $('.lista-fontes[rel="{ANCORA_DETALHE}"] li').eq(0).attr('data-nome');
		$('.lista-fontes[rel="{ANCORA_DETALHE}"] .fonte_ativa').html(primeira_fonte_nome);
		$('.lista-fontes[rel="{ANCORA_DETALHE}"] .menu_fontes li').removeClass('ativo');
		$('.lista-fontes[rel="{ANCORA_DETALHE}"] .menu_fontes li[data-nome="'+primeira_fonte_nome+'"]').addClass('ativo');

		mudaFonte('{ANCORA_DETALHE}', primeira_fonte_nome, 17);
		tamFonte($('.flex[data-ancora="{ANCORA_DETALHE}"] .ipt-tamNum').val(), '{ANCORA_DETALHE}');
	}
	else if ('{REF_DETALHE}' == 'numero') {
		$('.flex[data-ancora="{REF_DETALHE}"] .ipt-tamNum').val($('.lista-fontes[rel="numero"] .fonte').eq(0).attr('rel'));
		var detalhe_nome = ('{ANCORA_DETALHE}' == 'numero_frente') ? 'Núm. Frente' : 'Núm. Verso';

		$('.personalizar_numero[data-angulo="frente"] .cores_linha').append(detalhe);
		$('.personalizar_numero[data-angulo="frente"] .cores_linha').append(detalhe);
		$('.personalizar_numero[data-angulo="frente"] .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(0).find('.numero_camada').html('Cor '+detalhe_nome);
		$('.personalizar_numero[data-angulo="frente"] .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(1).find('.numero_camada').html('Cor Borda');
		$('.personalizar_numero .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(1).find('.lista_camadas').attr('rel', 'cor_{ANCORA_DETALHE}_borda');
		$('.personalizar_numero .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(1).find('.cor_camada').attr('rel', '{ANCORA_DETALHE}_borda');
		var html = '<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="superior" alt="Sem Cor" title="Sem Cor"></li>';
		$('.personalizar_numero .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(1).find('.camada').after(html);
		$('.personalizar_numero .box_cores-linha[rel="{ANCORA_DETALHE}"]').eq(1).find('.cor_atual').attr({'alt': 'Sem Cor', 'title': 'Sem Cor', 'rel': 'indisponivel'}).css('background-color', 'rgba(0, 0, 0, 0)');

		if ($('.lista-fontes[rel="numero"] li').length <= 1)
			$('.lista-fontes[rel="numero"]').hide();

		primeira_fonte_num = $('.lista-fontes[rel="numero"] li').eq(0).attr('data-nome');
		tamanho_num = $(".lista-fontes[rel='numero'] li").eq(0).attr('rel');
		$('.lista-fontes[rel="numero"] .fonte_ativa').html(primeira_fonte_num);
		$('.lista-fontes[rel="numero"] .menu_fontes li').removeClass('ativo');
		$('.lista-fontes[rel="numero"] .menu_fontes li[data-nome="'+primeira_fonte_num+'"]').addClass('ativo');
		mudaFonte('{REF_DETALHE}', primeira_fonte_num, tamanho_num);

		$('.personalizar_numero .flex[data-ancora="{REF_DETALHE}"] .ipt-tamNum').val(tamanho_num);
		tamFonte(tamanho_num,'{REF_DETALHE}');
		preencheAtributo('superior','cor_{ANCORA_DETALHE}_borda','',1);

		<!-- BEGIN NUMERO_FRENTE_COM -->
		$('.selecao[rel="superior-numero_frente-centro"]').click();
		<!-- END NUMERO_FRENTE_COM -->
		$('.manequim .detalhes_'+peca_superior+' .numero_frente').hide();
		$('.manequim .detalhes_'+peca_inferior+' .numero_frente').hide();
		preencheAtributo('superior', 'numero_frente', 'sem', 1);
		<!-- FINALLY NUMERO_FRENTE_COM -->

		var num_inicial = (goleiro == 1) ? '1' : '10';
		preencheAtributo('superior', 'numero', num_inicial, 1);
	}
	else if ('{REF_DETALHE}' == 'manga' || '{REF_DETALHE}' == 'punho') {
		$('.conteudo_edicao[rel="manga_punho"] .box_cores[rel="{REF_DETALHE}"]').append(detalhe);

		if ('{REF_DETALHE}' == 'manga' && $('*[data-ancora="punho"]').length == 0)
			$('.edicao_mangas .cabecalho .destaque').html('Manga > ');

		if (esporte_dir == 'jaqueta_colete' && $('.edicao_cores .cores_superior #add_manga').length == 0) {
			$('#lista_edicao .opcao[rel="edicao_mangas"], .lista_opcoes[rel="manga"]').hide();
			var html = '<div class="bt_add" id="add_manga">Adicionar Mangas</div>';
			$('.edicao_cores .cores_superior').prepend(html);
		}	
	}
	else if ('{REF_DETALHE}' == 'raglan') {
		if ($('.fundos-svgs .detalhes_'+peca_superior+' .manga').length == 0) 
			$('.conteudo_edicao[rel="manga_punho"] .box_cores[rel="manga"]').append(detalhe);

		if ($('*[data-ancora="punho"]').length == 0)
			$('.edicao_mangas .cabecalho .destaque').html('Raglan > ');
	}
	else if ('{REF_DETALHE}' == 'logo') {
		<!-- BEGIN MOSTRAR_ESCUDO_SUPERIOR -->
		mostrar_escudo = 1;
		$('.conteudo_edicao[rel="superior"] .conteudo_escudo .box_cores').append(detalhe);
		<!-- END MOSTRAR_ESCUDO_SUPERIOR -->
		mostrar_escudo = 0;
		$('.cores_superior .cores_linha').prepend(detalhe);
		$('#sub-menu_edicao .opcao_edicao[rel="escudo_superior"]').remove();
		$('#sub-menu_edicao .opcao_edicao[rel="escudo_inferior"]').click();
		<!-- FINALLY MOSTRAR_ESCUDO_SUPERIOR -->

		$.get('{PASTA_RAIZ_SIMULADOR}/img/logo.svg'+versao_simu, function(data){
			var data_svg = document.importNode(data.documentElement,true);
			$('#box_manequim .logo').prepend(data_svg);
		}).done(function(){
			if (total_modelo[peca_superior] == 0) {
				$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_superior+'"] .cor_camada').click();
				$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_superior+'"] .paleta_cores .cor[alt="cinza"]').click();
			}
			if (total_modelo[peca_inferior] == 0) {
				$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_inferior+'"] .cor_camada').click();
				$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_inferior+'"] .paleta_cores .cor[alt="cinza"]').click();
			}
		});
	}
	else if ('{REF_DETALHE}' == 'gola') {
		if (esporte_dir == 'macacao') {
			$('.conteudo_edicao[rel="gola"]').remove();
			$('.cores_superior').append(detalhe);
		}
		else {
			if ($('.lista_opcoes[rel="gola"] li').length < 2) {
				$('.lista_camadas[rel="cor_gola"] .cor_camada').hide();
				if ($('.detalhes_'+peca_superior+' .golas *[class^="gola"]').length > 1) {
					var n_golas = ($('.detalhes_'+peca_superior+' .golas').length) ? $('.detalhes_'+peca_superior+' .golas *[class^="gola"]').length : $('.manequim .engloba_'+peca_superior+' .golas').children().length;
					for (var i=0; i < n_golas; i++) {
						$('.lista_camadas[rel="cor_gola"] .cor_camada').eq(i).show();
					}
				}
				else {
					$('.lista_camadas[rel="cor_gola"] .cor_camada').eq(0).show();
				}
			}
			else {
				$('.lista_opcoes[rel="gola"] .opcao').eq(0).click();
			}	
	
			if (!$('.lista_opcoes[rel="gola"] li').length)
				$('.container[rel="gola"]').remove();
		}
	}
	else if ('{REF_DETALHE}' == 'ziper') {
		<!-- BEGIN MOSTRAR_OPCOES_ZIPER -->
		var html_addZiper = '<div class="box-checkbox">' +
								'<input type="checkbox" name="ziper_completo" value="" id="ipt-add_ziper"/>' +
								'<label class="ipt-checkbox" for="ipt-add_ziper">' +
									'<span><b>Zíper Completo</b> > Adicionar</span>' + 
								'</label>' +
							'</div>';
		$('.cores_superior').append(html_addZiper);
		$('.lista_camadas[rel="cor_ziper"]').closest('.box_cores-linha').removeAttr('class').css('width', '100%');
		$('.cores_superior .box-checkbox').after(detalhe);
		<!-- END MOSTRAR_OPCOES_ZIPER -->
		$('.cores_superior').append(detalhe);
		<!-- FINALLY MOSTRAR_OPCOES_ZIPER -->
	}
	else if ('{REF_DETALHE}' == 'bolso' && (esporte_dir != 'bermuda_moletom' && esporte_dir != 'calca_brim' && esporte_dir != 'avental_feminino')) {
		var aux_detalhe = detalhe;
		var aux_cor = (desenho[peca_superior][modelo_inicial]['cor_base'] != '') ? desenho[peca_superior][modelo_inicial]['cor_base'] : 257;
		var cor_base_bolso = (desenho[peca_superior][modelo_inicial]['cor_base'] != '') ? desenho[peca_superior][modelo_inicial]['cor_base'] : aux_cor;
		$('.cores_superior').append(aux_detalhe);

		$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_bolso.webp'+versao_simu).done(function() {
			$('.cores_superior .box_cores-linha[rel="{REF_DETALHE}"]').remove();
			var html = '<div class="textura_bolso"></div>';
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs').append(html);
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_bolso').attr('rel', 'bolso_frente');

			if (esporte_dir == 'macacao') {
				$('.edicao_acabamentos .sub-menu_edicao .opcao_edicao[rel="gola"]').attr('rel', 'bolso');
				$('.edicao_acabamentos .sub-menu_edicao .opcao_edicao[rel="bolso"] span').html('Bolso');

				$('#com-bolso').attr('id', 'com-bolso_frente').parent().attr('rel', 'superior-bolso_frente-com').parent().attr('rel', 'bolso_frente').attr('data-ancora', 'bolso_frente');
				$('#sem-bolso').attr('id', 'sem-bolso_frente').parent().attr('rel', 'superior-bolso_frente-sem');
				$('.lista_opcoes[rel="bolso_frente"] .opcao[rel="superior-bolso_frente-com"]').after('<li class="opcao opcao_pers" rel="superior-bolso_frente-com_liso">' +
																										'<figure class="icone" id="com-bolso_frente_liso"></figure>' +
			 																						 '</li>');
				$('.manequim .engloba_'+peca_superior+' .fundos-svgs').append(html);
				$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_bolso').eq(1).attr('rel', 'bolso_frente_inferior');
				$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_bolso').eq(1).css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_bolso_frente_inferior.webp'+versao_simu+'")');
				var html_bolso_frente =	'<ul class="lista_opcoes" rel="bolso_frente_inferior" data-ancora="bolso_frente" data-angulo="verso">' +
											'<li class="opcao opcao_pers" rel="superior-bolso_frente_inferior-com"><figure class="icone" id="com-bolso_frente_inferior"></figure></li>' +
											'<li class="opcao opcao_pers" rel="superior-bolso_frente_inferior-sem"><figure class="icone" id="sem-bolso_frente_inferior"></figure></li>' +
										'</ul>';
				$('.lista_opcoes[rel="bolso_frente"]').attr('data-angulo', 'frente').after(html_bolso_frente);
				$('.lista_opcoes .opcao[rel="superior-bolso_frente_inferior-com"]').click();
				preencheAtributo('superior', 'bolso_frente_inferior', 'com', 1);
			}	
			else {
				$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_bolso').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_bolso.webp'+versao_simu+'")');
			}

			if ($('.manequim_verso .detalhes_'+peca_superior+' .bolso').length) {
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').append(html);
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_bolso').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_bolso_verso.webp'+versao_simu+'")');
				var html_bolso_verso =	'<ul class="lista_opcoes" rel="bolso_verso" data-ancora="bolso_verso" data-angulo="verso">' +
											'<li class="opcao opcao_pers" rel="superior-bolso_verso-com"><figure class="icone" id="com-bolso_verso"></figure></li>' +
											'<li class="opcao opcao_pers" rel="superior-bolso_verso-com_liso"><figure class="icone" id="com-bolso_verso_liso"></figure></li>' +
											'<li class="opcao opcao_pers" rel="superior-bolso_verso-sem"><figure class="icone" id="sem-bolso_verso"></figure></li>' +
										'</ul>';
				$('.conteudo_bolso .box_cores[rel="bolso"]').before(html_bolso_verso);
				$('.lista_opcoes .opcao[rel="superior-bolso_verso-com"]').click();
				$('.lista_opcoes .opcao[rel="superior-bolso_frente-com"]').click();
				preencheAtributo('superior', 'bolso_frente', 'com', 1);
				preencheAtributo('superior', 'bolso_verso', 'com', 1);
			}
			else {
				$('.box_selecao .opcao_pers[rel="superior-bolso-com"]').addClass('marcado');
				preencheAtributo('superior', 'bolso', 'com', 1);
			}

			if ($('.detalhes_'+peca_superior+' .bolso').length) {
				$('.box_cores[rel="bolso"]').append(aux_detalhe);
				$('.box_cores[rel="bolso"] .cor_camada').eq(0).click();
				$('.box_cores[rel="bolso"] .paleta_cores .cor[id-cor="'+cor_base_bolso+'"]').click();
			}
			else {
				$('.box_cores[rel="bolso"]').hide();
			}

			if ($('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length > 1 && $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}_"]').length) {
				var n = $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length;
	
				for (var i=1; i < n; i++) {
					var n = i + 1;
					$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append('<div class="cor_camada" rel="{ANCORA_DETALHE}_'+n+'"><div class="cor_atual"></div></div>');
					$('.box_cores[rel="bolso"] .cor_camada[rel="{ANCORA_DETALHE}_'+n+'"]').click();
					$('.box_cores[rel="bolso"] .paleta_cores .cor[id-cor="'+cor_base_bolso+'"]').click();
				}

				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append($('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').detach());
				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').css('padding', '0 0 30px 0');
				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').css({'width': '100%', 'text-align': 'center', 'top': 'unset', 'bottom': '5px', 'border-top': '1px solid #C6C6C6', 'padding-top': '3px'});
			}
		}).fail(function() { 
			$('.conteudo_bolso').remove();

			if ($('.detalhes_'+peca_superior+' .bolso').length) {
				if (desenho[peca_superior][1]['cor_bolso'] == '') {
					$('.lista_camadas[rel="cor_bolso"] .cor_camada').click();
					$('.lista_camadas[rel="cor_bolso"] .paleta_cores .cor[id-cor="'+cor_base_bolso+'"]').click();
				}
			}

			if (detalhes_removidos[peca_superior].indexOf('gola') != -1) {
				$('.edicao_acabamentos .sub-menu_edicao, .edicao_acabamentos .conteudo_edicao[rel="gola"], .edicao_acabamentos .conteudo_bolso, .conteudo_edicao[rel="bolso"]').remove();
				$('.sub-menu_edicao .opcao_edicao[rel="manga_punho"]').click();
			}
		});
	}
	else if ('{REF_DETALHE}' == 'faixa') {
		var aux_detalhe_faixa = detalhe;
		var cor_base = (desenho[peca_superior][modelo_inicial]['cor_base'] != '') ? desenho[peca_superior][modelo_inicial]['cor_base'] : '257';

		$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_faixa.webp'+versao_simu).done(function() { 
			var html = '<div class="textura_faixa"></div>';
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs').append(html);
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_faixa').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_faixa.webp'+versao_simu+'")');

			if ($('.manequim_verso .detalhes_'+peca_superior+' .faixa').length) {
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').append(html);
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_faixa').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_faixa_verso.webp'+versao_simu+'")');
			}

			$('.box_selecao .opcao_pers[rel="superior-faixa-com"]').addClass('marcado');
			preencheAtributo('superior', 'faixa', 'com', 1);

			if ($('.detalhes_'+peca_superior+' .faixa').length) {
				$('.box_cores[rel="faixa"]').append(aux_detalhe_faixa);
				$('.box_cores[rel="faixa"] .cor_camada').click();
				$('.box_cores[rel="faixa"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
			}

			if ($('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length > 1 && $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}_"]').length) {
				var n = $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length;
	
				for (var i=1; i < n; i++) {
					var n = i + 1;
					$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append('<div class="cor_camada" rel="{ANCORA_DETALHE}_'+n+'"><div class="cor_atual"></div></div>');
					$('.box_cores[rel="faixa"] .cor_camada[rel="{ANCORA_DETALHE}_'+n+'"]').click();
					$('.box_cores[rel="faixa"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
				}

				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append($('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').detach());
				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').css('padding', '0 0 30px 0');
				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').css({'width': '100%', 'text-align': 'center', 'top': 'unset', 'bottom': '5px', 'border-top': '1px solid #C6C6C6', 'padding-top': '3px'});
			}
		}).fail(function(){
			if ($('.detalhes_'+peca_superior+' .faixa').length) {
				$('.cores_superior').append(aux_detalhe_faixa);
				$('.lista_camadas[rel="cor_faixa"] .cor_camada').click();
				$('.lista_camadas[rel="cor_faixa"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
			}
		});
	}
	else if ('{REF_DETALHE}' == 'fecho' && (esporte_dir == 'viseira' || esporte_dir == 'bone_japones' || esporte_dir == 'bone_6_gomos' || esporte_dir == 'bone_trucker')) {
		$('.box_cores[rel="fecho"]').append(detalhe);
		$('.lista_opcoes[rel="fecho"] li').eq(0).click();

		var html = '<div class="textura_fecho"></div>';
		$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').append(html);
		$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_fecho').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'-plastico.webp'+versao_simu+'")');

		if (esporte_dir == 'bone_japones') {
			if ($('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]:not(.aba)').length > 1 && $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}_"]').length) {
				var n = $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length;
				for (var i=1; i < n; i++) {
					var n = i + 1;
					$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append('<div class="cor_camada" rel="{ANCORA_DETALHE}_'+n+'"><div class="cor_atual"></div></div>');
				}
			}
		}
		else {
			if ($('.fechos_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]:not(.aba)').length > 1 && $('.fechos_'+peca_superior+' *[class^="{ANCORA_DETALHE}_"]').length) {
				var n = $('.fechos_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length;
				for (var i=1; i < n; i++) {
					var n = i + 1;
					$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append('<div class="cor_camada" rel="{ANCORA_DETALHE}_'+n+'"><div class="cor_atual"></div></div>');
				}
			}
		}

		var svg_det =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
							'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
							'<path fill="var(--cor-destaque)" d="M3.563,286.501c-0.487,16.538,0.778,33.082,3.776,49.354c1.575,9.982,7.31,18.828,15.78,24.34' +
							'c9.75,4.832,20.872,6.137,31.476,3.693c15.611-2.014,31.14-3.021,47.003-3.777c12.758,16.787,62.867,76.381,145.962,83.935' +
							'c95.685,8.394,76.212-37.687,165.603-50.36c49.689-7.051,68.91,4.197,70.924,5.54c3.494,2.275,7.748,3.067,11.828,2.202' +
							'c4.078-0.867,7.645-3.32,9.91-6.818c4.322-6.428,3.402-15.029-2.182-20.396c-16.787-16.031-53.885-38.861-95.938-69.246' +
							'c-1.846-16.871-11.078-84.605-46.164-134.966c-37.434-53.634-106.511-70.673-147.387-76.044' +
							'c-4.701-39.869-70.086-33.574-67.148,5.54C57.7,128.032,3.73,190.815,3.563,286.501z" style="transform: scale(0.07) translate(120px, 75px);"/>' +
						'</svg>';
		$('#box_edicao .edicao_acabamentos .cabecalho svg').remove();
		$('#box_edicao .edicao_acabamentos .cabecalho').prepend(svg_det);
		$('#box_edicao .edicao_acabamentos .cabecalho .titulo').html('Fecho');
		var html_icone = '<img src="img/manequim/'+esporte_dir+'.webp?v=1" width="75%" />';
		$('#lista_edicao .opcao[rel="edicao_acabamentos"] .ico-lista_edicao svg').remove();
		$('#lista_edicao .opcao[rel="edicao_acabamentos"] .ico-lista_edicao').prepend(html_icone);
	}
	else if ('{REF_DETALHE}' == 'tela' && esporte_dir.indexOf('bone') != -1) {
		$('.cores_superior').append(detalhe);

		var tela_esq = '<div class="textura_tela" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_esquerda_tela.png'+versao_simu+';);"></div>';
		var tela_dir = '<div class="textura_tela" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_direita_tela.png'+versao_simu+';);"></div>';
		var tela_verso = '<div class="textura_tela" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_verso_tela.png'+versao_simu+';);"></div>';
		var tecido_esq = '<div class="textura_tecido" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_esquerda_tecido.png'+versao_simu+';);"></div>';
		var tecido_dir = '<div class="textura_tecido" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_direita_tecido.png'+versao_simu+';);"></div>';
		var tecido_verso = '<div class="textura_tecido" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_verso_tecido.png'+versao_simu+';);"></div>';

		$(tela_esq).insertAfter('.manequim_esquerda .textura').hide();
		$(tela_dir).insertAfter('.manequim_direita .textura').hide();
		$(tela_verso).insertAfter('.manequim_verso .textura').hide();
		$(tecido_esq).insertAfter('.manequim_esquerda .textura');
		$(tecido_dir).insertAfter('.manequim_direita .textura');
		$(tecido_verso).insertAfter('.manequim_verso .textura');
		$('.textura_tela').css({'position': 'absolute', 'width': '100%', 'height': '100%', 'top': 0, 'z-index': 2, 'filter': 'drop-shadow(0px 0px 0px var(--cor-tela))', 'backgorund-repeat': 'no-repeat'});
		$('.textura_tecido').css({'position': 'absolute', 'width': '100%', 'height': '100%', 'top': 0, 'z-index': 2, 'filter': 'drop-shadow(0px 0px 0px var(--cor-tela))', 'backgorund-repeat': 'no-repeat'});
	}
	else if ('{REF_DETALHE}' == 'costura' && esporte_dir.indexOf('bone') != -1) {
		$('.com_costura').hide();
		$('.sem_costura').show();
		var html_costuras = '<div class="box-checkbox" style="padding-bottom: 20px;">'+
								'<input type="checkbox" name="manequim_costuras" value="" id="ipt-manequim_costuras">'+
								'<label class="ipt-checkbox" for="ipt-manequim_costuras" style="align-items: center;">'+
									'<span><b style="font-size: 14px; color: #000;">Costuras</b></span>'+
								'</label>'+
							'</div>';
		$(html_costuras).insertAfter('.edicao_cores .box_cores');
		$('.edicao_cores .box_cores .titulo').eq(1).css('padding-bottom', '0');

		$('#ipt-manequim_costuras').on('click', function(e){
			e.preventDefault();
	
			if ($(this).prop('checked')) {
				$('.com_costura').show();
				$('.sem_costura').hide();
				$('.manequim .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'_costura.webp'+versao_simu+'")');
				$('.manequim_direita .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'_direita_costura.webp'+versao_simu+'")');
				$('.manequim_esquerda .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'_esquerda_costura.webp'+versao_simu+'")');
			}
			else {
				$('.sem_costura').show();
				$('.com_costura').hide();
				$('.manequim .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'.webp'+versao_simu+'")');
				$('.manequim_direita .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'_direita.webp'+versao_simu+'")');
				$('.manequim_esquerda .textura').css('background-image', 'url("img/manequim/'+esporte_dir+'_esquerda.webp'+versao_simu+'")');
			}
		});
	}
	else if ('{REF_DETALHE}' == 'ilhoses' && (esporte_dir == 'bone_6_gomos' || esporte_dir == 'bone_trucker')) {
		$('.cores_superior').append(detalhe);

		var html = '<div class="textura_ilhoses"></div>';
		$('.manequim .engloba_'+peca_superior+' .fundos-svgs').append(html);
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs').append(html);
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs').append(html);
		$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').append(html);
		$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura_ilhoses').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'-ilhoses.webp'+versao_simu+'")');
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs .textura_ilhoses').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_direita-ilhoses.webp'+versao_simu+'")');
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs .textura_ilhoses').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_esquerda-ilhoses.webp'+versao_simu+'")');
		$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_ilhoses').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+esporte_dir+'_verso-ilhoses.webp'+versao_simu+'")');
		$('.textura_ilhoses').css({'position': 'absolute', 'width': '100%', 'height': '100%', 'top': 0, 'z-index': 4});
	}
	else {
		$('.cores_superior').append(detalhe);

		if ($('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length > 1 && $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}_"]').length) {
			var n = $('.detalhes_'+peca_superior+' *[class^="{ANCORA_DETALHE}"]').length;

			for (var i=1; i < n; i++) {
				var n = i + 1;
				$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append('<div class="cor_camada" rel="{ANCORA_DETALHE}_'+n+'"><div class="cor_atual"></div></div>');
			}

			$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"]').append($('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').detach());
			$('.lista_camadas[rel="cor_{ANCORA_DETALHE}"] .numero_camada').css({'width': '100%', 'text-align': 'center'});
		}

		if ('{REF_DETALHE}' == 'bolso') {
			$('#lista_edicao .opcao[rel=edicao_{REF_DETALHE}]').remove();
			$('.conteudo_bolso').remove();
		}
	}

	if ($('.cores_superior .titulo:contains("Detalhes")').css('display') == 'none')
		$('.cores_superior .box_cores-linha[rel="{ANCORA_DETALHE}"]').hide();

	if (mostrar_pecas == 1 && desenho['superior']['1']['cor_{REF_DETALHE}'] === undefined)
		$('#conteudo_edicao .cores_superior .lista_camadas[rel="cor_{REF_DETALHE}"]').parent().hide();
	<!-- END BLOCK_COR_DETALHE_SUPERIOR -->

	<!-- BEGIN BLOCK_COR_DETALHE_INFERIOR -->
	switch ('{DETALHE}') {
		case 'Elastico':
			var nome_detalhe = 'Elástico';
		  	break;
		case 'Cos':
			var nome_detalhe = 'Cós';
			break;
		default:
			var nome_detalhe =  '{DETALHE}';
	}

	arrayDetalhes[peca_inferior].push('{ANCORA_DETALHE}');

	var detalhe =   '<div class="box_cores-linha">' +
						'<div class="lista_camadas" rel="cor_{ANCORA_DETALHE}" data-peca="'+peca_inferior+'">' +
							'<div class="cor_camada" rel="{ANCORA_DETALHE}">' +
								'<div class="cor_atual"></div>' +
								'<span class="numero_camada"><span>Cor </span>'+nome_detalhe+'</span>' +
							'</div>' +
							'<ul class="paleta_cores" rel="">' +
								'<div class="camada" rel=""></div>';
	if ('{REF_DETALHE}' != 'gola' && '{REF_DETALHE}' != 'nome' && '{REF_DETALHE}' != 'numero' && '{REF_DETALHE}' != 'logo')
		detalhe += 				'<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="superior" alt="Sem Cor" title="Sem Cor"></li>';
	detalhe +=					<!-- BEGIN CAIXA_COR_DETALHE_INFERIOR -->
								'<li class="cor" style="background-color:{COD_COR};" data-i="{I}" id-cor="{ID_COR}" rel="inferior" alt="{ALT_COR}" title="{NOME_COR}"></li>' +
								<!-- END CAIXA_COR_DETALHE_INFERIOR -->
							'</ul>' +
						'</div>' +
					'</div>';

	if ('{REF_DETALHE}' == 'numero') {
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .cores_linha').append(detalhe);
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .cores_linha').append(detalhe);
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(0).find('.lista_camadas').attr('rel', 'cor_{ANCORA_DETALHE}');
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(0).find('.cor_camada').attr('rel', '{ANCORA_DETALHE}');
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(1).find('.numero_camada').html('Cor Borda');
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(1).find('.lista_camadas').attr('rel', 'cor_{ANCORA_DETALHE}_borda');
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(1).find('.cor_camada').attr('rel', '{ANCORA_DETALHE}_borda');
		var html = '<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="inferior" alt="Sem Cor" title="Sem Cor"></li>';
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(1).find('.camada').after(html);
		$('.conteudo_edicao[rel="inferior"] .personalizar_numero .box_cores-linha').eq(1).find('.cor_atual').attr({'alt': 'Sem Cor', 'title': 'Sem Cor', 'rel': 'indisponivel'}).css('background-color', 'rgba(0, 0, 0, 0)');
		preencheAtributo('inferior','cor_{ANCORA_DETALHE}_borda','',1);
		$('.manequim .detalhes_'+peca_inferior+' .previewNumero').attr('font-size','30px');

		if ($('.lista-fontes[rel="numero_inferior"] li').length <= 1)
			$('.lista-fontes[rel="numero_inferior"]').hide();
		
		primeira_fonte_num_inferior = $('.lista-fontes[rel="numero_inferior"] li').eq(0).attr('data-nome');
		$('.lista-fontes[rel="numero_inferior"] .fonte_ativa').html(primeira_fonte_num_inferior);
		$('.lista-fontes[rel="numero_inferior"] .menu_fontes li').removeClass('ativo');
		$('.lista-fontes[rel="numero_inferior"] .menu_fontes li[data-nome="'+primeira_fonte_num_inferior+'"]').addClass('ativo');

		mudaFonte('numero_inferior', primeira_fonte_num_inferior, 0);
		$('.opcao_pers[rel="inferior-numero_frente_posicao-esquerda"]').click();
		var num_inicial = (goleiro == 1) ? '1' : '10';
		preencheAtributo('inferior', 'numero', num_inicial, 1);
	}
	else if ('{REF_DETALHE}' == 'logo') {
		<!-- BEGIN MOSTRAR_ESCUDO_INFERIOR -->
		if (mostrar_escudo == 0) 
			mostrar_escudo = 1;
		<!-- END MOSTRAR_ESCUDO_INFERIOR -->
		$('.cores_inferior .cores_linha').prepend(detalhe);

		if (mostrar_escudo == 0) 
			$('#lista_edicao .opcao[rel="edicao_escudo"]').remove();
		else 
			$('#sub-menu_edicao .opcao_edicao[rel="escudo_inferior"]').remove();
		<!-- FINALLY MOSTRAR_ESCUDO_INFERIOR -->

		$('.conteudo_edicao[rel="inferior"] .conteudo_escudo .box_cores').append(detalhe);
	}
	else {
		$('.cores_inferior').append(detalhe);	
	}

	if ($('.cores_inferior .titulo:contains("Detalhes")').css('display') == 'none')
		$('.cores_inferior .box_cores-linha[rel="{ANCORA_DETALHE}"]').hide();

	if (mostrar_pecas == 1 && desenho['inferior']['1']['cor_{REF_DETALHE}'] === undefined)
		$('#conteudo_edicao .cores_inferior .lista_camadas[rel="cor_{REF_DETALHE}"]').parent().hide();
	<!-- END BLOCK_COR_DETALHE_INFERIOR -->

	if (mostrar_escudo == 1 && $('.escudo').length > 0) {
		$.get('{PASTA_RAIZ_SIMULADOR}/img/escudo.svg'+versao_simu, function(data){
			var data_svg = document.importNode(data.documentElement,true);
			$('.escudo').prepend(data_svg);
		}).done(function(){
			<!-- BEGIN BONE_ESCUDO -->
			$('.escudo svg').attr({'width': '55px', 'height': '63px'});
			$('.manequim_esquerda .engloba_bone .escudo svg').attr('transform','matrix(1,0.1,-0.1,1,'+escudo_lateral_esquerda_x+','+escudo_lateral_esquerda_y+')').show();
			<!-- END BONE_ESCUDO -->

			if (detalhes_removidos[peca_superior].indexOf('logo') != -1)
				$('.opcao_pers[rel="superior-escudo-esquerda_2"]').remove();

			$('.opcao[rel="superior-escudo-esquerda"]').click();

			if (modelo_conjunto == 1) {
				$('.opcao_pers[rel="inferior-escudo-direita"]').click();
			}
		});
	}
	else {
		$('#lista_edicao .opcao[rel="edicao_escudo"]').remove();
	}

	if ($('#lista-patrocinio').length && $('.detalhes_'+peca_superior+' *[class^="patrocinio"]').length) {
		if ($('.detalhes_'+peca_superior+' *[class*="patrocinio_manga"]').length)
			preencheAtributo('superior', 'patrocinio_manga', 'sem', 0);
		else 
			$('#lista-patrocinio .opcao_pers[rel*="patrocinio_manga"]').remove();

		preencheAtributo('superior', 'patrocinio_frente', 'sem', 0);
		preencheAtributo('superior', 'patrocinio_omoplata', 'sem', 0);
		preencheAtributo('superior', 'patrocinio_baixo', 'sem', 0);
		preencheAtributo('superior', 'patrocinio_cima', 'sem', 0);	
	}

	if ($('.box_selecao[rel="patrocinio_inferior"]').length && $('.detalhes_'+peca_inferior+' *[class^="patrocinio"]').length) {
		preencheAtributo('inferior', 'patrocinio', 'sem', 0);
	}

	if ($('.lista_opcoes[rel="selo"]').length && $('.detalhes_'+peca_superior+' *[class="selo"]').length)
		preencheAtributo('superior', 'selo', 'sem', 0);

	// config menus
	// acabamentos (gola, mangas, punho, bolso)
	if (detalhes_removidos[peca_superior].indexOf('gola') != -1 && detalhes_removidos[peca_superior].indexOf('punho') != -1 && detalhes_removidos[peca_superior].indexOf('manga') != -1 
	&& detalhes_removidos[peca_superior].indexOf('raglan') != -1 && (detalhes_removidos[peca_superior].indexOf('bolso') != -1 || $('.conteudo_bolso').length == 0) 
	&& (detalhes_removidos[peca_superior].indexOf('fecho') != -1 || $('.conteudo_fecho .box_cores-linha').length == 0)) {
		$('.edicao_acabamentos, #lista_edicao .opcao[rel="edicao_acabamentos"]').remove();
	}
	else {
		if (detalhes_removidos[peca_superior].indexOf('gola') != -1) {
			if (detalhes_removidos[peca_superior].indexOf('bolso') == -1 && $('.conteudo_bolso').length)
				$('.sub-menu_edicao .opcao_edicao[rel="gola"] span').html('Bolso');
			else 
				$('.edicao_acabamentos .sub-menu_edicao, .edicao_acabamentos .conteudo_edicao[rel="gola"], .edicao_acabamentos .conteudo_bolso').remove();
		}
		else if (detalhes_removidos[peca_superior].indexOf('bolso') != -1 && (modelo_conjunto == 0 || modelo_conjunto == 1 && detalhes_removidos[peca_inferior].indexOf('bolso') != -1)) {
			$('.edicao_acabamentos .conteudo_bolso').remove();
		}

		if (detalhes_removidos[peca_superior].indexOf('punho') != -1) {
			if (detalhes_removidos[peca_superior].indexOf('manga') == -1 || detalhes_removidos[peca_superior].indexOf('raglan') == -1)
				$('.sub-menu_edicao .opcao_edicao[rel="manga_punho"] span').html('Manga');
			else 
				$('.edicao_acabamentos .sub-menu_edicao').remove();
		}
		else if (detalhes_removidos[peca_superior].indexOf('manga') != -1 && detalhes_removidos[peca_superior].indexOf('raglan') != -1) {
			$('.edicao_acabamentos .conteudo_manga').remove();
		}
		if (detalhes_removidos[peca_superior].indexOf('fecho') != -1) {
			$('.edicao_acabamentos .conteudo_fecho').remove();
		}
	}

	// texto (nome, número)
	if (mostrar_textos == 0 && (detalhes_removidos[peca_superior].indexOf('nome_frente') != -1 && detalhes_removidos[peca_superior].indexOf('nome_verso') != -1 && 
								detalhes_removidos[peca_superior].indexOf('numero_frente') != -1 && detalhes_removidos[peca_superior].indexOf('numero_verso') != -1)) {
		if (modelo_conjunto == 0 || (detalhes_removidos[peca_inferior].indexOf('nome_frente') != -1 && detalhes_removidos[peca_inferior].indexOf('nome_verso') != -1 && 
									 detalhes_removidos[peca_inferior].indexOf('numero_frente') != -1 && detalhes_removidos[peca_inferior].indexOf('numero_verso') != -1))
			$('.edicao_texto, #lista_edicao .opcao[rel="edicao_texto"]').remove();
		else
			$('.edicao_texto .sub-menu_edicao, .edicao_texto .conteudo_edicao[rel="superior"]').remove();
	}
	else if (mostrar_textos == 0 && modelo_conjunto == 1) {
		if (detalhes_removidos[peca_inferior].indexOf('nome_frente') != -1 && detalhes_removidos[peca_inferior].indexOf('nome_verso') != -1 && 
			detalhes_removidos[peca_inferior].indexOf('numero_frente') != -1 && detalhes_removidos[peca_inferior].indexOf('numero_verso') != -1)
			$('.edicao_texto .sub-menu_edicao, .edicao_texto .conteudo_edicao[rel="inferior"]').remove();

		if (detalhes_removidos[peca_superior].indexOf('numero_frente') != -1 && detalhes_removidos[peca_superior].indexOf('numero_verso') != -1)
			$('.edicao_texto *[data-ancora*="numero"], .edicao_texto *[rel*="numero"], .edicao_texto *[class*="numero"]').remove();
	}
	else if (mostrar_textos == 0 && modelo_conjunto == 0) {
		if (detalhes_removidos[peca_superior].indexOf('numero_frente') != -1 && detalhes_removidos[peca_superior].indexOf('numero_verso') != -1) {
			$('.edicao_texto *[data-ancora*="numero"], .edicao_texto *[rel*="numero"], .edicao_texto *[class*="numero"]').remove();
			$('#lista_edicao .opcao[rel="edicao_texto"] span, .edicao_texto .cabecalho .titulo').html('Texto');
			$('#lista_edicao .opcao[rel="edicao_texto"]').attr({'alt': 'Texto', 'title': 'Texto'});
		}
	}

	// patrocinios (escudo, patrocínio, selo)
	var patrocinio_superior = detalhes_removidos[peca_superior].findIndex(v => v.includes('patrocinio'));
	if (modelo_conjunto == 1)
		var patrocinio_inferior = detalhes_removidos[peca_inferior].findIndex(v => v.includes('patrocinio'));

	if (detalhes_removidos[peca_superior].indexOf('escudo') != -1 && detalhes_removidos[peca_superior].indexOf('logo') != -1 && 
		patrocinio_superior != -1 && detalhes_removidos[peca_superior].indexOf('selo') != -1) {
		$('.edicao_patrocinios .sub-menu_edicao .opcao_edicao[rel="superior"]').remove();
		$('.edicao_patrocinios .sub-menu_edicao').hide();

		if (modelo_conjunto == 0 || (detalhes_removidos[peca_inferior].indexOf('escudo') != -1 && detalhes_removidos[peca_inferior].indexOf('logo') != -1 && patrocinio_superior != -1))
			$('*[class="edicao_patrocinios"], *[rel="edicao_patrocinios"]').remove();
	}
	else {
		if (detalhes_removidos[peca_superior].indexOf('escudo') != -1 && detalhes_removidos[peca_superior].indexOf('logo') != -1)
			$('.conteudo_edicao[rel="superior"] .conteudo_escudo').remove();
		if (patrocinio_superior != -1)
			$('.conteudo_edicao[rel="superior"] .conteudo_patrocinio').remove();
		if (detalhes_removidos[peca_superior].indexOf('selo') != -1)
			$('.conteudo_edicao[rel="superior"] .conteudo_selo').remove();
	}

	if (modelo_conjunto == 1) {
		if (detalhes_removidos[peca_inferior].indexOf('escudo') != -1 && detalhes_removidos[peca_inferior].indexOf('logo') != -1 && patrocinio_inferior != -1) {
			$('.edicao_patrocinios .sub-menu_edicao .opcao_edicao[rel="inferior"]').remove();
			$('.edicao_patrocinios .sub-menu_edicao').hide();
		}
		else if (detalhes_removidos[peca_inferior].indexOf('escudo') != -1 && detalhes_removidos[peca_inferior].indexOf('logo')) {
			$('.conteudo_edicao[rel="inferior"] .conteudo_escudo').remove();
		}
		else if (patrocinio_inferior != -1) {
			$('.conteudo_edicao[rel="inferior"] .conteudo_patrocinio').remove();
		}
	}

	if (detalhes_removidos[peca_superior].indexOf('escudo') != -1 && (modelo_conjunto == 0 || detalhes_removidos[peca_inferior].indexOf('escudo') != -1)) {
		if (detalhes_removidos[peca_superior].indexOf('logo') == -1 && (modelo_conjunto == 0 || detalhes_removidos[peca_inferior].indexOf('logo') == -1)) {
			if (patrocinio_superior == -1 || patrocinio_inferior == -1) {
				$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Logo e Patrocínio');
				$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Logo e Patrocínio', 'title': 'Logo e Patrocínio'});
			}
			else if (detalhes_removidos[peca_superior].indexOf('selo') == -1) {
				$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Logo e Selo');
				$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Logo e Selo', 'title': 'Logo e Selo'});
			}
			else {
				$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Logo');
				$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Logo', 'title': 'Logo'});
			}
		}
		else if (patrocinio_superior == -1 && (modelo_conjunto == 0 || patrocinio_inferior == -1)) {
			if (detalhes_removidos[peca_superior].indexOf('selo') == -1) {
				$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Patrocínio e Selo');
				$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Patrocínio e Selo', 'title': 'Patrocínio e Selo'});
			}
			else {
				$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Patrocínio');
				$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Patrocínio', 'title': 'Patrocínio'});
			}
		}
		else if (detalhes_removidos[peca_superior].indexOf('selo') == -1) {
			$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Selo');
			$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Selo', 'title': 'Selo'});
		}
	}
	else if (patrocinio_superior != -1  && (modelo_conjunto == 0 || patrocinio_inferior != -1)) {
		if (detalhes_removidos[peca_superior].indexOf('selo') == -1) {
			$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Escudo e Selo');
			$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Escudo e Selo', 'title': 'Escudo e Selo'});
		}
		else if (detalhes_removidos[peca_superior].indexOf('logo') == -1 && (modelo_conjunto == 0 || detalhes_removidos[peca_inferior].indexOf('logo') == -1)) {
			$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Escudo e Logo');
			$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Escudo e Logo', 'title': 'Escudo e Logo'});
		}
		else {
			$('#lista_edicao .opcao[rel="edicao_patrocinios"] span, .edicao_patrocinios .cabecalho .titulo').html('Escudo');
			$('#lista_edicao .opcao[rel="edicao_patrocinios"]').attr({'alt': 'Escudo', 'title': 'Escudo'});
		}
	}
}
function ajustesManequim(){
	// TRATANDO MANEQUINS
	<!-- BEGIN VISEIRA_AJUSTES -->
	var svg_viseira =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
							'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
							'<path fill="var(--cor-destaque)" d="m19.85 0.0044122c-3.9309-0.03506-6.9239 0.13877-8.9766 0.52344-1.5897 0.26705-3.4381 0.66679-5.5469 1.1992-1.138 0.26211-1.9958 0.43967-2.5723 0.53125-0.65996 ' +
							'0.11415-1.2444-0.06854-1.752-0.54688-0.05964-0.08138-0.13112-0.12904-0.2168-0.14258-0.3374 0.01421-0.40577 0.30625-0.20508 0.87305 0 0 0.00651 0.28831 0.019531 0.86719 0.094921 2.687 0.016233 4.4108-0.23633 ' +
							'5.1699-0.13685 0.47265-0.11469 0.77285 0.068359 0.90234 0.04102 0.11658 0.093047 0.23021 0.1543 0.33984 0.03934 0.06749 0.076608 0.14599 0.11133 0.23633 0.11879 0.68546 0.3475 1.101 0.68945 1.2461 0.74018 0.29149 ' +
							'2.0516 0.35584 3.9336 0.19141 1.5366-0.12158 3.2233-0.30237 5.0586-0.54102 3.7632-0.18692 7.7385-0.21536 11.924-0.08594 2.3461 0.12679 4.6094 0.32533 6.791 0.5957 1.9777 0.13616 3.4271 0.10187 4.3496-0.10352 ' +
							'0.42189-0.09975 0.72466-0.60284 0.9082-1.5098 0.08953-0.17317 0.14806-0.33206 0.17578-0.47461 0.18536-0.10682 0.21092-0.41171 0.07617-0.91602 ' +
							'0.02478-0.10789 0.0083-0.14867-0.05078-0.12305-0.09667-0.65478-0.15645-1.4062-0.17773-2.252l0.0098-3.0293s0.0064-0.20846 0.01758-0.625c0.01428 6.3e-4 0.02786-0.0073 0.03516-0.01953 0.0073-0.01216 ' +
							'0.0074-0.02691 0-0.03906-0.0074-0.01206-0.02088-0.0203-0.03516-0.01953 0.11102-0.19233 0.12189-0.4087 0.0332-0.65234-0.10122-0.09062-0.23435-0.11159-0.40039-0.06055-6e-3 0.0057-0.01353 0.01198-0.01953 ' +
							'0.01758-0.6664 0.62047-1.4028 0.82225-2.2109 0.60547-1.4586-0.2721-3.2535-0.66532-5.3848-1.1797-1.4629-0.37237-3.6528-0.69842-6.5703-0.97852zm14.502 9.7461c-0.0079 0.23948-0.01081 0.48416-0.01172 0.73437 ' +
							'0.05411-0.23184 0.0582-0.47612 0.01172-0.73437zm-33.766 0.99023-0.00977 0.45508-0.066406 1.4199c-0.02107 0.67519-0.086742 1.5418-0.19531 2.5996-0.119 1.6106-0.17773 2.416-0.17773 2.416-0.2443 2.4392-0.16125 ' +
							'3.8982 0.24805 4.375 0.19789 0.47429 0.53259 0.69887 1.0039 0.67383 0.41405 0.01026 0.85647-0.03798 1.3262-0.14453 0.66612-0.13802 1.5077-0.31104 2.5273-0.51953 2.024-0.49473 4.2195-0.8828 ' +
							'6.5859-1.1641 2.9138-0.37098 5.4193-0.49203 7.5156-0.36328 3.0575 0.15321 6.3525 0.61485 9.8848 1.3867 2.8302 0.66604 4.4481 0.90987 4.8555 0.73242 0.23814-0.12602 0.40078-0.30218 0.48828-0.5293 ' +
							'0.33439-0.39934 0.47244-1.1467 0.41406-2.2422-0.05698-1.6601-0.22515-3.5014-0.50781-5.5254-0.12159-1.2945-0.16489-2.4772-0.12695-3.5449-0.18354 0.84764-0.48631 1.3189-0.9082 1.4121-0.92254 ' +
							'0.19195-2.3719 0.2249-4.3496 0.09766-2.1816-0.25269-4.4449-0.43814-6.791-0.55664-4.1853-0.12095-8.1606-0.0946-11.924 0.08008-1.8353 0.22303-3.5219 0.39028-5.0586 0.50391-1.882 0. 15366-3.1934 ' +
							'0.09467-3.9336-0.17773-0.34195-0.13556-0.57262-0.52348-0.69141-1.1641-0.03472-0.08442-0.070034-0.15763-0.10938-0.2207z" stroke-width=".7" style="transform: translate(8px, 13px);"/>' +
						'</svg>';
	$('#box_edicao .edicao_acabamentos .cabecalho svg').remove();
	$('#box_edicao .edicao_acabamentos .cabecalho').prepend(svg_viseira);
	$('#box_edicao .edicao_acabamentos .cabecalho .titulo').html('Fecho');

	$('.opcao_pers[rel="superior-fecho-fivela"]').remove();
	<!-- END VISEIRA_AJUSTES -->
	<!-- BEGIN FUTEVOLEI_AJUSTES -->
	$('.manequim .box_previewNome, .manequim .patrocinio_baixo, .manequim .golas_costas').remove();
	$('.manequim_verso .golas, .manequim_verso .logo, .manequim_verso .selo').remove();
	$('.manequim .detalhe').css('top', '545px');
	$('.manequim_verso .detalhe').css('top', '565px');
	$('.fundos .engloba_'+peca_inferior).css('top','308px');
	$('.fundos .engloba_'+peca_superior).css('z-index','5');
	$('.manequim .engloba_'+peca_inferior).css('left', '-1px');

	$('.opcao_pers[rel="superior-patrocinio_omoplata-com"]').hide();
	$('.opcao_pers[rel="superior-patrocinio_cima-com"]').hide();
	$('.opcao_pers[rel="superior-patrocinio_baixo-com"]').hide();

	$('.opcao_pers[rel="superior-escudo-esquerda_2"]').hide();
	<!-- END FUTEVOLEI_AJUSTES -->
	<!-- BEGIN RUGBY_AJUSTES -->
	$('.engloba_'+peca_inferior).css('top', '296px');
	$('.manequim .detalhe').css('top', '620px');
	$('.manequim_verso .detalhe').css('top', '615px');
	<!-- END RUGBY_AJUSTES -->
	<!-- BEGIN MACACAO_AJUSTES -->
	$('.edicao_bolso').append($('.edicao_faixa .lista_opcoes').detach());
	$('.edicao_bolso').append($('.edicao_faixa .box_cores').detach());
	$('.edicao_bolso .cabecalho .destaque').html('Bolso e Faixa > ');
	$('#lista_edicao .opcao[rel="edicao_bolso"]').attr('alt', 'Bolso e Faixa').attr('title', 'Bolso e Faixa');
	$('.box_cores[rel="bolso"]').css('padding-bottom', 0);
	$('#opcoes_angulos[rel="bolso"]').css('margin', '5px 0 10px 0');
	$('.edicao_bolso .lista_opcoes li').css('height', '105px');
	// mangas
	var html_mangas = 	'<ul class="lista_opcoes" rel="opcao_manga">' +
							'<li class="opcao opcao_pers" rel="superior-opcao_manga-1"><figure class="icone" id="manga_inicial"></figure></li>' +
							'<li class="opcao opcao_pers" rel="superior-opcao_manga-2"><figure class="icone" id="manga_2"></figure></li>' +
							'<li class="opcao opcao_pers" rel="superior-opcao_manga-3"><figure class="icone" id="manga_3"></figure></li>' +
							'<input type="hidden" id="opcao_manga" value="" />' +
						'</ul>';
	$('.conteudo_manga .box_selecao[rel="manga"]').hide();
	$('.conteudo_manga').css('flex-direction', 'column').prepend(html_mangas);
	$('figure[id="manga_inicial"]').css('background-position', '-235px -600px').css({'width': '92px', 'height': '95px'});
	$('figure[id="manga_2"]').css('background-position', '-135px -600px').css({'width': '92px', 'height': '95px'});
	$('figure[id="manga_3"]').css('background-position', '-335px -600px').css({'width': '92px', 'height': '95px'});
	$('.opcao[rel="superior-manga-com"]').click();
	$('.opcao[rel="superior-opcao_manga-1"]').click();
	var html_cor = '<li class="cor indisponivel" data-i="0" id-cor="sem_cor" rel="superior" alt="Sem Cor" title="Sem Cor"></li>';
	$('.box_cores[data-ancora="manga"] .camada').after(html_cor);
	$('.edicao_mangas .lista_camadas[rel="cor_manga"] .cor_camada').click();
	$('.edicao_mangas .lista_camadas[rel="cor_manga"] .paleta_cores .cor[id-cor="sem_cor"]').click();
	$('.box_cores[data-ancora="manga"]').removeAttr('style');
	// mangas - fim
	$('.manequim .detalhes_macacao').css({'top':'-1px'});
	<!-- END MACACAO_AJUSTES -->
	<!-- BEGIN CONJUNTO_MOLETOM_AJUSTES -->
	$('.engloba_'+peca_superior).css({'z-index':'2'});
	$('.manequim .engloba_'+peca_inferior).css({'top':'265px', 'z-index':1});
	$('.manequim_verso .engloba_'+peca_inferior).css({'top':'256px', 'z-index':1});
	$('.manequim .detalhe').css({'left':'4.5px', 'top':'580px', 'z-index':0});
	$('.manequim_verso .detalhe').css({'top':'595px', 'z-index':0});
	<!-- END CONJUNTO_MOLETOM_AJUSTES -->
	<!-- BEGIN SOCIAL_AJUSTES -->
	$('.edicao_cores .cores_linha #box_gola').css('order', 1);
	$('.edicao_cores .cores_linha #box_vista').css('order', 2);
	$('.edicao_cores .cores_linha #box_botao').css('order', 3);
	$('.edicao_cores .cores_linha #box_bolso').css('order', 4);
	<!-- END SOCIAL_AJUSTES -->
	<!-- BEGIN CANECA_CERAMICA_AJUSTES -->
	<!-- END CANECA_CERAMICA_AJUSTES -->
	<!-- BEGIN CANECA_CHOPP_AJUSTES -->
	<!-- END CANECA_CHOPP_AJUSTES -->
	<!-- BEGIN FUTEBOL_MASCULINO_AJUSTES -->
	$('.manequim_verso .detalhes_'+peca_superior+' *[class$="_frente"]').remove();
	$('.manequim_verso .engloba_'+peca_inferior+' .box_previewNumero, .manequim_verso .detalhes_'+peca_superior+' .golas, .manequim_verso .logo, .manequim_verso .selo, .manequim .nome_verso').remove();
	$('.manequim_verso .engloba_'+peca_inferior+' .textura').css('margin-left', '1px');

	if (esporte == 'handebol_masculino') {
		$('.manequim .detalhe').css('top', '580px');
		$('.manequim_verso .detalhe').css('top', '598px');
	}

	if (goleiro == 0) {
		$('.manequim .detalhe').css('top', '632px');
		$('.manequim_verso .detalhe').css('top', '646px');
		$('.engloba_'+peca_inferior).css('margin-left', '5px');
	}
	else {
		$('.luva_goleiro').css('top', '315px');
		$('.manequim .detalhe').css('top', '632px');
		$('.manequim_verso .detalhe').css('top', '646px');
		$('.engloba_'+peca_superior).css('margin-left', '-5px');
	}
	<!-- END FUTEBOL_MASCULINO_AJUSTES -->
	<!-- BEGIN FUTEBOL_MASCULINO_2_AJUSTES -->
	$('.manequim .modelo .engloba_'+peca_inferior).css('top', '288px');
	$('.manequim_verso .modelo .engloba_'+peca_inferior).css('top', '291px');
	$('.manequim .engloba_'+peca_inferior).css('margin-left', '10px');

	if (goleiro == 0) {
		$('.manequim .detalhe').css('top', '595px');
		$('.manequim_verso .detalhe').css('top', '638px');
	}
	else {
		$('.luva_goleiro').css('top', '315px');
		$('.manequim .luva_goleiro').css('margin-left', '11px');
		$('.manequim .detalhe').css('top', '595px');
		$('.manequim_verso .detalhe').css('top', '638px');
	}
	<!-- END FUTEBOL_MASCULINO_2_AJUSTES -->
	<!-- BEGIN FUTEBOL_MASCULINO_3_AJUSTES -->
	$('.manequim .engloba_'+peca_superior).css({'top': '21px', 'margin-left': '-15px'});
	$('.manequim .engloba_'+peca_inferior).css('top', '293px');
	$('.manequim .engloba_'+peca_acessorio).css({'top': '469px', 'margin-left': '-12px'});

	$('.manequim_verso .engloba_'+peca_superior).css({'top': '14px', 'margin-left': '-14px'});
	$('.manequim_verso .engloba_'+peca_inferior).css('top', '305px');
	$('.manequim_verso .engloba_'+peca_acessorio).css({'top': '476px', 'margin-left': '-13px'});
	$('.manequim .detalhes_'+peca_superior+' g').not('.golas, .manga, .punho').children().css('-webkit-transform', 'rotateX(10deg) rotateY(20deg)').css('transform', 'rotateX(10deg) rotateY(20deg)');
	$('.manequim .engloba_'+peca_superior+' .logo').css('-webkit-transform', 'rotateX(10deg) rotateY(20deg)').css('transform', 'rotateX(10deg) rotateY(20deg)');
	$('.manequim .escudo').css('-webkit-transform', 'rotateX(10deg) rotateY(20deg)').css('transform', 'rotateX(10deg) rotateY(20deg)');

	$('.manequim_verso .detalhes_'+peca_superior+' g').not('.golas_verso, .manga, .punho, .nome_verso').children().css('-webkit-transform', 'rotateX(10deg) rotateY(-20deg)').css('transform', 'rotateX(10deg) rotateY(-20deg)');
	$('.manequim_verso .detalhes_'+peca_superior+' .nome_verso').css('-webkit-transform', 'rotateX(10deg) rotateY(-20deg)').css('transform', 'rotateX(10deg) rotateY(-20deg)');
	
	$('.manequim_verso .detalhes_'+peca_superior+' .numero_verso').attr('transform', 'translate(-5, 0)');

	superior_left = '16';
	superior_left_verso = '14';
	$('#aguarde').css('background-color', 'gray');
	<!-- END FUTEBOL_MASCULINO_3_AJUSTES -->
	<!-- BEGIN FUTEBOL_MASCULINO_ML_AJUSTES -->
	$('#box_manequim .modelo .engloba_'+peca_inferior).css('top', '289px');
	$('.manequim .detalhe').css('top', '632px');
	$('.manequim_verso .detalhe').css('top', '646px');

	// goleiro
	$('.luva_goleiro').css({'top': '295px'});
	<!-- END FUTEBOL_MASCULINO_ML_AJUSTES -->
	<!-- BEGIN FUTEBOL_FEMININO_AJUSTES -->
	$('.manequim .box_previewNome, .manequim .patrocinio_baixo').remove();
	$('.manequim_verso .engloba_'+peca_inferior+' .box_previewNumero, .manequim_verso .detalhes_'+peca_superior+' .golas, .manequim_verso .logo, .manequim_verso .selo').remove();
	$('.engloba_'+peca_inferior+' .textura').css('height', '110px');
	$('.manequim .detalhe').css('top', '618px');
	$('.manequim_verso .detalhe').css('top', '625px');
	$('.manequim .engloba_'+peca_inferior).css('top', '278px');
	$('.manequim_verso .engloba_'+peca_inferior).css('top', '277px');
	if (goleiro == 1)
		$('.luva_goleiro').css('top', '275px');
	<!-- END FUTEBOL_FEMININO_AJUSTES -->
	<!-- BEGIN FUTEBOL_INFANTIL_AJUSTES -->
	$('.manequim .engloba_'+peca_inferior).css('top', '271px');
	$('.manequim .engloba_'+peca_acessorio).css('height', '198px');
	$('.manequim .engloba_'+peca_acessorio+' .textura').css('top', '-1px');
	$('.manequim_verso .engloba_'+peca_acessorio).css({'height': '182px', 'top': '480px'});
	$('.manequim .detalhe').css('top', '590px');
	$('.manequim_verso .detalhe').css('top', '607px');
	if (goleiro == 1)
		$('.luva_goleiro').css('top', '295px');
	<!-- END FUTEBOL_INFANTIL_AJUSTES -->
	<!-- BEGIN BASQUETE_MASCULINO_AJUSTES -->
	$('.manequim .detalhe').css('top', '572px');
	$('.manequim_verso .detalhe').css('top', '575px');
	$('.escudo_superior svg').css('left', '110px');
	$('.escudo_inferior svg').css('left', '150px');
	$('.engloba_'+peca_superior).css('z-index', '5');
	$('.engloba_'+peca_inferior).css('top', '300px');
	$('.linha_cores[rel=gola]').find('.caixa_opc').eq(0).find('.titulo_opc').html('Cor');
	$('.linha_cores[rel=gola]').find('.caixa_opc').eq(1).hide();
	$('#meio .lateral #menu_principal li').css('width', '25%');
	$('.setas_modelos .esquerda, .setas_modelos .direita').css('filter', 'invert(100%)');
	$('#menu_principal li:contains("Selo")').hide();
	$('.manequim .detalhe, .manequim_verso .detalhe').css('top', '545px');
	$('.ipt-textNum[rel="previewNum"]').val('23');
	preencheAtributo('superior','numero','23',1);
	preencheAtributo('inferior','numero','23',1);
	//icones
	$('#nome-baixo').css('background-position', '-625px -5px');
	$('#nome-cima').css('background-position', '-690px -5px');
	$('#numero-frente-centro').css('background-position', '-445px -5px');
	$('#numero-frente-direita').css('background-position', '-505px -5px');
	$('#numero-frente-esquerda').css('background-position', '-565px -5px');
	$('#numero-direita').css('background-position', '-450px -115px');
	$('#numero-esquerda').css('background-position', '-530px -115px');
	$('.previewNumero, .lista-fontes[rel*="numero"] .fonte').html('23');
	<!-- END BASQUETE_MASCULINO_AJUSTES -->
	<!-- BEGIN BASQUETE_FEMININO_AJUSTES -->
	$('.setas_modelos').css('top', '130px');
	$('#box_manequim').css('padding', '0 20px');
	$('.manequim .engloba_'+peca_inferior).css('top', '203px');
	$('.manequim_verso .engloba_'+peca_inferior).css({'top':'208px'});
	$('.manequim .detalhe').css('top', '535px');
	$('.manequim_verso .detalhe').css('top', '550px');
	$('.ipt-textNum[rel="previewNum"]').val('23');
	preencheAtributo('superior','numero','23',1);
	preencheAtributo('inferior','numero','23',1);
	//icones
	$('#nome-baixo').css('background-position', '-625px -5px');
	$('#nome-cima').css('background-position', '-690px -5px');
	$('#numero-frente-centro').css('background-position', '-445px -5px');
	$('#numero-frente-direita').css('background-position', '-505px -5px');
	$('#numero-frente-esquerda').css('background-position', '-565px -5px');
	$('#numero-direita').css('background-position', '-450px -115px');
	$('#numero-esquerda').css('background-position', '-530px -115px');
	$('.previewNumero, .lista-fontes[rel*="numero"] .fonte').html('23');
	<!-- END BASQUETE_FEMININO_AJUSTES -->
	<!-- BEGIN VOLEI_MASCULINO_AJUSTES -->
	$('.manequim .box_previewNome, .manequim .patrocinio_baixo, .manequim .golas_costas').remove();
	$('.manequim_verso .golas, .manequim_verso .logo, .manequim_verso .selo').remove();
	$('.manequim .detalhe').css('top', '545px');
	$('.manequim_verso .detalhe').css('top', '565px');
	$('.fundos .engloba_'+peca_inferior).css('top','258px');
	$('.fundos .engloba_'+peca_superior).css('z-index','5');
	$('.manequim .engloba_'+peca_inferior).css('left', '-1px');
	<!-- END VOLEI_MASCULINO_AJUSTES -->
	<!-- BEGIN VOLEI_FEMININO_AJUSTES -->
	$('.fundos .engloba_'+peca_inferior).css('top','297px');
	$('.manequim_verso .fundos .engloba_'+peca_inferior).css('top','293px');
	$('.manequim .detalhe').css('top', '565px');
	$('.manequim_verso .detalhe').css('top', '592px');
	<!-- END VOLEI_FEMININO_AJUSTES -->
	<!-- BEGIN RUNNING_MASCULINO_AJUSTES -->
	$('.setas_modelos .box_bloqueio').css('margin', '70px 0');
	$('#box_manequim .modelo .engloba_inferior').css('top', '295px');
	<!-- END RUNNING_MASCULINO_AJUSTES -->
	<!-- BEGIN RUNNING_FEMININO_AJUSTES -->
	$('.setas_modelos .box_bloqueio').css('margin', '70px 0');
	$('#box_manequim .modelo .engloba_inferior').css('top', '295px');
	<!-- END RUNNING_FEMININO_AJUSTES -->
	<!-- BEGIN HANDEBOL_MASCULINO_AJUSTES -->
	$('.manequim .golas_verso').remove();
	$('.manequim .detalhe').css('top', '570px');
	$('.manequim_verso .detalhe').css('top', '590px');
	<!-- END HANDEBOL_MASCULINO_AJUSTES -->
	<!-- BEGIN HANDEBOL_FEMININO_AJUSTES -->
	$('.manequim .golas_verso, .manequim_verso .fundo_gola').remove();
	$('.manequim .detalhe').css('top', '560px');
	$('.manequim_verso .detalhe').css('top', '570px');
	<!-- END HANDEBOL_FEMININO_AJUSTES -->
	<!-- BEGIN CICLISMO_AJUSTES -->
	$('.manequim .detalhe, .manequim_verso .detalhe').css('top', '560px');
	<!-- END CICLISMO_AJUSTES -->
	<!-- BEGIN ARTES_MARCIAIS_AJUSTES -->
	$('.flex[data-ancora="nome_verso"] .ipt-tamNum').val(28);
	tamFonte(28, 'nome_verso');
	//icones
	$('#nome-baixo').css('background-position', '-755px -5px');
	$('#nome-cima').css('background-position', '-755px -60px');
	$('.texto_superior nav[data-ancora="nome_verso"]').css('margin','0 auto');
	<!-- END ARTES_MARCIAIS_AJUSTES -->
	<!-- BEGIN MACHAO_AJUSTES -->
	$('#box_manequim').css('padding', '0 10px 0 17px');
	<!-- END MACHAO_AJUSTES -->
	<!-- BEGIN REGATA_MASCULINO_AJUSTES -->
	$('#box_manequim').css('padding', '0 8px 0 15px');
	$('.setas_modelos').css('top', '150px');
	<!-- END REGATA_MASCULINO_AJUSTES -->
	<!-- BEGIN REGATA_FEMININO_AJUSTES -->
	<!-- END REGATA_FEMININO_AJUSTES -->
	<!-- BEGIN FITNESS_AJUSTES -->
	$('#box_manequim .modelo .engloba_'+peca_inferior).css({'top': '185px', 'z-index': '1'});
	$('.manequim .detalhe').css({'top': '570px', 'left': '21px'});
	$('.manequim_verso .detalhe').css({'top': '588px', 'left': '18px'});
	<!-- END FITNESS_AJUSTES -->
	<!-- BEGIN BONE_AJUSTES -->
	$('.opcao_pers[rel="superior-escudo-esquerda_2"]').remove();
	$('.opcao_pers[rel="superior-escudo-esquerda"]').html('<figure class="icone" id="escudo-esquerda_bone"></figure>');
	$('#escudo-esquerda_bone').css({'width': '100px', 'height': '90px', 'background-position': '-355px -395px'});
	$('.opcao_pers[rel="superior-escudo-direita"]').html('<figure class="icone" id="escudo-direita_bone"></figure>');
	$('#escudo-direita_bone').css({'width': '100px', 'height': '90px', 'background-position': '-245px -395px'});
	$('.opcao_pers[rel="superior-escudo-centro"]').html('<figure class="icone" id="escudo-centro_bone"></figure>');
	$('#escudo-centro_bone').css({'width': '100px', 'height': '90px', 'background-position': '-135px -395px'});

	$('.opcao_pers[rel="superior-escudo-direita"]').detach().insertAfter('.opcao_pers[rel="superior-escudo-esquerda"]');
	$('.lista_opcoes[rel="escudo_superior"] li').css('padding', '10px');
	$('.edicao_patrocinios .conteudo_edicao[rel="superior"] .box_cores').remove();

	var svg_ico =   '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.6 55.7" enable-background="new 0 0 53.6 55.7" xml:space="preserve" height="55.7px">' +
						'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
						'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
						'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
						'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
						'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
						'C1.3,36.8,1,36.5,0.7,36.5"/>' +
						'<text x="50%" y="60%" font-size="55px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
					'</svg>';
	$('.opcao[rel="edicao_texto"] .ico-lista_edicao').html(svg_ico);
	$('.opcao[rel="edicao_patrocinios"] .ico-lista_edicao svg g *').not('.icone-escudo').remove();
	$('.opcao[rel="edicao_patrocinios"] .ico-lista_edicao svg path').css('transform', 'scale(3) translate(-45px, -9px)');

	var svg_bone =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
						'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
						'<path fill="var(--cor-destaque)" d="M3.563,286.501c-0.487,16.538,0.778,33.082,3.776,49.354c1.575,9.982,7.31,18.828,15.78,24.34' +
						'c9.75,4.832,20.872,6.137,31.476,3.693c15.611-2.014,31.14-3.021,47.003-3.777c12.758,16.787,62.867,76.381,145.962,83.935' +
						'c95.685,8.394,76.212-37.687,165.603-50.36c49.689-7.051,68.91,4.197,70.924,5.54c3.494,2.275,7.748,3.067,11.828,2.202' +
						'c4.078-0.867,7.645-3.32,9.91-6.818c4.322-6.428,3.402-15.029-2.182-20.396c-16.787-16.031-53.885-38.861-95.938-69.246' +
						'c-1.846-16.871-11.078-84.605-46.164-134.966c-37.434-53.634-106.511-70.673-147.387-76.044' +
						'c-4.701-39.869-70.086-33.574-67.148,5.54C57.7,128.032,3.73,190.815,3.563,286.501z" style="transform: scale(0.07) translate(120px, 75px);"/>' +
					'</svg>';
	$('#box_edicao .edicao_modelos .cabecalho svg').remove();
	$('#box_edicao .edicao_modelos .cabecalho').prepend(svg_bone);
	var svg_texto =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
						'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
						'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
						'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
						'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
						'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
						'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
						'C1.3,36.8,1,36.5,0.7,36.5" style="transform: scale(0.55) translate(20px, 18px);"/>' +
						'<text x="50%" y="55%" font-size="25px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
					'</svg>';
	$('#box_edicao .edicao_texto .cabecalho svg').remove();
	$('#box_edicao .edicao_texto .cabecalho').prepend(svg_texto);
	$('#box_edicao .edicao_patrocinios .cabecalho svg g *').not('.icone-escudo, .icone-circle').remove();
	$('#box_edicao .edicao_patrocinios .cabecalho svg .icone-escudo').css('transform', 'scale(4) translate(-23.4px, -12.5px)');
	$('#box_edicao .edicao_texto .personalizar_posicao').css({'border-top': 'none', 'padding-top': '0'});

	$('.escudo svg').attr({'width': '55px', 'height': '63px'});
	$('.ipt-tamNum').val(17);
	tamFonte('17', 'nome_frente');
	tamFonte('17', 'nome_verso');
	<!-- END BONE_AJUSTES -->
	<!-- BEGIN AGASALHO_AJUSTES -->
	$('#box_manequim').css('padding', '0 20px');
	$('.engloba_'+peca_superior).css('z-index', '2');
	$('.engloba_'+peca_inferior).css('z-index', '1');
	$('.manequim .engloba_'+peca_inferior).css('top', 265);
	$('.manequim_verso .engloba_'+peca_inferior).css('top', 255).css('left', '-2px');
	$('.manequim .detalhe').css('top', '610px').css('z-index', '0');
	$('.manequim_verso .detalhe').css('top', '615px').css('z-index', '0');
	$('.opcao[rel="edicao_mangas"]').remove();
	$('.cores_superior .cores_linha').append($('.edicao_mangas  .box_cores-linha'));
	$('.ipt-tamNum').val(20);
	//icones
	$('#lista_edicao #ico-modelos').attr('id', 'ico-modelos_agasalho');
	$('#nome-baixo').css('background-position', '-755px -5px');
	$('#nome-cima').css('background-position', '-755px -60px');
	$('.texto_superior nav[data-ancora="nome_verso"]').css('margin','0 auto');
	tamFonte(20, 'nome_verso');
	$('.opcao_pers svg .icone-num').remove();
	<!-- END AGASALHO_AJUSTES -->
	<!-- BEGIN CICLISMO_MASCULINO_AJUSTES -->
	$('#box_manequim .modelo div[data-parte=superior]').css('z-index','1');
	$('.manequim .engloba_'+peca_inferior).css({'top':'255px', 'z-index':'0'});
	$('.manequim_verso .engloba_'+peca_inferior).css({'top':'272px', 'z-index':'0'});
	$('.manequim .detalhe').css('top', '545px');
	$('.manequim_verso .detalhe').css('top', '565px');
	<!-- END CICLISMO_MASCULINO_AJUSTES -->
	<!-- BEGIN CICLISMO_FEMININO_AJUSTES -->
	$('#box_manequim').css('padding','0 5px 0 10px');
	$('#box_manequim .modelo div[data-parte=superior]').css('z-index','1');
	$('.manequim .engloba_'+peca_inferior).css({'top':'255px', 'z-index':'0'});
	$('.manequim_verso .engloba_'+peca_inferior).css({'top':'262px', 'z-index':'0'});
	$('.manequim .detalhe').css({'top':'530px', 'left':'7.5px'});
	$('.manequim_verso .detalhe').css({'top':'536px', 'left':'10px'});
	<!-- END CICLISMO_FEMININO_AJUSTES -->
	<!-- BEGIN MASCARA_AJUSTES -->
	$('.lista_camadas[rel="cor_pele"] .cor_camada').click();
	$('.lista_camadas[rel="cor_pele"] .paleta_cores .cor').eq(0).click();
	$('.box_ipt-texto .ipt-texto').attr('rel', 'previewNome_1');
	$('.box_ipt-texto').append('<input type="text" placeholder="Digite seu nome aqui" class="ipt-texto" maxlength="16" rel="previewNome_2"/>');
	$('.box_ipt-texto').append('<input type="text" placeholder="Digite seu nome aqui" class="ipt-texto" maxlength="16" rel="previewNome_3"/>');

	if (typeof arr_simulacao == 'undefined') {
		preencheAtributo('superior','nome_frente_texto_1','',1);
		preencheAtributo('superior','nome_frente_texto_2','',1);
		preencheAtributo('superior','nome_frente_texto_3','',1);
	}

	$('.manequim_esquerda .detalhes_'+peca_superior+' g[class^="box_previewNome"]').hide();
	$('label[for="ipt-posicao_direita"]').click();
	$('.ipt-tamNum').val(26);
	tamFonte(26, 'nome_frente');	
	$('#lista_edicao #ico-modelos').attr('id', 'ico-modelos_mascara');

	var svg_mascara =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
							'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
							'<g style="transform: translate(15px, 10px);">' +
								'<path fill="var(--cor-destaque)" d="M0.1,13l1.2,3.7c0.3,0.9,1.1,1.5,2,1.5c0.5,0,0.9,0,1.3,0c0.2,0,0.3,0,0.5,0.1L9.5,15' +
								'c-0.1-0.1-0.2-0.2-0.3-0.3l-2.7,1.8l-0.6-0.9l2.8-1.9c0,0,0-0.1,0-0.1l-2.3,0.8l-0.3-1l2.4-0.8c0-0.1,0-0.2,0-0.3H6.1v-1.1h2.5' +
								'l0-0.1l-7.3-1l-0.7,0.7C0.1,11.4-0.1,12.3,0.1,13z"/>' +
								'<path fill="var(--cor-destaque)" d="M9.8,11.1l-0.2,0.7c-0.3,0.9,0,1.9,0.7,2.4l3-4.6L9.8,11.1z"/>' +
								'<path fill="var(--cor-destaque)" d="M15.7,18.1c-1.9-3.3,0.2-7.2,0.7-9.9S15.6,0.1,9.6,0C6.1-0.1,2.8,1.9,1.2,5l0.5,0.5' +
								'C1.4,6.6,1.6,8.2,1.7,9.1l7.5,1.1l5.2-2.1l0.2,0.5l0.4,0.3l-4.3,6.4h0c0,0.1-0.1,0.1-0.1,0.1l-4.5,3.4C7,20,6,22.4,5.3,23.9' +
								'c-0.8,2-1.5,4-2.1,6.1h17.4C19.6,21.7,17.6,21.4,15.7,18.1z"/>' +
							'</g>' +
						'</svg>';
	$('#box_edicao .edicao_modelos .cabecalho svg').remove();
	$('#box_edicao .edicao_modelos .cabecalho').prepend(svg_mascara);
	var svg_ico =   '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.6 55.7" enable-background="new 0 0 53.6 55.7" xml:space="preserve" height="55.7px">' +
						'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
						'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
						'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
						'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
						'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
						'C1.3,36.8,1,36.5,0.7,36.5"/>' +
						'<text x="50%" y="60%" font-size="55px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
					'</svg>';
	$('.opcao[rel="edicao_texto"] .ico-lista_edicao').html(svg_ico);
	$('.opcao[rel="edicao_patrocinios"] .ico-lista_edicao svg g *').not('.icone-escudo').remove();
	$('.opcao[rel="edicao_patrocinios"] .ico-lista_edicao svg path').css('transform', 'scale(3) translate(-45px, -9px)');
	var svg_texto =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
						'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
						'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
						'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
						'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
						'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
						'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
						'C1.3,36.8,1,36.5,0.7,36.5" style="transform: scale(0.55) translate(20px, 18px);"/>' +
						'<text x="50%" y="55%" font-size="25px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
					'</svg>';
	$('#box_edicao .edicao_texto .cabecalho svg').remove();
	$('#box_edicao .edicao_texto .cabecalho').prepend(svg_texto);

	$('#opcoes_angulos').remove();
	$('#box_edicao .edicao_texto .personalizar_posicao').css({'border-top': 'none', 'padding-top': '0'});
	$('#box_edicao .edicao_texto .lista-fontes').css({'width': '-webkit-fill-available', 'flex': 'none'});
	$('.box_cores-linha[rel="pele"]').css('padding', '0');
	<!-- END MASCARA_AJUSTES -->
	<!-- BEGIN PESCA_AJUSTES -->
	var ico_texto = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.6 55.7" enable-background="new 0 0 53.6 55.7" xml:space="preserve" height="55.7px">' +
							'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
							'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
							'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
							'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
							'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
							'C1.3,36.8,1,36.5,0.7,36.5"/>' +
							'<text x="50%" y="60%" font-size="55px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
						'</svg>';
	$('.opcao[rel="edicao_texto"] .ico-lista_edicao').html(ico_texto);
	var svg_texto =  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.4 51.4" enable-background="new 0 0 51.4 51.4" xml:space="preserve" height="51.4px">' +
						'<circle fill="none" stroke="var(--cor-destaque)" stroke-width="2" stroke-miterlimit="10" cx="25.7" cy="25.7" r="24.7"></circle>' +
						'<path fill="var(--cor-destaque)" d="M0.7,19.2c-0.4,0-0.7-0.3-0.7-0.7V0.7C0,0.3,0.3,0,0.7,0h16.1c0.4,0,0.7,0.3,0.7,0.7' +
						'c0,0.4-0.3,0.7-0.7,0.7H1.3v17.2C1.3,18.9,1,19.2,0.7,19.2 M52.9,19.2c0.4,0,0.7-0.3,0.7-0.7V0.7c0-0.4-0.3-0.7-0.7-0.7L36.8,0' +
						'c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h15.5v17.2C52.3,18.9,52.6,19.2,52.9,19.2 M52.9,36.5c-0.4,0-0.7,0.3-0.7,0.7v17.2' +
						'H36.8c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7V37.2C53.6,36.8,53.3,36.5,52.9,36.5 M0.7,36.5' +
						'c-0.4,0-0.7,0.3-0.7,0.7V55c0,0.4,0.3,0.7,0.7,0.7h16.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H1.3V37.2' +
						'C1.3,36.8,1,36.5,0.7,36.5" style="transform: scale(0.55) translate(20px, 18px);"/>' +
						'<text x="50%" y="55%" font-size="25px" font-family="serif" fill="var(--cor-destaque)" dominant-baseline="middle" text-anchor="middle">T</text>' +
					'</svg>';
	$('#box_edicao .edicao_texto .cabecalho svg').remove();
	$('#box_edicao .edicao_texto .cabecalho').prepend(svg_texto);
	<!-- END PESCA_AJUSTES -->

	if (mostrar_textos == 1) {
		$('.edicao_texto .lista_camadas[rel="texto_drag"] .cor_camada').click();
		$('.edicao_texto .lista_camadas[rel="texto_drag"] .paleta_cores .cor[alt="preto"]').click();
		$('.edicao_texto .lista_camadas[rel="texto_drag_borda"] .cor_camada').click();
		$('.edicao_texto .lista_camadas[rel="texto_drag_borda"] .paleta_cores .cor[id-cor="sem_cor"]').click();
	}

	dimensoesCanvas();
	configInicial();
}

function carregarStatus(arrayCarregar){
	var permanece = 0;
	preenchimento_habilitado = 0;
	carregando_status = 1;

	if (mudou_cor == 0)
		permanece = 1;

	if (esperando_desenhos == 0) {
		for (var i=0; i < Object.keys(arrayCarregar).length; i++) {
			if (Object.values(Object.keys(arrayCarregar[Object.keys(arrayCarregar)[i]])).includes('cod_modelo')) {
				esperando_desenhos = 1;

				if (arrayCarregar[Object.keys(arrayCarregar)[i]]['cod_modelo'] != '') {
					if (arrayCarregar[Object.keys(arrayCarregar)[i]]['cod_modelo'] != $('.setas_modelos .peca_'+Object.keys(arrayCarregar)[i]+' .cod_modelo').html()) {
						if (Object.keys(arrayCarregar)[i] == 'superior' && modelo_conjunto == 1 && arrayStatus.length < 2) {
							var modelo_inferior = arrayCarregar['inferior']['cod_modelo'];

							if (arrayCarregar[Object.keys(arrayCarregar)[i]]['cod_modelo'] != modelo_inferior) {
								travado = 0;
								$('.ipt-checkbox[for="ipt-sincronizar"]').click();
							}
						}

						trocaModelo($('.opcao_pers[rel="'+Object.keys(arrayCarregar)[i]+'-cod_modelo-'+arrayCarregar[Object.keys(arrayCarregar)[i]]['cod_modelo']+'"]').attr('data-tipo'), $('.opcao_pers[rel="'+Object.keys(arrayCarregar)[i]+'-cod_modelo-'+arrayCarregar[Object.keys(arrayCarregar)[i]]['cod_modelo']+'"]').attr('data-i'));
					}
					else {
						carregarStatus(arrayCarregar);
					}
				}
				else if (arrayPecas.length < 2) {
					carregarStatus(arrayCarregar);
					$('.cores_'+Object.keys(arrayCarregar)[i]+' .lista_camadas').eq(0).find('.cor_camada:not([rel=""])').hide();
				}
			}
		}
	}
	else {
		var manequim_ativo = (typeof $('div[class^="manequim"].ativo').attr('class') != 'undefined') ? $('div[class^="manequim"].ativo').attr('class').split(' ') : 'manequim';
		var posicao_modelo = manequim_ativo[0];
		for (var i=0; i < Object.keys(arrayCarregar).length; i++) {
			for (var j=0; j < Object.keys(arrayCarregar[Object.keys(arrayCarregar)[i]]).length; j++) {
				var parte = Object.keys(arrayCarregar)[i];
				var chave = Object.keys(arrayCarregar[Object.keys(arrayCarregar)[i]])[j];
				var valor = arrayCarregar[Object.keys(arrayCarregar)[i]][Object.keys(arrayCarregar[Object.keys(arrayCarregar)[i]])[j]];

				if (chave != 'cod_modelo') {
					if (parte == 'superior') 
						var peca = peca_superior;
					else if (parte == 'inferior') 
						var peca = peca_inferior;
					else if (parte == 'acessorio') 
						var peca = peca_acessorio;
					else 
						var peca = parte;

					if (chave.indexOf('drag_texto_') == 0) {
						var a_valores = chave.split('_');
						var lado = (a_valores[3] == undefined) ? '' : '_'+a_valores[3];
						var num_texto = a_valores[2];

						if (typeof arr_simulacao != 'undefined' && $('#item_drag-'+num_texto).length == 0 && valor != '') {
							var texto = valor;
							$('.conteudo_edicao[rel="ferramenta_texto"] #info-texto').show();
							$('.edicao_texto .ipt-texto').attr('rel', 'item_drag').css('text-transform', 'unset');

							var icamada_ultimo;
							if ($('.manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').length > 0) {
								icamada_ultimo = $('#lista_lados .manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').last().css('z-index');
								$(texto).insertAfter($('#lista_lados .manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').last());
								$('#item_drag-'+num_texto).css('z-index', icamada_ultimo).attr('data-camada', icamada_ultimo);
							}
							else {
								var h_peca = $('#lista_lados .manequim'+lado+' .engloba_'+peca+' .fundos-svgs').height();
								var link_mask = eval('link_molde_'+parte+lado);
								var config_drag = link_mask;
								var style_drag = 'position: absolute; width: 100%; height: '+h_peca+'px; left: 0; right: 0; margin: 0 auto; z-index: 3; -webkit-mask-image: url('+config_drag+'); -webkit-mask-position: center center; -webkit-mask-repeat: no-repeat;';
								var html_mask = '<div id="mask_upload_'+peca+lado+'" data-config="'+config_drag+'" style="'+style_drag+'"></div>';
								$('#lista_lados .manequim'+lado+' .engloba_'+peca).prepend(html_mask);
								$('#lista_lados .manequim'+lado+' .engloba_'+peca+' #mask_upload_'+peca+lado).prepend(texto);
								$('#lista_lados #item_drag-'+num_texto).css('z-index', icamada).attr('data-camada', icamada);
							}

							$('div[id^="item_drag-"], div[id^="item_drag-"] *').css('pointer-events', 'auto');
							$('.text_drag:first').find('.texto').click();
							$('.text_drag').removeClass('ativo selecionado');
							$('.text_drag *:not(.texto)').hide();
							var texto = $('#item_drag-'+num_texto+' .texto').html();
							var li_lista = 	'<li rel="item_drag-'+num_texto+'" data-lado="'+chave+'">' +
												'<div class="bt_selecionar ativo">Selecionado</div>' +
												'<span class="texto">'+texto+'</span>' +
												'<div class="remover">X</div>' +
											'</li>';
							$('.lista_textos').append(li_lista);

							var matrix = $('#item_drag-'+num_texto).css('transform');
							if (matrix !== 'none') {
								var values = matrix.split('(')[1].split(')')[0].split(',');
								var a = values[0];
								var b = values[1];
								var radians = Math.atan2(b, a);
							}

							iniciaFerramentasDrag('texto', num_texto, radians);
						}
					}
					else if (chave.indexOf('drag_upload_') == 0) {
						var a_valores = chave.split('_');
						var lado = (a_valores[3] == undefined) ? '' : '_'+a_valores[3];
						var num_upload = a_valores[2];

						if (typeof arr_simulacao != 'undefined' && $('#item_drag-'+num_upload).length == 0 && valor != '') {
							var upload = valor;

							var icamada_ultimo;
							if ($('.manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').length > 0) {
								icamada_ultimo = $('#lista_lados .manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').last().css('z-index');
								$(upload).insertAfter($('#lista_lados .manequim'+lado+' #mask_upload_'+peca+lado+' div[id^="item_drag-"]').last());
								$('#item_drag-'+num_upload).css('z-index', icamada_ultimo).attr('data-camada', icamada_ultimo);
							}
							else {
								var h_peca = $('#lista_lados .manequim'+lado+' .engloba_'+peca+' .fundos-svgs').height();
								var link_mask = eval('link_molde_'+parte+lado);
								var config_drag = link_mask;
								var style_drag = 'position: absolute; width: 100%; height: '+h_peca+'px; left: 0; right: 0; margin: 0 auto; z-index: 3; -webkit-mask-image: url('+config_drag+'); -webkit-mask-position: center center; -webkit-mask-repeat: no-repeat;';
								var html_mask = '<div id="mask_upload_'+peca+lado+'" data-config="'+config_drag+'" style="'+style_drag+'"></div>';
								$('#lista_lados .manequim'+lado+' .engloba_'+peca).prepend(html_mask);
								$('#lista_lados .manequim'+lado+' .engloba_'+peca+' #mask_upload_'+peca+lado).prepend(upload);
								$('#lista_lados #item_drag-'+num_upload).css('z-index', icamada).attr('data-camada', icamada);
							}
							$('div[id^="item_drag-"], div[id^="item_drag-"] *').css('pointer-events', 'auto');

							var matrix = $('#item_drag-'+num_upload).css('transform');
							if (matrix !== 'none') {
								var values = matrix.split('(')[1].split(')')[0].split(',');
								var a = values[0];
								var b = values[1];
								var radians = Math.atan2(b, a);
							}

							iniciaFerramentasDrag('imagem', num_upload, radians);
						}
					}
					else if (chave.indexOf('nome') != -1) {
						if (chave == 'nome') {
							if (valor == 'sem') {
								$('#ipt-nome').prop('checked', false);
								$('.ipt-checkbox[for="ipt-nome"]').removeClass('ativo');
								$('.previewNome').hide();
								$('.lista_opcoes[rel="posicao_nome"] .opcao[rel="'+$('#posicao_nome').val()+'"]').removeClass('ativo');
								$('*[rel*="nome"], *[data-ancora*="nome"]').not('.ipt-checkbox').css({'pointer-events': 'none', 'opacity': 0.7});
							}
							else if (valor == 'com') {
								$('#ipt-nome').prop('checked', true);
								$('.ipt-checkbox[for="ipt-nome"]').addClass('ativo');
								$('.previewNome').show();
								$('.lista_opcoes[rel="posicao_nome"] .opcao[rel="'+$('#posicao_nome').val()+'"]').addClass('ativo');
								$('*[rel*="nome"], *[data-ancora*="nome"]').css({'pointer-events': 'auto', 'opacity': 1});
							}
						}
						else if (chave.indexOf('_texto') > -1) {
							chave_ancora = chave.split('_texto');

							if ($('.flex[data-ancora="'+chave_ancora[0]+'"] .ipt-texto').length > 1) {
								if (chave_ancora[1] == '_2') {
									$('.'+chave_ancora[0]+' .previewNome[id="_2"]').html(valor);
									$('.flex[data-ancora="'+chave_ancora[0]+'"] .ipt-texto[rel="previewNome_2"]').val(valor);
								}
								else if (chave_ancora[1] == '_3') {
									$('.'+chave_ancora[0]+' .previewNome[id="_3"]').html(valor);
									$('.flex[data-ancora="'+chave_ancora[0]+'"] .ipt-texto[rel="previewNome_3"]').val(valor);
								}
								else {
									$('.'+chave_ancora[0]+' .previewNome[id="_1"]').html(valor);
									$('.flex[data-ancora="'+chave_ancora[0]+'"] .ipt-texto[rel="previewNome_1"]').val(valor);
								}

								if (iStatus == 0 && typeof arr_simulacao !== undefined && valor.trim() != '')
									texto = 1;
							}
							else {
								chave = chave.replace('_texto', '');
								$('.'+chave+' .previewNome').html(valor);
								$('.flex[data-ancora="'+chave+'"] .ipt-texto').val(valor);
							}

							var i_ipt_texto = 0;
							$('.ipt-texto').each(function(x){
								var tot_ipt_texto = $(this).parent().find('.ipt-texto').length;
								if ($(this).val().trim() == '')
									i_ipt_texto++;

								if (i_ipt_texto == tot_ipt_texto)
									texto = 0;
								else 
									texto = 1;
							});
						}
						else if (chave.indexOf('_fonte') > -1) {
							chave = chave.replace('_fonte', '');
							if (chave.indexOf('_tamanho') > -1) {
								chave = chave.replace('_tamanho', '');
								$('.flex[data-ancora="'+chave+'"] .ipt-tamNum').val(valor);
								tamFonte(valor, chave);
							}
							else {
								$('.lista-fontes[rel="'+chave+'"] .fonte').hide();
								$('.lista-fontes[rel="'+chave+'"] .fonte[data-nome="'+valor+'"]').css('display', 'list-item');
								mudaFonte(chave, valor);
							}
						}
						else if (chave.indexOf('cor') != -1) {
							if (valor == '' && chave.indexOf('borda') != -1)
								valor = 'sem_cor';

							$('.lista_camadas[rel="'+chave+'"][data-peca="'+peca+'"] .cor_camada').click();
							$('.lista_camadas[rel="'+chave+'"][data-peca="'+peca+'"] .paleta_cores .cor[id-cor="'+valor+'"]').click();
						}
						else if (chave.indexOf('_posicao') != -1 && $('.personalizar_posicao').length) {
							chave_lado = chave.replace('nome_', '').replace('_posicao', '');
							$('#ipt-posicao_'+valor+'-'+chave_lado).click();
						}
						else {
							$('.opcao_pers[rel="'+parte+'-'+chave+'-'+valor+'"]').click();
						}
					}
					else if (chave.indexOf('numero') != -1 && chave.indexOf('cor') == -1) {
						if (parte == 'superior') {
							if (chave == 'numero') {
								if (valor == 'sem') {
									$('.detalhes_'+peca_superior+' *[class^="numero"]').hide();
									$('.conteudo_edicao[data-parte="superior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events': 'none', 'opacity': 0.7});
									$('.conteudo_edicao[data-parte="superior"] .ipt-checkbox[rel="numero"]').removeClass('ativo');
									$('.conteudo_edicao[data-parte="superior"] #ipt-numero').prop('checked', false);	
								}
								else {
									$('.detalhes_'+peca_superior+' *[class^="numero"]:not(.numero_frente)').show();
									$('.conteudo_edicao[data-parte="superior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events': 'auto', 'opacity': 1});
									$('.conteudo_edicao[data-parte="superior"] .box_selecao[rel="numero_frente"] .selecao, .personalizar_numero').removeAttr('style');
									$('.conteudo_edicao[data-parte="superior"] .ipt-checkbox[rel="numero"]').addClass('ativo');
									$('.conteudo_edicao[data-parte="superior"] #ipt-numero').prop('checked', true);
									$('svg[class^="detalhes_"] .previewNumero').html(valor);
								}	
							}

							if (chave == 'numero_fonte') {
								$('.conteudo_edicao[data-parte="superior"] .lista-fontes[rel="numero"] .fonte').hide();
								$('.conteudo_edicao[data-parte="superior"] .lista-fontes[rel="numero"] .fonte[data-nome="'+valor+'"]').css('display', 'list-item');
								i_fonte_numero = $('.conteudo_edicao[data-parte="superior"] .lista-fontes[rel="numero"] .fonte[data-nome="'+valor+'"]').index();
								var num_tam = $('.conteudo_edicao[data-parte="superior"] .lista-fontes[rel="numero"] .fonte[data-nome="'+valor+'"]').attr('rel');
								mudaFonte('numero', valor, num_tam);
							}
							else if (chave == 'numero_frente') {
								if (valor == 'sem') {
									$('.selecao[rel^="superior-numero_frente-"]').removeClass('marcado');
									$('.detalhes_'+peca_superior+' .numero_frente').hide();

									if ( $('#escudo_superior').val() != 'centro' && $('#escudo_superior').val() != 'esquerda_2' && $('.manequim .engloba_'+peca_superior+' .logo').length ) {
										var lado_escudo = $('#escudo_superior').val();
										var lado_logo = (lado_escudo == 'direita') ? 'esquerda' : 'direita';
										$('.manequim .engloba_'+peca_superior+' .logo').css({'left':eval('logo_superior_'+lado_logo+'_x')+'px', 'top':eval('logo_superior_'+lado_logo+'_y')+'px'});
										if (esporte_dir == 'futebol_masculino_3')
											$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
										else
											$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
									}
								}
								else {
									$('.selecao[rel="superior-numero_frente-'+valor+'"]').click();
								}
							}
							else if (chave.indexOf('tamanho') > -1) {
								if (chave.indexOf('frente') == -1) {
									chave = chave.replace('_fonte_tamanho', '');
									$('.flex[data-ancora="'+chave+'"] .ipt-tamNum').val(valor);
									tamFonte(valor, chave);
								}
							}
							else {
								$('.opcao_pers[rel="'+parte+'-'+chave+'-'+valor+'"]').click();
							}
						}	
						else if (parte == 'inferior') {
							if (chave == 'numero') {
								if (valor == 'com') {
									$('.detalhes_'+peca_inferior+' *[class^="numero"]').show();
									$('.conteudo_edicao[data-parte="inferior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events': 'auto', 'opacity': 1});
									$('.conteudo_edicao[data-parte="inferior"] .ipt-checkbox[rel="numero"]').addClass('ativo');
									$('.conteudo_edicao[data-parte="inferior"] #ipt-numero_inferior').prop('checked', true);
								}
								else if (valor == 'sem') {
									$('.detalhes_'+peca_inferior+' *[class^="numero"]').hide();
									$('.conteudo_edicao[data-parte="inferior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events': 'none', 'opacity': 0.7});
									$('.conteudo_edicao[data-parte="inferior"] .ipt-checkbox[rel="numero"]').removeClass('ativo');
									$('.conteudo_edicao[data-parte="inferior"] #ipt-numero_inferior').prop('checked', false);
								}
							}
							else if (chave == 'numero_fonte') {
								$('.lista-fontes[rel="numero_inferior"] .fonte').hide();
								$('.lista-fontes[rel="numero_inferior"] .fonte[data-nome="'+valor+'"]').css('display', 'list-item');
								i_fonte_numero_inferior = $('.lista-fontes[rel="numero_inferior"] .fonte[data-nome="'+valor+'"]').index();
								mudaFonte('numero_inferior', valor, 0);
							}
							else {
								$('.opcao_pers[rel="'+parte+'-'+chave+'-'+valor+'"]').click();
							}
						}
					}
					else if (chave.indexOf('cor') != -1) {
						var cores_uniforme = 0;
						var camada = chave.split('_');

						if (chave.indexOf('cor_') == 0) {
							var num_camada = '_'+camada[1];

							if (camada[1].length == 1)
								cores_uniforme = 1;
						}
						else if (chave.indexOf('cor') == 0) {
							var num_camada = '';
							cores_uniforme = 1;
						}
						else {
							var num_camada = chave;
						}

						if (cores_uniforme == 1) {
							if (valor == '287') {
								$('.lista_camadas[rel="'+peca+'"] .cor_camada[rel="'+num_camada+'"]').css('cursor', 'default');
								$('.lista_camadas[rel="'+peca+'"] .cor_camada[rel="'+num_camada+'"]').find('.cor_atual').attr('style', '').attr('rel', 'desenho_colorido').attr('title', 'Camada não pode ter cor alterada').attr('alt', 'Imagem');
							}
							else {
								$('.lista_camadas[rel="'+peca+'"] .cor_camada[rel="'+num_camada+'"]').click();
								$('.lista_camadas[rel="'+peca+'"] .paleta_cores .cor[id-cor="'+valor+'"]').click();
							}
						}
						else {
							if (camada[2] !== undefined && camada[2].length == 1) {
								var eq_camada = Number(camada[2]) - 1;
								chave = chave.replace('_'+camada[2], '');
							}
							else {
								var eq_camada = 0;	
							}	

							if (valor == '' && chave.indexOf('borda') != -1)
								valor = 'sem_cor';

							$('.lista_camadas[rel="'+chave+'"][data-peca="'+peca+'"] .cor_camada').eq(eq_camada).click();
							$('.lista_camadas[rel="'+chave+'"][data-peca="'+peca+'"] .paleta_cores .cor[id-cor="'+valor+'"]').click();
						}	
					}
					else if (chave == 'galeria') {
						$('.image-gallery label[for="'+valor+'"] img').click();
					}
					else if (chave == 'manga') {
						if (valor == 'sem') {
							var alvo = ($('.opcao_pers[rel="superior-manga-sem"]').length > 0) ? 'manga' : 'raglan';

							$('.opcao_pers[rel="superior-'+alvo+'-sem"]').click();
							$('.box_selecao[rel="manga"] .selecao').removeClass('marcado');
							$('.opcao_pers[rel="superior-'+alvo+'-com"]').removeClass('marcado');
						}
						else if (valor == 'raglan') {
							$('.opcao_pers[rel="superior-'+valor+'-com"]').click();
							$('.box_selecao[rel="manga"] .selecao').removeClass('marcado');
							$('.opcao_pers[rel="superior-'+valor+'-com"]').addClass('marcado');
						}
						else {
							$('.opcao_pers[rel="superior-'+chave+'-com"]').click();
							$('.box_selecao[rel="manga"] .selecao').removeClass('marcado');
							$('.opcao_pers[rel="superior-'+chave+'-com"]').addClass('marcado');
						}
					}
					else {
						$('.opcao_pers[rel="'+parte+'-'+chave+'-'+valor+'"]').click();
					}
				}
				else if (parte.indexOf('upload_') == 0) {
					var num_upload = parte.replace('upload'+chave+'_', '');

					if (typeof arr_simulacao != 'undefined' && $('#item_drag-'+num_upload).length == 0) {
						var upload = valor;
						$('.manequim'+chave+' .fundos div[class^="engloba_"]').before(upload);
						$('div[id^="item_drag-"], div[id^="item_drag-"] *').css('pointer-events', 'auto');

						var matrix = $('#item_drag-'+num_upload).css('transform');
						if (matrix !== 'none') {
							var values = matrix.split('(')[1].split(')')[0].split(',');
        					var a = values[0];
							var b = values[1];
							var radians = Math.atan2(b, a);
						}

						iniciaFerramentasDrag('imagem', num_upload, radians);
					}
				}
				else if (parte.indexOf('texto_') == 0) {
					var num_texto = parte.replace('texto'+chave+'_', ''); 

					if (typeof arr_simulacao != 'undefined' && $('#item_drag-'+num_texto).length == 0) {
						var texto = valor;
						$('.conteudo_edicao[rel="ferramenta_texto"] #info-texto').show();
						$('.edicao_texto .ipt-texto').attr('rel', 'item_drag').css('text-transform', 'unset');
						$('.manequim'+chave+' .fundos div[class^="engloba_"]').before(texto);
						$('div[id^="item_drag-"], div[id^="item_drag-"] *').css('pointer-events', 'auto');
						$('.text_drag:first').find('.texto').click();
						$('.text_drag').removeClass('ativo selecionado');
						$('.text_drag *:not(.texto)').hide();
						var texto = $('#item_drag-'+num_texto+' .texto').html();
						var li_lista = 	'<li rel="item_drag-'+num_texto+'" data-lado="'+chave+'">' +
											'<div class="bt_selecionar ativo">Selecionado</div>' +	
											'<span class="texto">'+texto+'</span>' +
											'<div class="remover">X</div>' +
										'</li>';
						$('.lista_textos').append(li_lista);

						var matrix = $('#item_drag-'+num_texto).css('transform');
						if (matrix !== 'none') {
							var values = matrix.split('(')[1].split(')')[0].split(',');
        					var a = values[0];
							var b = values[1];
							var radians = Math.atan2(b, a);
						}

						iniciaFerramentasDrag('texto', num_texto, radians);
					}
				}
			}
		}

		$('div[id^="item_drag-"]').removeClass('selecionado').removeClass('ativo');
		$('div[id^="item_drag-"] .ferramentas_edicao').removeClass('ativo');
		$('div[class^="manequim"]').removeClass('ativo');
		$('.'+posicao_modelo).addClass('ativo');

		if (permanece == 1)
			mudou_cor = 0;

		if (desenhos_esperados == desenhos_carregados) {
			carregando_status = 0;
			preenchimento_habilitado = 1;
			esperando_desenhos = 0;
		}

		if ($('.cor_camada[rel="pele"]').length)
			alterarArrayAtual(0, 'cor_pele');

		// FECHAR PALETA DE CORES
		$('.lista_camadas .cor_camada').removeClass('camada_ativa');
		$('.lista_camadas .paleta_cores').removeClass('ativo');
	}
}

function trocaPeca(peca, parte, nome_peca){
	preenchimento_peca = 1;
	$('#inpt-'+parte).val(peca);

	if ($('.engloba_'+parte).css('display') == 'none' && site_carregado == 1) {
		peca_visivel = '';
		$('#somente_superior, #somente_inferior').val('');
		$('.box_bloqueio, .engloba_'+parte+', .setas_modelos .peca_'+parte+', .bt-removerPeca').show();
		dimensoesCanvas();
		$('.opcao_edicao[rel="'+parte+'"]').show();

		$('.sub-menu_edicao .opcao_edicao[rel="'+parte+'"]').click();
		if ($('.engloba_superior').css('display') != 'none' && $('.engloba_inferior').css('display') != 'none')
			$('.sub-menu_edicao .opcao_edicao[rel="'+parte+'"]').closest('.sub-menu_edicao').show();

		$('#linha_modelo_'+parte+', .cores_'+parte).show();

		if (parte == 'superior') {
			$('#box_manequim .engloba_inferior').each(function(){
				var data_top = $(this).attr('data-top');
				$(this).css('top', data_top).removeAttr('data_top');
			});
			$('.opcao[rel="edicao_acabamentos"]').show();
		}
	}

	if (site_carregado == 1) {
		$('.manequim .engloba_'+parte+' .fundos-svgs, .manequim_verso .engloba_'+parte+' .fundos-svgs').addClass('fundos-temp').removeClass('fundos-svgs');
		$('.manequim .engloba_'+parte+' .fundos-temp, .manequim_verso .engloba_'+parte+' .fundos-temp').css({'position': 'absolute', 'opacity': .5, 'left': 0, 'right': 0});
		$('#lista_lados .fundos .engloba_'+parte).append('<div class="fundos-svgs" style="opacity: 0;"></div>');
	}

	if (parte == 'superior') {
		var i_div = $('.opcao_edicao[rel="superior"]').length;
		for (var i=0; i < i_div; i++) {
			$('.opcao_edicao[rel="superior"] span')[i].innerHTML = nome_peca;
		}

		$('#linha_modelo_superior')[0].innerHTML = 'MODELO '+nome_peca+': '+$('#linha_modelo_superior')[0].innerHTML.split(':')[1];
		$('.cores_superior .box_cores .titulo').eq(0).html('Cores '+nome_peca);
		arrayPecas[0] = new Array(parte, peca);
		peca_superior_aux = peca;
		var peca_inversa = 'inferior';
	}	
	else {
		var i_div = $('.opcao_edicao[rel="inferior"]').length;
		for (var i=0; i < i_div; i++) {
			$('.opcao_edicao[rel="inferior"] span')[i].innerHTML = nome_peca;
		}

		$('#linha_modelo_inferior')[0].innerHTML = 'MODELO '+nome_peca+': '+$('#linha_modelo_inferior')[0].innerHTML.split(':')[1];
		$('.cores_inferior .box_cores .titulo').eq(0).html('Cores '+nome_peca);
		arrayPecas[1] = new Array(parte, peca);
		peca_inferior_aux = peca;
		var peca_inversa = 'superior';
	}

	$('.lista_modelos[rel="modelos_'+parte+'"]').html('');

	if (site_carregado == 0) 
		$('#lista_edicao li[rel="edicao_cores"]').nextUntil('li[rel="edicao_upload"]').hide();

	carregarManequim(parte, parte);

	var caminho_svg = esporte+'_'+peca;
	eval('link_molde_'+parte+' = "{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'.svg'+versao_simu+'";');
	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'.svg'+versao_simu, function(data){
		var data_svg = document.importNode(data.documentElement,true);
		data_svg_detalhe_verso = document.importNode(data.documentElement,true);
		var svg_l = data_svg.width.animVal.valueAsString;
		var svg_a = data_svg.height.animVal.valueAsString;
		$('.manequim .engloba_'+parte+' .fundos-svgs').prepend(data_svg).css({'width': svg_l, 'height': svg_a});
		$('.manequim .engloba_'+parte+' .fundos-svgs .textura').css('background-image','url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+caminho_svg+'.webp'+versao_simu+')');
	}).done(function(){
		if (site_carregado == 1)
			$('#lista_lados .engloba_'+parte+' .carregando-peca').css('display', 'flex');
	});

	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'_detalhes.svg'+versao_simu, function(data){
		var data_svg = document.importNode(data.documentElement,true);
		data_svg_detalhe_verso = document.importNode(data.documentElement,true);
		var svg_l = data_svg.width.animVal.valueAsString;
		var svg_a = data_svg.height.animVal.valueAsString;
		$('.manequim .engloba_'+parte+' .fundos-svgs').prepend(data_svg).css({'width': svg_l, 'height': svg_a});
	});

	eval('link_molde_'+parte+'_verso = "{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'_verso.svg'+versao_simu+'";');
	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'_verso.svg'+versao_simu, function(data){
		var data_svg = document.importNode(data.documentElement,true);
		data_svg_detalhe_verso = document.importNode(data.documentElement,true);
		var svg_l = data_svg.width.animVal.valueAsString;
		var svg_a = data_svg.height.animVal.valueAsString;
		$('.manequim_verso .engloba_'+parte+' .fundos-svgs').prepend(data_svg).css({'width': svg_l, 'height': svg_a});
		$('.manequim_verso .engloba_'+parte+' .fundos-svgs .textura').css('background-image','url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+caminho_svg+'_verso.webp'+versao_simu+')');
	});

	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+caminho_svg+'_verso_detalhes.svg'+versao_simu, function(data){
		var data_svg = document.importNode(data.documentElement,true);
		data_svg_detalhe_verso = document.importNode(data.documentElement,true);
		var svg_l = data_svg.width.animVal.valueAsString;
		var svg_a = data_svg.height.animVal.valueAsString;
		$('.manequim_verso .engloba_'+parte+' .fundos-svgs').prepend(data_svg).css({'width': svg_l, 'height': svg_a});
	});


	$.post('{PASTA_RAIZ_SIMULADOR}/includes/2d/trocarModelo.php', {'modalidade': id_esporte, 'parte': parte, 'peca': peca}).done(function(data){
		if (data != null) {
			desenho[parte] = [];
			var arr_data = JSON.parse(data);
			$.when(
				$.each(arr_data['det_desenhos'], function(i, v) {
					desenho[parte][i] = new Array();
					$.each(arr_data['det_desenhos'][i], function(index, value) {
						desenho[parte][i][index] = value;
					});
				})
			).then(function(){
				if (site_carregado == 0 && (parte == 'inferior' || modelo_conjunto == 0))
					permitir = 1;
			});

			if (site_carregado == 1) {
				var menus_ativos = '';
				for (var i=0; i < Object.keys(desenho[peca_inversa]['1']).length; i++) {
					var key_object = Object.keys(desenho[peca_inversa]['1'])[i];
					if (key_object.includes('cor_') && key_object != 'cor_base') {
						/*if (key_object.includes('punho')) 
							menus_ativos = ', li[rel="edicao_acabamentos"]';*/
					}
				}	

				$('#lista_edicao li[rel="edicao_cores"]').nextAll().not('li[rel="edicao_upload"]'+menus_ativos).hide();
			}

			$('.cores_'+parte+' .titulo:contains("Detalhes")').hide();
			$('.cores_'+parte+' .box_cores-linha').hide();
			$('.fundos-svgs .detalhes_'+parte+' g').hide();
			$('.edicao_acabamentos .box_selecao .selecao').removeClass('marcado').removeClass('ativo');
			if (parte == 'superior')
				$('.edicao_acabamentos div[class^="conteudo_"]:not(".conteudo_edicao")').hide();

			$.each(arr_data['det_ativos'], function(i, val) {
				$.each(arr_data['det_ativos'][i], function(index, value) {
					$('.edicao_cores .cores_'+parte+' .lista_camadas[rel="cor_'+value+'"]').parent().show();
					if ($('.edicao_cores .cores_'+parte+' .lista_camadas[rel="cor_'+value+'"]').length)
						$('.cores_'+parte+' .titulo:contains("Detalhes")').show();
					$('.fundos-svgs .detalhes_'+parte+' .'+value+', .fundos-svgs  .detalhes_'+parte+' .'+value+' *').show();
					$('.edicao_acabamentos .conteudo_'+value).show();

					if (value == 'gola')
						$('.fundos-svgs .detalhes_'+parte+' .golas, .fundos-svgs .detalhes_'+parte+' .fundo_gola, .fundos-svgs .detalhes_'+parte+' .golas_verso').show();
					else if (value == 'raglan')
						$('.edicao_acabamentos .conteudo_manga').show();
				});
			});
			// menu -> acabamentos
			if (parte == 'superior') {
				if (arr_data['det_ativos'][0] !== undefined) {
					if ( arr_data['det_ativos'][0].indexOf('gola') != -1 || 
						 arr_data['det_ativos'][0].indexOf('manga') != -1 || arr_data['det_ativos'][0].indexOf('raglan') != -1 || arr_data['det_ativos'][0].indexOf('punho') != -1 ) {
						$('#lista_edicao li[rel="edicao_acabamentos"]').show();

						if (arr_data['det_ativos'][0].indexOf('gola') == -1) {
							$('.edicao_acabamentos .sub-menu_edicao').hide();
							$('.edicao_acabamentos .sub-menu_edicao .opcao_edicao[rel="manga_punho"]').click();
						}
						else if (arr_data['det_ativos'][0].indexOf('manga') == -1 && arr_data['det_ativos'][0].indexOf('raglan') == -1 && arr_data['det_ativos'][0].indexOf('punho') == -1) {
							$('.edicao_acabamentos .sub-menu_edicao').hide();
							$('.edicao_acabamentos .sub-menu_edicao .opcao_edicao[rel="gola"]').click();
						}
						else {
							$('.edicao_acabamentos .sub-menu_edicao').show();
							$('.edicao_acabamentos .sub-menu_edicao .opcao_edicao').eq(0).click();
						}
					}
					else {
						$('#lista_edicao li[rel="edicao_acabamentos"]').hide();
					}
				}
				else {
					$('#lista_edicao li[rel="edicao_acabamentos"]').hide();
				}
			}

			// set qtd estampas
			total_modelo[parte] = desenho[parte].length-1;

			if (total_modelo[parte] <= 1) {
				$('.setas_modelos .peca_'+parte+' div[class^="bt-seta_"]').css('opacity', 0);
				$('.edicao_modelos .opcao_edicao[rel="modelos_'+parte+'"]').hide();

				if (total_modelo[peca_inversa] <= 1)
					$('#lista_edicao .opcao[rel="edicao_modelos"]').hide();
			}
			else {
				$('.setas_modelos .peca_'+parte+' div[class^="bt-seta_"]').css('opacity', 1);
				$('.edicao_modelos .opcao_edicao[rel="modelos_'+parte+'"]').show();

				if (site_carregado == 1) {
					$('#lista_edicao .opcao[rel="edicao_modelos"]').click();
				}

				$('#lista_edicao .opcao[rel="edicao_modelos"]').show();	
			}

			if (site_carregado == 1 && preenchimento_habilitado == 1) {
				if ($('#ipt-sincronizar').prop('checked')) {
					$('.ipt-checkbox[for="ipt-sincronizar"]').click();
				}
				
				iStatus = 0;
				arrayStatus[iStatus][peca_inversa] = arrayClone(arrayPartes[peca_inversa]);
				arrayStatus[iStatus][parte] = '';

				trocaModelo(parte, '1');
				preencheAtributo(parte,'cod_modelo',desenho[parte]['1']['cod_modelo'],0);
				
				$('#voltar').addClass('desativado');
			}

			(total_modelo[parte] > 1 && total_modelo[peca_inversa] > 1)
				? $('.edicao_modelos .sub-menu_edicao').show()
				: $('.edicao_modelos .sub-menu_edicao').hide();

			var newWidth = Number(260/3) - 10;
			var qtdModelos = 10;
			if (typeof desenho[parte][1] !== 'undefined') {
				for (var j=1; (j<=total_modelo[parte] && desenho[parte][j] !== 'undefined'); j++) {
					if (j == 1) {
						var img = new Image();
						img.src = '{PASTA_RAIZ_SIMULADOR}/miniatura-'+desenho[parte][1]['modelo'];

						if (total_modelo[parte] <= 1 && $('.engloba_'+peca_inversa).css('display') != 'none') {
							$('.edicao_modelos .sub-menu_edicao .opcao_edicao[rel="'+peca_inversa+'"]').click();
							$('.edicao_modelos .sub-menu_edicao .opcao_edicao[rel="'+peca_inversa+'"]').closest('.sub-menu_edicao').hide();

							var img_atual = $('.lista_modelos[rel="modelos_'+peca_inversa+'"] li.ativo img').attr('src');
							if (img_atual == '')
								img_atual = $('.lista_modelos[rel="modelos_'+peca_inversa+'"] li.ativo img').attr('data-src');

							$('.ico-lista_edicao img').attr('src', img_atual);
						}
						else if (parte == 'superior' || (parte == 'inferior' && ($('.engloba_superior').css('display') == 'none' || total_modelo[peca_inversa] <= 1))) {
							$('.ico-lista_edicao img').attr('src', img.src);
						}
					}

					var img_modelo = '{PASTA_RAIZ_SIMULADOR}/miniatura-'+desenho[parte][j]['modelo'];
					if (j == 1)
						var html_modelo = '<li class="opcao_pers ativo" rel="'+parte+'-cod_modelo-'+desenho[parte][j]['cod_modelo']+'" data-tipo="'+parte+'" data-i="'+j+'">';
					else
						var html_modelo = '<li class="opcao_pers" rel="'+parte+'-cod_modelo-'+desenho[parte][j]['cod_modelo']+'" data-tipo="'+parte+'" data-i="'+j+'">';
					html_modelo += (j < qtdModelos) ? '<img src="'+img_modelo+'" data-src="" width="'+Math.floor(newWidth)+'" />' : '<img src="" data-src="'+img_modelo+'" width="'+Math.floor(newWidth)+'" />';

					if (mostrar_cod_modelo == 1)
						html_modelo += '<span>Cod. Modelo: '+desenho[parte][j]['cod_modelo']+'</span>';

					html_modelo += '</li>';
					$('.lista_modelos[rel="modelos_'+parte+'"]').append(html_modelo);
				}
			}

			if ($('.lista_modelos[rel="modelos_'+parte+'"] .setas_scroll').length && $('.lista_modelos[rel="modelos_'+parte+'"] .lista_modelos').find('li').length > 4)
				$('.lista_modelos[rel="modelos_'+parte+'"] .setas_scroll .baixo').parent().addClass('ativo');
			
			$('.lista_modelos[rel="modelos_'+parte+'"] li img[src=""]').each(function(index, element) {
				if ($(this).isInViewport()) {
					$(element).attr('src', $(element).attr('data-src'));
				}
			});

			if (total_modelo['superior'] != total_modelo['inferior']) {
				$('.ipt-checkbox[for="ipt-sincronizar"]').hide();
				$('.setas_modelos .box_bloqueio').css('opacity', 0);
				travado = 0;

				if (total_modelo[parte] <= 1) {
					($('.edicao_modelos .opcao_edicao[rel="'+peca_inversa+'"]').css('display') != 'none')
						? $('.edicao_modelos .opcao_edicao[rel="'+peca_inversa+'"]').click()
						: $('#lista_edicao .opcao[rel="edicao_modelos"]').hide();
				}
				else {
					$('.edicao_modelos .opcao_edicao[rel="'+parte+'"]').click();
				}
			}
			else if (total_modelo[parte] > 1) {
				$('.setas_modelos .box_bloqueio').css('opacity', 1);
				$('.ipt-checkbox[for="ipt-sincronizar"]').show();
				$('.edicao_modelos .opcao_edicao[rel="'+parte+'"]').click();

				if ($('#ipt-sincronizar').prop('checked'))
					travado = 1;
			}

			setTimeout(function(){ 
				preenchimento_peca = 0;
				$('#lista_lados .engloba_'+parte+' .fundos-temp').remove();
				$('#lista_lados .engloba_'+parte+' .fundos-svgs').css('opacity', 1);
				$('#lista_lados .engloba_'+parte+' .carregando-peca').hide();

				if (site_carregado == 1) {
					dimensoesCanvas();
					ajustaScale();
					ajustaSetas();
				}
			}, 500);
		}
	});
}
function removerPeca(parte){
	var parte_inversa = (parte == 'superior') ? 'inferior' : 'superior';
	peca_visivel = parte_inversa;
	$('#somente_'+parte_inversa).val(1);
	$('#inpt-'+parte).val('');
	$('.box_bloqueio, .engloba_'+parte+', .setas_modelos .peca_'+parte+', .bt-removerPeca').hide();
	$('.opcao_edicao[rel="'+parte+'"]').hide();
	$('.ipt-checkbox[for="ipt-sincronizar"]').hide();

	if ($('.lista_modelos[rel="modelos_'+parte_inversa+'"] li').length <= 1)
		$('.opcao[rel="edicao_modelos"]').hide();

	$('.sub-menu_edicao .opcao_edicao[rel="'+parte_inversa+'"]').click();
	$('.sub-menu_edicao .opcao_edicao[rel="'+parte_inversa+'"]').closest('.sub-menu_edicao').hide();
	$('#linha_modelo_'+parte+', .cores_'+parte).hide();

	if (parte == 'superior') {
		$('#box_manequim .engloba_inferior').each(function(){
			var data_top = $(this).css('top');
			$(this).attr('data-top', data_top).css('top', '30px');
		});
		$('.opcao[rel="edicao_acabamentos"]').hide();

		var img_atual = $('.lista_modelos[rel="modelos_'+parte_inversa+'"] li.ativo img').attr('src');
		if (img_atual == '')
			img_atual = $('.lista_modelos[rel="modelos_'+parte_inversa+'"] li.ativo img').attr('data-src');

		$('.ico-lista_edicao img').attr('src', img_atual);
	}

	dimensoesCanvas();
}
function alterarPeca(){
	$('#lista_edicao .opcao[rel="edicao_pecas"]').click();
}

function listaCamadas(dest){
	if ($('.lista_camadas[rel="'+dest+'"] .cor_camada[style!="display: none;"] .cor_atual[rel!="desenho_colorido"]').length == 1)
		$('.lista_camadas[rel="'+dest+'"] .cor_camada[style!="display: none;"] .cor_atual[rel="desenho_colorido"]').parent().hide();
}
function coloreDesenho(dest, i, n){
	if (n == 1) 
		modelo_atual = Number(i.split('_')[0]);

	if (desenho[dest][i] != null && (desenho[dest][i]['svg'] !== undefined && desenho[dest][i]['svg'] != '')) {
		var i_camada = i;
		var modelo = i.split('_');
		var i_modelo = modelo[0];

		if (desenho[dest][i_camada]['cor'] != '' && i_camada != '') {
			if (mudou_cor == 0) {
				var cor_id = desenho[dest][i_camada]['cor'];
				var cor_base = desenho[dest][i_modelo]['cor_base'];
			}
			else {
				var cor_id = (desenho[dest][i_camada]['cor'] != '287') ? $('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="_'+modelo[1]+'"] .cor_atual').attr('data-cor') : '287';
				var cor_base = $('.lista_camadas[rel="'+dest+'"] .cor_camada[rel=""] .cor_atual').attr('data-cor');
			}

			// colorindo pecas
			var coloriu_o = 0; var num_camada = '';
			do {
				if (coloriu_o == 0) {
					num_camada = '_'+n;
				}	
				else {
					num_camada = '';
					n = 1;
				}

				if (cor_id == '287') { // COLORIDO
					if (preenchimento_habilitado == 1) {
						for (var i_parte of Object.keys(arrayPecas)) {
							for (var [key, value] of Object.entries(arrayPecas[i_parte])){
								if (value == dest) {
									preencheAtributo(arrayPecas[i_parte][0],'cor'+num_camada,cor_id,0);
									break;
								}
							}
						}
					}

					if (num_camada == '') {
						if (cor_base == '287' || cor_base == '0') {
							$('.edicao_cores .lista_camadas[rel="'+dest+'"]').prev().hide();
							$('.edicao_cores .lista_camadas[rel="'+dest+'"]').hide();
							$('.engloba_'+dest+' svg[id^="molde_'+dest+'"]').css('fill', 'transparent');
						}
						else {
							$('.edicao_cores .lista_camadas[rel="'+dest+'"]').prev().show();
							$('.edicao_cores .lista_camadas[rel="'+dest+'"]').show();
							$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel]').eq(0).click();
							$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
						}			
					}
					else {
						$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="'+num_camada+'"]').css('cursor', 'default');
						$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="'+num_camada+'"]')
							.find('.cor_atual')
							.attr('style', '')
							.attr('rel', 'desenho_colorido')
							.attr('title', 'Camada não pode ter cor alterada')
							.attr('alt', 'Imagem');
					}
				}
				else if (cor_id != '' && preenchimento_habilitado == 1) {
					$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="'+num_camada+'"]').css('cursor', 'pointer');
					$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="'+num_camada+'"]').find('.cor_atual').removeAttr('style title rel');
					$('.edicao_cores .lista_camadas[rel="'+dest+'"]').prev().show();
					$('.edicao_cores .lista_camadas[rel="'+dest+'"]').show();
					$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel="'+num_camada+'"]').click();

					if (num_camada == '') {
						$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
					}
					else {
						if (typeof cor_id != 'undefined')
							$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[id-cor="'+cor_id+'"]').click();
						else 
							$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[alt="preto"]').click();
					}
				} 

				coloriu_o++;
			} while(n == 1 && coloriu_o < 2);
		}	
		else {
			$('.edicao_cores .lista_camadas[rel="'+dest+'"]').prev().show();
			$('.edicao_cores .lista_camadas[rel="'+dest+'"]').show();

			if (mudou_cor == 0) {
				if (desenho[dest][i_modelo]['cor_base'] != '') {
					$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel=""]').click();
					$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[id-cor="'+desenho[dest][i_modelo]['cor_base']+'"]').click();
				}
				else {
					$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel=""]').click();
					$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[alt="branco"]').click();
				}
			}
			else {
				var cor_atual = $('.lista_camadas[rel="'+dest+'"] .cor_camada[rel=""] .cor_atual').attr('alt');
				$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel=""]').click();
				$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[alt="'+cor_atual+'"]').click();
			}
		}

		if (preenchimento_habilitado == 1 && n == 1) {
			for (var c_pers=0; c_pers < Object.keys(desenho[dest][i_modelo]).length; c_pers++) {
				var pers_nome = Object.keys(desenho[dest][i_modelo])[c_pers];
				var pers_cor = Object.values(desenho[dest][i_modelo])[c_pers];
				
				if (mudou_cor == 1 && pers_cor != 0)
					pers_cor = 	$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada:first .cor_atual').attr('data-cor');

				var res = pers_nome.split('_');
				if (pers_nome.includes('cor_') && pers_nome != 'cor_base' && (pers_cor > 0 && pers_cor != '287')) {
					if ($('.fundos-svgs .detalhes_'+dest+' .'+res[1]).css('display') == 'none') {
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"]').closest('.box_cores-linha').show();
						$('.fundos-svgs .detalhes_'+dest+' .'+res[1]).show();
					}

					if (pers_nome == 'cor_punho' || pers_nome == 'cor_raglan' || pers_nome == 'cor_manga') {
						$('.edicao_acabamentos *[rel$="'+res[1]+'-com"]').click();
					}

					if (pers_nome == 'cor_gola') {
						if ($('.lista_opcoes[rel="gola"] li').length > 1) {
							$('.lista_camadas[rel="cor_gola"] .cor_camada').eq(0).click();
							$('.lista_camadas[rel="cor_gola"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
						}
						else if ($('.golas *[class^="gola"]').length > 1) {
							for (var cmd=0; cmd < $('.golas *[class^="gola"]').length; cmd++) {
								$('.lista_camadas[rel="'+pers_nome+'"] .cor_camada').eq(cmd).click();
								$('.lista_camadas[rel="'+pers_nome+'"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();	
							}
						} 
						else {
							$('.lista_camadas[rel="'+pers_nome+'"] .cor_camada').eq(0).click();
							$('.lista_camadas[rel="'+pers_nome+'"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
						}
					}
					else if (pers_nome.indexOf('cor_gola_') != -1) {
						var aux_pers_nome = pers_nome.replace('cor_', '');
						$('.lista_camadas[rel="cor_gola"] .cor_camada[rel="'+aux_pers_nome+'"]').click();
						$('.lista_camadas[rel="cor_gola"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
					}
					else if (pers_nome == 'cor_nome') {
						$('.lista_camadas[rel="'+pers_nome+'_frente"][data-peca="'+dest+'"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'_frente"][data-peca="'+dest+'"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
						$('.lista_camadas[rel="'+pers_nome+'_verso"][data-peca="'+dest+'"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'_verso"][data-peca="'+dest+'"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
					}
					else if (pers_nome == 'cor_meiao') {
						colori_meiao = 1;
						$('.lista_camadas[rel="meiao"] .cor_camada').click();
						$('.lista_camadas[rel="meiao"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
					}
					else {
						if (pers_nome == 'cor_raglan' && $('.lista_camadas[rel="cor_raglan"]').length == 0) pers_nome = 'cor_manga';
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .paleta_cores .cor[id-cor="'+pers_cor+'"]').click();
					}
				}
				else if (pers_nome.includes('cor_') && pers_nome != 'cor_base' && pers_cor == '287') {
					$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"]').closest('.box_cores-linha').hide();
					$('.fundos-svgs .detalhes_'+dest+' .'+res[1]).hide();

					if (preenchimento_habilitado == 1) {
						for (var i_parte of Object.keys(arrayPecas)) {
							for (var [key, value] of Object.entries(arrayPecas[i_parte])) {
								if (value == dest) {
									preencheAtributo(arrayPecas[i_parte][0], pers_nome, pers_cor, 0);
									break;
								}
							}
						}
					}
				}
				else if (pers_nome.includes('cor_') && pers_nome != 'cor_base') {
					if (pers_nome == 'cor_punho' || pers_nome == 'cor_raglan' || pers_nome == 'cor_manga') {
						var rel_aux = (pers_nome == 'cor_raglan' || pers_nome == 'cor_manga') ? 'manga' : res[1];
						$('.edicao_acabamentos *[rel$="'+res[1]+'-sem"]').click();
						$('.edicao_acabamentos *[rel$="'+res[1]+'-com"]').removeClass('marcado ativo');

						$('.cor_camada[rel="'+res[1]+'"]').click();
						$('.paleta_cores[rel="cor_'+res[1]+'"] .cor[alt="preto"]').click();
					}
					else if (pers_nome == 'cor_nome' || pers_nome == 'cor_numero') {
						$('.lista_camadas[rel="'+pers_nome+'_frente"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'_frente"] .paleta_cores .cor[alt="preto"]').click();
						$('.lista_camadas[rel="'+pers_nome+'_verso"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'_verso"] .paleta_cores .cor[alt="preto"]').click();
					}
					else if (pers_nome != 'cor_meiao') {
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .paleta_cores .cor').eq(0).click();
					}

					if (colori_meiao == 0 && (peca_acessorio != '' && desenho[peca_acessorio].length == 0)) {
						$('.lista_camadas[rel="'+peca_acessorio+'"] .cor_camada').click();
						if ($('.lista_camadas[rel="'+peca_acessorio+'"] .paleta_cores .cor[id-cor="'+cor_base+'"]').length > 0)
							$('.lista_camadas[rel="'+peca_acessorio+'"] .paleta_cores .cor[id-cor="'+cor_base+'"]').click();
						else
							$('.lista_camadas[rel="'+peca_acessorio+'"] .paleta_cores .cor[alt="branco"]').click();

						colori_meiao = 1;
					}
				}
			}
		}

		desenhos_carregados++;
	}
	else {
		$('.fundos-svgs .'+dest+'_'+n).hide();
		desenhos_carregados++;
		var cor_incial = (mudou_cor == 0) ? 'branco' : $('.lista_camadas[rel="'+dest+'"] .cor_camada[rel=""] .cor_atual').attr('alt');
		$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="_'+n+'"]').hide();
		$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada[rel=""]').click();
		$('.edicao_cores .lista_camadas[rel="'+dest+'"] .paleta_cores .cor[alt="'+cor_incial+'"]').click();
		$('.edicao_cores .lista_camadas[rel="'+dest+'"] .cor_camada').addClass('sem_numero');

		for (var c_pers=0; c_pers < Object.keys(desenho[dest][n]).length; c_pers++) {
			var pers_nome = Object.keys(desenho[dest][n])[c_pers];
			var res = pers_nome.split('_');
			if (pers_nome.includes('cor_') && pers_nome != 'cor_base') {
				if (pers_nome == 'cor_aba' && esporte_dir == 'bone') {
					$('.lista_camadas[rel="cor_aba"]').closest('.box_cores-linha').hide();
					$('.fundos-svgs .detalhes_bone .aba').hide();
				}
				else if (pers_nome == 'cor_punho' || pers_nome == 'cor_raglan' || pers_nome == 'cor_manga') {
					var rel_aux = ( (pers_nome == 'cor_raglan' && $('.lista_camadas[rel="cor_raglan"]').length == 0) || pers_nome == 'cor_manga') ? 'manga' : res[1];
					$('.edicao_acabamentos *[rel$="'+rel_aux+'-sem"]').click();

					$('.cor_camada[rel="'+res[1]+'"]').click();
					$('.paleta_cores[rel="cor_'+res[1]+'"] .cor[alt="cinza"]').click();
				}
				else if (pers_nome == 'cor_nome' || pers_nome == 'cor_numero') {
					$('.lista_camadas[rel="'+pers_nome+'_frente"] .cor_camada').click();
					$('.lista_camadas[rel="'+pers_nome+'_frente"] .paleta_cores .cor[alt="cinza"]').click();
					$('.lista_camadas[rel="'+pers_nome+'_verso"] .cor_camada').click();
					$('.lista_camadas[rel="'+pers_nome+'_verso"] .paleta_cores .cor[alt="cinza"]').click();
				}
				else {
					if ($('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').length > 1) {
						for (var cmd=0; cmd < $('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').length; cmd++) {
							$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').eq(cmd).click();
							if (cmd == 0 || esporte_dir == 'cachecol')
								$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .paleta_cores .cor[alt="cinza"]').click();
							else
								$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .paleta_cores .cor[alt="branco"]').click();
						}
					}
					else {
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .cor_camada').click();
						$('.lista_camadas[rel="'+pers_nome+'"][data-peca="'+dest+'"] .paleta_cores .cor[alt="cinza"]').click();
					}
				}

				if (colori_meiao == 0 && $('.engloba_'+peca_acessorio+' #molde_'+peca_acessorio).length > 0) {
					$('.lista_camadas[rel="'+peca_acessorio+'"] .cor_camada').click();
					$('.lista_camadas[rel="'+peca_acessorio+'"] .paleta_cores .cor[alt="branco"]').click();
					colori_meiao = 1;
				}
			}
		}
	}
}
function ajustaScale(){
	scaleIni = 1;

	var espaco_seta = (goleiro == 1) ? 150 : 100;
	if (mostrar_pecas == 1)
		espaco_seta = 180; 

	if ($(window).width() < 1200) {
		$('.manequim').addClass('ativo');
		$('#girar-manequim span').removeClass('ativo');
		$('#girar-manequim span').eq(0).addClass('ativo');

		if ($(window).width() < 1024) {
			$('#menu_cores').addClass('inativo');
			$('#lista_edicao .opcao').removeClass('ativo');
			$('#box_edicao').removeClass('ativo');
		}
	}
	else if (modelo_verso == 0) {
		$('.manequim').addClass('ativo');
	}

	if ( $('#lista_lados div[class^="manequim"].ativo').css('position') == 'absolute' )
		$('#lista_lados div[class^="manequim"].ativo').css('position', 'relative');

	$('#lista_lados .conteudo').removeAttr('style');
	if ( $('#lista_lados').css('transform') != 'none' || $('#lista_lados').css('transform') == undefined ) {
		var scale_ini =  Number($('#lista_lados').css('transform').split(',')[0].replace('matrix(',''));
		var width_ini = $('#lista_lados .conteudo').width() * scale_ini;
		$('#lista_lados .conteudo').width(width_ini);
	}

	var w_modelo = $('#lista_lados .conteudo').width();
	$('#lista_lados').width(w_modelo+espaco_seta);
	ajustaSetas();

	var w_box_manequim = $('#box_manequim').width();
	var w_manequim = $('#lista_lados').width();

	if (w_manequim > w_box_manequim) {
		scale_manequim =  w_box_manequim / w_manequim;
		$('#box_manequim .container').css({'transform': 'scale('+scale_manequim+')', 'transform-origin': 'top center'});
	}
	else {
		var scale_atual =  	($('#box_manequim .container').css('transform') == 'none' || $('#box_manequim .container').css('transform') == undefined) 
								? 1 
								: Number($('#box_manequim .container').css('transform').split(',')[0].replace('matrix(',''));
		var w_manequim_scaled = $('#box_manequim .container')[0].clientWidth * scale_atual;

		if (w_manequim_scaled < w_box_manequim) {
			scale_manequim =  w_box_manequim / w_manequim;
			if (scale_manequim > 1)
				scale_manequim = 1;
			$('#box_manequim .container').css({'transform': 'scale('+scale_manequim+')', 'transform-origin': 'top center'});
		}
	}

	if ($(window).width() < 1200)
		$('#lista_lados div[class^="manequim"].ativo').css('position', 'absolute');
}
function ajustaSetas(){
	var h_setas = $('.setas_modelos').height();

	if (modelo_conjunto == 1) {
		var h_modelo = 0;
		if ($('.manequim .engloba_'+peca_superior).css('display') != 'none')
			h_modelo += $('.manequim .engloba_'+peca_superior).height();
		if ($('.manequim .engloba_'+peca_inferior).css('display') != 'none')
			h_modelo += $('.manequim .engloba_'+peca_inferior).height();
	}
	else {
		var h_modelo = $('.manequim .engloba_'+peca_superior).height();
	}

	var h_detalhes = $('#lista_lados')[0].offsetTop;
	var top_seta = ((h_modelo - h_setas) / 2) + h_detalhes;
	$('.setas_modelos').css('top', top_seta+'px');
}
function adicionarPecas(){
	peca_visivel = '';
	$('#somente_superior, #inpt-superior, #somente_inferior, #inpt-inferior').val('');

	if (esporte_dir == 'futebol_masculino_3') {
		$('.manequim .engloba_'+peca_inferior).css('left', 0);
		$('.manequim .engloba_'+peca_superior).css('left', '-'+superior_left+'px');
		$('.manequim_verso .engloba_'+peca_inferior).css('left', 0);
		$('.manequim_verso .engloba_'+peca_superior).css('margin-left', '-'+superior_left_verso+'px');
	}

	$('div[class^="engloba_"], .setas_modelos div[class^="peca_"], #box_manequim div[id^="linha_modelo_"]').show();
	$('#lista_edicao .opcao[rel="edicao_acabamentos"], .opcao_edicao, .edicao_cores div[class*="cores_"]').removeAttr('style');
	$('.modelo .detalhe, .box_bloqueio, .luva_goleiro').show();
	$('.ipt-checkbox[for="ipt-sincronizar"]').removeAttr('style');
	$('#box_manequim .engloba_'+peca_inferior).each(function(){
		var data_top = $(this).attr('data-top');
		$(this).css('top', data_top).removeAttr('data_top');
	});

	var img_atual = $('.lista_modelos[rel="modelos_superior"] li.ativo img').attr('src');
	if (img_atual == '')
		img_atual = $('.lista_modelos[rel="modelos_superior"] li.ativo img').attr('data-src');

	$('.ico-lista_edicao img').attr('src', img_atual);

	ajustaSetas();
}
function removerPecas(parte){
	if (esporte_dir == 'futebol_masculino_3') {
		$('.manequim .engloba_'+peca_superior).css('left', 0);
		$('.manequim .engloba_'+peca_inferior).css('left', superior_left+'px');
		$('.manequim_verso .engloba_'+peca_superior).css('margin-left', 0);
		$('.manequim_verso .engloba_'+peca_inferior).css('left', superior_left_verso+'px');
	}

	if (parte != 'conjunto') {
		var parte_inversa = (parte == 'superior') ? 'inferior' : 'superior';
		var peca = (mostrar_pecas == 1) ? parte : arrayPecas.find(item => item[0] === parte)[1];
		peca_visivel = peca;
		$('#somente_'+parte).val(1);
		if (goleiro == 1)
			$('#inpt-'+parte).val(peca_visivel+'_goleiro');
		else
			$('#inpt-'+parte).val(peca_visivel);

		$('div[class^="engloba_"]:not([class^="engloba_'+peca+'"]), .setas_modelos div[class^="peca_"]:not([class^="peca_'+parte+'"]), #box_manequim div[id^="linha_modelo_"]:not([id="linha_modelo_'+parte+'"])').hide();
		$('.modelo .detalhe, .box_bloqueio, .luva_goleiro').hide();
		$('.ipt-checkbox[for="ipt-sincronizar"]').css({'pointer-events': 'none', 'opacity': 0.7});
		if (peca == peca_inferior) {
			$('#box_manequim .engloba_'+peca_inferior).each(function(){
				var data_top = $(this).css('top');
				$(this).attr('data-top', data_top).css('top', '30px');
			});
		}

		if (parte == 'inferior')
			$('#lista_edicao .opcao[rel="edicao_acabamentos"]').css({'opacity': 0.7, 'pointer-events': 'none'});
		$('.opcao_edicao[rel="'+parte_inversa+'"]').css({'opacity': 0.7, 'pointer-events': 'none'});
		$('.opcao_edicao[rel="'+parte+'"]').click();
		$('.edicao_cores div[class*="cores_"]:not([class*="cores_'+parte+'"])').css({'opacity': 0.7, 'pointer-events': 'none'});

		var img_atual = $('.lista_modelos[rel="modelos_'+parte+'"] li.ativo img').attr('src');
		if (img_atual == '')
			img_atual = $('.lista_modelos[rel="modelos_'+parte+'"] li.ativo img').attr('data-src');

		$('.ico-lista_edicao img').attr('src', img_atual);
	}
	else {
		$('#somente_superior, #somente_inferior').val(1);
		if (goleiro == 1) {
			$('#inpt-superior').val(peca_superior+'_goleiro');
			$('#inpt-inferior').val(peca_inferior+'_goleiro');
		}
		else {
			$('#inpt-superior').val(peca_superior);
			$('#inpt-inferior').val(peca_inferior);
		}

		var peca = arrayPecas.find(item => item[0] === 'acessorio')[1];
		$('.modelo .detalhe, .engloba_'+peca+', .setas_modelos .peca_acessorio').hide();
		$('.opcao_edicao[rel="acessorio"]').hide();

		if ($('.opcao_edicao[rel="acessorio"]').hasClass('ativo'))
			$('.opcao_edicao[rel="superior"]').click();

		$('.edicao_cores div[class$="cores_acessorio"]').css({'opacity': 0.7, 'pointer-events': 'none'});
	}

	ajustaSetas();
}
function girarManequim(lado){
	if (site_carregado == 1) {
		var lado_aux = (lado === undefined || lado == '') ? 'frente' : lado;
		lado = (lado == 'frente' || lado === undefined || lado == '') ? '' : '_'+lado;
		$('#lista_lados div[class^="manequim"]').removeClass('ativo');
		$('#lista_lados .manequim'+lado).addClass('ativo');

		if ($('#girar-manequim span').html() !== undefined) {
			$('#girar-manequim span').removeClass('ativo');
			$('#girar-manequim span:contains("'+lado_aux[0].toUpperCase() + lado_aux.slice(1)+'")').addClass('ativo');
		}
	}
}

$(document).ready(function (){
	$('.bt_ajuda').on('click', function(){
		var abrir_link = 'https://www.youtube.com/watch?v=ouiDyIcwFm4';
		window.open(abrir_link, '_blank');
	});
	$('#bt_simulacoes').on('click', function(e){
		e.stopPropagation();
		if (logado == 0) {
			var html =  '<p class="texto">Faça login ou cadastre-se para salvar suas simulações</p>' +
						'<div class="login" onclick=abrirForm("login");>' +
							'<span class="cor_destaque">Fazer Login</span>' +
							'<svg class="cor_destaque" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="12px" viewBox="177.504 235.828 256.992 320.225" enable-background="new 177.504 235.828 256.992 320.225" xml:space="preserve">' +
								'<g>' +
									'<path d="M306,235.828c43.868,0,79.488,35.62,79.488,79.488s-35.62,79.488-79.488,79.488s-79.488-35.62-79.488-79.488S262.132,235.828,306,235.828z"/>' +
									'<path d="M434.496,509.794c0,25.46-20.799,46.259-46.259,46.259H223.763c-25.46,0-46.259-20.799-46.259-46.259v-98.016c0-25.46,20.798-46.259,46.259-46.259h3.825c16.137,26.297,45.183,43.868,78.293,43.868c33.109,0,62.156-17.571,78.293-43.868h3.824c25.461,0,46.259,20.798,46.259,46.259v98.016H434.496z"/>' +
								'</g>' +
							'</svg>' +
						'</div>' +
						'<div id="cadastro" onclick=abrirForm("cadastro");>' +
							'<span class="cor_destaque">Cadastre-se</span>' +
							'<svg  class="cor_destaque" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">' +
								'<polygon points="204,0 168.3,35.7 311.1,178.5 0,178.5 0,229.5 311.1,229.5 168.3,372.3 204,408 408,204"/>' +
							'</svg>' +
						'</div>';
			abrirMensagem('<div id="box_simulacoes" style="width:'+parseInt($(document).width()*0.4)+'px">'+html+'</div>');
		}
		else {
			var n_simulacoes = $(this).find('span').attr('data-qnt');
			if (n_simulacoes > 0) {
				$('.bt_armario').trigger('click');
			}
			else {
				$('.salvar-armario').trigger('click');
			}
		}
	});

	$(document).on('click', '#lista_edicao .opcao', function(e){
		e.preventDefault();

		if ($(this).hasClass('ativo')) {
			$(this).parent().find('.opcao').removeClass('ativo');
			$('#box_manequim').removeClass('inativo');

			if ($(window).width() <= 1023) {
				$('#box_edicao').removeClass('ativo');
				$('#site').removeAttr('style');
			}
		}
		else {
			$(this).parent().find('.opcao').removeClass('ativo');
			$(this).addClass('ativo');
			$('#box_manequim').addClass('inativo');

			if ($(window).width() <= 1023 && $('#box_edicao').css('display') == 'none') {
				$('#box_edicao').addClass('ativo');
				if ($(window).width() <= 640) {
					$('#site').css('height', $(window).height()+'px');
					$('footer').css('bottom', '0px');
				}
			}
		}

		if ($(this).is('[rel]')) {
			var rel_mostrar = $(this).attr('rel');
			if (rel_mostrar.indexOf('edicao_') != -1) {
				var array = rel_mostrar.split('_');
				var inicio_rel = array[0];
				$('div[class^="'+inicio_rel+'_"]').removeClass('ativo');

				var ativo;
				$('.'+rel_mostrar+' .opcao_edicao').each(function(){
					if ($(this).hasClass('ativo'))
						ativo = 1;
				});

				if (ativo != 1)
					$('.'+rel_mostrar+' .opcao_edicao').first().click();

				$('#menu_edicao div[class^="edicao_"]').hide();
				$('.'+rel_mostrar).show();
				if ($(window).width() <= 640) {
					var h_menu =  $('.'+rel_mostrar).height();
					var h_total = $(window).height() - 120 - 90;

					if (h_menu > h_total)
						$('#box_edicao').css({'top': '120px', 'overflow': 'scroll'});
					else
						$('#box_edicao').removeAttr('style');
				}
			}
		}
	});
	$(document).on('click', '.opcao_edicao', function(){
		$(this).parent().find('.opcao_edicao').removeClass('ativo');
		$(this).addClass('ativo');

		var menu_ativar = $(this).attr('rel');
		var menu = menu_ativar.split('_');
		var menu_ativo = $(this).parent().parent().attr('class');
		
		$('.'+menu_ativo+' .conteudo_edicao:not([rel="'+menu_ativar+'"])').hide();
		$('.'+menu_ativo+' .conteudo_edicao[rel="'+menu_ativar+'"]').show();

		if ($('.'+menu_ativo+' .conteudo_edicao[rel="'+menu_ativar+'"] .lista_modelos').length > 0) {
			$('.lista_modelos[rel="modelos_'+menu_ativar+'"] li img[src=""]').each(function(index, element) {
				if ($(this).isInViewport())
					$(element).attr('src', $(element).attr('data-src'));
			});
		}

		if ($(this).parent().parent().attr('id') == 'sub-menu_edicao') {
			$('#conteudo_edicao .edicao_'+menu[0]+' .conteudo_edicao').removeClass('ativo'); 
			$('#conteudo_edicao .'+menu_ativar).addClass('ativo'); 
		}
		else {
			var menu_parte = $(this).closest('.conteudo_edicao').attr('data-parte');
			var menu_edicao = $(this).parent().attr('rel');

			if (menu_parte != undefined) {
				$('.'+menu_edicao+'_'+menu_parte+' *[data-angulo]:not([data-angulo="'+menu_ativar+'"])').hide(); 
				$('.'+menu_edicao+'_'+menu_parte+' *[data-angulo="'+menu_ativar+'"]').show(); 
			}
			else {
				$('.edicao_'+menu_edicao+' *[data-angulo]:not([data-angulo="'+menu_ativar+'"])').hide(); 
				$('.edicao_'+menu_edicao+' *[data-angulo="'+menu_ativar+'"]').show(); 

				if (menu_edicao == 'bolso') 
					(menu_ativar == 'verso') ? $('.edicao_bolso *[rel="faixa"]').hide() : $('.edicao_bolso *[rel="faixa"]').show();
			}

		}
	});

	$(document).on('click', '#menu_cores.inativo', function(e){
		e.preventDefault();
		if (e.originalEvent) {
			$(this).removeClass('inativo');
			$('footer').css('bottom', '0px');
			$('#box_edicao').removeClass('ativo');
		}
	});
	$('.bt_fechar').on('click', function(e){
		e.stopPropagation();
		var edicao_ativa = $(this).closest('div[class^="edicao_"]');
		if (site_carregado == 1 && edicao_ativa.attr('class') == 'edicao_cores') {
			$('#menu_cores').addClass('inativo');
		}
		else {
			$('#lista_edicao .opcao').removeClass('ativo');
			$('#box_edicao').removeClass('ativo');
		}

		$('#site').removeAttr('style');	
	});

	var aux_parte, aux_chave, aux_valor;
	$(document).on('click', '.opcao_pers', function(e){
		e.preventDefault();
		if ($(window).width() <= 640)
			$('#box_edicao .bt_fechar').click();

		var rel_parte = $(this).attr('rel').split('-');
		var click_igual;
		if (((rel_parte[0] == aux_parte && rel_parte[1] == aux_chave && rel_parte[2] == aux_valor) || $(this).hasClass('ativo')) && 
			(preenchimento_habilitado == 1 && site_carregado == 1) && 
			(!$(this).hasClass('selecao') || (rel_parte[1] == 'numero_frente' && !$(this).hasClass('marcado'))))
			click_igual = 1;
		else 
			click_igual = 0;

		if (preenchimento_habilitado == 1 && click_igual == 0) {
			$(this).addClass('ativo');

			if (Object.keys(arrayStatus).length >= 1 && preenchimento_habilitado == 1 && rel_parte[1].indexOf('nome') == -1)
				$('#voltar').removeClass('desativado');

			if (rel_parte[1] == 'escudo') {
				if (rel_parte[2] == 'esquerda') {
					var posicao_logo = 'direita';
					var posicao_numero_inferior = 'direita';
				}	
				else if (rel_parte[2] == 'esquerda_2') {
					var posicao_logo = 'direita_cima';
				}	
				else if (rel_parte[2] == 'direita') {
					var posicao_logo = 'esquerda';
					var posicao_numero_inferior = 'esquerda';
				}	
				else if (rel_parte[2] == 'centro') {
					var posicao_logo = 'centro';
				}

				if (preenchimento_modelo == 1) 
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],0);
				else 
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);

				if (rel_parte[2] != 'sem') {
					if (rel_parte[0] == 'inferior' && $('.engloba_'+peca_inferior+' .previewNumero').length > 0)
						preencheAtributo(rel_parte[0],'numero_posicao',posicao_numero_inferior,0);

					if (rel_parte[0] == 'superior' && $('#numero_frente').val() != 'centro' && (rel_parte[2] != 'esquerda_2' && rel_parte[2] != 'centro')) {
						preencheAtributo(rel_parte[0],'numero_frente',posicao_logo,0);
					}
					else if (rel_parte[0] == 'superior' && $('.engloba_'+peca_superior+' .escudo').length > 0 || rel_parte[0] == 'inferior' && $('.engloba_'+peca_inferior+' .escudo').length > 0) {
						if (rel_parte[0] == 'superior' && $('.engloba_'+peca_superior+' .logo').length > 0) {
							preencheAtributo(rel_parte[0],'logo',posicao_logo,0);

							if ($('#numero_frente').val() != 'centro' && rel_parte[2] == 'esquerda_2')
								preencheAtributo(rel_parte[0],'numero_frente','direita',0);
						}

						if (rel_parte[0] == 'inferior' && $('.engloba_'+peca_inferior+' .logo').length > 0)
							preencheAtributo(rel_parte[0],'logo',posicao_logo,0);
					}	
					else if (rel_parte[0] == 'superior' && $('.engloba_'+peca_superior+' .logo').length > 0) {
						preencheAtributo(rel_parte[0],'logo',posicao_logo,1);
					}
					else if (rel_parte[0] == 'inferior' && $('.engloba_'+peca_inferior+' .logo').length > 0) {
						preencheAtributo(rel_parte[0],'logo',posicao_logo,1);
					}
					else if (rel_parte[0] == 'inferior' && $('.engloba_'+peca_inferior+' .numero_frente').length > 0) {
						preencheAtributo(rel_parte[0],'numero_posicao',posicao_numero_inferior,0);
					}	
				}	
			}
			else if (rel_parte[1] == 'numero_posicao') {
				if (preenchimento_modelo == 1) 
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],0);
				else 
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);

				if ($('.engloba_'+peca_inferior+' .logo').length > 0)
					preencheAtributo('inferior','logo',rel_parte[2],0);

				var posicao_oposta = (rel_parte[2] == 'direita') ? 'esquerda' : 'direita';
				if ($('.engloba_'+peca_inferior+' .escudo').length > 0 && $('.engloba_'+peca_inferior+' .escudo').css('display') != 'none')
					preencheAtributo('inferior','escudo',posicao_oposta,0);
			}
			else if (rel_parte[1].indexOf('patrocinio') != '-1') {
				var valor = ($('.selecao[rel*="'+rel_parte[1]+'-com"]').hasClass('marcado')) ? 'com' : 'sem';
				preencheAtributo(rel_parte[0],rel_parte[1],valor,1);
			}
			else if (rel_parte[1] == 'numero_frente') {
				preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);

				if (preenchimento_inicial == 0) {
					var tam_numFrente = $('.engloba_'+peca_superior+' .numero_frente .previewNumero').attr('font-size').replace('px', '');
					if (tam_numFrente != arrayStatus[iStatus]['superior']['numero_frente_fonte_tamanho'])
						preencheAtributo('superior','numero_frente_fonte_tamanho',tam_numFrente,0);

					if (rel_parte[2] != 'centro' && $('#escudo_superior').val() != 'centro') {
						var posicao_escudo = (rel_parte[2] == 'esquerda') ? 'direita' : 'esquerda';
						if ( $('.manequim .engloba_'+peca_superior+' .escudo').length )
							preencheAtributo(rel_parte[0],'escudo',posicao_escudo,0);
						if ( $('.manequim .engloba_'+peca_superior+' .logo').length )
							preencheAtributo(rel_parte[0],'logo','centro',0);
					}
				}	
			}
			else if (rel_parte[1] == 'cod_modelo') {
				if (rel_parte[0] == 'superior') {
					modelo_atual = $('.lista_modelos[rel="modelos_superior"] .opcao_pers[rel="superior-cod_modelo-'+rel_parte[2]+'"]').attr('data-i');
					$('.setas_modelos .peca_superior .cod_modelo').html(modelo_atual);

					if (preenchimento_inicial == 0) {
						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);

						if (travado == 1) {
							var eq = $(this).index();
							var rel_eq = $('.lista_modelos[rel="modelos_inferior"] .opcao_pers').eq(eq).attr('rel');
							var parte_eq = rel_eq.split('-');
							
							preencheAtributo(parte_eq[0],parte_eq[1],parte_eq[2],0);
						}

						trocaModelo($(this).attr('data-tipo'), $(this).attr('data-i'));
					}	
					else {
						if (travado == 1) {
							var eq = $(this).index();
							var rel_eq = $('.lista_modelos[rel="modelos_inferior"] .opcao_pers').eq(eq).attr('rel');
							var parte_eq = rel_eq.split('-');
							$('.lista_modelos[rel="modelos_inferior"] li').removeClass('ativo');
							$('.lista_modelos[rel="modelos_inferior"] li[rel="'+rel_eq+'"]').addClass('ativo');
							preencheAtributo(parte_eq[0],parte_eq[1],parte_eq[2],0);
						}

						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);
					}
				}
				else if (rel_parte[0] == 'inferior') {
					modelo_atual = $('.lista_modelos[rel="modelos_inferior"] .opcao_pers[rel="inferior-cod_modelo-'+rel_parte[2]+'"]').attr('data-i');
					$('.setas_modelos .peca_inferior .cod_modelo').html(modelo_atual);

					if (preenchimento_inicial == 0) {
						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);
						
						if (travado == 1) {
							var eq = $(this).index();
							var rel_eq = $('.lista_modelos[rel="modelos_superior"] .opcao_pers').eq(eq).attr('rel');
							var parte_eq = rel_eq.split('-');
							$('.lista_modelos[rel="modelos_superior"] li').removeClass('ativo');
							$('.lista_modelos[rel="modelos_superior"] li[rel="'+rel_eq+'"]').addClass('ativo');
							preencheAtributo(parte_eq[0],parte_eq[1],parte_eq[2],0);
						}

						trocaModelo($(this).attr('data-tipo'), $(this).attr('data-i'));			
					}
					else {
						if (travado == 1) {
							var eq = $(this).index();
							var rel_eq = $('.lista_modelos[rel="modelos_superior"] .opcao_pers').eq(eq).attr('rel');
							var parte_eq = rel_eq.split('-');
							$('.lista_modelos[rel="modelos_superior"] li').removeClass('ativo');
							$('.lista_modelos[rel="modelos_superior"] li[rel="'+rel_eq+'"]').addClass('ativo');
							preencheAtributo(parte_eq[0],parte_eq[1],parte_eq[2],0);
						}	

						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);
					}
				}
				else if (rel_parte[0] == 'acessorio') {
					modelo_atual = $('.lista_modelos[rel="modelos_acessorios"] .opcao_pers[rel="acessorio-cod_modelo-'+rel_parte[2]+'"]').attr('data-i');
					$('.setas_modelos .peca_acessorio .cod_modelo').html(modelo_atual);
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);

					if (preenchimento_inicial == 0)
						trocaModelo($(this).attr('data-tipo'), $(this).attr('data-i'));
				}
			} 
			else if (rel_parte[1] == 'manga' || rel_parte[1] == 'raglan') {
				if (rel_parte[2] == 'sem')
					var tipo_manga = rel_parte[2];
				else if (rel_parte[1] == 'manga')
					var tipo_manga = 'simples';
				else if (rel_parte[1] == 'raglan' && $('.detalhes_'+peca_superior+' .manga_raglan').css('display') == 'none')
					var tipo_manga = 'sem';
				else
					var tipo_manga = rel_parte[1];

				if (preenchimento_modelo == 1)
					preencheAtributo('superior','manga',tipo_manga,0);	
				else
					preencheAtributo('superior','manga',tipo_manga,1);		
			}
			else if (preenchimento_modelo == 1) {
				preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],0);
			}
			else {
				if (preenchimento_inicial == 0 && rel_parte[1].indexOf('posicao') > -1) {
					if (texto == 1) 
						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);
					else 
						preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],0);
				}
				else {
					preencheAtributo(rel_parte[0],rel_parte[1],rel_parte[2],1);
				}	
			}
			
			aux_parte = rel_parte[0];
			aux_chave = rel_parte[1];
			aux_valor = rel_parte[2];
		}
	});
	$(document).on('click', '.lista_opcoes .opcao', function(e){
		e.preventDefault();
		var opcao = $(this).attr('rel').split('-');
		$(this).parent().find('.opcao').removeClass('ativo');
		$(this).addClass('ativo');

		if ($(this).parent().attr('rel') == 'gola') {
			girarManequim();
			$('.golas div[class^="gola_"]').hide();
			$('.golas div[class="gola_'+opcao[2]+'"]').show();
			$('.golas div[class="gola_'+opcao[2]+'"] div[class^="gola"]').show();

			if ($('.textura_mescla').length)
				golaMescla();

			if (opcao[2] == 'malako') {
				$(".manequim #molde_camisa path, .manequim .camisa_1 #mask_camisa_1 path").attr("d", "m136.78 295.68c2.459-0.097 4.622-0.224 7.012-0.355 2.387-0.13 5-0.263 8.251-0.491 3.253-0.229 7.144-0.549 10.46-0.852 3.316-0.301 6.055-0.582 8.785-0.947s5.449-0.814 7.646-1.249 3.872-0.856 5.996-1.329c2.123-0.473 4.695-0.995 6.587-1.32 1.893-0.324 3.104-0.452 4.265-0.535 1.158-0.084 2.264-0.125 3.15-0.117 0.888 8e-3 1.559 0.063 1.953 0.094 0.396 0.031 0.52 0.037 0.611 0.043 0.049 2e-3 0.09 4e-3 0.127 6e-3 0.094-0.069 0.162-0.18 0.176-0.777 0.018-0.673-0.035-1.965-0.104-2.783s-0.155-1.166-0.285-1.854-0.306-1.719-0.65-2.683c-0.345-0.966-0.856-1.864-1.476-3.043-0.617-1.178-1.34-2.634-1.779-3.611-0.441-0.978-0.596-1.476-0.848-2.69-0.25-1.216-0.597-3.15-0.951-5.865-0.354-2.716-0.717-6.213-1.037-8.875-0.322-2.662-0.604-4.491-1.08-7.551-0.479-3.06-1.15-7.35-1.709-11.51-0.557-4.16-1-8.188-1.347-12.212s-0.597-8.044-0.757-11.626c-0.161-3.582-0.232-6.727-0.287-9.776-0.056-3.05-0.096-6.004-0.156-9.249s-0.141-6.782-0.108-12.024c0.032-5.241 0.179-12.19 0.353-17.448 0.172-5.256 0.373-8.824 0.65-12.793 0.276-3.969 0.627-8.339 0.975-12.258 0.346-3.918 0.688-7.385 1.12-11.73 0.432-4.346 0.954-9.571 1.482-13.976 0.526-4.406 1.06-7.994 1.51-10.608 0.45-2.615 0.815-4.258 1.138-5.304 0.321-1.044 0.598-1.491 0.803-1.763 0.205-0.271 0.338-0.367 0.404-0.414 0.066-0.048 0.066-0.048 0.049 0.597-0.018 0.646-0.053 1.938-0.108 3.529-0.055 1.593-0.13 3.487-0.171 4.963-0.042 1.476-0.05 2.533-0.08 3.183-0.029 0.649-0.082 0.89-0.102 1.009-0.02 0.12-4e-3 0.117-0.041 0.151-0.038 0.034-0.129 0.105-0.133 0.68-6e-3 0.575 0.075 1.655 0.191 3.048 0.117 1.393 0.271 3.099 0.322 4.78 0.051 1.682 1e-3 3.339 1e-3 4.226 1e-3 0.887 0.052 1.002 0.132 1.078 0.08 0.075 0.188 0.11 1.001 0.06 0.812-0.051 2.329-0.188 4.101-0.325 1.771-0.137 3.795-0.271 5.948-0.43s4.434-0.339 6.581-0.462c2.148-0.124 4.162-0.188 5.986-0.299 1.823-0.11 3.455-0.267 5.33-0.47 1.873-0.203 3.989-0.455 6.009-0.681 2.019-0.226 3.943-0.427 5.104-0.565s1.558-0.213 1.756-0.326c0.199-0.114 0.199-0.265 0.229-0.904 0.03-0.641 0.091-1.771 0.108-3.13s-8e-3 -2.947-0.023-4.424c-0.014-1.477-0.02-2.844-0.037-3.72-0.018-0.876-0.048-1.264-0.072-1.468-0.023-0.204-0.042-0.226-0.082-0.294-0.04-0.067-0.102-0.18-0.174-0.68-0.07-0.5-0.151-1.386-0.254-2.319-0.104-0.932-0.229-1.909-0.348-2.734-0.119-0.828-0.233-1.502-0.412-2.543-0.18-1.04-0.426-2.443-0.613-3.445-0.188-1-0.315-1.599-0.436-2.267s-0.234-1.407-0.366-2.119c-0.132-0.711-0.282-1.397-0.425-2.154-0.142-0.757-0.273-1.583-0.373-2.32s-0.166-1.385-0.24-2.027c-0.072-0.642-0.156-1.277-0.257-2.034-0.101-0.755-0.218-1.632-0.339-2.522-0.12-0.891-0.244-1.795-0.354-2.563s-0.204-1.397-0.371-2.342c-0.168-0.943-0.408-2.201-0.818-4.08-0.413-1.879-0.996-4.381-1.704-6.884-0.708-2.501-1.542-5.003-2.647-7.737-1.105-2.732-2.481-5.697-4.089-8.842s-3.447-6.47-4.874-8.772c-1.426-2.3-2.441-3.576-3.448-4.624s-2.008-1.868-3.011-2.605c-1.006-0.738-2.016-1.396-2.581-1.771-0.565-0.374-0.686-0.465-0.755-0.569-0.069-0.106-0.087-0.227-0.096-0.303s-9e-3 -0.109-0.068-0.175c-0.061-0.065-0.181-0.163-1.307-0.713-1.125-0.55-3.256-1.553-5.305-2.6-2.047-1.047-4.014-2.14-5.764-2.973s-3.282-1.405-5.056-1.956c-1.773-0.55-3.788-1.077-5.423-1.504-1.636-0.426-2.893-0.753-3.758-1.007-0.867-0.254-1.344-0.436-2.043-0.7-0.698-0.265-1.617-0.615-2.604-0.908-0.985-0.294-2.039-0.533-2.713-0.687-0.674-0.153-0.971-0.221-1.438-0.47-0.467-0.25-1.105-0.682-1.58-0.936-0.475-0.253-0.786-0.329-1.072-0.364-0.285-0.035-0.543-0.031-0.775-0.031s-0.439-4e-3 -1.342-0.33-2.503-0.971-4.021-1.575c-1.519-0.604-2.955-1.167-4.399-1.746-1.444-0.58-2.896-1.174-3.812-1.568-0.916-0.393-1.296-0.583-1.594-0.778-0.297-0.193-0.514-0.392-0.703-0.497-0.19-0.105-0.355-0.116-0.467-0.117-0.108 0-0.164 0.01-0.25-3e-3 -0.086-0.014-0.204-0.053-0.587-0.292-0.382-0.24-1.026-0.682-1.676-1.192-0.649-0.51-1.302-1.087-1.955-1.66-0.651-0.57-1.302-1.136-2.308-1.566-1.006-0.431-2.367-0.728-3.719-0.918-1.352-0.191-2.693 11.723-4.572 11.646s-4.295 1.853-7.923 1.87c-3.626 0.017-0.465 0.123-4.899 0.218-4.436 0.097-16.467 0.183-18.587 0.231-2.121 0.048-2.33-3.942-4.148-3.798-1.817 0.146-5.244-9.572-7.396-9.329-2.153 0.243-3.032 0.449-3.747 0.705-0.716 0.256-1.27 0.563-1.885 1.078s-1.293 1.238-2.018 1.875c-0.723 0.637-1.491 1.187-1.949 1.458-0.459 0.271-0.607 0.265-0.901 0.366-0.294 0.102-0.734 0.313-1.266 0.581-0.533 0.269-1.158 0.596-1.918 0.922-0.76 0.325-1.654 0.648-2.298 0.902-0.645 0.254-1.039 0.438-1.512 0.629-0.475 0.191-1.027 0.389-1.764 0.62-0.738 0.232-1.66 0.496-2.555 0.835-0.896 0.34-1.765 0.758-2.57 1.075-0.807 0.316-1.551 0.533-2.296 0.748-0.747 0.216-1.495 0.432-2.051 0.655-0.557 0.222-0.921 0.451-1.206 0.635-0.286 0.185-0.491 0.325-0.999 0.476-0.507 0.15-1.316 0.31-1.912 0.463-0.595 0.153-0.977 0.3-1.486 0.492-0.51 0.191-1.146 0.428-1.749 0.616-0.602 0.188-1.169 0.329-1.686 0.458-0.515 0.13-0.979 0.248-1.697 0.426s-1.692 0.417-2.548 0.632-1.596 0.408-2.169 0.569-0.979 0.292-1.434 0.425c-0.456 0.133-0.962 0.27-1.426 0.399-0.465 0.129-0.887 0.25-1.31 0.377-0.424 0.128-0.851 0.261-1.203 0.399-0.352 0.137-0.631 0.275-1.011 0.436-0.379 0.159-0.861 0.339-1.277 0.53-0.417 0.19-0.768 0.394-1.164 0.601-0.396 0.209-0.836 0.423-1.219 0.617-0.382 0.193-0.704 0.365-1.125 0.588-0.421 0.222-0.939 0.494-1.655 0.865-0.716 0.37-1.629 0.836-2.691 1.368s-2.273 1.127-3.177 1.575c-0.904 0.447-1.501 0.746-2.035 1.085-0.533 0.341-1 0.723-1.441 1.079-0.443 0.356-0.859 0.689-1.353 1.078-0.492 0.389-1.06 0.836-1.777 1.473s-1.584 1.464-2.373 2.329c-0.788 0.865-1.499 1.77-2.143 2.663-0.643 0.893-1.218 1.774-1.921 2.931s-1.535 2.589-2.205 3.818c-0.671 1.228-1.181 2.252-1.731 3.259-0.551 1.008-1.141 1.998-1.644 2.94-0.501 0.941-0.916 1.835-1.311 2.756-0.395 0.92-0.769 1.867-1.15 2.753-0.383 0.886-0.772 1.71-1.284 3.04-0.513 1.331-1.148 3.166-1.715 4.906-0.565 1.74-1.063 3.383-1.488 4.832-0.424 1.45-0.776 2.706-1.127 4.22-0.352 1.514-0.704 3.288-1.144 5.662s-0.967 5.349-1.288 7.066c-0.321 1.719-0.438 2.18-0.543 2.67s-0.2 1.008-0.398 1.831c-0.199 0.825-0.501 1.955-0.807 3.14s-0.618 2.426-0.838 3.474c-0.222 1.048-0.352 1.902-0.575 3.163-0.224 1.261-0.54 2.929-0.786 4.292-0.247 1.365-0.423 2.424-0.528 2.972-0.106 0.548-0.141 0.583-0.205 0.633s-0.155 0.116-0.25 2.244c-0.096 2.128-0.197 6.319-0.274 8.613-0.079 2.295-0.133 2.692 0.035 2.899 0.168 0.209 0.56 0.229 1.417 0.337 0.856 0.108 2.177 0.304 4.505 0.753 2.329 0.45 5.665 1.153 8.331 1.666 2.665 0.512 4.66 0.833 6.744 1.18 2.085 0.347 4.261 0.72 7.232 1.191 2.972 0.472 6.74 1.045 9.141 1.372s3.437 0.407 3.954 0.447c0.518 0.041 0.518 0.041 0.567-0.542 0.049-0.584 0.148-1.748 0.262-2.756s0.242-1.858 0.394-2.935c0.153-1.076 0.328-2.377 0.498-3.572 0.171-1.196 0.333-2.286 0.418-2.9 0.084-0.612 0.088-0.748 0.075-0.863-0.014-0.116-0.047-0.211-0.023-1.816s0.104-4.72 0.146-7.25c0.044-2.529 0.048-4.473 0.06-5.595 0.011-1.122 0.029-1.42 0.066-1.616 0.038-0.197 0.096-0.29 0.176-0.338 0.081-0.049 0.184-0.055 0.309 0.038 0.124 0.093 0.269 0.284 0.343 0.375 0.074 0.092 0.076 0.084 0.079 0.081 1e-3 -4e-3 1e-3 -4e-3 0.115 0.252 0.115 0.256 0.343 0.769 0.597 1.462 0.253 0.693 0.532 1.568 0.761 2.505s0.407 1.937 0.607 3.542c0.199 1.607 0.421 3.82 0.737 6.222 0.317 2.403 0.728 4.996 1.467 11.381 0.738 6.385 1.804 16.563 2.637 24.485 0.834 7.924 1.437 13.589 1.809 19.68 0.372 6.089 0.513 12.6 0.503 19.633-0.01 7.032-0.171 14.589-0.372 20.587-0.201 5.999-0.441 10.44-0.724 14.409-0.281 3.968-0.603 7.466-1.446 14.147-0.844 6.682-2.211 16.547-3.005 23.752-0.793 7.205-1.015 11.746-1.216 15.253s-0.381 5.978-0.672 8.112c-0.292 2.136-0.694 3.934-0.973 5.311s-0.434 2.332-0.452 2.932c-0.017 0.6 0.103 0.848 0.249 0.975 0.146 0.129 0.317 0.139 0.5 0.174 0.183 0.037 0.378 0.1 0.468 0.156 0.019 0.011 0.032 0.021 0.042 0.037 0.875 0.321 1.75 0.644 3.151 0.924 1.401 0.279 3.326 0.518 6.487 0.753 3.16 0.236 7.554 0.472 11.088 0.608s6.206 0.177 9.582 0.18c3.376 5e-3 7.456-0.029 11.317-5e-3 3.862 0.022 7.506 0.103 10.58 0.19 3.075 0.087 5.58 0.18 7.907 0.251 2.328 0.069 4.479 0.117 6.782 0.171 2.305 0.053 4.763 0.113 7.348 0.12 2.586 7e-3 5.299-0.04 8.032-0.098 2.732-0.058 5.486-0.126 7.943-0.222z");
				$(".manequim_verso #molde_camisa_verso path, .manequim_verso .camisa_1 #mask_camisa_1_verso path").attr("d", "m207.26 27.882c-0.11-0.063-0.223-0.122-0.337-0.177-4.974-2.379-9.71-5.332-14.853-7.146-4.645-1.638-11.449-2.698-17.28-4.717-2.276-0.789-4.554-1.588-6.817-2.414l-4e-3 -0.03-9.994-4.078-0.176-0.072c-0.613-0.28-1.553-1.207-2.511-1.888-0.493-0.369-0.612-0.563-1.038-0.905-2.854-2.298-5.604 2.368-9.569 2.361-0.901-2e-3 -1.04-0.123-1.778-0.163l-7.598 3.83c-5.891-0.486-12.051 5.499-18.053 5.523-5.085 0.02-9.553-9.937-14.561-9.523-2.528 0.209-4.994 0.029-7.597 0.17-0.739 0.04-0.877 0.161-1.778 0.163-3.966 6e-3 -6.715-4.659-9.571-2.361-0.424 0.342-0.543 0.536-1.037 0.905-0.741 0.527-1.47 1.2-2.046 1.607-0.17 0.121-0.326 0.218-0.465 0.281l-10.17 4.15-3e-3 0.03c-2.264 0.825-4.542 1.625-6.818 2.414-5.832 2.02-12.636 3.079-17.281 4.717-5.142 1.814-9.879 4.767-14.852 7.146-0.212 0.101-0.412 0.215-0.604 0.339-0.909 0.583-1.664 1.378-2.65 2-11.258 7.097-18.236 27.456-21.393 39.199-1.568 5.837-1.979 12.978-2.968 19.032-0.5 3.066-1.171 6.19-1.751 9.25-0.585 3.094-0.872 6.49-1.288 9.627-0.406 0.268-0.327-0.023-0.308 0.898l-0.065 1.854v8.779c0.041 1.018 0.102 1.812 0.186 2.163 1.125 0.477 3.705 0.514 5.068 0.711 7.659 1.114 9.038 0.828 15.785 1.554l21.538 1.348c-0.015-1.622 0.547-10.72 0.578-13.418l-0.603-0.316-0.07-0.036c0-4.474-0.011-9.222-0.011-13.694 1.677 4.245 3.327 18.936 3.788 24.013 0.734 8.113 1.825 16.18 2.511 24.337 0.348 4.135 0.874 8.265 1.009 12.414l0.653 12.771c0.396 4.197 0.208 8.931 0.273 13.174 0.032 2.061 0.194 4.006 0.186 6.127-7e-3 2.226-0.172 4.348-0.196 6.51-0.051 4.467-0.054 8.631-0.319 13.105-0.68 11.471-1.256 26.065-3.266 37.005-0.966 5.405-2.176 11.938-2.753 17.382-0.258 2.432-0.827 10.053-1.467 11.946-0.68 2.009-0.163 3.656-0.568 5.768-0.342 1.784-0.742 3.811-1.164 5.565-0.463 1.93-1.435 3.646 0.397 4.965 4.274 1.053 8.548 2.106 13.907 3.016 5.358 0.908 11.799 1.671 18.022 2.047 6.224 0.375 12.227 0.362 21.559 0.476 9.331 0.112 21.99 0.351 32.51 0.382 10.521 0.031 18.901-0.145 26.231-0.419s13.609-0.649 19.05-1.15 10.044-1.126 13.823-1.872c3.778-0.746 6.733-1.613 9.689-2.479 1.831-1.319 0.859-3.035 0.396-4.965-0.422-1.755-0.822-3.781-1.164-5.565-0.404-2.111 0.112-3.759-0.567-5.768-0.641-1.894-1.21-9.515-1.468-11.946-0.576-5.443-1.787-11.977-2.752-17.382-2.01-10.939-2.586-25.534-3.266-37.005-0.266-4.475-0.269-8.639-0.319-13.105-0.024-2.162-0.188-4.284-0.196-6.51-8e-3 -2.121 0.154-4.066 0.187-6.127 0.065-4.243-0.122-8.977 0.273-13.174l0.653-12.771c0.135-4.148 0.66-8.278 1.008-12.414 0.686-8.158 1.777-16.225 2.512-24.337 0.461-5.077 1.888-19.035 3.566-23.28 0 4.472-0.105 8.581-0.105 13.055l-0.416 0.247c-4e-3 0.881 0.338 12.086 0.604 13.417l21.57-1.335c6.748-0.726 8.126-0.44 15.785-1.554 1.363-0.198 3.943-0.235 5.068-0.711 0.084-0.351 0.145-1.146 0.186-2.163v-8.779l-0.065-1.854c0.015-0.687 0.062-0.7-0.083-0.773-0.05-0.025-0.121-0.057-0.225-0.125-0.416-3.137-0.703-6.533-1.287-9.627-0.58-3.059-1.252-6.184-1.752-9.25-0.988-6.054-1.399-13.195-2.968-19.032-3.156-11.743-10.134-32.103-21.392-39.199-1.054-0.666-1.892-1.577-2.915-2.164z");
			}
			else {
				$(".manequim #molde_camisa path, .manequim .camisa_1 #mask_camisa_1 path").attr("d", "M136.777,295.681c2.459-0.097,4.622-0.224,7.012-0.355c2.387-0.13,5-0.263,8.251-0.491c3.253-0.229,7.144-0.549,10.46-0.852  c3.316-0.301,6.055-0.582,8.785-0.947s5.449-0.814,7.646-1.249s3.872-0.856,5.996-1.329c2.123-0.473,4.695-0.995,6.587-1.32  c1.893-0.324,3.104-0.452,4.265-0.535c1.158-0.084,2.264-0.125,3.15-0.117c0.888,0.008,1.559,0.063,1.953,0.094  c0.396,0.031,0.52,0.037,0.611,0.043c0.049,0.002,0.09,0.004,0.127,0.006c0.094-0.069,0.162-0.18,0.176-0.777  c0.018-0.673-0.035-1.965-0.104-2.783s-0.155-1.166-0.285-1.854c-0.13-0.688-0.306-1.719-0.65-2.683  c-0.345-0.966-0.856-1.864-1.476-3.043c-0.617-1.178-1.34-2.634-1.779-3.611c-0.441-0.978-0.596-1.476-0.848-2.69  c-0.25-1.216-0.597-3.15-0.951-5.865c-0.354-2.716-0.717-6.213-1.037-8.875c-0.322-2.662-0.604-4.491-1.08-7.551  c-0.479-3.06-1.15-7.35-1.709-11.51c-0.557-4.16-1-8.188-1.347-12.212c-0.347-4.024-0.597-8.044-0.757-11.626  c-0.161-3.582-0.232-6.727-0.287-9.776c-0.056-3.05-0.096-6.004-0.156-9.249s-0.141-6.782-0.108-12.024  c0.032-5.241,0.179-12.19,0.353-17.448c0.172-5.256,0.373-8.824,0.65-12.793c0.276-3.969,0.627-8.339,0.975-12.258  c0.346-3.918,0.688-7.385,1.12-11.73c0.432-4.346,0.954-9.571,1.482-13.976c0.526-4.406,1.06-7.994,1.51-10.608  c0.45-2.615,0.815-4.258,1.138-5.304c0.321-1.044,0.598-1.491,0.803-1.763c0.205-0.271,0.338-0.367,0.404-0.414  c0.066-0.048,0.066-0.048,0.049,0.597c-0.018,0.646-0.053,1.938-0.108,3.529c-0.055,1.593-0.13,3.487-0.171,4.963  c-0.042,1.476-0.05,2.533-0.08,3.183c-0.029,0.649-0.082,0.89-0.102,1.009c-0.02,0.12-0.004,0.117-0.041,0.151  c-0.038,0.034-0.129,0.105-0.133,0.68c-0.006,0.575,0.075,1.655,0.191,3.048c0.117,1.393,0.271,3.099,0.322,4.78  c0.051,1.682,0.001,3.339,0.001,4.226c0.001,0.887,0.052,1.002,0.132,1.078c0.08,0.075,0.188,0.11,1.001,0.06  c0.812-0.051,2.329-0.188,4.101-0.325c1.771-0.137,3.795-0.271,5.948-0.43c2.153-0.159,4.434-0.339,6.581-0.462  c2.148-0.124,4.162-0.188,5.986-0.299c1.823-0.11,3.455-0.267,5.33-0.47c1.873-0.203,3.989-0.455,6.009-0.681  c2.019-0.226,3.943-0.427,5.104-0.565c1.161-0.138,1.558-0.213,1.756-0.326c0.199-0.114,0.199-0.265,0.229-0.904  c0.03-0.641,0.091-1.771,0.108-3.13s-0.008-2.947-0.023-4.424c-0.014-1.477-0.02-2.844-0.037-3.72  c-0.018-0.876-0.048-1.264-0.072-1.468c-0.023-0.204-0.042-0.226-0.082-0.294c-0.04-0.067-0.102-0.18-0.174-0.68  c-0.07-0.5-0.151-1.386-0.254-2.319c-0.104-0.932-0.229-1.909-0.348-2.734c-0.119-0.828-0.233-1.502-0.412-2.543  c-0.18-1.04-0.426-2.443-0.613-3.445c-0.188-1-0.315-1.599-0.436-2.267c-0.121-0.668-0.234-1.407-0.366-2.119  c-0.132-0.711-0.282-1.397-0.425-2.154c-0.142-0.757-0.273-1.583-0.373-2.32c-0.1-0.737-0.166-1.385-0.24-2.027  c-0.072-0.642-0.156-1.277-0.257-2.034c-0.101-0.755-0.218-1.632-0.339-2.522c-0.12-0.891-0.244-1.795-0.354-2.563  s-0.204-1.397-0.371-2.342c-0.168-0.943-0.408-2.201-0.818-4.08c-0.413-1.879-0.996-4.381-1.704-6.884  c-0.708-2.501-1.542-5.003-2.647-7.737c-1.105-2.732-2.481-5.697-4.089-8.842c-1.608-3.145-3.447-6.47-4.874-8.772  c-1.426-2.3-2.441-3.576-3.448-4.624c-1.007-1.048-2.008-1.868-3.011-2.605c-1.006-0.738-2.016-1.396-2.581-1.771  c-0.565-0.374-0.686-0.465-0.755-0.569c-0.069-0.106-0.087-0.227-0.096-0.303s-0.009-0.109-0.068-0.175  c-0.061-0.065-0.181-0.163-1.307-0.713c-1.125-0.55-3.256-1.553-5.305-2.6c-2.047-1.047-4.014-2.14-5.764-2.973  s-3.282-1.405-5.056-1.956c-1.773-0.55-3.788-1.077-5.423-1.504c-1.636-0.426-2.893-0.753-3.758-1.007  c-0.867-0.254-1.344-0.436-2.043-0.7c-0.698-0.265-1.617-0.615-2.604-0.908c-0.985-0.294-2.039-0.533-2.713-0.687  c-0.674-0.153-0.971-0.221-1.438-0.47c-0.467-0.25-1.105-0.682-1.58-0.936c-0.475-0.253-0.786-0.329-1.072-0.364  c-0.285-0.035-0.543-0.031-0.775-0.031s-0.439-0.004-1.342-0.33c-0.903-0.326-2.503-0.971-4.021-1.575  c-1.519-0.604-2.955-1.167-4.399-1.746c-1.444-0.58-2.896-1.174-3.812-1.568c-0.916-0.393-1.296-0.583-1.594-0.778  c-0.297-0.193-0.514-0.392-0.703-0.497c-0.19-0.105-0.355-0.116-0.467-0.117c-0.108,0-0.164,0.01-0.25-0.003  c-0.086-0.014-0.204-0.053-0.587-0.292c-0.382-0.24-1.026-0.682-1.676-1.192c-0.649-0.51-1.302-1.087-1.955-1.66  c-0.651-0.57-1.302-1.136-2.308-1.566c-1.006-0.431-2.367-0.728-3.719-0.918c-1.352-0.191-2.693-0.277-4.572-0.354  s-4.295-0.147-7.923-0.13c-3.626,0.017-8.465,0.123-12.899,0.218c-4.436,0.097-8.467,0.183-10.587,0.231  c-2.121,0.048-2.33,0.058-4.148,0.202c-1.817,0.146-5.244,0.428-7.396,0.671c-2.153,0.243-3.032,0.449-3.747,0.705  c-0.716,0.256-1.27,0.563-1.885,1.078c-0.615,0.515-1.293,1.238-2.018,1.875c-0.723,0.637-1.491,1.187-1.949,1.458  c-0.459,0.271-0.607,0.265-0.901,0.366c-0.294,0.102-0.734,0.313-1.266,0.581c-0.533,0.269-1.158,0.596-1.918,0.922  c-0.76,0.325-1.654,0.648-2.298,0.902c-0.645,0.254-1.039,0.438-1.512,0.629c-0.475,0.191-1.027,0.389-1.764,0.62  c-0.738,0.232-1.66,0.496-2.555,0.835c-0.896,0.34-1.765,0.758-2.57,1.075c-0.807,0.316-1.551,0.533-2.296,0.748  c-0.747,0.216-1.495,0.432-2.051,0.655c-0.557,0.222-0.921,0.451-1.206,0.635c-0.286,0.185-0.491,0.325-0.999,0.476  c-0.507,0.15-1.316,0.31-1.912,0.463c-0.595,0.153-0.977,0.3-1.486,0.492c-0.51,0.191-1.146,0.428-1.749,0.616  c-0.602,0.188-1.169,0.329-1.686,0.458c-0.515,0.13-0.979,0.248-1.697,0.426c-0.718,0.178-1.692,0.417-2.548,0.632  c-0.856,0.215-1.596,0.408-2.169,0.569c-0.573,0.161-0.979,0.292-1.434,0.425c-0.456,0.133-0.962,0.27-1.426,0.399  c-0.465,0.129-0.887,0.25-1.31,0.377c-0.424,0.128-0.851,0.261-1.203,0.399c-0.352,0.137-0.631,0.275-1.011,0.436  c-0.379,0.159-0.861,0.339-1.277,0.53c-0.417,0.19-0.768,0.394-1.164,0.601c-0.396,0.209-0.836,0.423-1.219,0.617  c-0.382,0.193-0.704,0.365-1.125,0.588c-0.421,0.222-0.939,0.494-1.655,0.865c-0.716,0.37-1.629,0.836-2.691,1.368  s-2.273,1.127-3.177,1.575c-0.904,0.447-1.501,0.746-2.035,1.085c-0.533,0.341-1,0.723-1.441,1.079  c-0.443,0.356-0.859,0.689-1.353,1.078c-0.492,0.389-1.06,0.836-1.777,1.473c-0.717,0.637-1.584,1.464-2.373,2.329  c-0.788,0.865-1.499,1.77-2.143,2.663c-0.643,0.893-1.218,1.774-1.921,2.931s-1.535,2.589-2.205,3.818  c-0.671,1.228-1.181,2.252-1.731,3.259c-0.551,1.008-1.141,1.998-1.644,2.94c-0.501,0.941-0.916,1.835-1.311,2.756  c-0.395,0.92-0.769,1.867-1.15,2.753c-0.383,0.886-0.772,1.71-1.284,3.04c-0.513,1.331-1.148,3.166-1.715,4.906  c-0.565,1.74-1.063,3.383-1.488,4.832c-0.424,1.45-0.776,2.706-1.127,4.22c-0.352,1.514-0.704,3.288-1.144,5.662  c-0.44,2.374-0.967,5.349-1.288,7.066c-0.321,1.719-0.438,2.18-0.543,2.67c-0.105,0.49-0.2,1.008-0.398,1.831  c-0.199,0.825-0.501,1.955-0.807,3.14s-0.618,2.426-0.838,3.474c-0.222,1.048-0.352,1.902-0.575,3.163  c-0.224,1.261-0.54,2.929-0.786,4.292c-0.247,1.365-0.423,2.424-0.528,2.972c-0.106,0.548-0.141,0.583-0.205,0.633  s-0.155,0.116-0.25,2.244c-0.096,2.128-0.197,6.319-0.274,8.613c-0.079,2.295-0.133,2.692,0.035,2.899  c0.168,0.209,0.56,0.229,1.417,0.337c0.856,0.108,2.177,0.304,4.505,0.753c2.329,0.45,5.665,1.153,8.331,1.666  c2.665,0.512,4.66,0.833,6.744,1.18c2.085,0.347,4.261,0.72,7.232,1.191c2.972,0.472,6.74,1.045,9.141,1.372  s3.437,0.407,3.954,0.447c0.518,0.041,0.518,0.041,0.567-0.542c0.049-0.584,0.148-1.748,0.262-2.756  c0.114-1.008,0.242-1.858,0.394-2.935c0.153-1.076,0.328-2.377,0.498-3.572c0.171-1.196,0.333-2.286,0.418-2.9  c0.084-0.612,0.088-0.748,0.075-0.863c-0.014-0.116-0.047-0.211-0.023-1.816s0.104-4.72,0.146-7.25  c0.044-2.529,0.048-4.473,0.06-5.595c0.011-1.122,0.029-1.42,0.066-1.616c0.038-0.197,0.096-0.29,0.176-0.338  c0.081-0.049,0.184-0.055,0.309,0.038c0.124,0.093,0.269,0.284,0.343,0.375c0.074,0.092,0.076,0.084,0.079,0.081  c0.001-0.004,0.001-0.004,0.115,0.252c0.115,0.256,0.343,0.769,0.597,1.462c0.253,0.693,0.532,1.568,0.761,2.505  s0.407,1.937,0.607,3.542c0.199,1.607,0.421,3.82,0.737,6.222c0.317,2.403,0.728,4.996,1.467,11.381  c0.738,6.385,1.804,16.563,2.637,24.485c0.834,7.924,1.437,13.589,1.809,19.68c0.372,6.089,0.513,12.6,0.503,19.633  c-0.01,7.032-0.171,14.589-0.372,20.587c-0.201,5.999-0.441,10.44-0.724,14.409c-0.281,3.968-0.603,7.466-1.446,14.147  c-0.844,6.682-2.211,16.547-3.005,23.752c-0.793,7.205-1.015,11.746-1.216,15.253s-0.381,5.978-0.672,8.112  c-0.292,2.136-0.694,3.934-0.973,5.311s-0.434,2.332-0.452,2.932c-0.017,0.6,0.103,0.848,0.249,0.975  c0.146,0.129,0.317,0.139,0.5,0.174c0.183,0.037,0.378,0.1,0.468,0.156c0.019,0.011,0.032,0.021,0.042,0.037  c0.875,0.321,1.75,0.644,3.151,0.924c1.401,0.279,3.326,0.518,6.487,0.753c3.16,0.236,7.554,0.472,11.088,0.608  s6.206,0.177,9.582,0.18c3.376,0.005,7.456-0.029,11.317-0.005c3.862,0.022,7.506,0.103,10.58,0.19  c3.075,0.087,5.58,0.18,7.907,0.251c2.328,0.069,4.479,0.117,6.782,0.171c2.305,0.053,4.763,0.113,7.348,0.12  c2.586,0.007,5.299-0.04,8.032-0.098C131.566,295.845,134.32,295.777,136.777,295.681z");
				$(".manequim_verso #molde_camisa_verso path, .manequim_verso .camisa_1 #mask_camisa_1_verso path").attr("d", "M207.262,27.882c-0.11-0.063-0.223-0.122-0.337-0.177c-4.974-2.379-9.71-5.332-14.853-7.146  c-4.645-1.638-11.449-2.698-17.28-4.717c-2.276-0.789-4.554-1.588-6.817-2.414l-0.004-0.03l-9.994-4.078l-0.176-0.072  c-0.613-0.28-1.553-1.207-2.511-1.888c-0.493-0.369-0.612-0.563-1.038-0.905c-2.854-2.298-5.604-5.632-9.569-5.639  c-0.901-0.002-1.04-0.123-1.778-0.163l-7.598-0.17c-5.891-0.486-12.051-0.501-18.053-0.477c-5.085,0.02-9.553,0.063-14.561,0.477  c-2.528,0.209-4.994,0.029-7.597,0.17c-0.739,0.04-0.877,0.161-1.778,0.163c-3.966,0.006-6.715,3.341-9.571,5.639  c-0.424,0.342-0.543,0.536-1.037,0.905c-0.741,0.527-1.47,1.2-2.046,1.607c-0.17,0.121-0.326,0.218-0.465,0.281l-10.17,4.15  l-0.003,0.03c-2.264,0.825-4.542,1.625-6.818,2.414c-5.832,2.02-12.636,3.079-17.281,4.717c-5.142,1.814-9.879,4.767-14.852,7.146  c-0.212,0.101-0.412,0.215-0.604,0.339c-0.909,0.583-1.664,1.378-2.65,2C16.563,37.141,9.585,57.5,6.428,69.243  C4.86,75.08,4.449,82.221,3.46,88.275c-0.5,3.066-1.171,6.19-1.751,9.25c-0.585,3.094-0.872,6.49-1.288,9.627  c-0.406,0.268-0.327-0.023-0.308,0.898l-0.065,1.854v8.779c0.041,1.018,0.102,1.812,0.186,2.163  c1.125,0.477,3.705,0.514,5.068,0.711c7.659,1.114,9.038,0.828,15.785,1.554l21.538,1.348c-0.015-1.622,0.547-10.72,0.578-13.418  l-0.603-0.316l-0.07-0.036c0-4.474-0.011-9.222-0.011-13.694c1.677,4.245,3.327,18.936,3.788,24.013  c0.734,8.113,1.825,16.18,2.511,24.337c0.348,4.135,0.874,8.265,1.009,12.414l0.653,12.771c0.396,4.197,0.208,8.931,0.273,13.174  c0.032,2.061,0.194,4.006,0.186,6.127c-0.007,2.226-0.172,4.348-0.196,6.51c-0.051,4.467-0.054,8.631-0.319,13.105  c-0.68,11.471-1.256,26.065-3.266,37.005c-0.966,5.405-2.176,11.938-2.753,17.382c-0.258,2.432-0.827,10.053-1.467,11.946  c-0.68,2.009-0.163,3.656-0.568,5.768c-0.342,1.784-0.742,3.811-1.164,5.565c-0.463,1.93-1.435,3.646,0.397,4.965  c4.274,1.053,8.548,2.106,13.907,3.016c5.358,0.908,11.799,1.671,18.022,2.047c6.224,0.375,12.227,0.362,21.559,0.476  c9.331,0.112,21.99,0.351,32.51,0.382c10.521,0.031,18.901-0.145,26.231-0.419s13.609-0.649,19.05-1.15s10.044-1.126,13.823-1.872  c3.778-0.746,6.733-1.613,9.689-2.479c1.831-1.319,0.859-3.035,0.396-4.965c-0.422-1.755-0.822-3.781-1.164-5.565  c-0.404-2.111,0.112-3.759-0.567-5.768c-0.641-1.894-1.21-9.515-1.468-11.946c-0.576-5.443-1.787-11.977-2.752-17.382  c-2.01-10.939-2.586-25.534-3.266-37.005c-0.266-4.475-0.269-8.639-0.319-13.105c-0.024-2.162-0.188-4.284-0.196-6.51  c-0.008-2.121,0.154-4.066,0.187-6.127c0.065-4.243-0.122-8.977,0.273-13.174l0.653-12.771c0.135-4.148,0.66-8.278,1.008-12.414  c0.686-8.158,1.777-16.225,2.512-24.337c0.461-5.077,1.888-19.035,3.566-23.28c0,4.472-0.105,8.581-0.105,13.055l0,0l-0.416,0.247  c-0.004,0.881,0.338,12.086,0.604,13.417l21.57-1.335c6.748-0.726,8.126-0.44,15.785-1.554c1.363-0.198,3.943-0.235,5.068-0.711  c0.084-0.351,0.145-1.146,0.186-2.163v-8.779l-0.065-1.854c0.015-0.687,0.062-0.7-0.083-0.773c-0.05-0.025-0.121-0.057-0.225-0.125  c-0.416-3.137-0.703-6.533-1.287-9.627c-0.58-3.059-1.252-6.184-1.752-9.25c-0.988-6.054-1.399-13.195-2.968-19.032  c-3.156-11.743-10.134-32.103-21.392-39.199C209.123,29.38,208.285,28.469,207.262,27.882z");
			}

			var val_top = $('.manequim .golas .gola_'+opcao[2]).attr('data-top');
			var val_top_verso = $('.manequim_verso .golas .gola_'+opcao[2]).attr('data-top');
			if (val_top !== undefined) {
				$('.engloba_'+peca_superior+' .fundos-svgs > div:not(".golas"), .engloba_'+peca_superior+' .fundos-svgs > svg, .engloba_'+peca_inferior+', .engloba_'+peca_acessorio+', .detalhe').css('margin-top', val_top+'px');
				$('.engloba_'+peca_superior+' .fundos-svgs > .textura').css('top', val_top+'px').css('margin-top', 0);
				if (val_top_verso === undefined) {
					$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .golas').css('margin-top', val_top+'px');
				}
			}
			else {
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .golas').css('margin-top', 0);
				$('.engloba_'+peca_superior+' .fundos-svgs > div:not(".golas"), .engloba_'+peca_superior+' .fundos-svgs > svg, .engloba_'+peca_inferior+', .engloba_'+peca_acessorio+', .detalhe').css('margin-top', 0);
				$('.engloba_'+peca_superior+' .fundos-svgs > .textura').css('top', 0).css('margin-top', 0);
			}
			if (val_top_verso !== undefined) {
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs > div:not(".golas"), .manequim_verso .engloba_'+peca_superior+' .fundos-svgs > svg, .manequim_verso .engloba_'+peca_inferior+', .manequim_verso .engloba_'+peca_acessorio+', .manequim_verso .detalhe').css('margin-top', val_top_verso+'px');
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs > .textura').css('top', val_top_verso+'px').css('margin-top', 0);
			}

			// Alteração y logo/escudo centro --- POLO
			if (opcao[2] == 'polo') {
				logo_superior_centro_y = Number(aux_logo_centro_y) + Number(10);
				escudo_superior_centro_y = Number(aux_escudo_centro_y) + Number(8);

				if ($('#escudo_superior').val() == 'centro')
					$('.opcao[rel="superior-escudo-centro"]').click();
			}
			else if (opcao[2] == 'soccer_botoes') {
				logo_superior_centro_y = Number(aux_logo_centro_y) + Number(18);
				escudo_superior_centro_y = Number(aux_escudo_centro_y) + Number(16);

				if ($('#escudo_superior').val() == 'centro')
					$('.opcao[rel="superior-escudo-centro"]').click();

				if ($('.engloba_'+peca_superior+' .escudo').length) {
					numero_frente_centro_y = aux_numero_frente_centro_y + 5;

					if ($('#numero_frente').val() == 'centro') {
						$('.detalhes_'+peca_superior+' .numero_frente').attr({'transform':'translate('+numero_frente_centro_x+','+numero_frente_centro_y+')'});
					}
				}
			}
			else {
				logo_superior_centro_y = aux_logo_centro_y;
				escudo_superior_centro_y = aux_escudo_centro_y;
				numero_frente_centro_y = aux_numero_frente_centro_y;

				if ($('#escudo_superior').val() == 'centro')
					$('.opcao[rel="superior-escudo-centro"]').click();
				if ($('#numero_frente').val() == 'centro')
					$('.detalhes_'+peca_superior+' .numero_frente').attr({'transform':'translate('+numero_frente_centro_x+','+numero_frente_centro_y+')'});	
			}

			if ($('.golas div[class="gola_'+opcao[2]+'"] .gola_2').length) {
				if (!$('.cor_camada[rel="gola_2"] .cor_atual')[0].hasAttribute('style')) {
					if (preenchimento_habilitado == 1) {
						preenchimento_habilitado = 0;
						$('.cor_camada[rel="gola_2"]').click();
						$('.paleta_cores[rel="cor_gola"] li[alt="preto"]').click();
						preenchimento_habilitado = 1;
						preencheAtributo('superior','cor_gola_2','260',0);
					}
				}

				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(1).css('display','flex');
			} 
			else {
				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(1).hide();
			}

			if ($('.golas div[class="gola_'+opcao[2]+'"] .gola_3').length) {
				if (!$('.cor_camada[rel="gola_3"] .cor_atual')[0].hasAttribute('style')) {
					if (preenchimento_habilitado == 1) {
						preenchimento_habilitado = 0;
						$('.cor_camada[rel="gola_3"]').click();
						$('.paleta_cores[rel="cor_gola"] li[alt="preto"]').click();
						preenchimento_habilitado = 1;
						preencheAtributo('superior','cor_gola_3','260',0);
					}
				}

				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(2).css('display','flex');
			} 
			else {
				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(2).hide();
			}
			
			if ($('.golas div[class="gola_'+opcao[2]+'"] .gola_4').length) {
				if (!$('.cor_camada[rel="gola_4"] .cor_atual')[0].hasAttribute('style')) {
					if (preenchimento_habilitado == 1) {
						preenchimento_habilitado = 0;
						$('.cor_camada[rel="gola_4"]').click();
						$('.paleta_cores[rel="cor_gola"] li[alt="preto"]').click();
						preenchimento_habilitado = 1;
						preencheAtributo('superior','cor_gola_4','260',0);
					}
				}

				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(3).css('display','flex');
			} 
			else {
				$('.edicao_acabamentos .lista_camadas .cor_camada').eq(3).hide();
			}
		} 
		else if ($(this).parent().attr('rel') == 'escudo_superior') {
			if ($('#lista_lados .ativo .engloba_'+peca_superior+' .escudo').length == 0)
				(modelo_rotacionar == 1) ? girarManequim(opcao[2]) : girarManequim();

			if (opcao[2] != 'sem') {
				$('#escudo_superior').val(opcao[2]);
				$('.engloba_'+peca_superior+' .escudo').show();
				$('.ipt-checkbox[rel="escudo_superior"]').addClass('ativo');
				$('#ipt-escudo_superior').prop('checked', true);
			} 
			else {
				$('.engloba_'+peca_superior+' .escudo').hide();
				$('.ipt-checkbox[rel="escudo_superior"]').removeClass('ativo');
				$('#ipt-escudo_superior').prop('checked', false);
			}

			if (opcao[2] == 'esquerda') {
				$('.manequim .engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_esquerda_y,'left':escudo_superior_esquerda_x},500);

				if ( $('.manequim .detalhes_'+peca_superior+' .numero_frente').css('display') != 'none' && $('.manequim .detalhes_'+peca_superior+' .numero_frente').length && 
					($('#numero_frente').val() != 'centro' && $('#numero_frente').val() != '') ) {
					$('.manequim .detalhes_'+peca_superior+' .numero_frente').attr('transform','translate('+numero_superior_direita_x+','+numero_superior_direita_y+')');
					
					if (preenchimento_habilitado == 1) {
						$('.box_selecao[rel="numero_frente"] .selecao').removeClass('marcado');
						$('.box_selecao[rel="numero_frente"] .selecao[rel="superior-numero_frente-direita"]').addClass('marcado');
						$('#numero_frente').val('direita');
					}
				}
				else if ($('.manequim .engloba_'+peca_superior+' .logo').length) {
					$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':logo_superior_direita_x, 'top':logo_superior_direita_y},500);
					if (esporte_dir == 'futebol_masculino_3')
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
					else
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
				}

				if (modelo_rotacionar == 1) {
					$('.manequim_direita .engloba_'+peca_superior+' .escudo').hide();
					$('.manequim_esquerda .engloba_'+peca_superior+' .escudo svg')
						.css('transform','translate('+escudo_lateral_esquerda_x+'px,'+escudo_lateral_esquerda_y+'px) rotate(5deg)')
						.attr('transform','matrix(1,0.1,-0.1,1,'+escudo_lateral_esquerda_x+','+escudo_lateral_esquerda_y+')').show();
				}
			} 
			else if (opcao[2] == 'esquerda_2') {
				$('.manequim .engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_esquerda_y,'left':escudo_superior_esquerda_x},500);

				if ( $('.manequim .detalhes_'+peca_superior+' .numero_frente').css('display') != 'none' && $('.manequim .detalhes_'+peca_superior+' .numero_frente').length && 
					($('#numero_frente').val() != 'centro' && $('#numero_frente').val() != '') ) {
					$('.manequim .detalhes_'+peca_superior+' .numero_frente').attr('transform','translate('+numero_superior_direita_x+','+numero_superior_direita_y+')');
					
					if (preenchimento_habilitado == 1) {
						$('.box_selecao[rel="numero_frente"] .selecao').removeClass('marcado');
						$('.box_selecao[rel="numero_frente"] .selecao[rel="superior-numero_frente-direita"]').addClass('marcado');
						$('#numero_frente').val('direita');
					}
				}

				if ($('.manequim .engloba_'+peca_superior+' .logo').length)
					$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':logo_superior_direita_ombro_x, 'top':logo_superior_direita_ombro_y},500).css('transform', 'rotate(-15deg)');
			}
			else if (opcao[2] == 'direita') {
				$('.manequim .engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_direita_y,'left':escudo_superior_direita_x},500);

				if ( $('.manequim .detalhes_'+peca_superior+' .numero_frente').css('display') != 'none' && $('.manequim .detalhes_'+peca_superior+' .numero_frente').length && 
					($('#numero_frente').val() != 'centro' && $('#numero_frente').val() != '') ) {
					$('.manequim .detalhes_'+peca_superior+' .numero_frente').attr('transform','translate('+numero_superior_esquerda_x+','+numero_superior_esquerda_y+')');

					if (preenchimento_habilitado == 1) {
						$('.box_selecao[rel="numero_frente"] .selecao').removeClass('marcado');
						$('.box_selecao[rel="numero_frente"] .selecao[rel="superior-numero_frente-esquerda"]').addClass('marcado');
						$('#numero_frente').val('esquerda');
					}
				}
				else if ($('.manequim .engloba_'+peca_superior+' .logo').length) {
					$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':logo_superior_esquerda_x, 'top':logo_superior_esquerda_y},500);
					if (esporte_dir == 'futebol_masculino_3')
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
					else
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
				}

				if (modelo_rotacionar == 1) {
					$('.manequim_esquerda .engloba_'+peca_superior+' .escudo').hide();
					$('.manequim_direita .engloba_'+peca_superior+' .escudo svg')
						.css('transform','translate('+escudo_lateral_direita_x+'px,'+escudo_lateral_direita_y+'px) rotate(-5deg)')
						.attr('transform','matrix(1,-0.2,0.1,1,'+escudo_lateral_direita_x+','+escudo_lateral_direita_y+')').show();
				}	
			}
			else if (opcao[2] == 'centro') {
				$('.manequim .engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_centro_y,'left':escudo_superior_centro_x},500);

				if ($('.manequim .engloba_'+peca_superior+' .logo').length) {
					$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':logo_superior_centro_x, 'top':logo_superior_centro_y},500);
					if (esporte_dir == 'futebol_masculino_3')
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
					else
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
				}

				if (modelo_rotacionar == 1)
					$('.manequim_direita .escudo, .manequim_esquerda .escudo').hide();
			}
		} 
		else if ($(this).parent().attr('rel') == 'escudo_inferior') {
			girarManequim();

			if (opcao[2] != 'sem') {
				$('#escudo_inferior').val(opcao[2]);
				$('.engloba_'+peca_inferior+' .escudo').show();
				$('.ipt-checkbox[rel="escudo_inferior"]').addClass('ativo');
				$('#ipt-escudo_inferior').prop('checked', true);
			} 
			else {
				$('.engloba_'+peca_inferior+' .escudo').hide();
				$('.ipt-checkbox[rel="escudo_inferior"]').removeClass('ativo');
				$('#ipt-escudo_inferior').prop('checked', false);
			}

			if (opcao[2] == 'esquerda') {
				$('.lista_opcoes[rel="posicao_numero"] .opcao').removeClass('ativo');
				$('.lista_opcoes[rel="posicao_numero"] .opcao[rel="inferior-numero_posicao-direita"]').addClass('ativo');
				$('.engloba_'+peca_inferior+' .escudo').css({'top':escudo_inferior_esquerda_y+'px','left':escudo_inferior_esquerda_x+'px'});
				$('.engloba_'+peca_inferior+' .logo').css({'top':logo_inferior_direita_y+'px','left':logo_inferior_direita_x+'px'});
				$('.detalhes_'+peca_inferior+' .numero_frente')
					.css('transform','translate('+numero_inferior_direita_x+'px,'+numero_inferior_direita_y+'px)')
					.attr('transform','translate('+numero_inferior_direita_x+','+numero_inferior_direita_y+')');
				$('#inferior_numero').val('direita');	
			} 
			else if (opcao[2] == 'direita') {
				$('.lista_opcoes[rel="posicao_numero"] .opcao').removeClass('ativo');
				$('.lista_opcoes[rel="posicao_numero"] .opcao[rel="inferior-numero_posicao-esquerda"]').addClass('ativo');
				$('.engloba_'+peca_inferior+' .escudo').css({'top':escudo_inferior_direita_y+'px','left':escudo_inferior_direita_x+'px'});
				$('.engloba_'+peca_inferior+' .logo').css({'top':logo_inferior_esquerda_y+'px','left':logo_inferior_esquerda_x+'px'});
				$('.detalhes_'+peca_inferior+' .numero_frente')
					.css('transform','translate('+numero_inferior_esquerda_x+'px,'+numero_inferior_esquerda_y+'px)')
					.attr('transform','translate('+numero_inferior_esquerda_x+','+numero_inferior_esquerda_y+')');
				$('#inferior_numero').val('esquerda');
			}
		}
		else if ($(this).parent().attr('rel') == 'punho' || $(this).parent().attr('rel') == 'manga') {
			var detalhe = $(this).parent().attr('rel');
			// mangas
			if (detalhe == 'punho') {
				$('.fundos-svgs .detalhes_'+peca_superior+' .fundo_'+detalhe).hide();
				if (opcao[2] != 'sem') {
					var val_detalhe = 1;
					if (esporte_dir == 'macacao') {
						detalhe += '.opcao_manga_'+$('#opcao_manga').val(); 
						$('.fundos-svgs .detalhes_'+peca_superior+' .fundo_'+detalhe+'.opcao_manga_'+$('#opcao_manga').val()).show();
					}	

					$('.textura_punho').show();
				}
				else {
					var val_detalhe = 0;
					$('.textura_punho').hide();
				}	

				$('#punho').val(val_detalhe);
			}
			// mangas - fim

			if (opcao[2] == 'com') {
				if (opcao[1] == 'raglan') {
					if ($('.fundos-svgs .detalhes_'+peca_superior+' .manga').length > 0)
						$('.fundos-svgs .detalhes_'+peca_superior+' .manga').hide();

					$('.fundos-svgs .detalhes_'+peca_superior+' .manga_raglan, .fundos-svgs .detalhes_'+peca_superior+' .manga_raglan *').show();
				}
				else if (opcao[1] == 'manga' && $('.fundos-svgs .detalhes_'+peca_superior+' .manga_raglan').length > 0) {
					$('.fundos-svgs .detalhes_'+peca_superior+' .manga_raglan').hide();
					$('.fundos-svgs .detalhes_'+peca_superior+' .'+detalhe).show();
				}  
				else {
					$('.fundos-svgs .detalhes_'+peca_superior+' .'+detalhe).show();
				}	
					
				if (esporte_dir != 'macacao')	
					$(this).parent().parent().find('.box_cores[data-ancora="'+detalhe+'"]').removeAttr('style');
				else if (detalhe.indexOf('punho') != -1) 
					$(this).parent().parent().find('.box_cores[data-ancora="punho"]').removeAttr('style');	
			}	

			if (opcao[2] == 'sem') {
				$('.fundos-svgs  .detalhes_'+peca_superior+' g[class^="'+detalhe+'"]').hide();
				$(this).parent().parent().find('.box_cores[data-ancora="'+detalhe+'"]').css('opacity', 0.5).css('pointer-events', 'none');
			}	
		}
		else if ($(this).parent().attr('rel') == 'opcao_manga') {
			// mangas
			$('#opcao_manga').val(opcao[2]);

			if (opcao[2] == '1' && $('.engloba_'+peca_superior+' .textura').css('background-image') != 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao.webp'+versao_simu+'")') {
				$('svg[id^="molde_"] path[class^="opcao_manga_"]').hide();
				$('svg[id^="molde_"] .opcao_manga_1').show();
				$('.detalhes_'+peca_superior+' .manga, .detalhes_'+peca_superior+' .punho, .detalhes_'+peca_superior+' .fundo_punho').hide();
				($('#punho').val() == 0) ? $('.detalhes_'+peca_superior+' .manga.opcao_manga_1').show() : $('.detalhes_'+peca_superior+' .opcao_manga_1').show();	
				$('.manequim .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao.webp'+versao_simu+'")');
				$('.manequim_verso .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_verso.webp'+versao_simu+'")').css('left', '-1px');
			}
			else if (opcao[2] == '2' && $('.engloba_'+peca_superior+' .textura').css('background-image') != 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_2.webp'+versao_simu+'")') {
				$('svg[id^="molde_"] path[class^="opcao_manga_"]').hide();
				$('svg[id^="molde_"] .opcao_manga_2').show();
				$('.detalhes_'+peca_superior+' .manga, .detalhes_'+peca_superior+' .punho, .detalhes_'+peca_superior+' .fundo_punho').hide();
				($('#punho').val() == 0) ? $('.detalhes_'+peca_superior+' .manga.opcao_manga_2').show() : $('.detalhes_'+peca_superior+' .opcao_manga_2').show();	
				$('.manequim .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_2.webp'+versao_simu+'")');
				$('.manequim_verso .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_2_verso.webp'+versao_simu+'")').css('left', '1px');
			}
			else if (opcao[2] == '3' && $('.engloba_'+peca_superior+' .textura').css('background-image') != 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_3.webp'+versao_simu+'")') {
				$('svg[id^="molde_"] path[class^="opcao_manga_"]').hide();
				$('svg[id^="molde_"] .opcao_manga_3').show();
				$('.detalhes_'+peca_superior+' .manga, .detalhes_'+peca_superior+' .punho, .detalhes_'+peca_superior+' .fundo_punho').hide();
				($('#punho').val() == 0) ? $('.detalhes_'+peca_superior+' .manga.opcao_manga_3').show() : $('.detalhes_'+peca_superior+' .opcao_manga_3').show();	
				$('.manequim .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_3.webp'+versao_simu+'")');
				$('.manequim_verso .engloba_'+peca_superior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_3_verso.webp'+versao_simu+'")').css('left', '2px');
			}	
			// mangas - fim
		}
		else if ($(this).parent().attr('rel') == 'selo') {
			girarManequim();

			if (opcao[2] == 'esquerda') {
				$('g[class="selo"]')
					.css('transform', 'translate('+selo_superior_esquerda_x+'px,'+selo_superior_esquerda_y+'px)')
					.attr('transform', 'translate('+selo_superior_esquerda_x+','+selo_superior_esquerda_y+')');
				$('#selo').val('esquerda');
				$('g[class="selo"]').show();
				$('.ipt-checkbox[for="ipt-selo"]').addClass('ativo');
				$('#ipt-selo').prop('checked', true);
			}
			else if (opcao[2] == 'direita') {
				$('g[class="selo"]')
					.css('transform', 'translate('+selo_superior_direita_x+'px,'+selo_superior_direita_y+'px)')
					.attr('transform', 'translate('+selo_superior_direita_x+','+selo_superior_direita_y+')');
				$('#selo').val('direita');
				$('g[class="selo"]').show();
				$('.ipt-checkbox[for="ipt-selo"]').addClass('ativo');
				$('#ipt-selo').prop('checked', true);
			}
			else if (opcao[2] == 'sem') {
				$('g[class="selo"]').hide('fast');
				$(this).parent().find('.lista_opcoes[rel="selo"] .opcao').removeClass('ativo');
				$('.ipt-checkbox[for="ipt-selo"]').removeClass('ativo');
				$('#ipt-selo').prop('checked', false);
			}
		}
		else if ($(this).parent().attr('rel') == 'posicao_nome') {
			girarManequim('verso');

			if ($.trim($('.flex[data-ancora="nome_verso"] .ipt-texto[rel="previewNome"]').val()) == '' && site_carregado == 1) {
				(grupo_dir.indexOf('futebol') > -1) ? $('.ipt-texto[rel="previewNome"]').val('JOGADOR') : $('.ipt-texto[rel="previewNome"]').val('NOME');
				$('.ipt-texto[rel="previewNome"]').trigger('keyup');
			}
			
			if (opcao[2] == 'cima') {
				$('#posicao_nome').val('cima');
				
				if (typeof nome_verso_cima_y == 'undefined') 
					nome_verso_cima_y = 50;
				if (esporte_dir == 'futebol_masculino_3')
					$('.previewNome').attr('x', '45%');
				
				if ($('.manequim_verso .patrocinio_cima').css('display') != 'none') {
					(esporte_dir == 'futebol_masculino_3')
					? $('.manequim_verso .patrocinio_cima rect').attr('y','25')
					: $('.manequim_verso .patrocinio_cima').attr('transform', 'translate(0,-10)');
					var novo_nome_verso_cima_y = Number(nome_verso_cima_y) + Number(20);
					$('.nome_verso .previewNome').attr({'transform': 'translate(0,'+novo_nome_verso_cima_y+')'});

					if (esporte == 'basquete_feminino' || esporte == 'volei_feminino') {
						$('.detalhes_'+peca_superior+' .nome_verso').attr('transform', 'translate(0,0)');
						$('.detalhes_'+peca_superior+' .numero_verso').attr('transform', 'translate(0,15)');
					}
				} 
				else {
					$('.nome_verso .previewNome').attr({'transform': 'translate(0,'+nome_verso_cima_y+')'});

					if (esporte == 'basquete_feminino' || esporte == 'volei_feminino')
						$('.detalhes_'+peca_superior+' .numero_verso, .detalhes_'+peca_superior+' .nome_verso').attr('transform', 'translate(0,0)');
				}
			}
			else if (opcao[2] == 'baixo') {
				$('#posicao_nome').val('baixo');

				if (typeof nome_verso_baixo_y == 'undefined') 
					nome_verso_baixo_y = 200;
				if (esporte_dir == 'futebol_masculino_3')
					$('.previewNome').attr('x', '47%');
				
				$('.nome_verso .previewNome').attr({'transform': 'translate(0,'+nome_verso_baixo_y+')'});

				if ($('.manequim_verso .patrocinio_cima').css('display') != 'none') {
					(esporte_dir == 'futebol_masculino_3')
					? $('.manequim_verso .patrocinio_cima rect').attr('y','30')
					: $('.manequim_verso .patrocinio_cima').attr('transform','translate(0,0)');
				}

				if (esporte == 'basquete_feminino' || esporte == 'volei_feminino') {
					if ($('.manequim_verso .patrocinio_baixo').css('display') != 'none' && esporte == 'basquete_feminino') {
						$('.detalhes_'+peca_superior+' .patrocinio_cima').attr('transform', 'translate(0,-10)');
						$('.detalhes_'+peca_superior+' .nome_verso').attr('transform', 'translate(0,-15)');
						$('.detalhes_'+peca_superior+' .numero_verso').attr('transform', 'translate(0,-10)');
					}
					else {
						$('.detalhes_'+peca_superior+' .numero_verso').attr('transform', 'translate(0,0)');
					}
				}
			}
		}
		else if ($(this).parent().attr('rel') == 'posicao_numero') {
			girarManequim();
			
			if (opcao[2] == 'direita') {
				$('.engloba_'+peca_inferior+' .escudo').css({'top': escudo_inferior_esquerda_y+'px', 'left': escudo_inferior_esquerda_x+'px'});
				$('.engloba_'+peca_inferior+' .logo').css({'top': logo_inferior_direita_y+'px', 'left': logo_inferior_direita_x+'px'});
				$('.detalhes_'+peca_inferior+' .numero_frente')
					.css('transform', 'translate('+numero_inferior_direita_x+'px, '+numero_inferior_direita_y+'px)')
					.attr('transform', 'translate('+numero_inferior_direita_x+', '+numero_inferior_direita_y+')');
				$('#inferior_numero').val('direita');
				
				if (preenchimento_habilitado == 1) {
					$('.lista_opcoes[rel="escudo_inferior"] .opcao').removeClass('ativo');
					$('.lista_opcoes[rel="escudo_inferior"] .opcao[rel="inferior-escudo-esquerda"]').addClass('ativo');
					$('.detalhes_'+peca_inferior+' .numero_frente').show();
					$('.ipt-checkbox[for="ipt-numero_inferior"]').addClass('ativo');
				}
			} 
			else if (opcao[2] == 'esquerda') {
				$('.engloba_'+peca_inferior+' .escudo').css({'top': escudo_inferior_direita_y+'px', 'left': escudo_inferior_direita_x+'px'});
				$('.engloba_'+peca_inferior+' .logo').css({'top': logo_inferior_esquerda_y+'px', 'left': logo_inferior_esquerda_x+'px'});
				$('.detalhes_'+peca_inferior+' .numero_frente')
					.css('transform', 'translate('+numero_inferior_esquerda_x+'px, '+numero_inferior_esquerda_y+'px)')
					.attr('transform', 'translate('+numero_inferior_esquerda_x+', '+numero_inferior_esquerda_y+')');
				$('#inferior_numero').val('esquerda');

				if (preenchimento_habilitado == 1) {
					$('.lista_opcoes[rel="escudo_inferior"] .opcao').removeClass('ativo');
					$('.lista_opcoes[rel="escudo_inferior"] .opcao[rel="inferior-escudo-direita"]').addClass('ativo');
					$('.detalhes_'+peca_inferior+' .numero_frente').show();
					$('.ipt-checkbox[for="ipt-numero_inferior"]').addClass('ativo');
				}	
			}
		}
		else if ($(this).parent().attr('rel') == 'bolso_frente') {
			if ($(document).width() < 1200)
				girarManequim();

			if (opcao[2] == 'com') {
				$('.manequim .textura_bolso[rel="bolso_frente"]').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_bolso.webp'+versao_simu+'")').show();
				$('.manequim .detalhes_'+peca_superior+' g[class^="bolso"]:not(.bolso_inferior)').hide();
				$('.manequim .textura_bolso[rel="bolso_frente"], .manequim .detalhes_'+peca_superior+' g[class^="bolso"]:not(.bolso_inferior, .bolso_liso)').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');
			}
			else if (opcao[2] == 'com_liso') {
				$('.manequim .textura_bolso[rel="bolso_frente"]').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_bolso_liso.webp'+versao_simu+'")').show();
				$('.manequim .detalhes_'+peca_superior+' g[class^="bolso"]:not(.bolso_inferior)').hide();
				$('.manequim .detalhes_'+peca_superior+' .bolso_liso').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');
			}		
			else if (opcao[2] == 'sem') {
				$('.manequim .textura_bolso[rel="bolso_frente"], .manequim .detalhes_'+peca_superior+' g[class^="bolso"]:not(.bolso_inferior)').hide();

				var isVisible = 0;
				$('.textura_bolso').each(function(){
					if ($(this).css('display') != 'none')
						isVisible++;
				});

				if ( isVisible == 0 )
					$('.box_cores[rel="bolso"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
		}
		else if ($(this).parent().attr('rel') == 'bolso_frente_inferior') {
			if ($(document).width() < 1200)
				girarManequim();

			if (opcao[2] == 'com') {
				$('.manequim .textura_bolso[rel="bolso_frente_inferior"], .manequim .detalhes_'+peca_superior+' .bolso_inferior').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');
			}	
			else if (opcao[2] == 'sem') {
				$('.manequim .textura_bolso[rel="bolso_frente_inferior"], .manequim .detalhes_'+peca_superior+' .bolso_inferior').hide();

				var isVisible = 0;
				$('.textura_bolso').each(function(){
					if ($(this).css('display') != 'none')
						isVisible++;
				});

				if ( isVisible == 0 )
					$('.box_cores[rel="bolso"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
		}
		else if ($(this).parent().attr('rel') == 'bolso_verso') {
			if ($(document).width() < 1200)
				girarManequim('verso');

			if (opcao[2] == 'com') {
				$('.manequim_verso .textura_bolso').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_bolso_verso.webp'+versao_simu+'")').show();
				$('.manequim_verso .detalhes_'+peca_superior+' g[class^="bolso"]').hide();
				$('.manequim_verso .detalhes_'+peca_superior+' g[class^="bolso"]:not(.bolso_liso)').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');
			}
			else if (opcao[2] == 'com_liso') {
				$('.manequim_verso .textura_bolso').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/macacao_bolso_verso_liso.webp'+versao_simu+'")').show();
				$('.manequim_verso .detalhes_'+peca_superior+' g[class^="bolso"]').hide();
				$('.manequim_verso .detalhes_'+peca_superior+' .bolso_liso').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');
			}	
			else if (opcao[2] == 'sem') {
				$('.manequim_verso .textura_bolso, .manequim_verso .detalhes_'+peca_superior+' g[class^="bolso"]').hide();

				var isVisible = 0;
				$('.textura_bolso').each(function(){
					if ($(this).css('display') != 'none')
						isVisible++;
				});

				if ( isVisible == 0 )
					$('.box_cores[rel="bolso"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
		}
		else if ($(this).parent().attr('rel') == 'faixa') {
			if (opcao[2] == 'com') {
				$('.textura_faixa, .detalhes_'+peca_superior+' g[class^="faixa"]').show();
				$('.box_cores[rel="faixa"]').css('opacity', 1).css('pointer-events', 'auto');
			}	
			else if (opcao[2] == 'sem') {
				$('.textura_faixa, .detalhes_'+peca_superior+' g[class^="faixa"]').hide();
				$('.box_cores[rel="faixa"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
		}
		else if ($(this).parent().attr('rel') == 'fecho') {
			girarManequim('verso');

			if (opcao[2] == 'plastico') {
				$('.fechos_'+peca_superior+' .fechos g:not(.plastico)').hide();
				$('.detalhes_'+peca_superior+' .fechos g:not(.plastico)').hide();
				$('.fechos_'+peca_superior+' .fechos .plastico').show();
				$('.detalhes_'+peca_superior+' .fechos .plastico').show();
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_fecho').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'-plastico.webp'+versao_simu+'")');
				$('.cor_camada[rel="fecho_2"]').hide();
			}
			else if (opcao[2] == 'velcro') {
				$('.fechos_'+peca_superior+' .fechos g:not(.velcro)').hide();
				$('.detalhes_'+peca_superior+' .fechos g:not(.velcro)').hide();
				$('.fechos_'+peca_superior+' .fechos .velcro').show();
				$('.detalhes_'+peca_superior+' .fechos .velcro').show();
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_fecho').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'-velcro.webp'+versao_simu+'")');
				$('.cor_camada[rel="fecho_2"]').hide();
			}
			else if (opcao[2] == 'fivela') {
				$('.fechos_'+peca_superior+' .fechos g:not(.fivela)').hide();
				$('.detalhes_'+peca_superior+' .fechos g:not(.fivela)').hide();
				$('.fechos_'+peca_superior+' .fechos .fivela').show();
				$('.detalhes_'+peca_superior+' .fechos .fivela').show();
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura_fecho').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'-fivela.webp'+versao_simu+'")');
				$('.cor_camada[rel="fecho_2"]').show();
			}
		}
	});
	$('.selecao').on('click', function(e){
		e.preventDefault();
		var opcao = $(this).attr('rel').split('-');
		if (!(opcao[1] == 'numero_frente' || opcao[1] == 'numero' || opcao[1] == 'manga' || opcao[1] == 'raglan' || opcao[1] == 'bolso' || opcao[1] == 'faixa') && preenchimento_habilitado == 1)
			$(this).toggleClass('marcado');

		if ($(this).parent().attr('rel') == 'numero_frente') {
			if (Object.keys(arrayStatus).length >= 1 && preenchimento_habilitado == 1)
				$('#voltar').removeClass('desativado');

			girarManequim('frente');

			if ($(this).hasClass('marcado') && preenchimento_habilitado == 1) {
				$(this).toggleClass('marcado');
				$('.manequim .detalhes_'+peca_superior+' .numero_frente').hide();
				preencheAtributo('superior','numero_frente','sem',1);

				if ($('.manequim .patrocinio_frente').css('display') != 'none') {
					if (esporte_dir != 'futebol_masculino_3')
						$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',0)');
					else
						$('.manequim .patrocinio_frente rect').attr('y','50%');
				}

				if ($('#escudo_superior').val() != 'centro' && $('#escudo_superior').val() != 'esquerda_2' && $('.manequim .engloba_'+peca_superior+' .logo').length) {
					var lado_escudo = $('#escudo_superior').val();
					var lado_logo = (lado_escudo == 'direita') ? 'esquerda' : 'direita';
					$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':eval('logo_superior_'+lado_logo+'_x'),'top':eval('logo_superior_'+lado_logo+'_y')},500);
					if (esporte_dir == 'futebol_masculino_3')
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
					else
						$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
					preencheAtributo('superior','escudo',lado_escudo,0);
					preencheAtributo('superior','logo',lado_logo,0);
				}
			}
			else {
				$('.box_selecao').find('.selecao[rel*="'+opcao[1]+'"]').removeClass('marcado');
				$(this).toggleClass('marcado');
				$('.manequim .detalhes_'+peca_superior+' .numero_frente').show();

				if (opcao[2] == 'centro') {
					if (site_carregado == 1) {
						var tam_numFrente = Number($('.ipt-tamNum[rel="previewNum"]').val()) * 0.42;
						$('.engloba_'+peca_superior+' .numero_frente .previewNumero').attr('font-size', tam_numFrente+'px');
					}

					$('.detalhes_'+peca_superior+' .numero_frente').attr({'transform':'translate('+numero_frente_centro_x+','+numero_frente_centro_y+')'});
					if (esporte_dir == 'futebol_masculino_3')
						$('.detalhes_'+peca_superior+' .numero_frente .previewNumero').attr('x','70%');
					$('.detalhes_'+peca_superior+' .numero_frente .previewNumero').removeAttr('transform');
	
					if ($('#escudo_superior').val() != 'centro' && $('#escudo_superior').val() != 'esquerda_2' && $('.manequim .engloba_'+peca_superior+' .logo').length) {
						var lado_logo = ($('#escudo_superior').val() == 'direita') ? 'esquerda' : 'direita';
						$('.manequim .engloba_'+peca_superior+' .logo').animate({'left':eval('logo_superior_'+lado_logo+'_x'),'top':eval('logo_superior_'+lado_logo+'_y')},500);
						if (esporte_dir == 'futebol_masculino_3')
							$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
						else
							$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
					}
				
					if ($('.manequim .patrocinio_frente').css('display') != 'none') {
						if (esporte_dir != 'futebol_masculino_3')
							$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',40)');
						else
							$('.manequim .patrocinio_frente rect').attr('y','60%');
					}
				}
				else {
					var x_tam = (esporte == 'basquete_feminino') ? 0.30 : 0.36;
					var tam_numFrente = Number($('.ipt-tamNum[rel="previewNum"]').val()) * Number(x_tam);
					$('.engloba_'+peca_superior+' .numero_frente .previewNumero').attr('font-size', tam_numFrente+'px');
					
					if (opcao[2] == 'direita') {
						$('.detalhes_'+peca_superior+' .numero_frente').attr({'transform':'translate('+numero_superior_direita_x+', '+numero_superior_direita_y+')'});
						if (esporte_dir == 'futebol_masculino_3')
							$('.detalhes_'+peca_superior+' .numero_frente .previewNumero').attr('x','50%');
		
						if ($('.engloba_'+peca_superior+' .escudo').length && $('#escudo_superior').val() != 'centro') {
							$('.engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_esquerda_y,'left':escudo_superior_esquerda_x},500);
		
							if ($('#escudo_superior').val().indexOf('esquerda') == -1) {	
								$('.lista_opcoes[rel="escudo_superior"] .opcao').removeClass('ativo');
								$('.lista_opcoes[rel="escudo_superior"] .opcao[rel="superior-escudo-esquerda"]').addClass('ativo');
								$('#escudo_superior').val('esquerda');
							}
						}
						if ($('.manequim .engloba_'+peca_superior+' .logo').length && $('#escudo_superior').val() != 'esquerda_2') {
							$('.manequim .engloba_'+peca_superior+' .logo').animate({'left': logo_superior_centro_x,'top':logo_superior_centro_y},500);
							if (esporte_dir == 'futebol_masculino_3')
								$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
							else
								$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
						}
						if ($('.manequim .patrocinio_frente').css('display') != 'none') {
							if (esporte_dir != 'futebol_masculino_3')
								$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',0)');
							else
								$('.manequim .patrocinio_frente rect').attr('y','50%');
						}
					}
					else if (opcao[2] == 'esquerda') {
						$('.detalhes_'+peca_superior+' .numero_frente').attr({'transform':'matrix(1 0 0 1 '+numero_superior_esquerda_x+' '+numero_superior_esquerda_y+')'});
						if (esporte_dir == 'futebol_masculino_3')
							$('.detalhes_'+peca_superior+' .numero_frente .previewNumero').attr('x','50%');
		
						if ($('.engloba_'+peca_superior+' .escudo').length && $('#escudo_superior').val() != 'centro') {
							$('.engloba_'+peca_superior+' .escudo').animate({'top':escudo_superior_direita_y,'left':escudo_superior_direita_x},500);
		
							if ($('#escudo_superior').val() != 'direita') {	
								$('.lista_opcoes[rel="escudo_superior"] .opcao').removeClass('ativo');
								$('.lista_opcoes[rel="escudo_superior"] .opcao[rel="superior-escudo-direita"]').addClass('ativo');	
								$('#escudo_superior').val('direita');
							}
						}
						if ($('.manequim .engloba_'+peca_superior+' .logo').length && $('#escudo_superior').val() != 'esquerda_2') {
							$('.manequim .engloba_'+peca_superior+' .logo').animate({'left': logo_superior_centro_x,'top':logo_superior_centro_y},500);
							if (esporte_dir == 'futebol_masculino_3')
								$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotateX(10deg) rotateY(20deg)');
							else
								$('.manequim .engloba_'+peca_superior+' .logo').css('transform', 'rotate(0)');
						}
						
						if ($('.manequim .patrocinio_frente').css('display') != 'none') {
							if (esporte_dir != 'futebol_masculino_3')
								$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',0)');
							else
								$('.manequim .patrocinio_frente rect').attr('y','50%');
						}
					}
				}

				$('#numero_frente').val(opcao[2]);
			}
		}
		else if ($(this).parent().attr('rel') == 'numero') {
			if (opcao[2] == 'com')
				$('.manequim_verso .box_previewNumero').show();
			else if (opcao[2] == 'sem')
				$('.manequim_verso .box_previewNumero').hide();
		}	
		else if ($(this).parent().attr('rel') == 'patrocinio') {
			if (preenchimento_habilitado == 1) {
				$('.detalhes_'+peca_superior+' .'+opcao[1]).toggle();
			}
			else if (opcao[2] == 'com') {
				$('#lista-patrocinio .selecao[rel$="'+opcao[1]+'-com"]').addClass('marcado');
				$('.detalhes_'+peca_superior+' .'+opcao[1]).show();
			}
			else if (opcao[2] == 'sem')	{
				$('#lista-patrocinio .selecao[rel$="'+opcao[1]+'-com"]').removeClass('marcado');
				$('.detalhes_'+peca_superior+' .'+opcao[1]).hide();
			}

			if ($('.selecao[rel$="'+opcao[1]+'-com"]').hasClass('marcado') && !$('.ipt-checkbox[for="ipt-patrocinio"]').hasClass('ativo')) {
				$('.ipt-checkbox[for="ipt-patrocinio"]').addClass('ativo');
				$('#ipt-patrocinio').prop('checked', true);
			}
			else if (!$('#lista-patrocinio .selecao[rel$="-com"]').hasClass('marcado')) {
				$('.ipt-checkbox[for="ipt-patrocinio"]').removeClass('ativo');
				$('#ipt-patrocinio').prop('checked', false);
			}	

			if (opcao[1] == 'patrocinio_frente') {
				if (preenchimento_habilitado == 1)
					girarManequim();

				if ($('#numero_frente').val() == 'centro' && $('.manequim .numero_frente').css('display') != 'none') {
					if (esporte_dir != 'futebol_masculino_3')
						$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',40)');
					else
						$('.manequim .patrocinio_frente rect').attr('y','60%');
				}
				else {
					if (esporte_dir != 'futebol_masculino_3')
						$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',0)');
					else
						$('.manequim .patrocinio_frente rect').attr('y','50%');
				}
			}
			else if (opcao[1] == 'patrocinio_cima') {
				if (preenchimento_habilitado == 1)
					girarManequim('verso');

				if ($('#posicao_nome').val() == 'cima' && $('.manequim_verso .nome_verso').css('display') != 'none') {
					(esporte_dir == 'futebol_masculino_3')
					? $('.detalhes_'+peca_superior+' .patrocinio_cima rect').attr('y','25')
					: $('.detalhes_'+peca_superior+' .patrocinio_cima').attr('transform','translate(0,-10)');
					
					if ($('.detalhes_'+peca_superior+' .patrocinio_cima').css('display') != 'none')	{
						var novo_nome_verso_cima_y = Number(nome_verso_cima_y) + Number(20);
						$('.nome_verso .previewNome').attr({'transform':'translate(0,'+novo_nome_verso_cima_y+')'});

						if (esporte == 'basquete_feminino' || esporte == 'volei_feminino')
							$('.detalhes_'+peca_superior+' .numero_verso').attr('transform','translate(0,10)');
					}
					else {
						$('.nome_verso .previewNome').attr({'transform':'translate(0,'+nome_verso_cima_y+')'});	
						
						if (esporte == 'basquete_feminino' || esporte == 'volei_feminino')
							$('.detalhes_'+peca_superior+' .numero_verso').attr('transform','translate(0,0)');
					}	
				}
				else {
					if ((esporte == 'basquete_feminino' || esporte == 'volei_feminino') && $('.detalhes_'+peca_superior+' .patrocinio_baixo').css('display') != 'none') {
						$('.detalhes_'+peca_superior+' .patrocinio_cima').attr('transform','translate(0,-10)');
					}
					else {
						(esporte_dir == 'futebol_masculino_3')
						? $('.detalhes_'+peca_superior+' .patrocinio_cima rect').attr('y','30')
						: $('.detalhes_'+peca_superior+' .patrocinio_cima').attr('transform','translate(0,0)');
					}
				}
			}
			else if (opcao[1] == 'patrocinio_baixo') {
				if (preenchimento_habilitado == 1)
					girarManequim('verso');

				if (esporte == 'basquete_feminino') {
					if ($('#posicao_nome').val() == 'baixo' && $('.manequim_verso .nome_verso').css('display') != 'none' && $('.detalhes_'+peca_superior+' .patrocinio_baixo').css('display') != 'none') {
						$('.detalhes_'+peca_superior+' .patrocinio_cima, .detalhes_'+peca_superior+' .numero_verso').attr('transform','translate(0,-10)');
						$('.detalhes_'+peca_superior+' .nome_verso').attr('transform','translate(0,-15)');
					}
					else {
						$('.detalhes_'+peca_superior+' .patrocinio_cima, .detalhes_'+peca_superior+' .numero_verso, .detalhes_'+peca_superior+' .nome_verso').attr('transform','translate(0,0)');
					}	
				}
			}
			else if (opcao[1] == 'patrocinio_manga') {
				if (preenchimento_habilitado == 1)
					girarManequim();
			}
			else if (opcao[1] == 'patrocinio_omoplata') {
				if (preenchimento_habilitado == 1)
					girarManequim();
			}
		}
		else if ($(this).parent().attr('rel') == 'patrocinio_inferior') {
			girarManequim('verso');

			if (preenchimento_habilitado == 1) {
				$('.detalhes_'+peca_inferior+' .'+opcao[1]).toggle();
			}
			else if (opcao[2] == 'com') {
				$('.box_selecao[rel="patrocinio_inferior"] .selecao[rel$="'+opcao[1]+'-com"]').addClass('marcado');
				$('.detalhes_'+peca_inferior+' .'+opcao[1]).show();
			}
			else if (opcao[2] == 'sem')	{
				$('.box_selecao[rel="patrocinio_inferior"] .selecao[rel$="'+opcao[1]+'-com"]').removeClass('marcado');
				$('.detalhes_'+peca_inferior+' .'+opcao[1]).hide();
			}

			if ($('.selecao[rel$="'+opcao[1]+'-com"]').hasClass('marcado') && !$('.ipt-checkbox[for="ipt-patrocinio_inferior"]').hasClass('ativo')) {
				$('.ipt-checkbox[for="ipt-patrocinio_inferior"]').addClass('ativo');
				$('#ipt-patrocinio_inferior').prop('checked', true);
			}
			else if (!$('.box_selecao[rel="patrocinio_inferior"] .selecao[rel$="-com"]').hasClass('marcado')) {
				$('.ipt-checkbox[for="ipt-patrocinio_inferior"]').removeClass('ativo');
				$('#ipt-patrocinio_inferior').prop('checked', false);
			}	

		}
		else if ($(this).parent().attr('rel') == 'manga') {
			if (Object.keys(arrayStatus).length >= 1 && preenchimento_habilitado == 1)
				$('#voltar').removeClass('desativado');

			if (((opcao[2] == 'sem' || $(this).hasClass('marcado')) && preenchimento_habilitado == 1) || (opcao[2] == 'sem' && carregando_status == 1)) {
				if (preenchimento_habilitado == 1) {
					$(this).toggleClass('marcado');
				}
				$('.box_cores[data-ancora="manga"]').css('opacity', 0.5).css('pointer-events', 'none');
				$('.detalhes_'+peca_superior+' .manga, .detalhes_'+peca_superior+' .manga_raglan').hide();
			}
			else {
				$('.box_cores[data-ancora="manga"]').css('opacity', 1).css('pointer-events', 'auto');
				$('.detalhes_'+peca_superior+' .manga, .detalhes_'+peca_superior+' .manga_raglan').hide();
				$('.detalhes_'+peca_superior+' *[class$="'+opcao[1]+'"]:not([class="patrocinio_manga"])').show();

				if (preenchimento_habilitado == 1) {
					$('.box_selecao[rel="manga"] .selecao').removeClass('marcado');
					$(this).toggleClass('marcado');
				}
			}
		}
		else if ($(this).parent().attr('rel') == 'bolso') {
			if ((opcao[2] == 'sem' || $(this).hasClass('marcado')) && preenchimento_habilitado == 1) {
				$(this).toggleClass('marcado');
				$('.textura_bolso, .detalhes_'+peca_superior+' .bolso').hide();
				$('.box_cores[rel="bolso"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
			else {
				$('.textura_bolso, .detalhes_'+peca_superior+' .bolso').show();
				$('.box_cores[rel="bolso"]').css('opacity', 1).css('pointer-events', 'auto');

				$(this).toggleClass('marcado');
			}
		}
		else if ($(this).parent().attr('rel') == 'faixa') {
			if ((opcao[2] == 'sem' || $(this).hasClass('marcado')) && preenchimento_habilitado == 1) {
				$(this).toggleClass('marcado');
				$('.textura_faixa, .detalhes_'+peca_superior+' g[class^="faixa"]').hide();
				$('.box_cores[rel="faixa"]').css('opacity', 0.5).css('pointer-events', 'none');
			}
			else {
				$('.textura_faixa, .detalhes_'+peca_superior+' g[class^="faixa"]').show();
				$('.box_cores[rel="faixa"]').css('opacity', 1).css('pointer-events', 'auto');

				$(this).toggleClass('marcado');
			}
		}
	});

	$('body').on('click', '.cor_camada', function(e){
		e.preventDefault();
		var rel_cor_atual = $(this).find('.cor_atual').attr('rel');
		var parte = $(this).parent().attr('rel');
		var n_camada = $(this).attr('rel');
		
		if ($(this).parent().find('.cor_camada').length > 1) {
			if ($(this).attr('rel') != '' && !$(this).closest('.edicao_cores .box_cores-linha').length)
				$(this).parent().find('.paleta_cores').css('left', '105px');
			else
				$(this).parent().find('.paleta_cores').css('left', 'unset');
		}
		if ($(this).closest('.edicao_cores').length > 0 && $(this).closest('.box_cores-linha').length > 0 && $(this).closest('.box_cores-linha').index() > 3) {
			$(this).parent().find('.paleta_cores').attr('style', 'left: unset!important');
		}

		if (rel_cor_atual != 'desenho_colorido') {
			if (parte != $(this).parent().attr('rel')) {
				$('.lista_camadas .cor_camada').removeClass('camada_ativa');
				$('.lista_camadas .paleta_cores').removeClass('ativo');
			}
			
			$(this).parent().find('.paleta_cores').attr('rel', parte);
			$(this).parent().find('.paleta_cores .camada').attr('rel', n_camada);
			$('.cor_camada').not($(this)).removeClass('camada_ativa');
			$('.cor_camada').not($(this)).parent().find('.paleta_cores').removeClass('ativo');
			$(this).toggleClass('camada_ativa');

			if ($('.lista_camadas div').hasClass('camada_ativa')) 
				$(this).parent().find('.paleta_cores').addClass('ativo');
			else 
				$(this).parent().find('.paleta_cores').removeClass('ativo');
		}
		else if (preenchimento_habilitado == 0) {
			$(this).find('.cor_atual').removeAttr('rel');
			$(this).parent().find('.paleta_cores').attr('rel', parte);
			$(this).parent().find('.paleta_cores .camada').attr('rel', n_camada);
			$('.cor_camada').not($(this)).removeClass('camada_ativa');
			$(this).toggleClass('camada_ativa');

			if ($('.lista_camadas div').hasClass('camada_ativa'))
				$(this).parent().find('.paleta_cores').addClass('ativo');
			else 
				$(this).parent().find('.paleta_cores').removeClass('ativo');
		}

		if ($(this).closest('#box_edicao').length > 0) {
			if ($(window).width() <= 640) {
				var h_paleta = Number($(this).parent().find('.paleta_cores')[0].clientHeight + 10);
				$(this).parent().find('.paleta_cores').css('top', '-'+h_paleta+'px');

				if (parte.indexOf('texto_drag') > -1 || parte.indexOf('nome') > -1 || (parte.indexOf('numero') > -1 && $(this).closest('.cores_linha').find('.box_cores-linha').length <= 2)) {
					var w_paleta = Number($(this).parent().find('.paleta_cores')[0].clientWidth - 90) / 2;
					$(this).parent().find('.paleta_cores').css('margin-left', '-'+w_paleta+'px');
				}
				else if (parte.indexOf('cor_manga') > -1 || parte.indexOf('cor_raglan') > -1 || (parte.indexOf('numero_verso') > -1 && $(this).closest('.cores_linha').find('.box_cores-linha').length > 2)) {
					var w_paleta = (parte.indexOf('numero_verso') > -1) ? Number($(this).parent().find('.paleta_cores')[0].clientWidth - 65) : Number($(this).parent().find('.paleta_cores')[0].clientWidth - 50);
					$(this).parent().find('.paleta_cores').css('margin-left', '-'+w_paleta+'px');
				}
			}
		}
	});
	$('body').on('click', '.cor', function(e){
		e.preventDefault();
		// PREENCHENDO VARIÁVEIS	
		var cor = $(this).css('background-color');
		var cor_alt = $(this).attr('alt');
		var cor_title = $(this).attr('title');
		var id_cor = $(this).attr('id-cor');
		var item_ativo = $(this).parent().attr('rel');
		var camada = $(this).parent().find('.camada').attr('rel');

		if (e.originalEvent !== undefined && permanecer_cor == 1 && site_carregado == 1 && preenchimento_modelo == 0 && (item_ativo == peca_superior || item_ativo == peca_inferior || item_ativo == peca_acessorio))
			mudou_cor = 1;

		$(this).parent().parent().find('.camada_ativa .cor_atual').css('background-color',cor).attr('alt',cor_alt).attr('title',cor_title).attr('data-cor',id_cor);

		if ($(this).hasClass('indisponivel')) {
			$(this).parent().parent().find('.camada_ativa .cor_atual').attr('rel','indisponivel');
			$('.textura_'+camada).hide();
		}
		else if ($(this).parent().parent().find('.camada_ativa .cor_atual').attr('rel') == 'indisponivel') {
			$(this).parent().parent().find('.camada_ativa .cor_atual').removeAttr('rel');

			if ($('.textura_'+camada).length)	
				$('.textura_'+camada).show();
		}

		// COR TELA
		if (camada == 'tela') {
			if (id_cor == 'sem_cor') {
				$('.textura_'+camada+', svg[class^="detalhes_"] .tela').hide();
				$('.textura_tecido, svg[class^="detalhes_"] .tecido').show();
			}
			else {
				$('.textura_tecido, svg[class^="detalhes_"] .tecido').hide();
				$('.textura_'+camada+', svg[class^="detalhes_"] .tela').show();
			}
		}

		// COR MESCLA	
		if (cor_alt) {
			if (cor_alt.indexOf('mescla') > -1) {
				if ($('.engloba_'+item_ativo+' .clip').length == 0) {
					$('#lista_lados div[class^="manequim"]').each(function(){
						var lado = $(this).attr('class').replace('manequim', '').replace('ativo', '').replaceAll(' ', '');
						var clip = 	'<svg class="clip"><defs><clipPath id="clipping_'+item_ativo+lado+'">'+$('#molde_'+item_ativo+lado)[0].innerHTML+'</clipPath></defs></svg>';
							clip += '<img class="textura_mescla" src="{PASTA_RAIZ_SIMULADOR}/img/textura_mescla.webp'+versao_simu+'" style="clip-path: url(#clipping_'+item_ativo+lado+');">';
						$('.manequim'+lado+' .engloba_'+item_ativo+' .fundos-svgs').append(clip);

						if ($('div[class="golas"]').length && item_ativo == peca_superior)
							golaMescla(lado);
					});
				}
			}
			else {
				$('.engloba_'+item_ativo+' .clip, .engloba_'+item_ativo+' .textura_mescla').remove();
				if (item_ativo == peca_superior)
					$('.clip_gola, .clip_fundo_gola').remove();	
			}	
		}

		if (camada == 'pele') {
			$('.paleta_cores[rel="cor_pele"] li').removeClass('ativo');
			$(this).addClass('ativo');
		}

		if (esporte_dir == 'chapeu_australiano' && camada == 'canavieiro') {
			if (cor_alt != 'Sem Cor') {
				$('.manequim .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/chapeu_australiano-canavieiro.webp'+versao_simu+'")');
			}
			else {
				$('.manequim .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/chapeu_australiano.webp'+versao_simu+'")');
			}
		}

		var i_texto = '';
		if (item_ativo.indexOf('cor_') > -1) {
			var peca = $(this).parent().parent().attr('data-peca');
			var aux_camada = camada;
			var lado_camada = '';

			if (camada.indexOf('nome') > -1 || (camada.indexOf('nome') > -1 && camada.indexOf('borda') > -1)) {
				lado_camada = camada.replace('cor_', '');
				lado_camada = lado_camada.replace('_borda', '');
				lado_camada = '.'+lado_camada;
				camada = 'previewNome';
			}	
			else if ((camada.indexOf('numero') > -1 && camada.indexOf('borda') > -1)) {
				camada = camada.replace('_borda', '');
			}	
			else if (camada == 'raglan') {
				camada = 'manga_raglan';	
			}

			if (camada.indexOf('gola') > -1) {
				$('.engloba_'+peca+' .fundos-svgs .'+camada+', .engloba_'+peca+' .fundos-svgs .'+camada+' *').css('fill',cor);
			}
			else if (aux_camada.indexOf('borda') > -1) {
				$('.fundos-svgs .detalhes_'+peca+' '+lado_camada+' .'+camada).css('stroke',cor);

				if (camada.indexOf('numero') > -1) 
					camada = aux_camada;	
			}
			else if (camada.indexOf('manga') > -1) {
				if ($(this).hasClass('indisponivel'))
					cor = $('.box_cores .lista_camadas[rel="'+peca_superior+'"] .cor_camada[rel=""] .cor_atual').css('background-color');
				
				($('#molde_'+peca+' path[class*="manga"]').length) ? $('svg[id^="molde_'+peca+'"] path[class*="manga"]').css('fill',cor) : $('.fundos-svgs .detalhes_'+peca+' '+lado_camada+' g[class^="manga"]').css('fill',cor);	
			}
			else if (camada.indexOf('logo') > -1) {
				$('.engloba_'+peca+' .logo svg').css('fill',cor);
			}
			else if (camada.indexOf('fecho') > -1 && (esporte_dir == 'viseira' || esporte_dir == 'bone_6_gomos' || esporte_dir == 'bone_trucker')) {
				$('.fundos-svgs .fechos_'+peca+' '+lado_camada+' .'+camada).css('fill',cor);
			}
			else {
				$('.fundos-svgs .detalhes_'+peca+' '+lado_camada+' .'+camada).css('fill',cor);
			}

			if (preenchimento_modelo == 0 && $('#lista_lados .ativo .engloba_'+peca+' .fundos-svgs .'+camada).length == 0 && preenchimento_habilitado == 1) {
				if ($('.engloba_'+peca+' .fundos-svgs .'+aux_camada).length) {
					var manequim_camada = $('.engloba_'+peca+' .fundos-svgs .'+aux_camada).closest('div[class^="manequim"]').attr('class');
					girarManequim(manequim_camada.replace('manequim','').replace('_',''));
				}
			}

			camada = aux_camada;
		}
		else if (item_ativo.indexOf('texto_drag') > -1) {
			var drag_selecionado = $('#info-texto').attr('data-ancora');
			if ($('.texto_drag').length > 0)
				i_texto = $('.fundos #'+drag_selecionado).attr('rel');

			if (camada == 'texto')
				$('.fundos #'+drag_selecionado+' .texto').css('color', cor).attr('data-cor', cor_alt).attr('data-idcor', id_cor);
			else if (camada == 'borda')	
				$('.fundos #'+drag_selecionado+' .texto').css('-webkit-text-stroke', '1px '+cor).attr('data-borda', cor_alt);	
		}
		else {
			if (camada != '') {
				var cor_parte = cor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				var cor_hex = '#' + hex(cor_parte[1]) + hex(cor_parte[2]) + hex(cor_parte[3]);
				var cod_mod = $('.setas_modelos div[data-peca="'+item_ativo+'"] .i_modelo').html();

				$('.fundos-svgs .'+item_ativo+camada).each(function(index){
					var svg_pintar = $(this).find('svg g:first').html();
					if (svg_pintar != null) {
						svg_pintar = svg_pintar.replace(/fill:none/gi, 'fill:_');
						svg_pintar = svg_pintar.replace(/fill="none'/gi, 'fill=_');
						svg_pintar = svg_pintar.replace(/fill=none/gi, 'fill=_');
						svg_pintar = svg_pintar.replace(/fill:url/gi, 'fill:-');
						svg_pintar = svg_pintar.replace(/fill:rgb/gi, 'fill:=');
						svg_pintar = svg_pintar.replace(/fill:([ ]?)\b([a-zA-Z](?![_*]))+\b/gi, 'fill:'+cor_hex);
						svg_pintar = svg_pintar.replace(/fill="([ ]?)\b([a-zA-Z](?![_*]))+\b'/gi, 'fill="'+cor_hex+'"');
						svg_pintar = svg_pintar.replace(/fill:_/gi, 'fill:none');
						svg_pintar = svg_pintar.replace(/fill=_/gi, 'fill="none"');
						svg_pintar = svg_pintar.replace(/fill:-/gi, 'fill:url');
						svg_pintar = svg_pintar.replace(/fill:=/gi, 'fill:rgb');
						svg_pintar = svg_pintar.replace(/stop-color:white/gi, '');
						svg_pintar = svg_pintar.replace(/stop-color="[^"]*'/g, 'stop-color="'+cor_hex+'"');			
						svg_pintar = svg_pintar.replace(/stop-color:\srgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/gi, 'stop-color:'+cor_hex);
						svg_pintar = svg_pintar.replace(/#[0-9a-fA-F]__REGEX_SEIS__|#[0-9a-fA-F]__REGEX_TRES__/gi, cor_hex);
						$(this).find('svg g:first').html(svg_pintar);
					}
				});	
		
				$('*[class^="'+item_ativo+'_'+modelo_atual+camada+'_fil"]').each(function(index){
					if ($(this).css('fill') != 'none') 
						$(this).css('fill', cor_hex);
				});
				$('*[class^="verso_'+item_ativo+'_'+modelo_atual+camada+'_fil"]').each(function(index){
					if ($(this).css('fill') != 'none') 
						$(this).css('fill', cor_hex);
				});
			}
			else {	
				if (item_ativo != '') {
					$('.fundos-svgs  svg[id^="molde_'+item_ativo+'"]').css('fill', cor);

					if (esporte_dir == 'macacao' && $('.lista_camadas[rel="cor_manga"] .cor_atual').attr('rel') == 'indisponivel')
						$('.detalhes_'+peca_superior+' .manga, svg[id^="molde_'+peca_superior+'"] path[class*="manga"]').css('fill', cor);	
				}	

				if (item_ativo == peca_superior) {
					$('.fundos-svgs .fundo_punho, .fundos-svgs .tecido').css('fill', cor);

					$('.fundos-svgs .fundo_gola').each(function(){
						if (!($(this).parent().parent().attr('rel') == 'fundo_inativo'))
							($(this).find('svg').length) ? $(this).find('svg').css('fill', cor) : $(this).css('fill', cor);
					});	
				}	
			}
		}

		if (camada.indexOf('pele') == -1 && (camada != '' || item_ativo != '')) {
			if ($(this).parent().hasClass('paleta_cores') && preenchimento_habilitado == 1) {
				if ($(window).width() < 720) {
					$('#box_edicao .bt_fechar').click();
					$('.lista_camadas .cor_camada').removeClass('camada_ativa');
					$('.lista_camadas .paleta_cores').removeClass('ativo');
				}
		
				if (Object.keys(arrayStatus).length >= 1 && preenchimento_modelo == 0 && item_ativo.indexOf('texto_drag') == -1 &&
					((camada.toLowerCase().indexOf('nome') > -1 && texto == 1) || camada.toLowerCase().indexOf('nome') == -1))
					$('#voltar').removeClass('desativado');

				var parte = $(this).attr('rel');
				var valor = $(this).attr('id-cor');			

				if (camada.indexOf('_') > -1 && item_ativo.indexOf('cor_') > -1) 
					item_ativo = 'cor_'+camada;

				if (camada == '') 
					camada = 'cor';
				else if (camada.indexOf('_') == 0) 
					camada = 'cor'+camada;
				else if (camada.indexOf('_') != 0) 
					camada = item_ativo;
			
				if (preenchimento_modelo == 1 || desenhos_carregados != desenhos_esperados || 
					(camada.toLowerCase().indexOf('nome') > -1 && texto == 0)) {
					if (item_ativo == 'texto_drag') {
						if (i_texto != '')
							preencheAtributo(parte,'texto_'+i_texto+'_cor',valor,0);
					}
					else if (item_ativo == 'texto_drag_borda') {
						if (i_texto != '')
							preencheAtributo(parte,'texto_'+i_texto+'_cor_borda',valor,0);
					}
					else {
						preencheAtributo(parte,camada,valor,0);
					}	
				}
				else {
					if (item_ativo == 'texto_drag') {
						if (i_texto != '')
							preencheAtributo(parte,'texto_'+i_texto+'_cor',valor,0);
					}
					else if (item_ativo == 'texto_drag_borda') {
						if (i_texto != '')
							preencheAtributo(parte,'texto_'+i_texto+'_cor_borda',valor,0);
					}
					else {
						preencheAtributo(parte,camada,valor,1);
					}	
				}
			}
		}
		
		$('.lista_camadas .cor_camada').removeClass('camada_ativa');
		$('.lista_camadas .paleta_cores').removeClass('ativo');
	});

	$(document).on('click', '.ipt-checkbox', function(e){
		e.preventDefault();
		$(this).toggleClass('ativo');
		$('#'+$(this).attr('for')).trigger('click');

		if ($(this).attr('for').indexOf('ipt-peca-') > -1) {
			$('.ipt-checkbox[for^="ipt-peca-"]').not(this).removeClass('ativo');
			$('input[id^="ipt-peca-"]:not([id="'+$(this).attr('for')+'"])').prop('checked', false);
		}
	});
	$('#ipt-sincronizar').on('click', function(e){
		e.preventDefault();
		travado = ($(this).prop('checked')) ? 1 : 0;
		$('.box_bloqueio .icone').toggle();
	});
	$('#ipt-nome').on('click', function(e){
		e.preventDefault();
		if (iStatus < arrayStatus.length-1) {
			if ($('.ipt-checkbox[for="ipt-nome"]').hasClass('ativo'))
				$(this).prop('checked', true);
			else
				$(this).prop('checked', false);
		}

		$(this).prop('checked', this.checked);

		if ($(this).prop('checked')) {
			$('.previewNome').show();
			$('.lista_opcoes[rel="posicao_nome"] .opcao[rel="'+$('#posicao_nome').val()+'"]').addClass('ativo');
			$('*[rel*="nome"], *[data-ancora*="nome"]').css({'pointer-events':'auto', 'opacity':'1'});	

			if ($('#posicao_nome').val() != '')
				$('.opcao[rel="superior-nome_verso_posicao-'+$('#posicao_nome').val()+'"]').click();	
			else
				$('.lista_opcoes[rel="posicao_nome"] .opcao').eq(0).click();

			if (preenchimento_habilitado == 1 && texto == 1)
				preencheAtributo('superior','nome','com',1);
			else if (preenchimento_habilitado == 1 && texto == 0)
				preencheAtributo('superior','nome','com',0);
		} 
		else {
			$('.previewNome').hide('fast');
			$('.lista_opcoes[rel="posicao_nome"] .opcao').removeClass('ativo');
			$('*[rel*="nome"], *[data-ancora*="nome"]').not('.ipt-checkbox').css({'pointer-events':'none', 'opacity':'0.7'});
			$('.lista_opcoes[rel="posicao_nome"] .opcao[rel="superior-nome-sem"]').click();

			if ($('.manequim_verso .patrocinio_cima').css('display') != 'none') {
				(esporte_dir == 'futebol_masculino_3')
				? $('.manequim_verso .patrocinio_cima rect').attr('y','30')
				: $('.manequim_verso .patrocinio_cima').attr('transform','translate(0,0)');
			}

			if (esporte == 'basquete_feminino' || esporte == 'volei_feminino')	
				$('.detalhes_'+peca_superior+' .numero_verso').attr('transform','translate(0,0)');

			if (preenchimento_habilitado == 1 && texto == 1)
				preencheAtributo('superior','nome','sem',1);
			else if (preenchimento_habilitado == 1 && texto == 0)
				preencheAtributo('superior','nome','sem',0);
		}
	});
	$('#ipt-numero').on('click', function(e){
		e.preventDefault();
		if (iStatus < arrayStatus.length-1) {
			if ($('.ipt-checkbox[for="ipt-numero"]').hasClass('ativo'))
				$(this).prop('checked', true);
			else
				$(this).prop('checked', false);
		}
		
		$(this).prop('checked', this.checked);

		if (Object.keys(arrayStatus).length >= 1)
			$('#voltar').removeClass('desativado');
		
		if ($(this).prop('checked')) {
			if ($('.selecao[rel^="superior-numero_frente-"]').hasClass('marcado')) {
				$('.detalhes_'+peca_superior+' *[class^="numero"]').show();

				if ($('.manequim .patrocinio_frente').css('display') != 'none' && $('#numero_frente').val() == 'centro') {
					if (esporte_dir != 'futebol_masculino_3')
						$('.manequim .patrocinio_frente').attr('transform', 'translate('+numero_frente_centro_x+',40)');
					else
						$('.manequim .patrocinio_frente rect').attr('y','60%');
				}
			}
			else {
				$('.detalhes_'+peca_superior+' *[class^="numero"]:not(.numero_frente)').show();
				girarManequim('verso');
			}

			$('.conteudo_edicao[rel="superior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events':'auto', 'opacity':'1'});
			$('.conteudo_edicao[rel="superior"] .box_selecao[rel="numero_frente"] .selecao, .personalizar_numero').removeAttr('style');
			var numero_texto = $('.ipt-textNum[rel="previewNum"]').val();
			preencheAtributo('superior','numero',numero_texto,1);
		} 
		else {
			$('.detalhes_'+peca_superior+' *[class^="numero"]').hide();
			
			if (!$('.selecao[rel^="superior-numero_frente-"]').hasClass('marcado')) {
				girarManequim('verso');
			}
			else {
				if ($('.manequim .patrocinio_frente').css('display') != 'none') {
					if (esporte_dir != 'futebol_masculino_3')
						$('.manequim .patrocinio_frente').attr('transform','translate('+numero_frente_centro_x+',0)');
					else
						$('.manequim .patrocinio_frente rect').attr('y','50%');
				}
			}

			$('.conteudo_edicao[rel="superior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events':'none', 'opacity':'0.7'});
			preencheAtributo('superior','numero','sem',1);	
		}
	});
	$('#ipt-numero_inferior').on('click', function(e){
		e.preventDefault();
		if (iStatus < arrayStatus.length-1) {
			if ($('.ipt-checkbox[for="ipt-numero_inferior"]').hasClass('ativo'))
				$(this).prop('checked', true);
			else 
				$(this).prop('checked', false);
		}

		if (Object.keys(arrayStatus).length >= 1)
			$('#voltar').removeClass('desativado');

		$(this).prop('checked', this.checked);

		if ($(this).prop('checked')) {
			$('.detalhes_'+peca_inferior+' *[class^="numero"]').show();
			$('.conteudo_edicao[rel="inferior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events':'auto', 'opacity':'1'});
			preencheAtributo('inferior','numero','com',1);
		} 
		else {
			$('.detalhes_'+peca_inferior+' *[class^="numero"]').hide();
			$('.conteudo_edicao[rel="inferior"] *[rel*="numero"]').not('.ipt-checkbox').css({'pointer-events':'none', 'opacity':'0.7'});
			preencheAtributo('inferior','numero','sem',1);
		}
	});
	$('input[id^="ipt-escudo_"]').on('click', function(e){
		e.preventDefault();
		$(this).prop('checked', this.checked);
		var rel = $(this).attr('name');
		var parte = $(this).attr('name').replace('escudo_', '');
		
		if ($(this).prop('checked')) {
			$('label[rel="'+rel+'"]').addClass('ativo');

			if ($('#'+rel).val() != '')
				$('.lista_opcoes[rel="'+rel+'"] .opcao_pers[rel="'+parte+'-escudo-'+$('#'+rel).val()+'"]').click();	
			else 
				$('.lista_opcoes[rel="'+rel+'"] .opcao_pers').eq(1).click();	
		} 
		else {
			$(this).parent().parent().find('.lista_opcoes[rel="'+rel+'"] .opcao').removeClass('ativo');
			$('.lista_opcoes[rel="'+rel+'"] .opcao_pers[rel="'+parte+'-escudo-sem"]').click();
		}
	});
	$('#ipt-selo').on('click', function(e){
		e.preventDefault();
		$(this).prop('checked', this.checked);

		if ($(this).prop('checked')) {
			$('g[class="selo"]').show();
			$('label[for="ipt-selo"]').addClass('ativo');

			if ($('#selo').val() != '')
				$('.lista_opcoes[rel="selo"] .opcao_pers[rel="superior-selo-'+$('#selo').val()+'"]').click();
			else
				$('.lista_opcoes[rel="selo"] .opcao_pers').eq(0).click();
		} 
		else {
			$('g[class="selo"]').hide('fast');
			$(this).parent().find('.lista_opcoes[rel="selo"] .opcao').removeClass('ativo');
			$('.lista_opcoes[rel="selo"] .opcao_pers[rel="superior-selo-sem"]').click();
		}
	});
	$('#ipt-patrocinio').on('click', function(e){
		e.preventDefault();
		$(this).prop('checked', this.checked);
		$('#voltar').removeClass('desativado');

		if ($(this).prop('checked')) {
			if (preenchimento_habilitado == 1) {
				preenchimento_habilitado = 0;
				$('.box_selecao[rel="patrocinio"] .selecao').each(function(i){
					if ($(this).attr('rel').indexOf('-com') > -1) {
						var opcao_patrocinio = $(this).attr('rel').split('-');
						var preencher = (i == 0) ? 1 : 0;
	
						$('.selecao[rel="superior-'+opcao_patrocinio[1]+'-com"]').click();
						preencheAtributo('superior',opcao_patrocinio[1],'com',preencher);
					}
				});
				preenchimento_habilitado = 1;
			}
			else {
				$('.selecao[rel="superior-patrocinio_frente-com"]').click();
				$('.selecao[rel="superior-patrocinio_omoplata-com"]').click();
				$('.selecao[rel="superior-patrocinio_manga-com"]').click();
				$('.selecao[rel="superior-patrocinio_cima-com"]').click();
				$('.selecao[rel="superior-patrocinio_baixo-com"]').click();
			}
		} 
		else {
			if ($('#posicao_nome').val() == 'cima')
				$('.nome_verso .previewNome').attr('transform','translate(0,'+nome_verso_cima_y+')');

			if (esporte == 'basquete_feminino' || esporte == 'volei_feminino') 
				$('.detalhes_'+peca_superior+' .nome_verso, .detalhes_'+peca_superior+' .numero_verso').attr('transform','translate(0,0)');

			$('.box_selecao[rel="patrocinio"] .selecao').removeClass('marcado');
			$('.detalhes_'+peca_superior+' *[class^="patrocinio"]').hide();

			if (preenchimento_habilitado == 1) {
				$('.box_selecao[rel="patrocinio"] .selecao').each(function(i){
					if ($(this).attr('rel').indexOf('-com') > -1) {
						var opcao_patrocinio = $(this).attr('rel').split('-');
						var preencher = (i == 0) ? 1 : 0;
						preencheAtributo('superior',opcao_patrocinio[1],'sem',preencher);
					}
				});
			}
		}
	});
	$('#ipt-patrocinio_inferior').on('click', function(e){
		e.preventDefault();
		$(this).prop('checked', this.checked);
		$('#voltar').removeClass('desativado');

		if ($(this).prop('checked')) {
			if (preenchimento_habilitado == 1) {
				preenchimento_habilitado = 0;
				$('.box_selecao[rel="patrocinio_inferior"] .selecao').each(function(i){
					if ($(this).attr('rel').indexOf('-com') > -1) {
						var opcao_patrocinio = $(this).attr('rel').split('-');
						var preencher = (i == 0) ? 1 : 0;
						$('.selecao[rel="inferior-'+opcao_patrocinio[1]+'-com"]').click();
						preencheAtributo('inferior',opcao_patrocinio[1],'com',preencher);
					}
				});
				preenchimento_habilitado = 1;
			}	
			else {
				$('.selecao[rel="inferior-patrocinio-com"]').click();
			}
		} 
		else {
			$('.box_selecao[rel="patrocinio_inferior"] .selecao').removeClass('marcado');
			$('.detalhes_'+peca_inferior+' *[class^="patrocinio"]').hide();

			if (preenchimento_habilitado == 1) {
				$('.box_selecao[rel="patrocinio_inferior"] .selecao').each(function(i){
					if ($(this).attr('rel').indexOf('-com') > -1) {
						var opcao_patrocinio = $(this).attr('rel').split('-');
						var preencher = (i == 0) ? 1 : 0;
						preencheAtributo('inferior',opcao_patrocinio[1],'sem',preencher);
					}
				});
			}	
		}
	});

	$('nav[class="fontes"]').on('click', function(){
		$(this).find('.menu_fontes').toggle();
	});
	$('.menu_fontes li').on('click', function(){
		if (mostrar_textos == 1) {
			$('.menu_fontes li').removeClass('ativo');
			$(this).addClass('ativo');
			$('.fonte_ativa').html($(this).attr('data-nome'));
			$('#fonte').val($(this).attr('data-nome'));

			var drag_selecionado = $('#info-texto').attr('data-ancora');
			mudaFonte(drag_selecionado, $(this).attr('data-nome'));
		}
		else {
			$(this).parent().find('li').removeClass('ativo');
			$(this).addClass('ativo');
			$(this).closest('.lista-fontes').find('.fonte_ativa').html($(this).attr('data-nome'));

			var ref = $(this).closest('.lista-fontes').attr('rel');
			var nome_fonte = $(this).attr('data-nome');
			var tam_fonte = $(this).attr('rel');

			$('.ipt-tamNum').val(tam_fonte);
			mudaFonte(ref, nome_fonte);
			tamFonte(tam_fonte, ref);
		}
	});
	$('.bt_tamNum div').on('click', function(){
		var input_alvo = $(this).closest('.tamNum').find('input');
		var tamAtual = Number(input_alvo.val());
		var acao = $(this).attr('class').replace('bt_', '');
		var val_step = (input_alvo.attr('step') !== undefined) ? input_alvo.attr('step') : 1;

		var novoTam = (acao == 'mais') ? (tamAtual + Number(val_step)) : (tamAtual - Number(val_step));
		if (novoTam <= 150) {
			input_alvo.val(novoTam);
			input_alvo.trigger('change');
		}
		else {
			input_alvo.val(150);
			input_alvo.trigger('change');
		}
	});
	$('.ipt-tamNum').on('change', function(){
		if (mostrar_textos == 1) {
			var drag_selecionado = $('#info-texto').attr('data-ancora');
			if ($(this).val() <= 150) {
				tamFonte($(this).val(), drag_selecionado);
			}
			else {
				tamFonte(150, drag_selecionado);	
				$(this).val(150);
			}
		}
		else {
			if (Object.keys(arrayStatus).length >= 1 && 
			(($(this).closest('.flex').attr('data-ancora').indexOf('nome') > -1 && texto == 1) || $(this).closest('.flex').attr('data-ancora').indexOf('nome') == -1))
				$('#voltar').removeClass('desativado');

			tamFonte($(this).val(), $(this).closest('.flex').attr('data-ancora'));
		}
	});

	$('#girar-manequim').on('click', function(e){
		e.preventDefault();

		if (e.target.localName == 'span') {
			$('#girar-manequim span').removeClass('ativo');
			$(e.target).addClass('ativo');
			var lado_ativar = $(e.target).html().toLowerCase();
			girarManequim(lado_ativar);
		}
		else {
			var n_manequins = $('#lista_lados div[class^="manequim"]').length;
			var eq_ativo = $('#lista_lados div[class^="manequim"].ativo').index();
			var eq_ativar = (eq_ativo+1 == n_manequins) ? 0 : eq_ativo+1;
			$('#lista_lados div[class^="manequim"]').removeClass('ativo');
			$('#lista_lados div[class^="manequim"]').eq(eq_ativar).addClass('ativo');
		}
	});

	$('.edicao_upload #box-imagens').on('scroll', debounce(function(){
		var time = 0;
		$('#box-imagens img[src=""]').each(function(index, element) {
			if ($(this).isInViewport()) {
				setTimeout(function() {
					$(element).parent().parent().find('.carregando-img').remove();
					$(element).attr('src', $(element).attr('data-src')).removeAttr('data-src');
				}, time);
				time += 250;
			}
		});
	}, 150));

	$(document).on('click', '#ipt-add_ziper', function(e){
		e.preventDefault();
		$(this).prop('checked', this.checked);
		
		if ($(this).prop('checked')) {
			$('label[for="ipt-add_ziper"]').addClass('ativo');
			$('.fundos-svgs .detalhes_'+peca_superior+' #ziper_metade').hide();
			$('.fundos-svgs .detalhes_'+peca_superior+' #ziper_completo').show();
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_ziper_completo.webp'+versao_simu+'")');
		} 
		else {
			$('label[for="ipt-add_ziper"]').removeClass('ativo');
			$('.fundos-svgs .detalhes_'+peca_superior+' #ziper_completo').hide();
			$('.fundos-svgs .detalhes_'+peca_superior+' #ziper_metade').show();
			$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'.webp'+versao_simu+'")');
		}
	});

	if (goleiro == 1) {
		$('#box_manequim').css('padding','0 20px');

		if ($(window).width() >= 479) {
			var span = document.createElement('div');
			span.innerHTML = '<img src="{PASTA_RAIZ_SIMULADOR}/img/popup_goleiro.webp'+versao_simu+'" id="img_goleiro">';
			mensagem('',span,'html');
		} 
		else {
			var span = document.createElement('div');
			span.innerHTML = '<div id="box_goleiro">'+$('#box_goleiro').html()+'</div>';
			mensagem('',span,'html');
		}	

		$('.previewNumero').html('1');	
		$('.ipt-textNum[rel="previewNum"]').val('1');
	}
});