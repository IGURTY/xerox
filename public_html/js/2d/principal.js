// DECLARAÇÃO DE VARIÁVEIS
{
	var versao_simu = '?v={VERSAO}';
	var modalidades = {ARRAY_MODALIDADES};

	var arrayStatus = new Array();
	var arrayPartes = new Array();
	var arrayTemp = new Object();
	var iStatus = -1;
	var preenchimento_habilitado = 1, preenchimento_inicial = 1, preenchimento_modelo = 0;
	var num_modalidades = '{NUM_MODALIDADES}';
	var desabilitar_ferramentas_img = 0;
	var arrayPecas = new Array();
	var desenhos_esperados = 0, desenhos_carregados = 0, esperando_desenhos = 0;
	var site_carregado = 0;
	var incremento_gola = 0, incremento_gola_verso = 0;
	var atributo = new Array();

	var ctx = new Array;
	var c, c2, c3, c4;
	var x = new Array();
	var y = new Array();
	var w = new Array();
	var h = new Array();
	var svg;
	var cor_desenho;
	var cor;
	var inicial = Number('{INICIAL}');
	var modelo_inicial = 1;
	var modelo_atual = modelo_inicial;
	var goleiro = Number('{GOLEIRO}');
	var comissao = Number('{COMISSAO}');
	var logado = Number('{LOGADO}');
	var salvando_simulacao = 0;
	var nomeSimulacao = '';
	var preview_simulacao;
	var numero_frente = 0;
	var i_fonte_nome = 0, i_fonte_numero = 0, i_fonte_numero_inferior = 0;
	var texto = 0;
	var i_lados = 0;
	var carregando_status = 0;
	var scaleIni;
	var url_inicial = '';
	var width = $(window).width(), height = $(window).height();
	var tot_textos = 0;
	var c_preview, incremento = 0;
	var scale_manequim = 1;

	var posicao_upload;
	var lado_upload;
	var icamada = 3;
	var clicado;
	var peca_visivel;

	<!-- BEGIN BLOCK_SIMULACAO -->
	var id_simulacao = '{ID_SIMULACAO}';
	var arr_simulacao = "{ARRAY_SIMULACAO}";
	<!-- END BLOCK_SIMULACAO -->

	var largura_padrao = 500;
	var altura_padrao = 500;
	var opacity_inicial = 1;
	var mostrar_escudo = 0, mostrar_detalhes = 0, mostrar_meiao = 0, mostrar_textos = '{MOSTRAR_TEXTOS}';
	var peca_superior = '{PECA_SUPERIOR}', peca_superior_aux, peca_inferior = '{PECA_INFERIOR}', peca_inferior_aux, peca_acessorio = '{PECA_ACESSORIO}';
	var modelo_verso = '{VERSO}', modelo_conjunto = '{CONJUNTO}', modelo_rotacionar = '{ROTACIONAR}', modelo_esporte = '{MODELO_ESPORTE}', modalidade_linha = '{MODAL_LINHA}';
	var colecao = '{COLECAO}';

	var id_esporte = '{ID_ESPORTE}';
	var esporte = '{ESPORTE_PATH}';
	var esporte_dir = '{ESPORTE_PATH_DIRETORIO}';
	var grupo_dir = '{GRUPO_PATH}';
	var mostrar_pecas = {MOSTRAR_PECAS};
	var preenchimento_peca = 0;
	var mostrar_cod_modelo = {MOSTRAR_COD_MODELO};
	var permanecer_cor = {PERMANECER_COR};
	var travado = 0;
	var mudou_cor = 0;
	var colori_meiao = 0;
	var simulacao_habilitada = 1;
	var desenho_carregando = false;

	// variáveis auxiliares
	if (typeof logo_superior_centro_y != 'undefined')
		var aux_logo_centro_y = logo_superior_centro_y;
	if (typeof escudo_superior_centro_y != 'undefined')
		var aux_escudo_centro_y = escudo_superior_centro_y;
	if (typeof numero_frente_centro_y != 'undefined')
		var aux_numero_frente_centro_y = numero_frente_centro_y;

	var defs_fontes = '';
	var link_peca_superior = (grupo_dir != peca_superior) ? '{ESPORTE_PATH_DIRETORIO}_'+peca_superior : '{ESPORTE_PATH_DIRETORIO}';

	var desenho = new Array();
	desenho['{PECA_SUPERIOR}'] = new Array();
	<!-- BEGIN BLOCK_PECA_INFERIOR -->
	desenho['{PECA_INFERIOR}'] = new Array();
	<!-- END BLOCK_PECA_INFERIOR -->
	<!-- BEGIN BLOCK_PECA_ACESSORIO -->
	desenho['{PECA_ACESSORIO}'] = new Array();
	<!-- END BLOCK_PECA_ACESSORIO -->

	<!-- BEGIN BLOCK_DESENHO -->
	desenho['{TIPO}']['{I}'] = new Array();
	desenho['{TIPO}']['{I}']['modelo'] = '{MODELO}';
	desenho['{TIPO}']['{I}']['cod_modelo'] = '{COD_MODELO}';
	desenho['{TIPO}']['{I}']['cor_base'] = '{COR_BASE}';
	<!-- BEGIN BLOCK_DETALHES -->
	desenho['{TIPO}']['{I}']['{DETALHE}'] = '{COR_DETALHE}';
	<!-- END BLOCK_DETALHES -->
	<!-- BEGIN BLOCK_CAMADA -->
	desenho['{TIPO}']['{I_C}'] = new Array();
	<!-- BEGIN BLOCK_ANGULO -->
	desenho['{TIPO}']['{I_C}']['{ANGULO}'] = '{SVG_ANGULO}';
	<!-- END BLOCK_ANGULO -->
	desenho['{TIPO}']['{I_C}']['cor'] = '{SVG_COR}';
	<!-- END BLOCK_CAMADA -->
	<!-- END BLOCK_DESENHO -->

	var total_modelo = new Array();
	total_modelo['{PECA_SUPERIOR}'] = Number('{TOTAL_MODELO_SUPERIOR}');
	<!-- BEGIN BLOCK_TOTAL_MODELO_INFERIOR -->
	total_modelo['{PECA_INFERIOR}'] = Number('{TOTAL_MODELO_INFERIOR}');
	<!-- END BLOCK_TOTAL_MODELO_INFERIOR -->
	<!-- BEGIN BLOCK_TOTAL_MODELO_ACESSORIO -->
	total_modelo['{PECA_ACESSORIO}'] = Number('{TOTAL_MODELO_ACESSORIO}');
	<!-- END BLOCK_TOTAL_MODELO_ACESSORIO -->

	var modelos_superior = total_modelo[peca_superior];
	var modelos_inferior = (peca_inferior != '') ? total_modelo[peca_inferior] : 0;
	var modelos_acessorio = (peca_acessorio != '') ? total_modelo[peca_acessorio] : 0;

	var permitir = 0;
	var tot_golas = Number({TOTAL_GOLAS});
	var tot_golas_carregadas = 0;
	var tot_golas_verso_carregadas = 0;

	var array_nome = ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed', 'LightSalmon', 'Salmon', 'DarkSalmon', 'LightCoral', 'IndianRed', 'Crimson', 'FireBrick', 'DarkRed', 'Red', 'OrangeRed', 'Tomato', 'Coral', 'DarkOrange', 'Orange', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Gold', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'DarkOliveGreen', 'Olive', 'OliveDrab', 'YellowGreen', 'LimeGreen', 'Lime', 'LawnGreen', 'Chartreuse', 'GreenYellow', 'SpringGreen', 'MediumSpringGreen', 'LightGreen', 'PaleGreen', 'DarkSeaGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'MediumAquamarine', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'SteelBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'DarkSlateBlue', 'RebeccaPurple', 'SlateBlue', 'MediumSlateBlue', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'];
	var array_hex = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585', '#FFA07A', '#FA8072', '#E9967A', '#F08080', '#CD5C5C', '#DC143C', '#B22222', '#8B0000', '#FF0000', '#FF4500', '#FF6347', '#FF7F50', '#FF8C00', '#FFA500', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#FFD700', '#FFF8DC', '#FFEBCD', '#FFE4C4', '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#8B4513', '#A0522D', '#A52A2A', '#800000', '#556B2F', '#808000', '#6B8E23', '#9ACD32', '#32CD32', '#00FF00', '#7CFC00', '#7FFF00', '#ADFF2F', '#00FF7F', '#00FA9A', '#90EE90', '#98FB98', '#8FBC8F', '#3CB371', '#2E8B57', '#228B22', '#008000', '#006400', '#66CDAA', '#00FFFF', '#00FFFF', '#E0FFFF', '#AFEEEE', '#7FFFD4', '#40E0D0', '#48D1CC', '#00CED1', '#20B2AA', '#5F9EA0', '#008B8B', '#008080', '#B0C4DE', '#B0E0E6', '#ADD8E6', '#87CEEB', '#87CEFA', '#00BFFF', '#1E90FF', '#6495ED', '#4682B4', '#4169E1', '#0000FF', '#0000CD', '#00008B', '#000080', '#191970', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#483D8B', '#663399', '#6A5ACD', '#7B68EE', '#FFFFFF', '#FFFAFA', '#F0FFF0', '#F5FFFA', '#F0FFFF', '#F0F8FF', '#F8F8FF', '#F5F5F5', '#FFF5EE', '#F5F5DC', '#FDF5E6', '#FFFAF0', '#FFFFF0', '#FAEBD7', '#FAF0E6', '#FFF0F5', '#FFE4E1', '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F', '#000000'];

	var link_molde_superior, link_molde_superior_esquerda, link_molde_superior_direita, link_molde_superior_verso;
	var link_molde_inferior, link_molde_inferior_esquerda, link_molde_inferior_direita, link_molde_inferior_verso;
	var link_molde_acessorio, link_molde_acessorio_esquerda, link_molde_acessorio_direita, link_molde_acessorio_verso;

	var detalhes_removidos = new Array();
	detalhes_removidos[peca_superior] = new Array();
	if (peca_inferior != '') detalhes_removidos[peca_inferior] = new Array();

	var img_detalhes;
	var legenda_preview = {LEGENDA_PREVIEW};
	var largura_legenda_preview = {LEGENDA_PREVIEW_W};
	var largura_total_preview = 0;
	var arrayDetalhes = new Array();
	arrayDetalhes[peca_superior] = new Array();
	if (peca_inferior != '') arrayDetalhes[peca_inferior] = new Array();

	if (esporte_dir == 'futebol_masculino_3') {
		var superior_left;
		var superior_left_verso;
	}
}

function preparar(){
	// CANVAS
	c = document.getElementById('canvas');
	c2 = document.getElementById('canvas_verso');
	ctx['canvas'] = c.getContext('2d');
	ctx['canvas_verso'] = c2.getContext('2d');
	if (modelo_rotacionar == 1) {
		c3 = document.getElementById('canvas_direita');
		c4 = document.getElementById('canvas_esquerda');
		ctx['canvas_direita'] = c3.getContext('2d');
		ctx['canvas_esquerda'] = c4.getContext('2d');

		var html_manequim = '<div class="modelo"><div class="fundos"></div></div>';
		$('<div class="manequim_direita">'+html_manequim+'</div>').insertAfter('.manequim');
		$('<div class="manequim_esquerda">'+html_manequim+'</div>').insertAfter('.manequim_verso');
		$('#girar-manequim span').remove();
		$('#girar-manequim').css({'color': '#fff', 'align-items': 'center', 'padding': '0 10px', 'cursor': 'pointer'});
		$('#girar-manequim').html('Rotacionar');
		var html_lados = '<ul id="lista-lados__manequim"><li id="lado-frente"></li><li id="lado-esquerda"></li><li id="lado-direita"></li><li id="lado-verso"></li></ul>';
		$(html_lados).insertAfter('#lista_lados');
	}
	// FIM CANVAS

	carregaModalidades();

	if (mostrar_pecas == 1) {
		peca_superior_aux = '{PECA_INICIAL_SUPERIOR}';
		peca_inferior_aux = '{PECA_INICIAL_INFERIOR}';
		$('.setas_modelos .peca_superior').append('<div class="bt-alterarPeca" onclick="alterarPeca()">Alterar</div>');
		$('.setas_modelos .peca_superior').append('<div class="bt-removerPeca">Remover</div>');
		$('.setas_modelos .peca_superior .bt-removerPeca').attr('onclick', 'removerPeca("superior")');
		$('.setas_modelos .peca_inferior').append('<div class="bt-alterarPeca" onclick="alterarPeca()">Alterar</div>');
		$('.setas_modelos .peca_inferior').append('<div class="bt-removerPeca">Remover</div>');
		$('.setas_modelos .peca_inferior .bt-removerPeca').attr('onclick', 'removerPeca("inferior")');
		$('.pecas_superior li[rel="'+peca_superior_aux+'"]').click();
		$('.pecas_inferior li[rel="'+peca_inferior_aux+'"]').click();
		$('#lista-lados__manequim').remove();
	}
	else {
		if (modelo_conjunto == 1) {
			if (peca_superior != '') {
				carregarManequim(peca_superior, 'superior');
				arrayPecas.push(new Array('superior', peca_superior));
			}
			if (peca_inferior != '') {
				carregarManequim(peca_inferior, 'inferior');
				arrayPecas.push(new Array('inferior', peca_inferior));
			}
			if (peca_acessorio != '') {
				carregarManequim(peca_acessorio, 'acessorio');
				arrayPecas.push(new Array('acessorio', peca_acessorio));
			}
		}
		else {
			carregarManequim(peca_superior, 'superior');
			arrayPecas.push(new Array('superior', peca_superior));
		}

		if (modelo_rotacionar == 1 && esporte != 'mascara') {
			$('div[class^="manequim"]').each(function(){
				var class_manequim = $(this).attr('class').split('_');
				var lado = ((class_manequim.length > 1) ? class_manequim[1] : 'frente');
				$(this).clone().appendTo('#lista-lados__manequim #lado-'+lado);
			});
		}
		else {
			$('#lista-lados__manequim').remove();
		}

		// CARREGAR SVGS MANEQUIM
		carregaSvgs();
		var verifica_svgs = setInterval(function(){
			if (i_lados == $('#lista_lados div[class^="manequim"]').length) {
				clearInterval(verifica_svgs);
				permitir = 1;
			}
		}, 500);

		// CARREGANDO GOLAS
		carregaGolas();

		// CARREGANDO DETALHE DO MANEQUIM
		<!-- BEGIN MOSTRAR_DETALHE_MANEQUIM -->
		$('.fundos').append('<div class="detalhe"><div class="fundos-svgs"></div></div>');
		$('.manequim .detalhe .fundos-svgs').append('<img src="{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_detalhe.webp'+versao_simu+'" />');
		$('.manequim_verso .detalhe .fundos-svgs').append('<img src="{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_detalhe_verso.webp'+versao_simu+'" />');
		<!-- END MOSTRAR_DETALHE_MANEQUIM -->
		$('div[class^="manequim"] .detalhe').remove();
		<!-- FINALLY MOSTRAR_DETALHE_MANEQUIM -->

		if (goleiro == 1 && (esporte_dir.indexOf('futebol') > -1 && esporte_dir != 'futebol_masculino_3')) {
			$('.manequim .luva_goleiro').append('<img src="{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_luvas.webp'+versao_simu+'" />');
			$('.manequim_verso .luva_goleiro').append('<img src="{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_luvas_verso.webp'+versao_simu+'" />');
		}

		carregaModelos();
	}
}
function carregaModalidades(){
	var c_quadro = 1;
	var n_modalidades = 0;

	if (num_modalidades > 1) {
		var modalidade_grupo = '';
		var max_modalidades = '';

		if ($(document).width() > 1023)
			max_modalidades = 8;
		else if ($(document).width() > 767)
			max_modalidades = 6;
		else if ($(document).width() > 479)
			max_modalidades = 4;
		else
			max_modalidades = 1;
		
		jQuery.each(modalidades, function(index, value){
			var modalidade = index;
			var nome_modalidade = value.nome;
			var img_modalidade = value.icone;
			var svg_modalidade = value.svg;
			var html_trocaModalidade = '';
			var html_listaModalidade = '';
		
			if (value.grupo != '' && value.grupo != null) {
				if (modalidade_grupo != stringtourl(value.grupo)) {
					n_modalidades++;	
					modalidade_grupo = stringtourl(value.grupo);
					var nome_grupo = value.grupo;
					html_trocaModalidade = 	'<li data-quadro="'+c_quadro+'" alt="'+nome_grupo+'" title="'+nome_grupo+'" class="'+modalidade_grupo+'" onclick=abreModelagens("'+modalidade_grupo+'")>' +
												'<img alt="'+nome_grupo+'" title="'+nome_grupo+'" src="{PASTA_RAIZ_SIMULADOR}/imagens/tipo_modalidade/'+img_modalidade+versao_simu+'"/>' +
											'</li>';
					html_listaModalidade = 	'<li class="'+modalidade_grupo+'" alt="'+nome_grupo+'" title="'+nome_grupo+'">' +
												'<a class="modalidade-icone" rel="'+modalidade+'" onclick=abreModelagens("'+modalidade_grupo+'")></a>' +
												'<div class="grupo_modalidades"><span>'+modalidade+'</span></div>' +
											'</li>';
				}
				else {
					$('li[class="'+modalidade_grupo+'"] .grupo_modalidades').append('<span>'+modalidade+'</span>');
					return true;	
				}		
			}
			else {
				n_modalidades++;
				modalidade_grupo = index;
				html_trocaModalidade = 	'<li data-quadro="'+c_quadro+'" class="'+modalidade_grupo+'" alt="'+nome_modalidade+'" title="'+nome_modalidade+'">' +
											'<a href="{PASTA_RAIZ_SIMULADOR}/'+modalidade+'">' +
												'<img src="{PASTA_RAIZ_SIMULADOR}/imagens/tipo_modalidade/'+img_modalidade+versao_simu+'"/>' +
											'</a>' +
										'</li>';
				html_listaModalidade = 	'<li class="'+modalidade_grupo+'" alt="'+nome_modalidade+'" title="'+nome_modalidade+'">' +
											'<a class="modalidade-icone" href="{PASTA_RAIZ_SIMULADOR}/'+modalidade+'" rel="'+modalidade+'"></a>' +
										'</li>';
			}

			$('#opcoes_modalidades').append(html_trocaModalidade);
			$('.lista_modalidades').append(html_listaModalidade);

			if (modalidade == esporte) {
				$('.lista_modalidades .'+modalidade_grupo+' .modalidade-icone').addClass('escolhido');
				$('#opcoes_modalidades .'+modalidade_grupo+' a').attr('href', 'javascript:void(0);').attr('onclick', 'irPara("{PASTA_RAIZ_SIMULADOR}/'+modalidade+'")');
			}

			// NÚMERO DE MODALIDADES POR PÁGINA (BOX VER TODOS)
			if (n_modalidades == max_modalidades) {
				n_modalidades = 0;
				$('#quadros').append('<div class="quadro" data-i="'+c_quadro+'" onclick="mudaQuadro('+c_quadro+')">'+c_quadro+'</div>');
				c_quadro++;
			}

			$.get('{PASTA_RAIZ_SIMULADOR}/img/borda.svg'+versao_simu, function(data){
				var data_svg = document.importNode(data.documentElement,true);
				$('.lista_modalidades li .modalidade-icone[rel="'+modalidade+'"]').append(data_svg);
			});

			$.get('{PASTA_RAIZ_SIMULADOR}/imagens/tipo_modalidade/'+svg_modalidade+versao_simu, function(data){
				var data_svg = document.importNode(data.documentElement,true);
				$('.lista_modalidades li .modalidade-icone[rel="'+modalidade+'"]').append(data_svg);
			});
		});
	}
	else {
		$('#box_modalidades').remove();
		$('#nav-modalidades, .modalidades').hide();
	}
	
	if ($('.lista_modalidades .escolhido').length == 0) {
		var grupo_ativo = stringtourl(modalidades[esporte]['grupo']);
		$('.lista_modalidades .'+grupo_ativo+' .modalidade-icone').attr('rel', esporte);

		$.get('{PASTA_RAIZ_SIMULADOR}/img/borda.svg'+versao_simu, function(data){
			var data_svg = document.importNode(data.documentElement,true);
			$('.lista_modalidades li .modalidade-icone[rel="'+esporte+'"]').append(data_svg);
		});

		$.get('{PASTA_RAIZ_SIMULADOR}/imagens/tipo_modalidade/'+modalidades[esporte].svg+versao_simu, function(data){
			var data_svg = document.importNode(data.documentElement,true);
			$('.lista_modalidades li .modalidade-icone[rel="'+esporte+'"]').append(data_svg);
		});
	}

	if (c_quadro > $('#quadros .quadro').length && $('#opcoes_modalidades li[data-quadro="'+c_quadro+'"]').length)
		$('#quadros').append('<div class="quadro" data-i="'+c_quadro+'" onClick="mudaQuadro('+c_quadro+')">'+c_quadro+'</div>');
}
function mudaQuadro(quadro){
	var total_quadro = $('#quadros').children().length;

	if (isNaN(quadro)) {
		var quadro_atual = $('#quadros .ativo').attr('data-i');
		if (quadro_atual > 1 && quadro == 'anterior')
			var novo_quadro = parseInt(quadro_atual)-parseInt(1);
		else if (quadro_atual < total_quadro && quadro == 'proximo')
			var novo_quadro = parseInt(quadro_atual)+parseInt(1);
		else
			var novo_quadro = quadro_atual;
	}
	else {
		var novo_quadro = quadro;
	}

	if (novo_quadro == 1) {
		$('.seta[rel="anterior"]').css('opacity',0);

		if (novo_quadro == total_quadro) {
			$('.seta[rel="proximo"]').css('opacity',0);
			$('#trocar_modalidade #texto__ver-mais, #trocar_modalidade .quadro').hide();
		}
		else if ($('.seta[rel="proximo"]').css('opacity') == 0) {
			$('.seta[rel="proximo"]').css('opacity',1);
			$('#trocar_modalidade #texto__ver-mais').show();
		}	

		if ($('#trocar_modalidade h3').css('display') == 'none') {
			$('#trocar_modalidade h3').show();
			$('ul[id="opcoes_modalidades"]').removeAttr('style');
		}
	}
	else if (novo_quadro == total_quadro) {
		$('.seta[rel="proximo"]').css('opacity',0);
		$('#trocar_modalidade #texto__ver-mais').hide();

		if ($('.seta[rel="anterior"]').css('opacity') == 0)
			$('.seta[rel="anterior"]').css('opacity',1);
	}
	else {
		if ($('#trocar_modalidade h3').css('display') == 'none') {
			$('#trocar_modalidade h3').show();
			$('ul[id="opcoes_modalidades"]').removeAttr('style');
		}	

		$('.seta[rel="anterior"], .seta[rel="proximo"]').css('opacity',1);
		$('#trocar_modalidade #texto__ver-mais').show();
	}

	$('#quadros .quadro').removeClass('ativo');
	$('#quadros .quadro[data-i="'+novo_quadro+'"]').addClass('ativo');
	$('#opcoes_modalidades li').removeClass('ativo');
	$('#opcoes_modalidades li[data-quadro="'+novo_quadro+'"]').addClass('ativo');
}
function carregarManequim(peca, parte){
	if (site_carregado == 0) {
		$('div[class^="manequim"]').css('opacity', 0);
		$('#lista_lados .fundos').append('<div class="engloba_'+peca+'" data-parte="'+parte+'"><div class="fundos-svgs"></div></div>');
		$('#lista_lados .engloba_'+parte).append('<div class="carregando-peca"></div>');
	}

	var dest_peca = (mostrar_pecas == 1) ? eval('peca_'+peca+'_aux') : peca;
	var nome_svg = (grupo_dir != dest_peca) ? '{ESPORTE_PATH_DIRETORIO}_'+dest_peca : '{ESPORTE_PATH_DIRETORIO}';
	var html = '';
	var html_verso = html;

	if (modelo_rotacionar == 1) {
		var html_esquerda = html;
		var html_direita = html;
	}

	var max_desenho = 5;
	for (var i = 1; i <= max_desenho; i++) {
		html += '<div class="'+peca+'_'+i+'"></div>';

		if (modelo_rotacionar == 1) {
			html_esquerda += '<div class="'+peca+'_'+i+'"></div>';
			html_direita += '<div class="'+peca+'_'+i+'"></div>';
		}

		html_verso += '<div class="'+peca+'_'+i+'"></div>';	
	}

	html += 	'<div class="logo"></div>' +
				'<div class="escudo"></div>' +
				'<div class="textura"></div>';

	if (modelo_rotacionar == 1) {
		html_esquerda += 	'<div class="logo"></div>' +
							'<div class="escudo"></div>' +
							'<div class="textura"></div>';
		html_direita += 	'<div class="logo"></div>' +
							'<div class="escudo"></div>' +
							'<div class="textura"></div>';
	}

	html_verso += 	'<div class="textura"></div>';
	$('.manequim .engloba_'+peca+' .fundos-svgs').append(html);
	$('.manequim_verso .engloba_'+peca+' .fundos-svgs').append(html_verso);

	if (modelo_rotacionar == 1) {
		$('.manequim_esquerda .engloba_'+peca+' .fundos-svgs').append(html_esquerda);
		$('.manequim_direita .engloba_'+peca+' .fundos-svgs').append(html_direita);
	}
}
function carregaSvgs(){
	// CARREGANDO PEÇA SUPERIOR
	var link_peca_superior = (grupo_dir != peca_superior && modelo_conjunto != '0') ? '{ESPORTE_PATH_DIRETORIO}_'+peca_superior : '{ESPORTE_PATH_DIRETORIO}';

	link_molde_superior = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'.svg'+versao_simu;
	$.get(link_molde_superior).done(function(data){
		i_lados++;
		var data_svg = document.importNode(data.documentElement,true);
		var width_svg = $(data_svg).attr('width');
		var height_svg = $(data_svg).attr('height');
		$('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
		$('.manequim .engloba_'+peca_superior+' .fundos-svgs').width(width_svg);
		$('.manequim .engloba_'+peca_superior+' .fundos-svgs').height(height_svg);
		$('.manequim .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'.webp'+versao_simu+'")');

		if (total_modelo[peca_superior] < 2)
			$('#linha_modelo_superior').remove();

		if (modelo_verso == 1) {
			<!-- BEGIN SUPERIOR_FRENTE_VERSO -->
			link_molde_superior_verso = link_molde_superior;
			$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
			$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').width(width_svg);
			$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').height(height_svg);
			$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'.webp'+versao_simu+'")');
			<!-- END SUPERIOR_FRENTE_VERSO -->
			link_molde_superior_verso = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_verso.svg'+versao_simu;
			$.get(link_molde_superior_verso).done(function(data){
				i_lados++;
				var data_svg_verso = document.importNode(data.documentElement,true);
				var width_svg_verso = $(data_svg_verso).attr('width');
				var height_svg_verso = $(data_svg_verso).attr('height');
				$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg_verso);
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').width(width_svg_verso);
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').height(height_svg_verso);
				$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_verso.webp'+versao_simu+'")');
			});
			<!-- FINALLY SUPERIOR_FRENTE_VERSO -->
		} 
		else {
			$('.manequim_verso').remove();

			if (modelo_rotacionar == 0)
				$('#girar-manequim').remove();
		}
	});

	// CARREGANDO DETALHES
	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_detalhes.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);

		if (modelo_verso == 1) {
			<!-- BEGIN SUPERIOR_DETALHE_FRENTE_VERSO -->
			$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
			$('.manequim .nome_verso, .manequim .numero_verso, .manequim .golas_verso').remove();
			$('.manequim_verso .nome_frente, .manequim_verso .numero_frente, .manequim_verso .detalhes_'+peca_superior+' .golas, .manequim_verso .fundo_gola').remove();
			<!-- END SUPERIOR_DETALHE_FRENTE_VERSO -->
			$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_verso_detalhes.svg'+versao_simu, function(data){
				var data_svg_verso = document.importNode(data.documentElement,true);
				$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg_verso);
			});
			<!-- FINALLY SUPERIOR_DETALHE_FRENTE_VERSO -->
		}
	});

	if (esporte_dir == 'viseira' || esporte_dir == 'bone_6_gomos' || esporte_dir == 'bone_trucker') {
		$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_verso-fechos.svg'+versao_simu, function(data){
			var data_svg = document.importNode(data.documentElement,true);
			var svg_l = data_svg.width.animVal.valueAsString;
			var svg_a = data_svg.height.animVal.valueAsString;
			$('.manequim_verso .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg).css({'width': svg_l, 'height': svg_a});
		});
	}

	<!-- BEGIN CUSTOMIZACOES_ADICIONAIS -->
	// CARREGANDO CUSTOMIZAÇÕES ADICIONAIS
	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_adicionais.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
		$('svg.adicionais').css('z-index', 5);

		$('.manequim .fundos .engloba_'+peca_superior+' svg.adicionais g').each(function(i, e){
			if ($(e).css('display') != 'none') {
				var item_adicional = $(e).attr('class');
				var html = '<div class="textura_'+item_adicional+'" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_'+item_adicional+'.webp'+versao_simu+'); display:none;"></div>';
				$('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs').append(html);
				$('.textura_'+item_adicional).css({'position': 'absolute', 'top': 0, 'width': '100%', 'height': '100%', 'z-index': 6});
			}
		});
	});
	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_verso_adicionais.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
		$('svg.adicionais').css('z-index', 5);

		$('.manequim_verso .fundos .engloba_'+peca_superior+' svg.adicionais g').each(function(i, e){
			if ($(e).css('display') != 'none') {
				var item_adicional = $(e).attr('class');
				var html = '<div class="textura_'+item_adicional+'" style="background-image: url({PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_'+item_adicional+'_verso.webp'+versao_simu+'); display:none;"></div>';
				$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').append(html);
				$('.textura_'+item_adicional).css({'position': 'absolute', 'top': 0, 'width': '100%', 'height': '100%', 'z-index': 6});
			}
		});
	});
	<!-- END CUSTOMIZACOES_ADICIONAIS -->

	// CARREGANDO LATERAIS
	<!-- BEGIN MOSTRAR_LATERAIS_MANEQUIM -->
	link_molde_superior_esquerda = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_esquerda.svg'+versao_simu;
	$.get(link_molde_superior_esquerda).done(function(data){
		i_lados++;
		var data_svg = document.importNode(data.documentElement,true);
		var width_svg = $(data_svg).attr('width');
		var height_svg = $(data_svg).attr('height');
		$('.manequim_esquerda .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);	
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs').width(width_svg);
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs').height(height_svg);
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_esquerda.webp'+versao_simu+'")');
	});

	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_esquerda_detalhes.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim_esquerda .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
	});

	link_molde_superior_direita = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_direita.svg'+versao_simu;
	$.get(link_molde_superior_direita).done(function(data){
		i_lados++;
		var data_svg = document.importNode(data.documentElement,true);
		var width_svg = $(data_svg).attr('width');
		var height_svg = $(data_svg).attr('height');
		$('.manequim_direita .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs').width(width_svg);
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs').height(height_svg);
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_superior+'_direita.webp'+versao_simu+'")');
	});

	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_superior+'_direita_detalhes.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim_direita .engloba_'+peca_superior+' .fundos-svgs').prepend(data_svg);
	});
	<!-- END MOSTRAR_LATERAIS_MANEQUIM -->

	// CARREGANDO PEÇA INFERIOR
	<!-- BEGIN MOSTRAR_MANEQUIM_INFERIOR -->
	var link_peca_inferior = (grupo_dir != peca_inferior) ? '{ESPORTE_PATH_DIRETORIO}_'+peca_inferior : '{ESPORTE_PATH_DIRETORIO}';

	link_molde_inferior = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_inferior+'.svg'+versao_simu;
	$.get(link_molde_inferior).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		var width_svg = $(data_svg).attr('width');
		var height_svg = $(data_svg).attr('height');
		$('.manequim .fundos .engloba_'+peca_inferior+' .fundos-svgs').prepend(data_svg);
		$('.manequim .engloba_'+peca_inferior+' .fundos-svgs').width(width_svg);
		$('.manequim .engloba_'+peca_inferior+' .fundos-svgs').height(height_svg);
		$('.manequim .engloba_'+peca_inferior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_inferior+'.webp'+versao_simu+'")');

		<!-- BEGIN INFERIOR_FRENTE_VERSO -->
		link_molde_inferior_verso = link_molde_inferior;
		$('.manequim_verso .engloba_'+peca_inferior+' .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_inferior+'.webp'+versao_simu+'")');
		$('.manequim_verso .engloba_'+peca_inferior+' .fundos-svgs').width(width_svg);
		$('.manequim_verso .engloba_'+peca_inferior+' .fundos-svgs').height(height_svg);
		$('.manequim_verso .fundos .engloba_'+peca_inferior).prepend(data_svg);
		<!-- END INFERIOR_FRENTE_VERSO -->
		link_molde_inferior_verso = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_inferior+'_verso.svg'+versao_simu;
		$.get(link_molde_inferior_verso, function(data){
			var data_svg_verso = document.importNode(data.documentElement,true);
			var width_svg_verso = $(data_svg_verso).attr('width');
			var height_svg_verso = $(data_svg_verso).attr('height');
			$('.manequim_verso .fundos .engloba_'+peca_inferior+' .fundos-svgs').prepend(data_svg_verso);
			$('.manequim_verso .engloba_'+peca_inferior+' .fundos-svgs').width(width_svg_verso);
			$('.manequim_verso .engloba_'+peca_inferior+' .fundos-svgs').height(height_svg_verso);
			$('.manequim_verso .engloba_'+peca_inferior+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+link_peca_inferior+'_verso.webp'+versao_simu+'")');
		});
		<!-- FINALLY INFERIOR_FRENTE_VERSO -->
	});

	$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_inferior+'_detalhes.svg'+versao_simu).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		$('.manequim .fundos .engloba_'+peca_inferior+' .fundos-svgs').prepend(data_svg);

		<!-- BEGIN INFERIOR_DETALHE_FRENTE_VERSO -->
		$('.manequim_verso .fundos .engloba_'+peca_inferior+' .fundos-svgs').prepend(data_svg);
		<!-- END INFERIOR_DETALHE_FRENTE_VERSO -->
		$.get('{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+link_peca_inferior+'_verso_detalhes.svg'+versao_simu, function(data){
			var data_svg_verso = document.importNode(data.documentElement,true);
			$('.manequim_verso .fundos .engloba_'+peca_inferior+' .fundos-svgs').prepend(data_svg_verso);
		});
		<!-- FINALLY INFERIOR_DETALHE_FRENTE_VERSO -->
	});	
	<!-- END MOSTRAR_MANEQUIM_INFERIOR -->
	$('#linha_modelo_inferior').remove();
	<!-- FINALLY MOSTRAR_MANEQUIM_INFERIOR -->

	// CARREGANDO PEÇA ACESSÓRIO
	<!-- BEGIN MOSTRAR_MANEQUIM_ACESSORIO -->
	link_molde_acessorio = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/{ESPORTE_PATH_DIRETORIO}_'+peca_acessorio+'.svg'+versao_simu;
	$.get(link_molde_acessorio).done(function(data){
		var data_svg = document.importNode(data.documentElement,true);
		var width_svg = $(data_svg).attr('width');
		var height_svg = $(data_svg).attr('height');
		$('.manequim .fundos .engloba_'+peca_acessorio+' .fundos-svgs').prepend(data_svg);
		$('.manequim .engloba_'+peca_acessorio+' .fundos-svgs').width(width_svg);
		$('.manequim .engloba_'+peca_acessorio+' .fundos-svgs').height(height_svg);
		$('.manequim .engloba_'+peca_acessorio+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_'+peca_acessorio+'.webp'+versao_simu+'")');
	});

	link_molde_acessorio_verso = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/{ESPORTE_PATH_DIRETORIO}_'+peca_acessorio+'_verso.svg'+versao_simu;
	$.get(link_molde_acessorio_verso).done(function(data){
		var data_svg_verso = document.importNode(data.documentElement,true);
		var width_svg_verso = $(data_svg_verso).attr('width');
		var height_svg_verso = $(data_svg_verso).attr('height');
		$('.manequim_verso .fundos .engloba_'+peca_acessorio+' .fundos-svgs').prepend(data_svg_verso);
		$('.manequim_verso .engloba_'+peca_acessorio+' .fundos-svgs').width(width_svg_verso);
		$('.manequim_verso .engloba_'+peca_acessorio+' .fundos-svgs').height(height_svg_verso);
		$('.manequim_verso .engloba_'+peca_acessorio+' .fundos-svgs .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/{ESPORTE_PATH_DIRETORIO}_'+peca_acessorio+'_verso.webp'+versao_simu+'")');
	});
	<!-- END MOSTRAR_MANEQUIM_ACESSORIO -->
}
function carregaGolas(){
	<!-- BEGIN INICIA_CARREGA_GOLAS -->
	var verifica_svg = setInterval(function(){
		if ($('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs svg[id="molde_'+peca_superior+'"]').length > 0 
		&& $('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs svg[id="molde_'+peca_superior+'_verso"]').length > 0) {
			clearInterval(verifica_svg);

			$('.manequim .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend('<div class="golas"></div>');
			$('.manequim_verso .fundos .engloba_'+peca_superior+' .fundos-svgs').prepend('<div class="golas"></div>');

			<!-- BEGIN BLOCK_OPCOES_GOLAS -->
			$('.manequim .fundos .engloba_'+peca_superior+' .golas').append('<div class="gola_{NOME_GOLA}"></div>');
			$('.manequim_verso .fundos .engloba_'+peca_superior+' .golas').prepend('<div class="gola_{NOME_GOLA}"></div>');

			$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_FUNDO_GOLA}'+versao_simu, function(data){
				var svg_fundo_gola = document.importNode(data.documentElement,true);
				$('.manequim .golas .gola_{NOME_GOLA}').prepend('<div class="fundo_gola"></div>');
				$('.manequim .golas .gola_{NOME_GOLA} .fundo_gola').prepend(svg_fundo_gola);

				<!-- BEGIN BLOCK_GOLAS_COR_FUNDO -->
				$('.manequim .golas .gola_{NOME_GOLA}').attr('rel', 'fundo_inativo').css('fill', '{GOLA_COR_FUNDO}'); 
				<!-- END BLOCK_GOLAS_COR_FUNDO -->
			});

			$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA}'+versao_simu, function(data){
				var svg_gola = document.importNode(data.documentElement,true);
				$('.manequim .golas .gola_{NOME_GOLA}').append('<div class="gola"></div>');
				$('.manequim .golas .gola_{NOME_GOLA} .gola').append(svg_gola);
				var height_svg = Number($('.manequim .golas .gola_{NOME_GOLA}').find('svg').height());
				var h_camisa = Number($('.manequim svg[id="molde_'+peca_superior+'"]').height());

				if (height_svg > h_camisa && h_camisa != 0) {
					var diferenca_h = height_svg - h_camisa;
					$('.manequim .golas .gola_{NOME_GOLA}').attr('data-top', diferenca_h);
				}
				
				$('.manequim .golas .gola_{NOME_GOLA} .gola svg path[fill="none"]').remove();
				$('.manequim .gola_{NOME_GOLA} .gola path').removeAttr('fill');
			}).done(function(){
				tot_golas_carregadas++;
			});

			$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_VERSO}'+versao_simu, function(data){
				var svg_gola = document.importNode(data.documentElement,true);
				$('.manequim_verso .golas .gola_{NOME_GOLA}').append('<div class="gola"></div>');
				$('.manequim_verso .golas .gola_{NOME_GOLA} .gola').append(svg_gola);
				var height_svg = $('.manequim_verso .golas .gola_{NOME_GOLA}').find('svg').height();
				var h_camisa = Number($('.manequim_verso svg[id="molde_'+peca_superior+'_verso"]').height());

				if (height_svg > h_camisa && h_camisa != 0) {
					var diferenca_h = height_svg - h_camisa;
					$('.manequim_verso .golas .gola_{NOME_GOLA}').attr('data-top', diferenca_h);
				}

				$('.manequim_verso .golas .gola_{NOME_GOLA} .gola svg path[fill="none"]').remove();
				$('.manequim_verso .gola_{NOME_GOLA} .gola path').removeAttr('fill');
			}).done(function(){
				tot_golas_verso_carregadas++;
			});

			if ('{SVG_GOLA_2}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_2}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim .golas .gola_{NOME_GOLA}').append('<div class="gola_2"></div>');
					$('.manequim .golas .gola_{NOME_GOLA} .gola_2').append(svg_gola);
					$('.manequim .golas .gola_{NOME_GOLA} .gola_2 svg path[fill="none"]').remove();
					$('.manequim .gola_{NOME_GOLA} .gola_2 path').removeAttr('fill');
				});
			}
			if ('{SVG_GOLA_2_VERSO}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_2_VERSO}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim_verso .golas .gola_{NOME_GOLA}').append('<div class="gola_2"></div>');
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_2').append(svg_gola);
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_2 svg path[fill="none"]').remove();
					$('.manequim_verso .gola_{NOME_GOLA} .gola_2 path').removeAttr('fill');
				});
			}

			if ('{SVG_GOLA_3}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_3}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim .golas .gola_{NOME_GOLA}').append('<div class="gola_3"></div>');
					$('.manequim .golas .gola_{NOME_GOLA} .gola_3').append(svg_gola);
					$('.manequim .golas .gola_{NOME_GOLA} .gola_3 svg path[fill="none"]').remove();
					$('.manequim .gola_{NOME_GOLA} .gola_3 path').removeAttr('fill');
				});
			}
			if ('{SVG_GOLA_3_VERSO}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_3_VERSO}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim_verso .golas .gola_{NOME_GOLA}').append('<div class="gola_3"></div>');
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_3').append(svg_gola);
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_3 svg path[fill="none"]').remove();
					$('.manequim_verso .gola_{NOME_GOLA} .gola_3 path').removeAttr('fill');
				});
			}

			if ('{SVG_GOLA_4}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_4}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim .golas .gola_{NOME_GOLA}').append('<div class="gola_4"></div>');
					$('.manequim .golas .gola_{NOME_GOLA} .gola_4').append(svg_gola);
					$('.manequim .golas .gola_{NOME_GOLA} .gola_4 svg path[fill="none"]').remove();
					$('.manequim .gola_{NOME_GOLA} .gola_4 path').removeAttr('fill');
				});
			}
			if ('{SVG_GOLA_4_VERSO}' != 'vazio.svg') {
				$.get('{PASTA_RAIZ_SIMULADOR}/imagens/gola/{SVG_GOLA_4_VERSO}'+versao_simu, function(data){
					var svg_gola = document.importNode(data.documentElement,true);
					$('.manequim_verso .golas .gola_{NOME_GOLA}').append('<div class="gola_4"></div>');
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_4').append(svg_gola);
					$('.manequim_verso .golas .gola_{NOME_GOLA} .gola_4 svg path[fill="none"]').remove();
					$('.manequim_verso .gola_{NOME_GOLA} .gola_4 path').removeAttr('fill');
				});
			}

			$('.manequim .fundos .engloba_'+peca_superior+' .gola_{NOME_GOLA}').append('<div class="textura_gola"></div>');
			$('.manequim .golas .gola_{NOME_GOLA} .textura_gola').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/imagens/gola/{TEXTURA_GOLA}'+versao_simu+'")');
			$('.manequim_verso .fundos .engloba_'+peca_superior+' .gola_{NOME_GOLA}').append('<div class="textura_gola"></div>');
			$('.manequim_verso .golas .gola_{NOME_GOLA} .textura_gola').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/imagens/gola/{TEXTURA_GOLA_COSTAS}'+versao_simu+'")');

			if ('{TEXTURA_GOLA_COSTAS}' == '')
				$('.manequim_verso .golas').css('z-index', 3);

			var html_gola = '<li class="opcao opcao_pers" rel="superior-gola-{NOME_GOLA}" style="cursor: pointer;" alt="{N_GOLA}" title="{N_GOLA}">';
			html_gola +=	'<img src="{PASTA_RAIZ_SIMULADOR}/imagens/gola/{ICONE_GOLA}'+versao_simu+'" /><span>{N_GOLA}</span>';
			html_gola += 	'</li>';
			$('.lista_opcoes[rel="gola"]').append(html_gola);
			<!-- END BLOCK_OPCOES_GOLAS -->

			if (tot_golas == 1) {
				$('.lista_opcoes[rel="gola"] .opcao').eq(0).click();
			}
		}
	}, 500);
	<!-- END INICIA_CARREGA_GOLAS -->
}
function carregaModelos(){
	var newWidth = Number(260/3) - 10;
	var qtdModelos = 13;
	for (var i=0; i<arrayPecas.length; i++) {
		if (typeof desenho[arrayPecas[i][1]][1] !== 'undefined') {
			for (var j=1; j<=total_modelo[arrayPecas[i][1]]; j++) {
				if (j == 1) {
					var img = new Image();
					img.src = '{PASTA_RAIZ_SIMULADOR}/miniatura-'+desenho[arrayPecas[i][1]][1]['modelo'];
				}

				var img_modelo = '{PASTA_RAIZ_SIMULADOR}/miniatura-'+desenho[arrayPecas[i][1]][j]['modelo'];
				var html_modelo = '<li class="opcao_pers" rel="'+arrayPecas[i][0]+'-cod_modelo-'+desenho[arrayPecas[i][1]][j]['cod_modelo']+'" data-tipo="'+arrayPecas[i][1]+'" data-i="'+j+'">';

				if (j < qtdModelos)
					html_modelo += '<img src="'+img_modelo+'" data-src="" width="'+Math.floor(newWidth)+'" />';
				else
					html_modelo += '<img src="" data-src="'+img_modelo+'" width="'+Math.floor(newWidth)+'" />';

				if (mostrar_cod_modelo == 1)
					html_modelo += '<span>Cod. Modelo: '+desenho[arrayPecas[i][1]][j]['cod_modelo']+'</span>';

				html_modelo += '</li>';
				$('.lista_modelos[rel="modelos_'+arrayPecas[i][0]+'"]').append(html_modelo);
			}
		}
	}
}
function personalizaUniforme(){
	personalizaMenu();

	detalhesUniforme();

	<!-- BEGIN BLOCK_NUMERO_GOLEIRO -->
	$('.previewNumero, .lista-fontes[rel*="numero"] .fonte').html('1');
	<!-- END BLOCK_NUMERO_GOLEIRO -->

	<!-- BEGIN MOSTRAR_SINCRONIZACAO_INICIAL -->
	if (modelos_superior == modelos_inferior && modelos_superior > 0) {
		$('#ipt-sincronizar').prop('checked', false);
		travado = 1;
		$('.ipt-checkbox[for="ipt-sincronizar"]').click();
	}
	<!-- END MOSTRAR_SINCRONIZACAO_INICIAL -->

	if (modelo_conjunto == 0) {
		$('#sub-menu_edicao').remove();
		$('label[for="ipt-sincronizar"]').remove();
		$('.box_bloqueio').remove();
		$('.setas_modelos .peca_inferior').remove();
		$('#opcoes-modelo_conjunto').remove();
	}
	else if (modelos_inferior == 0 && modelos_superior > 0) {
		$('.box_bloqueio, label[for="ipt-sincronizar"], #opcoes-modelo_conjunto').remove();
	}

	$('#topo .opcao:contains("Nova Simulação")').hide();

	if (inicial > 0) {
		retorno_superior = carregaDesenhoInicial(peca_superior, inicial);
		retorno_inferior = carregaDesenhoInicial(peca_inferior, inicial);
		retorno_acessorio = carregaDesenhoInicial(peca_acessorio, inicial);
		trocaModelo(peca_superior, retorno_superior);
		if (modelos_inferior > 0) 
			trocaModelo(peca_inferior, retorno_inferior);
		if (modelos_acessorio > 0) 
			trocaModelo(peca_acessorio, retorno_acessorio);

		$('.opcao_pers[rel="superior-cod_modelo-'+desenho[peca_superior][retorno_superior]['cod_modelo']+'"]').click();
		if (modelos_inferior > 0)
			$('.opcao_pers[rel="inferior-cod_modelo-'+desenho[peca_inferior][retorno_inferior]['cod_modelo']+'"]').click();
		if (modelos_acessorio > 0)
			$('.opcao_pers[rel="acessorio-cod_modelo-'+desenho[peca_acessorio][retorno_acessorio]['cod_modelo']+'"]').click();

		if (esporte.indexOf('running_') > -1) {
			if (url_inicial.indexOf('&superior') == -1)
				removerPeca('superior');
			else if (url_inicial.indexOf('&inferior') == -1)
				removerPeca('inferior');
		}
	}
	else if (typeof arr_simulacao != 'undefined' && arr_simulacao != '') {
		$('.simulacoes .opcao[rel="'+id_simulacao+'"]').addClass('ativo');
		preview_simulacao = $('.simulacoes .opcao[rel="'+id_simulacao+'"] .img_simulacao').css('background-image');
		$('#armario #preview_ativo').css('background-image', preview_simulacao);
		$('#topo .opcao:contains("Nova Simulação")').show();
		ajustesManequim();
	}
	else {
		if (peca_superior != '' && desenho[peca_superior][modelo_inicial] != undefined) {
			trocaModelo(peca_superior, modelo_inicial);
			preencheAtributo('superior', 'cod_modelo', desenho[peca_superior][modelo_inicial]['cod_modelo'], 0);

			if (modelos_inferior == 0) {
				var cor_incial = 'branco';
				$('.lista_camadas[rel="'+peca_inferior+'"] .cor_camada[rel^="_"]').hide();
				$('.edicao_cores .lista_camadas[rel="'+peca_inferior+'"] .cor_camada[rel=""]').click();
				$('.edicao_cores .lista_camadas[rel="'+peca_inferior+'"] .paleta_cores .cor[alt="'+cor_incial+'"]').click();
				$('.edicao_cores .lista_camadas[rel="'+peca_inferior+'"] .cor_camada').addClass('sem_numero');

				if ($('.engloba_'+peca_inferior+' .logo').length) {
					$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_inferior+'"] .cor_camada').click();
					$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_inferior+'"] .paleta_cores .cor[alt="preto"]').click();
				}

			}
		}
		if (peca_inferior != '' && desenho[peca_inferior][modelo_inicial] != undefined) {
			trocaModelo(peca_inferior, modelo_inicial);
			preencheAtributo('inferior', 'cod_modelo', desenho[peca_inferior][modelo_inicial]['cod_modelo'], 0);

			if (modelos_superior == 0) {
				var cor_incial = 'branco';
				$('.lista_camadas[rel="'+peca_superior+'"] .cor_camada[rel^="_"]').hide();
				$('.edicao_cores .lista_camadas[rel="'+peca_superior+'"] .cor_camada[rel=""]').click();
				$('.edicao_cores .lista_camadas[rel="'+peca_superior+'"] .paleta_cores .cor[alt="'+cor_incial+'"]').click();
				$('.edicao_cores .lista_camadas[rel="'+peca_superior+'"] .cor_camada').addClass('sem_numero');

				if ($('.engloba_'+peca_superior+' .logo').length) {
					$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_superior+'"] .cor_camada').click();
					$('.lista_camadas[rel="cor_logo"][data-peca="'+peca_superior+'"] .paleta_cores .cor[alt="preto"]').click();
				}
			}
		}
		if (peca_acessorio != '' && modelos_acessorio > 0 && desenho[peca_acessorio][modelo_inicial] != undefined) {
			trocaModelo(peca_acessorio, modelo_inicial);
			preencheAtributo('acessorio', 'cod_modelo', desenho[peca_acessorio][modelo_inicial]['cod_modelo'], 0);
		}
	}

	if (logado == 1) {
		// armário 
		var h_window = $(window).height();
		var h = (50*h_window)/100;
		$('.armario').css('max-height', h+'px');
		$('.simulacoes').clone().prependTo('#box_armario #armario');
		$('#box_armario .simulacoes').removeClass('menu_oculto').show();
		$('#box_armario .simulacoes .opcao').attr('onmouseover', 'trocarImagem($(this).find(".img_simulacao").css("background-image"))').attr('onmouseout', 'trocarImagem()');
	}

	if (colecao == 1)
		$('.edicao_modelos .cabecalho').after('<button id="abrirColecoes" onClick="popupColecoes()">Coleções</button>');

	<!-- BEGIN MOSTRAR_SOMENTE_CAMISA -->
	$('div[class^="engloba_"]:not(.engloba_'+peca_superior+')').remove();
	$('.modelo .detalhe').remove();
	<!-- END MOSTRAR_SOMENTE_CAMISA -->

	// fontes
	var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
	defs.appendChild(style_fontes);
	defs_fontes = defs;
	$('.fundos-svgs svg[class^="detalhes_"').append(defs_fontes);
	//

	$('body svg').css('shape-rendering', 'geometricPrecision');
	$('#box_manequim div[class^="manequim"]').removeAttr('style');
}
function personalizaMenu(){
	if (mostrar_pecas == 0)
		$('#lista_edicao .opcao[rel="edicao_pecas"], #conteudo_edicao .edicao_pecas').remove();

	if (modelo_conjunto == 0) {
		$('.sub-menu_edicao .opcao_edicao[rel="superior"]').closest('.sub-menu_edicao').remove();
		$('#box_edicao-cores').css({'height': 'fit-content'});
		$('.conteudo_edicao[rel="inferior"]').remove();
		$('.conteudo_edicao[rel="acessorio"]').remove();
	}
	else if (mostrar_pecas == 0 && (modelos_superior < 2 || modelos_inferior < 2)) {
		$('.edicao_modelos .sub-menu_edicao').remove();
	}

	if (peca_acessorio == '') {
		$('label[for="ipt-peca-conjunto"]').remove();
		$('#ipt-peca-conjunto').closest('.box-checkbox').remove();
		$('.edicao_modelos .opcao_edicao[rel="acessorio"]').remove();
		$('.edicao_cores .cores_acessorio').remove();
		$('.setas_modelos .peca_acessorio').remove();
	} 
	else if (modelos_acessorio == 0 && peca_acessorio != '') {
		$('.opcao_edicao[rel="modelos_acessorio"]').remove();
		$('.edicao_cores .cores_acessorio .lista_camadas .cor_camada[rel^="_"]').remove();
		$('.engloba_'+peca_acessorio+' div[class^="'+peca_acessorio+'_"]').remove();
		$('.setas_modelos .peca_acessorio').remove();
	}

	if (modelos_superior < 2 && mostrar_pecas == 0) {
		$('.setas_modelos .peca_superior').remove();
		$('.lista_modelos[rel="modelos_superior"]').remove();
	}

	if (modelos_inferior < 2 && mostrar_pecas == 0) {
		$('.setas_modelos .peca_inferior').remove();
		$('.lista_modelos[rel="modelos_inferior"]').remove();
		$('.edicao_modelos .opcao_edicao[rel="inferior"]').remove();

		if (peca_inferior == '')
			$('.edicao_cores .cores_inferior').remove();
	}

	if (modelos_acessorio < 2) {
		$('.setas_modelos .peca_acessorio').remove();
		$('.lista_modelos[rel="modelos_acessorio"]').remove();

		if (modelos_acessorio <= 0) 
			$('.edicao_modelos .opcao_edicao[rel="acessorio"]').remove();
	}

	if (modelos_superior <= 1 && modelos_inferior <= 1 && modelos_acessorio <= 1 && mostrar_pecas == 0)
		$('#lista_edicao .opcao[rel="edicao_modelos"], .setas_modelos').remove();

	if (tot_golas > 15)
		$('.container[rel="gola"]').css('overflow-y', 'scroll');
	else if (tot_golas == 0)
		$('.conteudo_edicao[rel="gola"] .box_cores').css('border', 'unset');
}
function carregaDesenhoInicial(dest, x){
	for (i in desenho[dest]) {
		if (desenho[dest][i].cod_modelo == x) {
			var valor_i = i;

			return valor_i;
		}
	}
	
	return 1;
}
function trocaModelo(dest, i){
	preenchimento_modelo = 1;

	if (!(typeof dest === 'undefined')) {
		trocaDesenho(dest, i);
	}

	// FECHAR PALETA DE CORES
	$('.lista_camadas .cor_camada').removeClass('camada_ativa');
	$('.lista_camadas .paleta_cores').removeClass('ativo');
}
function trocaDesenho(dest, i){
	if (desenho[dest][i] != undefined) {
		var codigo_modelo = desenho[dest][i]['cod_modelo'];

		var parte_modelo = (mostrar_pecas == 1) ? dest : arrayPecas.find(item => item[1] === dest)[0];
		$('.lista_modelos[rel="modelos_'+parte_modelo+'"] li').removeClass('ativo');
		$('.lista_modelos[rel="modelos_'+parte_modelo+'"] li[data-i="'+i+'"]').addClass('ativo');

		if ((dest == peca_superior && (peca_visivel === undefined || peca_visivel == '')) || peca_visivel == dest) {
			var img_atual = $('.lista_modelos[rel="modelos_'+parte_modelo+'"] li.ativo img').attr('src');
			if (img_atual == '')
				img_atual = $('.lista_modelos[rel="modelos_'+parte_modelo+'"] li.ativo img').attr('data-src');

			$('.ico-lista_edicao img').attr('src', img_atual);
		}

		if (dest == peca_superior) {
			$('.peca_superior .cod_modelo').html(codigo_modelo);
			$('.peca_superior .i_modelo').html(i);
			$('#codigo_modelo_'+peca_superior).html(codigo_modelo);
			(codigo_modelo && $('.engloba_'+peca_superior).css('display') != 'none') ? $('#linha_modelo_superior').show() : $('#linha_modelo_superior').hide();

			// carregar desenhos sincronizados
			if (site_carregado == 1 && total_modelo[peca_inferior] !== undefined && travado == 1 && i != $('.peca_inferior .i_modelo').html())
				trocaDesenho(peca_inferior, i);
		}
		else if (dest == peca_inferior) {
			$('.peca_inferior .cod_modelo').html(codigo_modelo);
			$('.peca_inferior .i_modelo').html(i);
			$('#codigo_modelo_'+peca_inferior).html(codigo_modelo);
			(codigo_modelo && $('.engloba_'+peca_inferior).css('display') != 'none') ? $('#linha_modelo_inferior').show() : $('#linha_modelo_inferior').hide();

			// carregar desenhos sincronizados
			if (site_carregado == 1 && total_modelo[peca_superior] > 1 && travado == 1 && i != $('.peca_superior .i_modelo').html())
				trocaDesenho(peca_superior, i);
		}
		else if (dest == peca_acessorio) {
			$('.peca_acessorio .cod_modelo').html(codigo_modelo);
			$('.peca_acessorio .i_modelo').html(i);
		}
	}
	
	for (var n=1; n <= 5; n++) {
		if (desenho[dest][i+'_'+n] != null) {
			desenhos_esperados++;
			carregaDesenho(dest, i+'_'+n, n);

			if (desenho[dest][i+'_'+n]['svg'] != 'vazio.svg' && typeof desenho[dest][i+'_'+n]['svg'] != 'undefined') {
				$('.manequim .fundos-svgs .'+dest+'_'+n).removeAttr('style');
				$('.manequim_verso .fundos-svgs .'+dest+'_'+n).removeAttr('style');

				if (modelo_rotacionar == 1) {
					$('.manequim_direita .fundos-svgs .'+dest+'_'+n).removeAttr('style');
					$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n).removeAttr('style');
				}

				$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="_'+n+'"]').css('display', 'flex');

				if (preenchimento_inicial == 0 && preenchimento_habilitado == 1)
					alterarArrayAtual(1, 'cor_'+n, dest);
			}
			else {
				$('.fundos-svgs .'+dest+'_'+n).css('display', 'none').hide();
				$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="_'+n+'"]').hide();		

				if (preenchimento_inicial == 0 && preenchimento_habilitado == 1)
					alterarArrayAtual(0, 'cor_'+n, dest);
			}
		}
		else {
			$('.manequim .fundos-svgs .'+dest+'_'+n).css('display', 'none').hide();
			$('.manequim_verso .fundos-svgs .'+dest+'_'+n).css('display', 'none').hide();

			if (modelo_rotacionar == 1) {
				$('.manequim_direita .fundos-svgs .'+dest+'_'+n).css('display', 'none').hide();
				$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n).css('display', 'none').hide();
			}

			$('.lista_camadas[rel="'+dest+'"] .cor_camada[rel="_'+n+'"]').hide();

			if (preenchimento_inicial == 0 && preenchimento_habilitado == 1)
				alterarArrayAtual(0, 'cor_'+n, dest);

			if (n == 5)
				listaCamadas(dest);
		}
	}
	
	var verifica_desenhos = setInterval(function(){
		if (desenhos_esperados == desenhos_carregados) {
			clearInterval(verifica_desenhos);

			var n_pecas = (peca_acessorio == '' || total_modelo[peca_acessorio] > 0) ? arrayPecas.length - 1 : arrayPecas.length - 2;
			var i_peca = (mostrar_pecas == 0) ? arrayPecas.findIndex(item => item[1] === dest) : arrayPecas.findIndex(item => item[0] === dest);
			
			if (preenchimento_inicial == 1 && (i_peca == n_pecas || modelos_inferior == 0)) {
				ajustesManequim();
			}

			preenchimento_modelo = 0;
			desenhos_esperados = 0;
			desenhos_carregados = 0;

			if (esperando_desenhos == 1)
				carregarStatus(arrayStatus[iStatus]);

			if (preenchimento_peca == 0 && site_carregado == 1) {
				$('#lista_lados div[class^="manequim"] .engloba_'+dest+' .fundos-temp').remove();
				$('#lista_lados div[class^="manequim"] .engloba_'+dest+' .fundos-svgs').css('opacity', 1);
				$('#lista-lados__manequim').css('opacity', 1);

				if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
					$('.lista_camadas[rel="'+peca_superior+'"] .cor_camada').each(function(index, element) {
						$(this).find('.cor_atual').click();
						$(this).parent().find('.paleta_cores .cor[id-cor="'+$(this).find('.cor_atual').attr('data-cor')+'"]').click();
					});
					$('.lista_camadas[rel="'+peca_inferior+'"] .cor_camada').each(function(index, element) {
						$(this).find('.cor_atual').click();
						$(this).parent().find('.paleta_cores .cor[id-cor="'+$(this).find('.cor_atual').attr('data-cor')+'"]').click();
					});
				}
			}
		} 
	}, 500);
}
function carregaDesenho(dest, i, n){
	colori_meiao = 0;

	if (site_carregado == 1 && n == 1 && preenchimento_peca == 0) {
		$('#lista-lados__manequim').css('opacity', 0);

		var clone_frente = $('#lista_lados .manequim .engloba_'+dest+' .fundos-svgs').css('opacity', 0).clone();
		var clone_verso = $('#lista_lados .manequim_verso .engloba_'+dest+' .fundos-svgs').css('opacity', 0).clone();
		if (modelo_rotacionar == 1) {
			var clone_direita = $('#lista_lados .manequim_direita .engloba_'+dest+' .fundos-svgs').css('opacity', 0).clone();
			var clone_esquerda = $('#lista_lados .manequim_esquerda .engloba_'+dest+' .fundos-svgs').css('opacity', 0).clone();
		}

		$('#lista_lados div[class^="manequim"] .engloba_'+dest+' .fundos-svgs').addClass('fundos-temp').removeClass('fundos-svgs');
		$('#lista_lados div[class^="manequim"] .engloba_'+dest+' .fundos-temp').css({'position': 'absolute', 'opacity': 0.8, 'left': 0, 'right': 0});
		$('#lista_lados .manequim .engloba_'+dest).append(clone_frente);
		$('#lista_lados .manequim_verso .engloba_'+dest).append(clone_verso);

		if (modelo_rotacionar == 1) {
			$('#lista_lados .manequim_direita .engloba_'+dest).append(clone_direita);
			$('#lista_lados .manequim_esquerda .engloba_'+dest).append(clone_esquerda);
		}
	}

	if ( desenho[dest][i] != null && 
		(desenho[dest][i]['svg'] !== undefined && desenho[dest][i]['svg'] != '' && desenho[dest][i]['svg'] != 'vazio.svg') ) {
		if (desenho[dest][i]['svg'].indexOf('.svg') > -1 && desenho[dest][i]['cor'] != '287') {
			$.get('{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg']+versao_simu, function(data) {
				if (data != null) {
					var svg_desenho = document.importNode(data.documentElement,true);
					var viewBox = svg_desenho.getAttribute('viewBox');
					var viewBox_w = viewBox.split(' ')[2];
					var w_molde = $('.fundos-svgs #molde_'+dest).width();
					var h_molde = $('.fundos-svgs #molde_'+dest).height();
					var scale = w_molde / viewBox_w;
					var novo_viewBox = '0 0 '+w_molde+' '+h_molde;
					var ajustes_cores = 0;
					$('.manequim .fundos-svgs .'+dest+'_'+n).html(svg_desenho);

					if ($('.manequim .fundos-svgs .'+dest+'_'+n+' svg defs style').length) {
						$('.manequim .fundos-svgs .'+dest+'_'+n+' svg defs style, .manequim .fundos-svgs .'+dest+'_'+n+' svg path[id*="contorno"]').remove(); 
						$('.manequim .fundos-svgs .'+dest+'_'+n+' svg path[id*="CONTORNO"], .manequim .fundos-svgs .'+dest+'_'+n+' svg path[id$="GERAL"]').remove();
						$('.manequim .fundos-svgs .'+dest+'_'+n+' svg path[id*="TORSO"], .manequim .fundos-svgs .'+dest+'_'+n+' svg path[id*="CALCAO"]').remove();

						ajustes_cores = 1;
					}
					$('.manequim .fundos-svgs .'+dest+'_'+n+' svg path:not([fill])').attr('fill', '#fff');

					var svg_final = $('.manequim .fundos-svgs .'+dest+'_'+n+' svg')[0].innerHTML.replace(/id="/gi, function (x) {
						return 'id="frente_'+dest+'_'+n+'_';
					}).replace(/fill="url\(\#/gi, function (x) {
						return 'fill="url(#frente_'+dest+'_'+n+'_';
					}).replace(/clip-path="url\(\#/gi, function (x) {
						return 'clip-path="url(#frente_'+dest+'_'+n+'_';
					}).replace(/fill:url\(\#/gi, function (x) {
						return 'fill:url(#frente_'+dest+'_'+n+'_';
					}).replace(/clip-path:url\(\#/gi, function (x) {
						return 'clip-path:url(#frente_'+dest+'_'+n+'_';
					}).replace(/class="fil([0-9]|[0-9][0-9])'/gi, function (x) {
						var novo_x = x.replace(/class="fil/gi, '');
						novo_x = novo_x.replace(/'/gi, '');
						
						if (ajustes_cores == 1) {
							if ($('.manequim .fundos-svgs .'+dest+'_'+n+' svg defs linearGradient').length)
								return 'fill="url(#frente_'+dest+'_'+n+'_id'+novo_x+')"';
							else 
								return 'fill="#ffffff"';
						}
					}).replace(/class="/gi, function (x) {
						if (ajustes_cores == 1)
							return 'fill="#ffffff" class="';
					});

					array_nome.forEach( (tag, i) => { 
						var replace_fill = 'fill="'+tag+'"';
						var replace_degrade = 'stop-color="'+tag+'"';
						svg_final = svg_final.replace(new RegExp(replace_fill, "gi"), 'fill="'+array_hex[i]+'"');
						svg_final = svg_final.replace(new RegExp(replace_degrade, "gi"), 'stop-color="'+array_hex[i]+'"');
					});

					var path_mask = $('.fundos-svgs #molde_'+dest)[0].innerHTML.replaceAll('<path ', '<path fill="#fff" ');
					var mask_svg = '<defs><mask id="mask_'+dest+'_'+n+'">'+path_mask+'</mask></defs>';
					var masked_svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+w_molde+'px" height="'+h_molde+'px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="'+novo_viewBox+'">';
						masked_svg += mask_svg;
						masked_svg += '<g mask="url(#mask_'+dest+'_'+n+')"><g transform="scale('+scale+')">'+svg_final+'</g></g>';
						masked_svg += '</svg>';
					$('.manequim .fundos-svgs .'+dest+'_'+n).html(masked_svg);
				}	
				
				if (modelo_verso == 1 && desenho[dest][i]['svg_verso'] != '' && desenho[dest][i]['svg_verso'] !== undefined) {
					$.get('{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_verso']+versao_simu, function(data) {
						if (data != null) {
							var svg_desenho_verso = document.importNode(data.documentElement,true);
							var viewBox_verso = svg_desenho_verso.getAttribute('viewBox');
							var w_viewBox_verso = viewBox_verso.split(' ')[2];
							var w_molde_verso = $('.fundos-svgs #molde_'+dest+'_verso').width();
							var h_molde_verso = $('.fundos-svgs #molde_'+dest+'_verso').height();
							var v_scale_verso = w_molde_verso / w_viewBox_verso;
							var novo_viewBox_verso = '0 0 '+w_molde_verso+' '+h_molde_verso;
							var ajustes_cores_verso = 0;
							$('.manequim_verso .fundos-svgs .'+dest+'_'+n).html(svg_desenho_verso);

							if ($('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg defs style').length) {
								$('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg defs style, .manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path[id*="contorno"]').remove();
								$('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path[id*="CONTORNO"], .manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path[id$="GERAL"]').remove();
								$('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path[id*="TORSO"], .manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path[id*="CALCAO"]').remove();
								ajustes_cores_verso = 1;
							}
							$('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg path:not([fill])').attr('fill', '#fff');
		
							var svg_final_verso = $('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg')[0].innerHTML.replace(/id="/gi, function (x) {
								return 'id="verso_'+dest+'_'+n+'_';
							}).replace(/fill="url\(\#/gi, function (x) {
								return 'fill="url(#verso_'+dest+'_'+n+'_';
							}).replace(/clip-path="url\(\#/gi, function (x) {
								return 'clip-path="url(#verso_'+dest+'_'+n+'_';
							}).replace(/fill:url\(\#/gi, function (x) {
								return 'fill:url(#verso_'+dest+'_'+n+'_';
							}).replace(/clip-path:url\(\#/gi, function (x) {
								return 'clip-path:url(#verso_'+dest+'_'+n+'_';
							}).replace(/class="fil([0-9]|[0-9][0-9])'/gi, function (x) {
								var novo_x = x.replace(/class="fil/gi, '');
								novo_x = novo_x.replace(/'/gi, '');

								if (ajustes_cores_verso == 1) {
									if ($('.manequim_verso .fundos-svgs .'+dest+'_'+n+' svg defs linearGradient').length)
										return 'fill="url(#verso_'+dest+'_'+n+'_id'+novo_x+')"';
									else 
										return 'fill="#ffffff"';
								}
							}).replace(/class="/gi, function (x) {
								if (ajustes_cores == 1) {
									return 'fill="#ffffff" class="';
								}
							});

							array_nome.forEach( (tag, i) => { 
								var replace_fill = 'fill="'+tag+'"';
								var replace_degrade = 'stop-color="'+tag+'"';
								svg_final_verso = svg_final_verso.replace(new RegExp(replace_fill, "gi"), 'fill="'+array_hex[i]+'"');
								svg_final_verso = svg_final_verso.replace(new RegExp(replace_degrade, "gi"), 'stop-color="'+array_hex[i]+'"');
							});

							var path_mask_verso = $('.fundos-svgs #molde_'+dest+'_verso')[0].innerHTML.replace('<path ', '<path fill="#fff" ');
							var mask_svg_verso = '<defs><mask id="mask_'+dest+'_'+n+'_verso">'+path_mask_verso+'</mask></defs>';
							var masked_svg_verso = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+w_molde_verso+'px" height="'+h_molde_verso+'px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="'+novo_viewBox_verso+'">';
								masked_svg_verso += mask_svg_verso;
								masked_svg_verso += '<g mask="url(#mask_'+dest+'_'+n+'_verso)">' +
														'<g transform="scale('+v_scale_verso+')">'+svg_final_verso+'</g>' +
													'</g>';
								masked_svg_verso += '</svg>';
							$('.manequim_verso .fundos-svgs .'+dest+'_'+n).html(masked_svg_verso);
						}	
					}).done(function(){
						if (modelo_rotacionar == 0)
							coloreDesenho(dest, i, n);
					}).fail(function(){
						coloreDesenho(dest, i, n);
					});	
				}

				if (modelo_rotacionar == 1) {
					$.get('{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_lateral_direita']+versao_simu, function(data) {
						if (data != null) {
							var svg_desenho_direita = document.importNode(data.documentElement,true);
							var viewBox_direita = svg_desenho_direita.getAttribute('viewBox');
							var w_viewBox_direita = viewBox_direita.split(' ')[2];
							var w_molde_direita = $('.fundos-svgs #molde_'+dest+'_direita').width();
							var h_molde_direita = $('.fundos-svgs #molde_'+dest+'_direita').height();
							var v_scale_direita = w_molde_direita / w_viewBox_direita;
							var novo_viewBox_direita = '0 0 '+w_molde_direita+' '+h_molde_direita;
							$('.manequim_direita .fundos-svgs .'+dest+'_'+n).html(svg_desenho_direita);
							$('.manequim_direita .fundos-svgs .'+dest+'_'+n+' svg path:not([fill])').attr('fill', '#fff');

							var svg_final_direita = $('.manequim_direita .fundos-svgs .'+dest+'_'+n+' svg')[0].innerHTML.replace(/id="/gi, function (x) {
								return 'id="direita_'+dest+'_'+n+'_';
							}).replace(/fill="url\(\#/gi, function (x) {
								return 'fill="url(#direita_'+dest+'_'+n+'_';
							}).replace(/clip-path="url\(\#/gi, function (x) {
								return 'clip-path="url(#direita_'+dest+'_'+n+'_';
							}).replace(/fill:url\(\#/gi, function (x) {
								return 'fill>url(#direita_'+dest+'_'+n+'_';
							}).replace(/clip-path:url\(\#/gi, function (x) {
								return 'clip-path:url(#direita_'+dest+'_'+n+'_';
							});

							array_nome.forEach( (tag, i) => { 
								var replace_fill = 'fill="'+tag+'"';
								var replace_degrade = 'stop-color="'+tag+'"';
								svg_final_direita = svg_final_direita.replace(new RegExp(replace_fill, "gi"), 'fill="'+array_hex[i]+'"');
								svg_final_direita = svg_final_direita.replace(new RegExp(replace_degrade, "gi"), 'stop-color="'+array_hex[i]+'"');
							});

							var path_mask_direita = $('.fundos-svgs #molde_'+dest+'_direita')[0].innerHTML.replace('<path ', '<path fill="#fff" ');
							var mask_svg_direita = '<defs><mask id="mask_'+dest+'_'+n+'_direita">'+path_mask_direita+'</mask></defs>';
							var masked_svg_direita = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+w_molde_direita+'px" height="'+h_molde_direita+'px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="'+novo_viewBox_direita+'">';
								masked_svg_direita += mask_svg_direita;
								masked_svg_direita +=   '<g mask="url(#mask_'+dest+'_'+n+'_direita)">' +
															'<g transform="scale('+v_scale_direita+')">'+svg_final_direita+'</g>' +
														'</g>';
								masked_svg_direita += '</svg>';
							$('.manequim_direita .fundos-svgs .'+dest+'_'+n).html(masked_svg_direita);
						}	

						$.get('{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_lateral_esquerda']+versao_simu, function(data) {
							if (data != null) {
								var svg_desenho_esquerda = document.importNode(data.documentElement,true);
								var viewBox_esquerda = svg_desenho_esquerda.getAttribute('viewBox');
								var w_viewBox_esquerda = viewBox_esquerda.split(' ')[2];
								var w_molde_esquerda = $('.fundos-svgs #molde_'+dest+'_esquerda').width();
								var h_molde_esquerda = $('.fundos-svgs #molde_'+dest+'_esquerda').height();
								var v_scale_esquerda = w_molde_esquerda / w_viewBox_esquerda;
								var novo_viewBox_esquerda = '0 0 '+w_molde_esquerda+' '+h_molde_esquerda;
								$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n).html(svg_desenho_esquerda);
								$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n+' svg path:not([fill])').attr('fill', '#fff');

								var svg_final_esquerda = $('.manequim_esquerda .fundos-svgs .'+dest+'_'+n+' svg')[0].innerHTML.replace(/id="/gi, function (x) {
									return 'id="esquerda_'+dest+'_'+n+'_';
								}).replace(/fill="url\(\#/gi, function (x) {
									return 'fill="url(#esquerda_'+dest+'_'+n+'_';
								}).replace(/clip-path="url\(\#/gi, function (x) {
									return 'clip-path="url(#esquerda_'+dest+'_'+n+'_';
								}).replace(/fill:url\(\#/gi, function (x) {
									return 'fill:url(#esquerda_'+dest+'_'+n+'_';
								}).replace(/clip-path:url\(\#/gi, function (x) {
									return 'clip-path:url(#esquerda_'+dest+'_'+n+'_';
								});

								array_nome.forEach( (tag, i) => { 
									var replace_fill = 'fill="'+tag+'"';
									var replace_degrade = 'stop-color="'+tag+'"';
									svg_final_esquerda = svg_final_esquerda.replace(new RegExp(replace_fill, "gi"), 'fill="'+array_hex[i]+'"');
									svg_final_esquerda = svg_final_esquerda.replace(new RegExp(replace_degrade, "gi"), 'stop-color="'+array_hex[i]+'"');
								});

								var path_mask_esquerda = $('.fundos-svgs #molde_'+dest+'_esquerda')[0].innerHTML.replace('<path ', '<path fill="#fff" ');
								var mask_svg_esquerda = '<defs><mask id="mask_'+dest+'_'+n+'_esquerda">'+path_mask_esquerda+'</mask></defs>';
								var masked_svg_esquerda =  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+w_molde_esquerda+'px" height="'+h_molde_esquerda+'px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="'+novo_viewBox_esquerda+'">';
									masked_svg_esquerda += mask_svg_esquerda;
									masked_svg_esquerda +=  '<g mask="url(#mask_'+dest+'_'+n+'_esquerda)">' +
																'<g transform="scale('+v_scale_esquerda+')">'+svg_final_esquerda+'</g>' +
															'</g>';
									masked_svg_esquerda += '</svg>';
								$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n).html(masked_svg_esquerda);
							}	
						}).done(function(){
							coloreDesenho(dest, i, n);
						}).fail(function(){
							coloreDesenho(dest, i, n);
						});
					}).fail(function(){
						coloreDesenho(dest, i, n);
					});
				}
			}).done(function(){
				if (modelo_verso == 0  && modelo_rotacionar == 0)
					coloreDesenho(dest, i, n);
			}).fail(function(){
				$('.manequim .fundos-svgs .'+dest+'_'+n).html('');
				if (modelo_verso == 1) $('.manequim_verso .fundos-svgs .'+dest+'_'+n).html('');
				coloreDesenho(dest, i, n);
			});
		}
		else {
			$('.manequim .fundos-svgs .'+dest+'_'+n).html('<img id="'+dest+'_'+n+'" src="{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg']+versao_simu+'"/>');
			if (modelo_verso == 1) {
				if (desenho[dest][i]['svg_verso'] != '')
					$('.manequim_verso .fundos-svgs .'+dest+'_'+n).html('<img id="'+dest+'_'+n+'_verso" src="{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_verso']+versao_simu+'" />');
			}

			if (modelo_rotacionar == 1) {
				if (desenho[dest][i]['svg_lateral_direita'] != '')
					$('.manequim_direita .fundos-svgs .'+dest+'_'+n).html('<img id="'+dest+'_'+n+'_direita" src="{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_lateral_direita']+versao_simu+'" />');

				if (desenho[dest][i]['svg_lateral_esquerda'] != '')
					$('.manequim_esquerda .fundos-svgs .'+dest+'_'+n).html('<img id="'+dest+'_'+n+'_esquerda" src="{PASTA_RAIZ_SIMULADOR}/imagens/desenho/'+desenho[dest][i]['svg_lateral_esquerda']+versao_simu+'" />');
			}

			coloreDesenho(dest, i, n);
		}
	}
	else {
		coloreDesenho(dest, i, n);
	}
}
function configInicial(){
	ajusteSimulador();
	ajusteConfig();

	setTimeout(function(){
		site_carregado = 1;
		mudou_cor = 0;
		preenchimento_habilitado = 1;
		preenchimento_inicial = 0;
		iniciarStatus();
		iniSimulador();
	}, 1000);
}
function dimensoesCanvas(manequim){
	var largura_maior = 0;
	var largura_aux = 0;
	var largura_total = 0;
	var largura_total_lados = 0;

	$('#box_manequim #lista_lados div[class^="manequim"]').each(function(i, e) {
		var lado = $(e).attr('class').split(' ')[0];
		lado = lado.replace('manequim', '');
		$(e).find('.fundos > div').each(function(index, element) {
			var largura = ($(element).attr('class') == 'detalhe') ? $(element).find('img').width() : $(element).find('.fundos-svgs').width();
			largura_aux = largura;
			
			if (largura_maior < largura)
				largura_maior = largura;
		});

		if (goleiro == 1) {
			var largura_luva = $(e).find('.luva_goleiro img').width() + Number($(e).find('.luva_goleiro').css('margin-left').replace('px',''));
			largura_maior = (largura_maior < $(e).find('.luva_goleiro img').width()) ? largura_luva : largura_maior;
		}

		var altura_total = Math.ceil($('.manequim'+lado+' .fundos > div:visible:last').height()) + Math.ceil($('.manequim'+lado+' .fundos > div:visible:last')[0].offsetTop) + Math.ceil($('.manequim'+lado+' .fundos > div:visible:last').css('margin-top').replace('px', ''));

		$(e).find('.modelo').height(altura_total);
		$('#canvas'+lado).attr('height', altura_total);

		if (lado == '' || lado == '_verso')	largura_total += largura_aux;
		if (lado == '_direita' || lado == '_esquerda') largura_total_lados += largura_aux;

		if ($('#lista-lados__manequim').length && manequim === undefined) {
			$('#lista-lados__manequim div[class^="manequim"]').eq(i).height(altura_total);
			var manequim_lado = $(e).attr('class').replace('ativo','').replace(' ','');
			$('#lista-lados__manequim .'+manequim_lado+' .modelo').width(largura_aux).css('margin', 'auto');
		}

		if (manequim === undefined) {
			$(e).find('.modelo').width(largura_maior);
			$('#canvas'+lado).attr('width', largura_maior);

			$(e).find('.fundos > div').each(function(index, element) {
				if ($(element).attr('class') == 'detalhe') {
					var largura = parseInt($(element).find('img').width());
				}
				else {
					var largura = parseInt($(element).find('.fundos-svgs').width());
				}
		
				if (largura < largura_maior) {
					var width_dif = (largura_maior - largura) / 2;
					$(element).css('left', width_dif+'px');
				}
			});
		}
	});

	largura_total_preview = (largura_total > largura_total_lados) ? largura_total+30 : largura_total_lados+30;

	if ($('#lista-lados__manequim').length) {
		$('#lista-lados__manequim div[class^="manequim"]').width(largura_maior);
	}

	$('#box_manequim').css('width', 'fit-content');

	if (largura_total_preview > largura_legenda_preview) {
		$('#gabarito_cores').css('box-sizing', 'unset');
		$('#gabarito_cores').width(largura_total_preview+20).css('box-sizing', 'border-box');
	}
	else {
		$('#gabarito_cores').css('box-sizing', 'unset');
		$('#gabarito_cores').width(largura_legenda_preview).css('box-sizing', 'border-box');
	}

	if (scaleIni === undefined)
		ajustaScale();
}

// ARRAY DE INFORMAÇÕES
function ArrayToString(arr){
	var str = '';
	for (var i=0; i < Object.keys(arr).length; i++) {
		for (var j=0; j < Object.keys(arr[Object.keys(arr)[i]]).length; j++) {
			str += Object.keys(arr)[i]+'-'+Object.keys(arr[Object.keys(arr)[i]])[j]+':'+arr[Object.keys(arr)[i]][Object.keys(arr[Object.keys(arr)[i]])[j]];
			if (j < Object.keys(arr[Object.keys(arr)[i]]).length-1 || i < Object.keys(arr).length-1)
				str += '— ';
		}
	}

	return str;
}
function StringToArray(str){
	var arr = str.split('—');
	for (var i=0; i < arr.length; i++) {
		var arrParteAtributo = arr[i].replace(/\-/,'—').split('—');
		var arrChaveValor = arrParteAtributo[1].replace(/\:/,'—').split('—');
		preencheAtributo(arrParteAtributo[0].trim(),arrChaveValor[0].trim(),arrChaveValor[1].trim(),0);
	}

	return true;
}
function iniciarStatus(){
	iStatus = 0;
	arrayStatus[iStatus] = arrayClone(arrayPartes);

	if (typeof arr_simulacao != 'undefined') {
		arr_simulacao = arr_simulacao.replace(/&amp;/g, '&');
		arr_simulacao = arr_simulacao.replace(/&quot;/g, '"');

		StringToArray(arr_simulacao);
		carregarStatus(arrayStatus[iStatus]);
		dimensoesCanvas();
	}
}
function preencheAtributo(parte, chave, valor, preencher){
	if (iStatus < arrayStatus.length-1) {
		for (var i= arrayStatus.length-1; i > iStatus; i--) {
			arrayStatus.splice(i,1);
		}

		arrayPartes = arrayClone(arrayStatus[iStatus]);
		$('#avancar').addClass('desativado');
	}

	if (!Array.isArray(arrayPartes[parte]))
		arrayPartes[parte] = new Array();

	arrayPartes[parte][chave] = valor;

	if (preencher == 1) {
		if (iStatus >= 0) {
			if (iStatus < 4) {
				iStatus++;
			}
			else {
				for (var i=0; i < arrayStatus.length-1; i++) {
					arrayStatus[i] = arrayStatus[Number(i)+Number(1)];
				}
			}

			arrayStatus[iStatus] = arrayClone(arrayPartes);
		}
	}
	else if (preenchimento_inicial == 0) {
		arrayStatus[iStatus] = arrayClone(arrayPartes);
	}

	if (iStatus > 0 && $('#voltar').hasClass('desativado'))
		$('#voltar').removeClass('desativado');
}
function arrayClone(arr){
	var output, v, key;
	output = Array.isArray(arr) ? [] : {};
	for (key in arr) {
		v = arr[key];
		output[key] = (typeof v === 'object' && v !== null) ? arrayClone(v) : v;
	}

	return output;
}
function alterarArrayAtual(acao, atributo, dest){
	if (typeof dest == 'undefined') {
		parte_uniforme = 'superior';
	}
	else {
		if (dest == peca_superior) 
			parte_uniforme = 'superior';
		else if (dest == peca_inferior) 
			parte_uniforme = 'inferior';
		else if (dest == peca_acessorio) 
			parte_uniforme = 'acessorio';
		else 
			parte_uniforme = dest;
	}
	
	if (acao == 1) {
		// adicionar informações
		for (var key in arrayTemp) {	
			if (key.indexOf(atributo) == 0 || key == atributo)
				arrayStatus[iStatus][parte_uniforme][key] = arrayTemp[key];
		}
	} 
	else if (acao == 0) {
		// remover informações
		for (var key in arrayStatus[iStatus][parte_uniforme]) {
			if (key.indexOf(atributo) == 0 || key == atributo) {
				arrayTemp[key] = arrayStatus[iStatus][parte_uniforme][key];
				delete arrayStatus[iStatus][parte_uniforme][key];
			}
		}
	}
	
	arrayPartes = arrayClone(arrayStatus[iStatus]);
}

function addTexto(){
	tot_textos++;
	var manequim_ativo = $('#lista_lados div[class^="manequim"].ativo').attr('class').split(' ')[0];
	var lado = $('#lista_lados div[class^="manequim"].ativo').attr('class').split(' ')[0].replace('manequim', '');
	$('.texto-drag').removeClass('ativo').removeClass('selecionado');
	var idrag = $('div[id^="item_drag-"]').length;
	var w_inicial = 150;
	var h_incial = 30;
	var top  = (typeof posicao_texto_y != 'undefined') ? posicao_texto_y : (($('.'+manequim_ativo+' .fundos-svgs').height() - h_incial) / 2);
	var left = (typeof posicao_texto_x != 'undefined') ? posicao_texto_x : (($('.'+manequim_ativo+' .fundos-svgs').width() - w_inicial) / 2);
	var style_item = 'position: absolute; top: '+top+'px; left: '+left+'px; display: flex; align-items: center;';
	var item_drag = '<div id="item_drag-'+idrag+'" rel="'+tot_textos+'" class="texto_drag" style="'+style_item+'">' +
				  		'<span class="texto"></span>' +
						'<div class="ferramentas_edicao">' +
							'<div class="remover-drag"></div>' +
							'<div class="acima" title="Trazer para frente"></div>' +
							'<div class="abaixo" title="Trazer para trás"></div>' +
						'</div>' +	
				  	'</div>';

	var parte_upload = arrayPecas.find(item => item[1] === peca_superior)[0];
	var icamada_ultimo;
	if ($('.'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').length > 0) {
		icamada_ultimo = $('#lista_lados .'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').last().css('z-index');
		$(item_drag).insertAfter($('#lista_lados .'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').last());
		$('#item_drag-'+idrag).css('z-index', icamada_ultimo).attr('data-camada', icamada_ultimo);
	}
	else {
		switch (esporte_dir) {
			case 'bone_6_gomos':	 
			case 'bone_trucker':
				var caminho_molde = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+esporte_dir+lado+'_mascara.svg'+versao_simu;
				break;
			default:
				var caminho_molde =  eval('link_molde_'+parte_upload+lado);
		}
		var link_mask = caminho_molde;
		var config_drag = link_mask;
		var h_peca = $('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior+' .fundos-svgs').height();
		var style_drag = 'position: absolute; width: 100%; height: '+h_peca+'px; left: 0; right: 0; margin: 0 auto; z-index: 3; -webkit-mask-position: center center; -webkit-mask-repeat: no-repeat;';
		var html_mask = '<div id="mask_upload_'+peca_superior+lado+'" data-config="'+config_drag+'" style="'+style_drag+'"></div>';
		$('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior).prepend(html_mask);
		$('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior+' #mask_upload_'+peca_superior+lado).prepend(item_drag);
		$('#lista_lados #item_drag-'+idrag).css('z-index', icamada).attr('data-camada', icamada);
	}

	tamFonte($('.ipt-tamNum').val(), 'item_drag-'+idrag);
	mudaFonte('item_drag-'+idrag, $('#fonte').val());
	$('input[class="ipt-texto"]').val('').focus().attr('data-ancora', '');
	$('input[class="ipt-texto"]').parent().parent().attr('data-ancora', 'item_drag-'+idrag);

	if ($('.texto_drag').length > 0) {
		var cor_texto = $('.lista_camadas[rel="texto_drag"] .cor_atual').css('background-color');
		var nome_cor = $('.lista_camadas[rel="texto_drag"] .cor_atual').attr('alt');
		var data_cor = $('.lista_camadas[rel="texto_drag"] .cor_atual').attr('data-cor');
		var cor_borda = $('.lista_camadas[rel="texto_drag_borda"] .cor_atual').css('background-color');
		var nome_borda = $('.lista_camadas[rel="texto_drag_borda"] .cor_atual').attr('alt');
		var data_cor_borda = $('.lista_camadas[rel="texto_drag_borda"] .cor_atual').attr('data-cor');
		$('#item_drag-'+idrag+' .texto').css('color', cor_texto).attr('data-cor', nome_cor).attr('data-idcor', data_cor);
		$('#item_drag-'+idrag+' .texto').css('-webkit-text-stroke', '1px '+cor_borda).attr('data-borda', nome_borda);
		var alinhamento = $('#info-texto #box_alinhamento .ativo').attr('rel');
		$('.texto_drag').css('justify-content', alinhamento);
		preencheAtributo('superior','texto_'+tot_textos+'_cor',data_cor,0);
		preencheAtributo('superior','texto_'+tot_textos+'_cor_borda',data_cor_borda,0);
	} 
	else {
		$('.texto_drag').css('justify-content', 'flex-start');
	}

	var li_lista = 	'<li rel="item_drag-'+idrag+'" data-lado="'+lado+'">' +
						'<div class="bt_selecionar ativo">Selecionado</div>' +	
						'<span class="texto"></span>' +
						'<div class="remover">X</div>' +
					'</li>';
	$('.lista_textos').append(li_lista);
	iniciaFerramentasDrag('texto', idrag);
}
function atualizaInfoTexto(drag_selecionado){
	if ($('#info-texto').attr('data-ancora') != drag_selecionado) {
		$('#info-texto').attr('data-ancora', drag_selecionado);
		// inicio informacoes
		var texto = $('#'+drag_selecionado+' .texto').html();
		var cor_texto = $('#'+drag_selecionado+' .texto').attr('data-cor');
		var cor_borda = $('#'+drag_selecionado+' .texto').attr('data-borda');
		var fonte_texto = $('#'+drag_selecionado+' .texto').css('font-family').replaceAll('"','');
		var fonte_tam_texto = $('#'+drag_selecionado+' .texto').css('font-size').replace('px','');
		var alinhamento_texto = $('#'+drag_selecionado).css('justify-content');
		$('#info-texto .ipt-texto').val(texto);
		$('#info-texto .bt_alinhamento').removeClass('ativo');
		$('#info-texto .bt_alinhamento[rel="'+alinhamento_texto+'"]').addClass('ativo');
		$('#info-texto .ipt-tamNum').val(fonte_tam_texto);
		$('#info-texto .fonte_ativa').html(fonte_texto);
		$('#info-texto .menu_fontes li').removeClass('ativo');
		$('#info-texto .menu_fontes li[data-nome="'+fonte_texto+'"]').addClass('ativo');
		preenchimento_habilitado = 0;
		$('#info-texto .lista_camadas[rel="texto_drag"] .cor_camada').click();
		$('#info-texto .lista_camadas[rel="texto_drag"] .paleta_cores .cor[alt="'+cor_texto+'"]').click();
		$('#info-texto .lista_camadas[rel="texto_drag_borda"] .cor_camada').click();
		$('#info-texto .lista_camadas[rel="texto_drag_borda"] .paleta_cores .cor[alt="'+cor_borda+'"]').click();
		preenchimento_habilitado = 1;
		// fim
	}		
}
function mudaFonte(tipo, fonte, numTam){
	if (mostrar_textos == 1) {
		$('.fundos div[id="'+tipo+'"] .texto').css('font-family', '"'+fonte+'"');

		if ($('#'+tipo).width() < $('#'+tipo+' .texto').width())
			$('#'+tipo).width($('#'+tipo+' .texto').width());

		if (preenchimento_habilitado == 1 && $('.texto_drag').length > 0) {
			var i_texto = $('.fundos #'+tipo).attr('rel');
			preencheAtributo('superior','texto_'+i_texto+'_fonte', fonte, 0);
		}	
	}
	else {
		if (tipo.indexOf('nome') > -1) {
			$('.detalhes_'+peca_superior+' .'+tipo+' .previewNome').attr('font-family', '"'+fonte+'"');	

			if (preenchimento_habilitado == 1) {
				if (texto == 1) 
					preencheAtributo('superior',tipo+'_fonte',fonte,1);
				else
					preencheAtributo('superior',tipo+'_fonte',fonte,0);
			}		
		}
		else if (tipo.indexOf('numero') > -1) {	
			if (tipo == 'numero_inferior') {
				$('.detalhes_'+peca_inferior+' .previewNumero').attr('font-family', '"'+fonte+'"');	

				if (preenchimento_habilitado == 1) 
					preencheAtributo('inferior','numero_fonte',fonte,1);
			}
			else {
				$('.detalhes_'+peca_superior+' .previewNumero').attr('font-family', '"'+fonte+'"');

				if (typeof numTam != 'undefined') {
					var tam_numFrente = ($('#numero_frente').val() != 'centro') ? (numTam * 0.36) : (numTam * 0.42);
					$('.manequim_verso .detalhes_'+peca_superior+' .previewNumero').attr('font-size', numTam+'px');	
					$('.manequim .detalhes_'+peca_superior+' .previewNumero').attr('font-size', tam_numFrente+'px');	
				}

				if (preenchimento_habilitado == 1) 
					preencheAtributo('superior',tipo+'_fonte',fonte,1);
			}
		}
	}	
}
function tamFonte(tam, dir){
	if (mostrar_textos == 1) {
		$('#'+dir+' .texto').css('font-size', tam+'px');

		if ($('#'+dir+' .texto').html() != '')
			$('#'+dir).css('height', 'fit-content');

		if ($('#'+dir).width() < $('#'+dir).find('.texto').width())
			$('#'+dir).css('width', 'fit-content');

		if (preenchimento_habilitado == 1 && $('.texto_drag').length > 0) {
			var i_texto = $('#'+dir).attr('rel');
			preencheAtributo('superior','texto_'+i_texto+'_fonte_tamanho', tam, 0);
		}	
	}
	else {
		if (dir.indexOf('nome') > -1) {
			$('.engloba_'+peca_superior+' .'+dir+' .previewNome').attr('font-size', tam);
		}
		else {
			var tam_numFrente = ($('#numero_frente').val() != 'centro') ? (tam * 0.36) : (tam * 0.42);
			$('.engloba_'+peca_superior+' *[class^="'+dir+'"] .previewNumero').attr('font-size', tam+'px');
			$('.engloba_'+peca_superior+' .numero_frente .previewNumero').attr('font-size', tam_numFrente+'px');
		}

		if (preenchimento_habilitado == 1) {
			if (tam_numFrente !== undefined)
				preencheAtributo('superior','numero_frente_fonte_tamanho',tam_numFrente,1);

			if (texto == 1) 
				preencheAtributo('superior',dir+'_fonte_tamanho',tam,1);
			else
				preencheAtributo('superior',dir+'_fonte_tamanho',tam,0);	
		}
	}
}
function buscaGaleria(tipo, idgaleria, busca){
	$('#box-imagens').html('<center><img src="img/icones/carregando.gif'+versao_simu+'"></center>');

	$.getScript('{PASTA_RAIZ_SIMULADOR}/galeria.php?galeria='+tipo+'&galeria_simulador_categoria='+idgaleria+'&busca='+busca+'&linha_modal='+modalidade_linha, function(data){
		if (!(idgaleria > 0) && busca == '') {
			for (k=0; k < galeria_simulador_categoria["id"].length; k++) {
				var idCategoria = galeria_simulador_categoria["id"][k];
				var nomeCategoria = galeria_simulador_categoria["nome"][k];
				if (k == 0)
			   		$('#select_temas').append('<option value="'+idCategoria+'" selected>' +nomeCategoria+ '</option>');
				else
					$('#select_temas').append('<option value="'+idCategoria+'">' +nomeCategoria+ '</option>');	   
			}

			(galeria_simulador_categoria["id"].length > 1) ? $('.edicao_galeria #temas').css('opacity', '1').find('option:first').remove() : $('.edicao_galeria #temas').hide();	
		}

		if (tema["nome"].length > 0) {
			$('#box-imagens').html('');

			var qtd_inicial = (tema["nome"].length >= 10) ? 11 : tema["nome"].length;
			for (k=0; k < qtd_inicial; k++) {
				var miniatura = (modalidade_linha == 'brindes') ? tema["imagem"][k] : tema["miniatura"][k];
				var htmlImg =  	'<figure class="image-gallery">' +
									'<label for="img'+k+'">' + 
										'<img src="{PASTA_RAIZ_SIMULADOR}/thumb.php?largura=165&altura=165&tipo=png&img='+miniatura+'" data-tipo="camisa" data-id="'+tema["id"][k]+'" data-i="'+k+'" width="100%" height="100%" title="'+tema["nome"][k]+'" alt="'+tema["nome"][k]+'">' +
									'</label>' +
									'<input type="hidden" value="'+tema["info"][k]+'" id="info'+k+'" />' +
									'<input type="radio" name="img_selecionada" id="img'+k+'" value="'+miniatura+'" style="display:none">' +
								'</figure>';
				$('#box-imagens').append(htmlImg);
			}
			if (tema["nome"].length > 11) {
				for (l=11; l < tema["nome"].length; l++) {
					var miniatura = (modalidade_linha == 'brindes') ? tema["imagem"][l] : tema["miniatura"][l];
					var htmlImg =  	'<figure class="image-gallery">' +
										'<div class="carregando-img"></div>' +
										'<label for="img'+l+'">' + 
											'<img src="" data-src="{PASTA_RAIZ_SIMULADOR}/thumb.php?largura=165&altura=165&tipo=png&img='+miniatura+'" data-tipo="camisa" data-id="'+tema["id"][l]+'" data-i="'+l+'" width="100%" height="100%" title="'+tema["nome"][l]+'" alt="'+tema["nome"][l]+'">' +
										'</label>' +
										'<input type="hidden" value="'+tema["info"][l]+'" id="info'+l+'" />' +
										'<input type="radio" name="img_selecionada" id="img'+l+'" value="'+miniatura+'" style="display:none">' +
									'</figure>';
					$('#box-imagens').append(htmlImg);
				}
			}	
		}
		else {
			$('#box-imagens').html('<p><center>Escolha o tema.</center></p>');
		}	
	});
}
function removerImagem(){
	if (modalidade_linha == 'brindes') {
		mensagem('Atenção!','Tem certeza que deseja excluir todas as imagens?','confirmar', function(r){
			if (r) 
				$('div[class^="manequim"] div[id^="item_drag-"]').remove();
		});
	}
	else {
		$('.imagem_galeria').remove();
	}
}
function carregarImagem(data, status, posicionar = true){
	if (modalidade_linha == 'brindes' || posicionar) {
		var manequim_ativo = $('div[class^="manequim"].ativo').attr('class').split(' ')[0];
		var lado = (manequim_ativo == 'manequim') ? '' : '_verso';
	}

	if (modalidade_linha == 'brindes' || posicionar) {
		if ($(window).width() < 720)
			$('#box_edicao .bt_fechar').click();

		var i_img = data;
		var zoom = ($('#box_manequim').css('zoom') != undefined) ? Number($('#box_manequim').css('zoom')) : 1;
		if (modalidade_linha == 'brindes') {
			var largura_imagem = (Number($('.'+manequim_ativo + ' #molde_'+peca_superior+lado+' path')[0].getBoundingClientRect().width) * zoom) * 0.8;
			var altura_imagem = dimensionarImagem(tema["info"][i_img], largura_imagem);
		}
		else {
			var largura_imagem = tema["info_posicionar"][i_img].split(',')[0];
			var altura_imagem = tema["info_posicionar"][i_img].split(',')[1];
		}
		data = new Array();
		data.sucesso = 1;
		data.imagem = new Array();
		data.imagem.arquivo = (modalidade_linha == 'brindes') ? tema["imagem"][i_img] : tema["imagem_posicionar"][i_img];
		data.imagem.largura = largura_imagem;
		data.imagem.altura = altura_imagem;
		data.imagem.lado = lado;
		data.imagem.galeria = 1;
		data.imagem.mensagem = '';
	}

	var idrag = $('div[id^="item_drag-"]').length;
	var imgPreload = new Image();
	$(imgPreload).attr({ src: data.imagem.arquivo });

	if (status == 'error') {
		mensagem('Falha ao carregar imagem. Tente novamente.');
	}
	else {
		lado_imagem = data.imagem.lado;

		if (modalidade_linha == 'brindes' || posicionar) {
			var posicao_top  = (typeof posicao_imagem_y != 'undefined') ? posicao_imagem_y : (($('.'+manequim_ativo+' .fundos-svgs').height() - data.imagem.altura) / 2);
			var posicao_left = (typeof posicao_imagem_x != 'undefined') ? posicao_imagem_x : (($('.'+manequim_ativo+' .fundos-svgs').width() - data.imagem.largura) / 2);
			var w_imagem = data.imagem.largura;
			var style_item = 'left: '+posicao_left+'px; top: '+posicao_top+'px; width: '+w_imagem+'px; height: '+w_imagem+'px;';
			var item_drag = '<div id="item_drag-'+idrag+'" class="imagem_drag galeria ativo" style="'+style_item+'">' +
								'<img class="imagem_produto" draggable="false" src="'+data.imagem.arquivo+'">' +
								'<div class="ferramentas_edicao">' +
									'<div class="acima" title="Trazer para frente"></div>' +
									'<div class="abaixo" title="Trazer para trás"></div>' +
									'<div class="remover-drag"></div>' +
								'</div>' +
							'</div>';

			var parte_upload = arrayPecas.find(item => item[1] === peca_superior)[0];
			var icamada_ultimo;
			if ($('.'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').length > 0) {
				icamada_ultimo = $('#lista_lados .'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').last().css('z-index');
				$(item_drag).insertAfter($('#lista_lados .'+manequim_ativo+' #mask_upload_'+peca_superior+lado+' div[id^="item_drag-"]').last());
				$('#item_drag-'+idrag).css('z-index', icamada_ultimo).attr('data-camada', icamada_ultimo);
			}
			else {
				switch (esporte_dir) {
					case 'bone_6_gomos':	 
					case 'bone_trucker':
						var caminho_molde = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+esporte_dir+lado_upload+'_mascara.svg'+versao_simu;
						break;
					default:
						var caminho_molde =  eval('link_molde_'+parte_upload+lado);
				}
				var link_mask = caminho_molde;
				var config_drag = link_mask;
				var h_peca = $('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior+' .fundos-svgs').height();
				var style_drag = 'position: absolute; width: 100%; height: '+h_peca+'px; left: 0; right: 0; margin: 0 auto; z-index: 5; -webkit-mask-position: center center; -webkit-mask-repeat: no-repeat;';
				var html_mask = '<div id="mask_upload_'+peca_superior+lado+'" data-config="'+config_drag+'" style="'+style_drag+'"></div>';
				$('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior).prepend(html_mask);
				$('#lista_lados .'+manequim_ativo+' .engloba_'+peca_superior+' #mask_upload_'+peca_superior+lado).prepend(item_drag);
				$('#lista_lados #item_drag-'+idrag).css('z-index', icamada).attr('data-camada', icamada);
			}
		}
		else {
			var w_imagem = data.imagem.largura;
			var h_imagem = data.imagem.altura;
			var z_index =  2;
			var aux_data_imagem = data.imagem.arquivo;
			if (aux_data_imagem.replace('imagens/galeria_simulador/','') != '') {
				var style_item = 'display: inline-block; margin: 0px auto; z-index: '+z_index+'; position: absolute; left: 0px; top: 0px; width: '+w_imagem+'px; height: '+h_imagem+'px;';
				var item_drag = '<div class="imagem_galeria" style="'+style_item+'">' +
									'<img class="imagem_produto" src="'+data.imagem.arquivo+'">' +
								'</div>';

				$('.manequim'+lado_imagem+' .engloba_'+peca_superior+' .fundos-svgs').prepend(item_drag);
			}
		}

		if (data.imagem.galeria == 0) {
			var html = '<div style="max-width: 310px; text-align: justify;">Fique Tranquilo! O seu desenho passará por especialistas em tratamento de imagem para garantir a qualidade de impressão no produto.</div>';
			apprise(html, {'animate':true, textOk:'Ok'});
		}

		if (data.imagem.galeria == 1) {
			if (modalidade_linha == 'brindes' || posicionar) {
				var src_org = $('#item_drag-'+idrag+' img').attr('src');
				$('#item_drag-'+idrag+' img').attr('src', '{PASTA_RAIZ_SIMULADOR}/thumb.php?largura=400&altura=400&tipo=png&img='+src_org.replace('/imagens/', 'imagens/'));
			}
			else {
				var src_org = $('.manequim'+lado_imagem+' .imagem_galeria img').attr('src');
				$('.manequim'+lado_imagem+' .imagem_galeria img').attr('src', '{PASTA_RAIZ_SIMULADOR}/thumb.php?largura=400&altura=400&tipo=png&img='+src_org.replace('/imagens/', 'imagens/'));
			}
		}

		if (modalidade_linha == 'brindes' || posicionar)
			iniciaFerramentasDrag('imagem', idrag);

		setTimeout(function() {
			$('#box-imagens').removeAttr('style').prop('disabled', false);
			$('#box-imagens img').css('cursor', 'pointer');
		}, 1000);
	}
}
function dimensionarImagem(info, width){
	var dimensoes = $.trim(info).split(',');
	var w_imagem = dimensoes[0];
	var h_imagem = dimensoes[1];
	var height =  (width * h_imagem) / w_imagem;

	return height;
}

// SALVAR IMAGEM
var preview_tot_salvar, preview_tot_salvo = 0;
var img_manequim = new Image(); var img_upload = new Image();
var img_manequim_verso = new Image(); var img_upload_verso = new Image();
if (modelo_rotacionar == 1) {
	var img_manequim_direita = new Image(); var img_upload_direita = new Image();
	var img_manequim_esquerda = new Image(); var img_upload_esquerda = new Image();
}
function salvarUpload(manequim, canvas) {
	var clone_manequim = $('#lista_lados .'+manequim+' .modelo').clone();
	$('#lista_lados .'+manequim+' .modelo').addClass('modelo-temp').removeClass('modelo').css('opacity', 0);
	$('#lista_lados .'+manequim).prepend(clone_manequim);
	$('.'+manequim+' div[id^="mask_upload_"], .fundos-svgs > .textura').show();
	$('.'+manequim+' .modelo .fundos-svgs > *:not(.textura)').remove();

	var lado = manequim.replace('manequim', '');

	var w_canvas = $('.'+manequim).find('.modelo')[0].clientWidth;
	var h_canvas = $('.'+manequim).find('.modelo')[0].clientHeight;
	htmlToImage.toPng($('.'+manequim+' .modelo')[0], { pixelRatio: 1, width: w_canvas, height: h_canvas, quality: 1 }).then(function (dataUrl) {
		$('#lista_lados .'+manequim+' .modelo').remove();
		$('#lista_lados .'+manequim+' .modelo-temp').addClass('modelo').removeClass('modelo-temp').css('opacity', 1);
		$('.'+manequim+' .fundos-svgs > *:not(.textura)').show();
		eval('img_upload'+lado).src = dataUrl;
		eval('img_upload'+lado).onload = function() {
			ctx[canvas].drawImage(eval('img_upload'+lado), 0, 0);
			preview_tot_salvo++;
		};
	})
	.catch(function (error) {
		console.error('oops, something went wrong!', error);
	});
}
function salvarImagem(comprar, salvar, compartilhar) {
	var scale_box_manequim = $('#box_manequim').css('transform');
	var scale_manequim_container = $('#box_manequim .container').css('transform');
	$('#box_manequim, #box_manequim .container').css('transform', 'scale(1)');

	if ($('#opcoes-modelo_conjunto').length > 0) {
		dimensoesCanvas('');
		dimensoesCanvas('_verso');
	} else {
		dimensoesCanvas();
	}

	$('#gabarito_cores').html('');
	var preview_legenda = 0;
	if (legenda_preview == 1 && (comprar != 0 || salvar != 0 || compartilhar != 0)) {
		if (peca_superior != '' && $('.engloba_'+peca_superior).css('display') != 'none') {
			var cod_modelo = arrayPartes['superior']['cod_modelo'];
			var cor_cod = $('.lista_camadas[rel="'+peca_superior+'"] .cor_atual').eq(0).css('background-color');
			var cor_nome = $('.lista_camadas[rel="'+peca_superior+'"] .cor_atual').eq(0).attr('title');

			var html =  '<div>'+peca_superior.toUpperCase().replace('_', ' ');
			if (cod_modelo !== undefined && cod_modelo != '') html += ' COD. MODELO: '+cod_modelo;
			html += 	'</div>';
			html += 	'<div style="display:flex;align-items:center;margin:5px 0;font-size:12px;">';
			html += 		'<div style="width:20px;height:20px;background-color:'+cor_cod+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome.toUpperCase()+'</span>';
			for (var i=1; i <= 5; i++) {
				var cor_cod_sub = $('.lista_camadas[rel="'+peca_superior+'"] .cor_atual').eq(i).css('background-color');
				var cor_nome_sub = $('.lista_camadas[rel="'+peca_superior+'"] .cor_atual').eq(i).attr('title');
				if (cor_cod_sub !== undefined && cor_nome_sub !== undefined && cor_nome_sub != 'Sem Cor' && $('.lista_camadas[rel="'+peca_superior+'"] .cor_atual').eq(i).closest('.cor_camada').css('display') != 'none') {
					html +=	'<div style="width:20px;height:20px;background-color:'+cor_cod_sub+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome_sub.toUpperCase()+'</span>';
				}
			}
			html += 	'</div>';
			$('#gabarito_cores').append(html);

			if (arrayDetalhes[peca_superior].length > 0) {
				var html_det = '';
				html_det += '<hr/>';
				html_det += '<div style="display:flex;flex-wrap:wrap;align-items:center;margin:5px 0;gap:5px 50px;">';
				$.each(arrayDetalhes[peca_superior], function(i, v) {
					var cor_cod = $('.lista_camadas[rel="cor_'+v+'"][data-peca="'+peca_superior+'"] .cor_atual').css('background-color');
					var cor_nome = $('.lista_camadas[rel="cor_'+v+'"][data-peca="'+peca_superior+'"] .cor_atual').attr('title');
					var nome_v = (v == 'gola' && $('.lista_opcoes .opcao.ativo').attr('alt') !== undefined) ? v+' '+$('.lista_opcoes .opcao.ativo').attr('alt') : v;

					if (cor_cod !== undefined && cor_nome !== undefined && cor_nome != 'Sem Cor' && 
					($('.lista_camadas[rel="cor_'+v+'"] .cor_atual').closest('#box_edicao-cores').length > 0 || $('.lista_camadas[rel="cor_'+v+'"] .cor_atual').closest('.box_cores').css('opacity') == '1')) {
						html_det += '<div style="display:flex;flex-direction:column;min-width:fit-content;font-size:12px;">'+
										'<div style="margin:2.5px auto 2.5px 0;">'+nome_v.toUpperCase().replaceAll('_',' ')+'</div>'+
										'<div style="display:flex;align-items:center;">'+
											'<div style="width:20px;height:20px;background-color:'+cor_cod+';border:1px solid gray;margin-right:5px;"></div>'+
											'<span>'+cor_nome.toUpperCase()+'</span>'+
										'</div>'+
									'</div>';
					}
				});
				html_det += '</div>';
				$('#gabarito_cores').append(html_det);
			}
		}
		if (peca_inferior != '' && $('.engloba_'+peca_inferior).css('display') != 'none') {
			var cod_modelo = arrayPartes['inferior']['cod_modelo'];
			var cor_cod = $('.lista_camadas[rel="'+peca_inferior+'"] .cor_atual').eq(0).css('background-color');
			var cor_nome = $('.lista_camadas[rel="'+peca_inferior+'"] .cor_atual').eq(0).attr('title');

			var html =  '';
			html += '<hr/>';
			html += '<div>'+peca_inferior.toUpperCase();
			if (cod_modelo !== undefined) html += ' COD. MODELO: '+cod_modelo;
			html += '</div>';
			html += '<div style="display:flex;align-items:center;margin:5px 0;font-size:12px;">';
			html += 	'<div style="width:20px;height:20px;background-color:'+cor_cod+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome.toUpperCase()+'</span>';
			for (var i=1; i <= 5; i++) {
				var cor_cod_sub = $('.lista_camadas[rel="'+peca_inferior+'"] .cor_atual').eq(i).css('background-color');
				var cor_nome_sub = $('.lista_camadas[rel="'+peca_inferior+'"] .cor_atual').eq(i).attr('title');
				if (cor_cod_sub !== undefined && cor_nome_sub !== undefined && cor_nome_sub != 'Sem Cor' && $('.lista_camadas[rel="'+peca_inferior+'"] .cor_atual').eq(i).closest('.cor_camada').css('display') != 'none') {
					html +=	'<div style="width:20px;height:20px;background-color:'+cor_cod_sub+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome_sub.toUpperCase()+'</span>';
				}
			}
			html += '</div>';
			$('#gabarito_cores').append(html);

			if (arrayDetalhes[peca_inferior].length > 0) {
				var html_det = '';
				html_det += '<hr/>';
				html_det += '<div style="display:flex;flex-wrap:wrap;align-items:center;margin:5px 0;gap:5px 50px;">';
				$.each(arrayDetalhes[peca_inferior], function(i, v) {
					var cor_cod = $('.lista_camadas[rel="cor_'+v+'"][data-peca="'+peca_inferior+'"] .cor_atual').css('background-color');
					var cor_nome = $('.lista_camadas[rel="cor_'+v+'"][data-peca="'+peca_inferior+'"] .cor_atual').attr('title');
					if (cor_cod !== undefined && cor_nome !== undefined && cor_nome != 'Sem Cor' && 
					($('.lista_camadas[rel="cor_'+v+'"] .cor_atual').closest('#box_edicao-cores').length > 0 || $('.lista_camadas[rel="cor_'+v+'"] .cor_atual').closest('.box_cores').css('opacity') == '1')) {
						html_det += '<div style="display:flex;flex-direction:column;min-width:fit-content;font-size:12px;">'+
										'<div style="margin:2.5px auto 2.5px 0;">'+v.toUpperCase().replaceAll('_',' ')+'</div>'+
										'<div style="display:flex;align-items:center;">'+
											'<div style="width:20px;height:20px;background-color:'+cor_cod+';border:1px solid gray;margin-right:5px;"></div>'+
											'<span>'+cor_nome.toUpperCase()+'</span>'+
										'</div>'+
									'</div>';
					}
				});
				html_det += '</div>';
				$('#gabarito_cores').append(html_det);
			}
		}
		if (peca_acessorio != '' && $('.engloba_'+peca_acessorio).css('display') != 'none') {
			var cod_modelo = arrayPartes['acessorio']['cod_modelo'];
			var cor_cod = $('.lista_camadas[rel="'+peca_acessorio+'"] .cor_atual').eq(0).css('background-color');
			var cor_nome = $('.lista_camadas[rel="'+peca_acessorio+'"] .cor_atual').eq(0).attr('title');

			var html =  '';
			html += '<hr/>';
			html += '<div>'+peca_acessorio.toUpperCase();
			if (cod_modelo !== undefined) html += ' COD. MODELO: '+cod_modelo;
			html += '</div>';
			html += '<div style="display:flex;align-items:center;margin:5px 0;font-size:12px;">';
			html += 	'<div style="width:20px;height:20px;background-color:'+cor_cod+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome.toUpperCase()+'</span>';
			for (var i=1; i <= 5; i++) {
				var cor_cod_sub = $('.lista_camadas[rel="'+peca_acessorio+'"] .cor_atual').eq(i).css('background-color');
				var cor_nome_sub = $('.lista_camadas[rel="'+peca_acessorio+'"] .cor_atual').eq(i).attr('title');
				if (cor_cod_sub !== undefined && cor_nome_sub !== undefined && cor_nome_sub != 'Sem Cor' && $('.lista_camadas[rel="'+peca_acessorio+'"] .cor_atual').eq(i).closest('.cor_camada').css('display') != 'none') {
					html +=	'<div style="width:20px;height:20px;background-color:'+cor_cod_sub+';border:1px solid gray;margin-right:5px;"></div><span style="margin-right:5px;">'+cor_nome_sub.toUpperCase()+'</span>';
				}
			}
			html += '</div>';
			$('#gabarito_cores').append(html);
		}

		$('#gabarito_cores').show();
		htmlToImage.toPng($('#gabarito_cores')[0], { pixelRatio: 1 }).then(function (dataUrl) {
			img_detalhes = dataUrl;
			$('#gabarito_cores').hide();
			preview_legenda++;
		});
	}
	
	preview_tot_salvar = $('#lista_lados div[class^="manequim"]').length;
	preview_tot_salvo = 0;
	$('#lista_lados div[class^="manequim"]').each(function(){
		var class_manequim = $(this).attr('class').split(' ');
		var lado = class_manequim[0].replace('manequim', '');

		var w_canvas = $('.'+class_manequim[0]).find('.modelo')[0].clientWidth;
		var h_canvas = $('.'+class_manequim[0]).find('.modelo')[0].clientHeight;
		var canvas_lado = 'canvas'+lado;
		ctx[canvas_lado].clearRect(0, 0, w_canvas, h_canvas);

		if (lado == '') {
			if (legenda_preview == 0 || (comprar == 0 && salvar == 0 && compartilhar == 0)) {
				if (total_modelo[peca_superior] > 1 && total_modelo[peca_inferior] > 1 && total_modelo[peca_acessorio] > 1) {
					$('#canvas').attr('height', h_canvas+60);
					ctx['canvas'].fillText('COD. MODELO '+peca_superior.toUpperCase()+' - '+arrayStatus[iStatus]['superior']['cod_modelo'], '5', h_canvas+20);
					ctx['canvas'].fillText('COD. MODELO '+peca_inferior.toUpperCase()+' - '+arrayStatus[iStatus]['inferior']['cod_modelo'], '5', h_canvas+35);
					ctx['canvas'].fillText('COD. MODELO '+peca_acessorio.toUpperCase()+' - '+arrayStatus[iStatus]['acessorio']['cod_modelo'], '5', h_canvas+50);
				}
				else if (total_modelo[peca_superior] > 1 && total_modelo[peca_inferior] > 1) {
					$('#canvas').attr('height', h_canvas+45);
					ctx['canvas'].fillText('COD. MODELO '+peca_superior.toUpperCase()+' - '+arrayStatus[iStatus]['superior']['cod_modelo'], '5', h_canvas+20);
					ctx['canvas'].fillText('COD. MODELO '+peca_inferior.toUpperCase()+' - '+arrayStatus[iStatus]['inferior']['cod_modelo'], '5', h_canvas+35);
				}
				else if (total_modelo[peca_superior] > 1 || total_modelo[peca_inferior] > 1) {
					$('#canvas').attr('height', h_canvas+30);
					var peca = (total_modelo[peca_inferior] > 1) ? 'peca_inferior' : 'peca_superior';
					var parte = (total_modelo[peca_inferior] > 1) ? 'inferior' : 'superior';
					ctx['canvas'].fillText('COD. MODELO '+peca.toUpperCase()+' - '+arrayStatus[iStatus][parte]['cod_modelo'], '5', h_canvas+20);
				}
				preview_legenda = 1;
			}
		}

		if ($('.'+class_manequim[0]+' div[id^="mask_upload_"]').length > 0) {
			$('.'+class_manequim[0]+' div[id^="mask_upload_"], .'+class_manequim[0]+' .fundos-svgs > .textura').hide();
			var upload = 1;
		} else {
			var upload = 0;
		}
		html2canvas($('.'+class_manequim[0]+' .modelo')[0], {backgroundColor: null, width: w_canvas, height: h_canvas, scale: 1, quality: 1}).then( function (canvas) {
			canvas.toBlob(function(blob) {
				var reader = new FileReader();
				reader.onloadend = function() {
					var base64 = reader.result;
					eval('img_manequim'+lado).src = base64;
					eval('img_manequim'+lado).onload = function() {
						ctx[canvas_lado].drawImage(eval('img_manequim'+lado), 0, 0);
						(upload == 1) ? salvarUpload(class_manequim[0], canvas_lado) : preview_tot_salvo++;
					};
				};
				reader.readAsDataURL(blob);
			});
		});
	});

	var verifica_termino = setInterval(function() {
		if (preview_tot_salvar == preview_tot_salvo && preview_legenda == 1) {
			clearInterval(verifica_termino);
			$('#box_manequim .container').css('transform', scale_manequim_container);
			$('#box_manequim').css('transform', scale_box_manequim);
			resolverPreview(comprar, salvar, compartilhar);
		}
	}, 500);
}
function resolverPreview(comprar, salvar, compartilhar) {
	if (salvar == 1) {
		$('#site *').css('pointer-events','auto');
		$('#aguarde').hide();
		$('#aguarde h2').html('Carregando');
		$('#aguarde img').show();
		$('#abrir-nome_simulacao').click();
	}
	else if (comprar == 1) {
		salvaJogoCompra();
	}
	else {
		$.post('{PASTA_RAIZ_SIMULADOR}/gerar_preview.php', { 
			'img1':document.getElementById('canvas').toDataURL('image/png'), 'img2':document.getElementById('canvas_verso').toDataURL('image/png'), 'img3':document.getElementById('canvas_esquerda').toDataURL('image/png'), 'img4':document.getElementById('canvas_direita').toDataURL('image/png'), 'esporte': esporte, 'rotacionar': modelo_rotacionar, 'verso': modelo_verso, 'visualizar': 1, 'w_preview':largura_total_preview, 'imgDetalhes': img_detalhes
		}).done(function(data){
			$('#site *').css('pointer-events','auto');
			$('#aguarde').hide();
			$('#aguarde h2').html('Carregando');
			$('#aguarde img').show();

			if (compartilhar == 1) {
				var camisa_cod = arrayStatus[iStatus]['superior']['cod_modelo'];
				var calcao_cod = (total_modelo['calcao'] > 0) ? arrayStatus[iStatus]['inferior']['cod_modelo'] : camisa_cod;
				var nome_preview = (camisa_cod == calcao_cod) ? 'Preview '+modalidades[esporte]['nome']+' '+camisa_cod+'.jpg' : 'Preview '+modalidades[esporte]['nome']+' '+camisa_cod+'-'+calcao_cod+'.jpg';
				link = document.createElement('a');
				link.setAttribute('download', nome_preview);
				link.setAttribute('href', '{PASTA_RAIZ_SIMULADOR}/'+data);
				link.click();
			}
			else {
				var preview_tot = $('#lista_lados div[class^="manequim"]').length;
				var preview_salvo = 0;

				$('#site').hide();
				var img_jogo = data.replace('geradas/preview/', '').replace('.jpg', '');
				$('#box_visualizar .simulacao').append('<div class="frente_verso"></div>');
				var img = new Image();
				img.onload = function() {
					preview_salvo++;
					$('#box_visualizar .frente_verso').append('<img src="{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_1.png" style="width:'+this.width+'px; height:'+this.height+'px" />');
				};
				img.src = '{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_1.png';

				if (modelo_verso == 1) {
					var img_verso = new Image();
					img_verso.onload = function() {
						preview_salvo++;
						$('#box_visualizar .frente_verso').append('<img src="{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_2.png" style="width:'+this.width+'px; height:'+this.height+'px" />');
					};
					img_verso.src = '{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_2.png';
				}

				if (modelo_rotacionar == 1) {
					$('#box_visualizar .simulacao').append('<div class="lateral"></div>');
					var img_dir = new Image();
					img_dir.onload = function() {
						preview_salvo++;
						$('#box_visualizar .lateral').append('<img src="{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_3.png" style="width:'+this.width+'px; height:'+this.height+'px" />');
					};
					img_dir.src = '{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_3.png';
					var img_esq = new Image();
					img_esq.onload = function() {
						preview_salvo++;
						$('#box_visualizar .lateral').append('<img src="{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_4.png" style="width:'+this.width+'px; height:'+this.height+'px" />');
					};
					img_esq.src = '{PASTA_RAIZ_SIMULADOR}/geradas/partes/'+img_jogo+'_4.png';
				}

				$('#box_visualizar .salvar').attr('onClick','salvarNoComputador("'+img_jogo+'")');
				if ($('.box_contatos_whatsapp').length) {
					$('.box_contatos_whatsapp .bt_atendimento').each(function(){
						var link_atual = $(this).attr('href');
						var link_compartilhar = link_atual+'&text={MSG_SIMULACAO}%20{URL_SIMULADOR}/modelo/?simulacao%3D'+img_jogo;
						$(this).attr('href', link_compartilhar);
					});
				}
				else {
					var link_compartilhar = 'https://api.whatsapp.com/send?phone=55{NUM_WHATSAPP}&text={MSG_SIMULACAO}%20{URL_SIMULADOR}/modelo/?simulacao%3D'+img_jogo;
					$('#box_visualizar .atendimento').attr('href', link_compartilhar);
				}
				window.history.replaceState('', '', '{PASTA_RAIZ_SIMULADOR}/modelo/?simulacao='+img_jogo);

				var verifica_termino = setInterval(function() {
					if (preview_tot == preview_salvo) {
						clearInterval(verifica_termino);
						$('#box_visualizar').show();
						$('body').css('background-color', '#e6e6e5');
					}
				}, 500);
			}
		}).fail(function(data) {
			$('#site *').css('pointer-events','auto');
			$('#aguarde').hide();
			$('#aguarde h2').html('Carregando');
			$('#aguarde img').show();
			mensagem('', 'Ocorreu um erro inesperado.\nTente novamente.', 'error');
		});
	}
}
function salvarNoComputador(data) {
	var camisa_cod = arrayStatus[iStatus]['superior']['cod_modelo'];
	var calcao_cod = (total_modelo['calcao'] > 0) ? arrayStatus[iStatus]['inferior']['cod_modelo'] : camisa_cod;
	if (camisa_cod == calcao_cod)
		var nome_preview = 'Preview '+modalidades[esporte]['nome']+' '+camisa_cod+'.jpg';
	else
		var nome_preview = 'Preview '+modalidades[esporte]['nome']+' '+camisa_cod+'-'+calcao_cod+'.jpg';

	var url = '{PASTA_RAIZ_SIMULADOR}/geradas/preview/'+data+'.jpg';
	link = document.createElement('a');
	link.setAttribute('href', url);
	link.setAttribute('download', nome_preview);
	link.click();
}
function salvaJogoCompra() {
	for (var parte of Object.keys(arrayStatus[iStatus])) {
		for (var [key, value] of Object.entries(arrayStatus[iStatus][parte])) {
			if (value == '') {
				alterarArrayAtual(0,key,parte);
			}	
			else if (value == 'sem') {
				alterarArrayAtual(0,'cor_'+key,parte);
				alterarArrayAtual(0,'cor_'+key+'_',parte);
				alterarArrayAtual(0,key+'_',parte);

				if (key == 'bolso_verso' && arrayStatus[iStatus][parte]['bolso_frente'] == 'sem' && arrayStatus[iStatus][parte]['bolso_frente_inferior'] == 'sem') {
					alterarArrayAtual(0,'cor_bolso',parte);
					alterarArrayAtual(0,'cor_bolso_',parte);
				}
			}
			else if (value == 'sem_cor') {
				alterarArrayAtual(0,key,parte);
			}
			
			if (key == 'nome') {
				var i_ipt_texto = 0;
				var tot_ipt_texto = 0;
				var nome_ancora = '';

				$('.ipt-texto').each(function(x){
					tot_ipt_texto = $(this).parent().find('.ipt-texto').length;

					if ($(this).val() == '') {
						nome_ancora = $(this).closest('.flex').attr('data-ancora');
						i_ipt_texto++;
					}

					if (i_ipt_texto == tot_ipt_texto) {
						i_ipt_texto = 0;
						alterarArrayAtual(0,'cor_'+nome_ancora,parte);
						alterarArrayAtual(0,nome_ancora+'_',parte);
					}
				});	

				if (texto == 0)
					preencheAtributo(parte,'nome','sem',0);
			}
			else if (key == 'galeria') {
				alterarArrayAtual(0,key,parte);
			}
			else if (key.indexOf('drag') > -1) {
				alterarArrayAtual(0,key,parte);
			}
		}
	}

	var array = ArrayToString(arrayStatus[iStatus]);
	$('#informacoes_uniforme').val(array);

	$.post('{PASTA_RAIZ_SIMULADOR}/gerar_preview.php', { 'img1':document.getElementById('canvas').toDataURL('image/png'), 'img2':document.getElementById('canvas_verso').toDataURL('image/png'), 'img3':document.getElementById('canvas_esquerda').toDataURL('image/png'), 'img4':document.getElementById('canvas_direita').toDataURL('image/png'), 'esporte': esporte, 'rotacionar': modelo_rotacionar, 'verso': modelo_verso, 'comprar': 1, 'w_preview':largura_total_preview, 'imgDetalhes': img_detalhes }, function(data){
		if (data != null) {
			$('#comissao_tecnica').val(comissao);
			$('#goleiro').val(goleiro);
			$('#id_imagem').val(data);

			if (arrayPecas.length == 1 && colecao == 1) {
				var peca = arrayPecas[0][0];
				$('#somente_'+peca).val(1);
			}

			$('#simulador-jogo').submit();
		}
	});
}

function mensagem(titulo, msg, tipo, callback){
	$('.swal-modal').removeAttr('style');

	if (callback) {
		if (tipo == 'input') {
			swal({
			  	text: msg,
				content: 'input',
			  	button: {
					text: 'Pesquisar!',
					closeModal: false,
			  	},
			})
			.then(name => {
				if (name) 
					callback(name);
			});
		}
		else if (tipo == 'confirmar') {
			swal({
				title: titulo,
				text: msg,
				icon: 'warning',
				buttons: ['Cancelar', 'Sim'],
				dangerMode: true,
			}).then((willDelete) => {
				(willDelete) ? callback(true) : callback(false);
			});
		}
		else {
			swal({
			  	title: titulo,
				text: msg,
			  	icon: 'warning',
			  	buttons: ['Cancelar', true],
				dangerMode: true,
			})
			.then((willDelete) => {
			 	if (willDelete)
				 	callback(true);
			});
		}	
	}
	else if (tipo != '') {
		if (tipo == 'html') {
			swal({
				title: titulo, 
				content: msg,
				button: 'x',
				className: 'swal-modal-width',
			});
		} 
		else {
			swal({
				title: titulo,
				text: msg,
				icon: tipo,
				button: 'Ok',
			});
		}	
	}
	else {
		(titulo != '') ? swal(titulo, msg) : swal(msg);
	}
}
function abrirMensagem(conteudo){
	$('.swal-modal').removeAttr('style');
	var span = document.createElement('div');
	span.innerHTML = conteudo;
	mensagem('',span,'html');
}
function setZoom(zoom){
	if (zoom == 0) 
		$('#box_manequim').css({'transform':'scale(0.8)', 'top':'-70px', 'z-index':'100'});
	else if (zoom == 1) 
		$('#box_manequim').css({'transform':'scale(1)', 'top':'0', 'z-index':'100'});
	else if (zoom == 2)
		$('#box_manequim').css({'transform':'scale(1.4)', 'top':'95px', 'z-index':'100'});
	else if (zoom == 3 && $(window).width() > 767)
		$('#box_manequim').css({'transform':'scale(1.6)', 'top':'160px', 'z-index':'100'});
}
function zoomManequim(valor){
	if ($(window).width() < 1024)
		$('#box_edicao .bt_fechar').trigger('click');

	if (valor == '+') {
		$('.btzoom').val(Number($('.btzoom').val()) + Number(1));
		setZoom($('.btzoom').val());
	} 
	else if (valor == '-') {
		$('.btzoom').val(Number($('.btzoom').val()) - Number(1));
		setZoom($('.btzoom').val());
	}
}
function abrirVisualizacao(){
	$('#site').css('pointer-events','none');
	
	$('#aguarde h2').html('Salvando...');
	$('#aguarde img').hide();

	desabilitaFerramentasDrag();
	$('#bt_salvar').removeClass('ativo');
	$('.menu_oculto').hide();
	$('#aguarde').css('background-color','#666').show('fast', function() {
		setTimeout(function(){
			salvarImagem(0, 0, 0);
		}, 500);
	});
}
function abreModelagens(grupo){
	var html = 	'<div id="escolher_manequim" style="max-width:'+parseInt($(document).width()*0.75)+'px">' +
					'<span class="destaque">'+$('ul .'+grupo).attr('alt')+'</span>' +
					'<span>Escolha o Manequim</span>' +
					'<ul id="lista_manequim">';
	var total_elementos = $('ul .'+grupo+' .grupo_modalidades span').length;
	if (total_elementos > 4) {
		total_elementos = 4;
	}

	var width_elemento = Number(100) / Number(total_elementos);

	$('ul .'+grupo+' .grupo_modalidades span').each(function(index){	
		var nome = $(this).html();
		var nome_dir = modalidades[nome]['nome_dir'];
		var nome_modalidade = nome.split('_');
		var aux_tipo_modelagem = modalidades[$(this).html()]['nome'].split(' ');
		var tipo_modelagem = aux_tipo_modelagem[aux_tipo_modelagem.length-1];

		if (nome.indexOf('futebol_masculino') > -1) {
			if (nome_modalidade[2] == '3')
				tipo_modelagem = 'black';
			else if (nome_modalidade[2] == '2')
				tipo_modelagem = 'muscle';
			else if (nome_modalidade[2] == 'ml')
				tipo_modelagem = 'long sleeve';
			else
				tipo_modelagem = 'fit';
		}
		else if (tipo_modelagem == 'mc') {
			tipo_modelagem = 'manga curta';
		}
		else if (tipo_modelagem == 'ml') {
			tipo_modelagem = 'manga longa';
		}
		else if (nome.indexOf('calca_moletom') > -1) {
			if (nome_modalidade.length >= 3)
				tipo_modelagem = 'c/ punho';
			else
				tipo_modelagem = 's/ punho';
		}
		else if (nome_modalidade.length >= 3 && (tipo_modelagem != 'Feminino' && tipo_modelagem != 'Masculino')) {
			tipo_modelagem = aux_tipo_modelagem[aux_tipo_modelagem.length-2]+' '+aux_tipo_modelagem[aux_tipo_modelagem.length-1];
		}

		var link_nome = 'href=';
		link_nome += (nome == esporte) ? 'javascript:void(0); onclick=$(".swal-button").click();' : '{PASTA_RAIZ_SIMULADOR}/'+nome;
		var imagem = '<img src="img/simulador/manequim/'+nome_dir+'.png'+versao_simu+'" />';
		if (window.parent.location.search.indexOf('fundo') != -1 && window.parent.location.search.indexOf('intro') != -1 && nome != esporte)
			link_nome += window.parent.location.search.replace('&intro=1', '');

		if ($(window).width() > 479) {	
			html += '<li style="width:'+width_elemento+'%;">' +
						imagem;
			html +=		'<a '+link_nome+'>' +
							'<span>ACESSAR</span>' +
							'<div class="seta"><span></span></div>' +
						'</a>' +
						'<span class="tipo_modelagem">'+tipo_modelagem+'</span>'+ 
					'</li>';
		}
		else {
			html += '<li>' +
						'<a '+link_nome+'>' +
							'<span>'+tipo_modelagem+'</span>' +
							'<div class="seta"><span></span></div>' +
						'</a>' +
					'</li>';
		}
	});

	html += '</ul></div>';
	abrirMensagem(html);
}
function ladoUpload(){
	if (modelo_rotacionar == 1 || modelo_verso == 1) {
		swal({
			title: 'Escolha o lado',
			text: ' ',
			button: '',
			className: 'swal-modal-width',
			closeOnClickOutside: false,
			closeOnEsc: false
		});

		$('.swal-modal').css('min-width', 'fit-content').css('width', '20%');
		var html =  '<div id="lista-lado_upload" class="opcoes">' +
						'<div class="opcao_lado" rel="">Frente</div>';
			if (modelo_verso == 1)
				html += '<div class="opcao_lado" rel="_verso">Verso</div>';
			if (modelo_rotacionar == 1) {
				html += '<div class="opcao_lado" rel="_esquerda">Esquerda</div>' +
						'<div class="opcao_lado" rel="_direita">Direita</div>';
			}
			html +=	'</div>';
		$('.swal-text').html(html);
		$('.swal-button').hide();
	}
	else {
		lado_upload = '';
		$('#upload_arquivo').trigger('click');
	}
}
function opcoesPosicionar() {
	swal({
		title: 'Modo de Imagem',
		text: ' ',
		button: '',
		className: 'swal-modal-width',
		closeOnClickOutside: false,
		closeOnEsc: false
	});

	$('.swal-modal').css('min-width', 'fit-content').css('width', '20%');
	$('.swal-text').html('<div class="opcoes" rel="posicionar"><div class="opcao_lado posicionar" rel="true">Posicionar</div><div class="opcao_lado posicionar" rel="false">Fixar</div></div>');
	$('.swal-button').hide();
}
function opcoesLado(retorno, parm, posicionar = false){
	var data_attr = (typeof eval(retorno) == 'function') ? 'data-i="'+parm+'"' : '';
	if (($('#lista_lados .conteudo').css('flex-direction') == 'row' || $('#lista_lados').css('flex-direction') == 'row') && modelo_verso == 1 && modelo_rotacionar == 0) {
		swal({
			title: 'Escolha o lado',
			text: ' ',
			button: '',
			className: 'swal-modal-width',
			closeOnClickOutside: false,
			closeOnEsc: false
		});

		$('.swal-modal').css('min-width', 'fit-content').css('width', '20%');
		$('.swal-text').html('<div class="opcoes" rel="'+retorno+'" '+data_attr+'><div class="opcao_lado" rel="">Frente</div><div class="opcao_lado" rel="_verso">Verso</div></div>');
		$('.swal-button').hide();
	}
	else {
		if (retorno == 'carregarImagem') {
			carregarImagem(parm, '', posicionar);
		} else if (typeof eval(retorno) == 'function') {
			eval(retorno)(parm);
		} else {
			$('#'+retorno).click();
		}
	}
}
function iniciaFerramentasDrag(tipo, i_drag, rad){
	if (typeof rad === undefined) 
		rad = 0;

	if (tipo == 'imagem') {
		var div_conteudo = 'parent';

		if (esporte_dir == 'futebol_masculino_3') {
			var rotate_y = ($('#item_drag-'+i_drag).attr('data-lado') == '') ? '20deg' : '-20deg';
			$('#item_drag-'+i_drag).rotatable({
				transforms: {rotateX: '10deg', rotateY: rotate_y}
			});
		}
		else {
			$('#item_drag-'+i_drag).rotatable({
				angle: rad
			});
		}
		$('#item_drag-'+i_drag).draggable({
			containment: div_conteudo,
			start: function() {
				habilitaFerramentasDrag('item_drag-'+i_drag);

				if (carregando_status == 0) {
					if ($('#item_drag-'+i_drag).parent()[0].style.removeProperty)
						$('#item_drag-'+i_drag).parent()[0].style.removeProperty('-webkit-mask-image');
					else
						$('#item_drag-'+i_drag).parent()[0].style.removeAttribute('-webkit-mask-image');
				}
			}
		}).resizable({
			containment: 'parent',
			aspectRatio: true
		});
	}
	else if (tipo == 'texto') {
		$('#item_drag-'+i_drag).rotatable({
			angle: rad
		}).draggable({
			containment: 'parent',
			scroll: false,
			start: function(event, ui) {
				habilitaFerramentasDrag('item_drag-'+i_drag);
			}
		}).resizable({
			minWidth: 50,
			containment: 'parent',
			aspectRatio: false,
			resize: function(event, ui) {
				var h_texto = Number($(this).find('.texto').height());
				var size_texto = $(this).find('.texto').css('font-size').replace('px', '');
				var size = ui.size;
				var newFontSize = Math.round((size_texto * size.height) / h_texto);
				
				if (newFontSize <= 150) {
					$(this).find('.texto').css('font-size', newFontSize + 'px'); 
					if ($(this).width() < $(this).find('.texto').width())
						$(this).css('width', $(this).find('.texto').width()+'px');

					$('.ipt-tamNum').val(newFontSize).trigger('change');
				}
			}
		});
	}

	if (modelo_conjunto == 1) {
		$('.engloba_'+peca_inferior).droppable({
			drop: function( event, ui ) {
				var item = ui.draggable[0].id;
				$('#'+item).attr('data-peca', peca_inferior);
			}
		});
		if ($('.engloba_'+peca_acessorio).length) {
			$('.engloba_'+peca_acessorio).droppable({
				drop: function( event, ui ) {
					var item = ui.draggable[0].id;
					$('#'+item).attr('data-peca', peca_acessorio);
				}
			});
		}
	}

	$('.engloba_'+peca_superior).droppable({
		drop: function( event, ui ) {
			var item = ui.draggable[0].id;
			$('#'+item).attr('data-peca', peca_superior);
		}
	});

	if (!$('#item_drag-'+i_drag).attr('data-peca') || !$('#item_drag-'+i_drag).attr('data-peca').length)
		$('#item_drag-'+i_drag).attr('data-peca', peca_superior);
	$('#item_drag-'+i_drag+' .ferramentas_edicao').attr('rel', i_drag);
	$('#item_drag-'+i_drag+' .ferramentas_edicao').append($('#item_drag-'+i_drag).find('div:not([class="ferramentas_edicao"])').detach());
	habilitaFerramentasDrag('item_drag-'+i_drag);
}
function habilitaFerramentasDrag(item){
	desabilitar_ferramentas = 0;

	$('div[class^="manequim"] div[class^="engloba_"]').each(function(){
		if ($(this).find('div[id^="item_drag-"]').length > 1)
			$(this).find('div[id^="item_drag-"] .acima, div[id^="item_drag-"] .abaixo').show();
		else 
			$(this).find('div[id^="item_drag-"] .acima, div[id^="item_drag-"] .abaixo').hide();	
	});

	if (item != '') {
		if (carregando_status == 0 && $('#'+item).parent()[0].style.removeProperty)
			$('#'+item).parent()[0].style.removeProperty('-webkit-mask-image');

		$('div[id^="item_drag-"][class*="ativo"]').each(function (index, element){
			var camada = $(element).attr('data-camada');
			$(element).css('z-index', camada).removeClass('ativo').removeClass('selecionado').find('.ferramentas_edicao').removeClass('ativo');
		});

		$('.lista_textos .bt_selecionar').removeClass('ativo').html('Selecione');
		$('.lista_textos li[rel="'+item+'"] .bt_selecionar').addClass('ativo').html('Selecionado');
		$('#'+item).addClass('ativo').addClass('selecionado').find('.ferramentas_edicao').addClass('ativo');

		if ($('#'+item).hasClass('texto_drag'))
			atualizaInfoTexto(item);

		if ($(this).width() > 1023) {
			var w_barra = (window.innerWidth-$(window).width());
			if (w_barra > 0)
				$('body').css({'overflow': 'hidden', 'padding-right': w_barra+'px', 'background-color': '#f1f1f1'});
		}
	}
}
function desabilitaFerramentasDrag(){
	desabilitar_ferramentas = 1;

	if (desabilitar_ferramentas == 1) {
		$('body').removeAttr('style');
		$('.lista_textos .bt_selecionar').removeClass('ativo').html('Selecione');
		$('div[id^="item_drag-"][class*="ativo"]').removeClass('ativo').removeClass('selecionado').find('.ferramentas_edicao').removeClass('ativo');
		desabilitar_ferramentas = 0;

		$('div[id^="item_drag-"]').each(function(){
			var config_drag = $(this).parent().attr('data-config');
			if (config_drag)
				$(this).parent()[0].style.setProperty('-webkit-mask-image', 'url('+config_drag+')');
		});
		
	}
}
function golaMescla(lado){
	$('.golas .textura_mescla, .clip_gola, .clip_fundo_gola').remove();
	var clip_gola = '<svg class="clip_gola"><defs><clipPath id="clipping_gola'+lado+'">'+$('.manequim'+lado+' .golas div:visible .gola path')[0].outerHTML+'</clipPath></defs></svg>';
		clip_gola += '<img class="textura_mescla" src="{PASTA_RAIZ_SIMULADOR}/img/textura_mescla.webp'+versao_simu+'" style="clip-path: url(#clipping_gola'+lado+');">';
	if ($('.manequim_verso .golas div:visible .fundo_gola path')[0] !== undefined) {
		var clip_fundo_gola =   '<svg class="clip_fundo_gola"><defs>' +
									'<clipPath id="clipping_fundo_gola'+lado+'">'+$('.manequim'+lado+' .golas div:visible .fundo_gola path')[0].outerHTML+'</clipPath>' +
								'</defs></svg>';
			clip_fundo_gola +=  '<img class="textura_mescla" src="{PASTA_RAIZ_SIMULADOR}/img/textura_mescla.webp'+versao_simu+'" style="clip-path: url(#clipping_fundo_gola'+lado+');">';
	}
	$('.manequim'+lado+' .engloba_'+peca_superior+' .fundos-svgs .golas').append(clip_gola);
	$('.manequim'+lado+' .engloba_'+peca_superior+' .fundos-svgs .golas').append(clip_fundo_gola);
}

function maskTelefone(idform, id){
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	}, spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};

	$('#'+idform+' #'+id).mask(SPMaskBehavior, spOptions);
}
function stringtourl(x){
	if (x == null) {
		return x;
	}
	else {
		y = x.replace(' ','_').toLowerCase();
		y = y.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
		y = y.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
		y = y.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
		y = y.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
		y = y.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
		y = y.replace(new RegExp('[Ç]','gi'), 'c');

		return y;
	}
}
function hex(x){
	return ('0' + parseInt(x).toString(16)).slice(-2);
}
$.fn.isInViewport = function(){
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};
var debounce = function (func, wait, immediate){
	var timeout;

	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
function irPara(url, titulo){
	$('.swal-overlay').removeClass('swal-overlay--show-modal');
	
	if ('undefined' !== typeof history.pushState) {
		history.pushState({page: url}, titulo, url);
	} else {
		window.location.assign(url);
	}
}

$(document).ready(function (){
	url_inicial = window.location.href;
	$('#aguarde').show();

	var rejeitar = new Array ({msie: true});
	$.reject({
		reject: rejeitar[0], 
		display: ['chrome','opera','safari','firefox'],
		header: 'Seu navegador não é suportado',
		paragraph1: 'Você está usando um navegador não suportado.',
		paragraph2: 'Por favor, instale um dos navegadores abaixo para seguir no site.',
		closeMessage: ' ', // Message below close window link
		closeLink: 'Fechar aviso',

		beforeClose: function() {
			window.location.href = '{PASTA_RAIZ_SIMULADOR}/';
		}
	});

	preparar();

	<!-- BEGIN BLOCK_ESCOLHER_MODALIDADE -->
	if (goleiro != 1 && comissao != 1 && num_modalidades > 1) {
		mudaQuadro(1);
		abrirMensagem('<div id="trocar_modalidade" style="width:'+parseInt($(document).width()*0.75)+'px">'+$('#trocar_modalidade').html()+'</div>');
	}
	<!-- END BLOCK_ESCOLHER_MODALIDADE -->
	
	if (typeof popupColecoes === 'function' && colecao == '0') 
		popupColecoes();

	<!-- BEGIN BLOCK_ESCOLHER_MOCKUP -->
	abreModelagens(grupo_dir);
	<!-- END BLOCK_ESCOLHER_MOCKUP -->

	<!-- BEGIN BLOCK_REMOVER_GALERIA -->
	$('.opcao[rel="edicao_galeria"]').remove();

	$('.edicao_upload .sub-menu_edicao, .edicao_upload .conteudo_edicao[rel="galeria"]').remove();
	$('.edicao_upload .conteudo_edicao[rel="upload"]').show();
	<!-- END BLOCK_REMOVER_GALERIA -->
	if (modalidade_linha == 'brindes') {
		$('.opcao[rel="edicao_upload"]').attr('alt', 'Imagens').attr('title', 'Imagens');
		$('.opcao[rel="edicao_upload"] span, .edicao_upload .cabecalho .titulo').html('Imagens');
		$('.conteudo_edicao #excluir_imagem').remove();
	}
	else {
		$('.conteudo_edicao #temas').remove();
	}

	buscaGaleria('galeria_simulador_categoria', '{IDGALERIA}', '');

	$('#select_temas').change(function(){
		buscaGaleria('galeria_simulador', $(this).val(), '');
	});

	var img_posicionar;
	$(document).on('click', '.image-gallery img', function() {
		var indexImg = $(this).parent().parent().index();
		if (modalidade_linha == 'brindes') {
			opcoesLado('carregarImagem', indexImg);
		}
		else {
			img_posicionar = indexImg;
			opcoesPosicionar();
		}
	});
	<!-- FINALLY BLOCK_REMOVER_GALERIA -->

	var isMobile = 'ontouchstart' in window;
	if ( isMobile == true ) {
		$('#bt_confirma[rel="mobile"]').css('display', 'flex');
		$('.box_contato #box_modalidades').remove();
		$('.nome_dispositivo').html('Dispositivo');

		$('div[class^="manequim"]').on('touchstart', function(){
			$(this).find('.fundos-svgs').css('z-index', 1);
		});

		$('#bt_login, .bt_zoom').remove();
	}
	else {
		$('div[class^="manequim"]').on('mouseenter', '.imagem_drag, .texto_drag', function(){
			if (!$(this).hasClass('ativo')) {
				$(this).addClass('selecionado');
				$(this).parent()[0].style.removeProperty('-webkit-mask-image');
			}
		}).on('mouseleave', '.imagem_drag, .texto_drag', function(){
			if (!$(this).hasClass('ativo')) {
				$(this).removeClass('selecionado');
				var config_drag = $(this).parent().attr('data-config');
				if (config_drag)
					$(this).parent()[0].style.setProperty('-webkit-mask-image', 'url('+config_drag+')');
			}
		});

		$('div[class^="manequim"]').on('mouseenter, mousemove', function(){
			if ($('.texto_drag').length > 0 || $('.imagem_drag').length > 0)
				$(this).find('.fundos-svgs').css('z-index', 1);
		}).on('mouseleave', function(e){
			if ($('.texto_drag').length > 0 || $('.imagem_drag').length > 0)
				$(this).find('.fundos-svgs').css('z-index', 'unset');
			e.stopPropagation();
		});
	}

	var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	if (iOS == true) {
		if ($(window).width() <= 768) {
			$('#girar-manequim span').css('font-size', 'x-small');
		}
	}

	$('body').on('click', function(e){
		if (preenchimento_modelo == 0 && preenchimento_habilitado == 1 && e.originalEvent !== undefined && (!clicado || clicado == 0)) {
			if (e.target.className !== 'menu_oculto') {
				$('#bt_salvar, #bt_simulacoes, #ico-menu, #bt_site').removeClass('ativo');
				$('.menu_oculto').hide();
			}
			if (e.target.className !== 'cor_camada' && e.target.className !== 'paleta_cores' && e.target.className !== 'cor_atual') {
				$('.cor_camada').removeClass('camada_ativa');
				$('.paleta_cores').removeClass('ativo');
			}
			if (e.target.className !== 'modalidade-icone') {
				$('.modalidades li div').removeClass('ativo');
				$('.modalidades li a').removeClass('selecionado');
			}

			if (e.target.closest('.lista-fontes') == null) {
				$('#menu_fontes').hide();

				if (e.target.closest('.edicao_texto') == null && $(e.target).attr('rel') != 'edicao_texto' && $(e.target).attr('class') != 'imagem_produto' && $(e.target).attr('class') != 'texto_drag'
				&& e.target.closest('.swal-overlay') == null && $(e.target).attr('name') != 'img_selecionada')
					desabilitaFerramentasDrag();

				if (isMobile == true)
					$('div[class^="manequim"]').find('.fundos-svgs').css('z-index', 'unset');
			}
		}
	});

	// códigos
	$('#ipt-peca-superior').on('click', function(e){
		e.preventDefault();
		adicionarPecas();

		if ($(this).prop('checked'))
			removerPecas('superior');
	});
	$('#ipt-peca-inferior').on('click', function(e){
		e.preventDefault();
		adicionarPecas();

		if ($(this).prop('checked'))
			removerPecas('inferior');
	});
	$('#ipt-peca-conjunto').on('click', function(e){
		e.preventDefault();
		adicionarPecas();

		if ($(this).prop('checked'))
			removerPecas('conjunto');
	});
	$('.lista_modelos').on('scroll', debounce(function(){
		var rel = $(this).attr('rel');
		var time = 0;
		$('.lista_modelos[rel="'+rel+'"] li img[src=""]').each(function(index, element) {
			if ($(this).isInViewport()) {
				setTimeout(function() {
					$(element).attr('src', $(element).attr('data-src'));
				}, time);
				time += 250;
			}
		});
	}, 150));
	$('.setas_modelos .bt-seta_esquerda').on('click', function(e){
		e.preventDefault();
		if (desenho_carregando == false) {
			var relativo = $(this).parent().attr('data-peca');
			var i_atual = Number($(this).parent().find('.i_modelo').html());
			modelo_atual = ($(this).parent().find('.i_modelo').html() > modelo_inicial) ? Number(i_atual)-Number(1) : total_modelo[relativo];
			$(this).parent().find('.i_modelo').html(modelo_atual);
			$('.lista_modelos li[data-tipo="'+relativo+'"][data-i="'+modelo_atual+'"]').trigger('click');
		}
	});
	$('.setas_modelos .bt-seta_direita').on('click', function(e){
		e.preventDefault();	
		if (desenho_carregando == false) {
			var relativo = $(this).parent().attr('data-peca');
			var i_atual = Number($(this).parent().find('.i_modelo').html());
			modelo_atual = ($(this).parent().find('.i_modelo').html() < total_modelo[relativo]) ? Number(i_atual)+Number(1) : modelo_inicial;
			$(this).parent().find('.i_modelo').html(modelo_atual);
			$('.lista_modelos li[data-tipo="'+relativo+'"][data-i="'+modelo_atual+'"]').click();
		}
	});
	$('.box_bloqueio .icone').on('click', function(e){
		e.preventDefault();
		$('.ipt-checkbox[for="ipt-sincronizar"]').click();
	});
	$('#lista-lados__manequim li').on('click', function(e){
		var class_manequim = $(this).find('div[class^="manequim"]').removeClass('ativo').attr('class');
		$('#lista_lados div[class^="manequim"]').removeClass('ativo');
		$('#lista_lados div[class="'+class_manequim+'"]').addClass('ativo');
	});
	$('.edicao_cores').on('click', 'input[name="ziper_completo"]', function(){
		$(this).prop('checked', this.checked);

		var link_peca_superior = (grupo_dir != peca_superior) ? '{ESPORTE_PATH_DIRETORIO}_'+peca_superior : '{ESPORTE_PATH_DIRETORIO}';
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

	$('.paleta_cores .cor[alt="colorido"]').remove();

	$(document).on('click', '#add_manga', function(e){
		$(this).toggleClass('ativo');

		if ($(this).hasClass('ativo')) {
			$(this).html('Remover Mangas');

			var cor_atual = $('.lista_camadas[rel="'+peca_superior+'"] .cor_camada').eq(0).find('.cor_atual').attr('data-cor');
			$('.lista_camadas[rel="cor_manga"] .cor_camada').click();
			$('.lista_camadas[rel="cor_manga"] .paleta_cores .cor[id-cor="'+cor_atual+'"]').click();

			$('#lista_edicao .opcao[rel="edicao_mangas"]').show();
			$('.lista_opcoes .opcao_pers[rel="superior-manga-com"]').trigger('click');
			$('#lista_edicao .opcao[rel="edicao_mangas"]').trigger('click');

			$('.manequim .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_manga.webp'+versao_simu+'")');
			$('.manequim_verso .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_manga_verso.webp'+versao_simu+'")');
		}
		else {
			$(this).html('Adicionar Mangas');

			$('.lista_opcoes .opcao_pers[rel="superior-manga-sem"]').trigger('click');
			$('#lista_edicao .opcao[rel="edicao_mangas"]').hide();
			$('.detalhes_'+peca_superior+' *[class$="-manga"], .detalhes_'+peca_superior+' .punho').hide();
			$('.lista_opcoes .opcao_pers[rel="superior-punho-sem"]').trigger('click');
			
			$('.manequim .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'.webp'+versao_simu+'")');
			$('.manequim_verso .textura').css('background-image', 'url("{PASTA_RAIZ_SIMULADOR}/img/manequim/'+modalidades[esporte]['nome_dir']+'_verso.webp'+versao_simu+'")');
		}
	});

	$('.edicao_texto').on('keyup', '.ipt-texto, .ipt-textNum', function (){
		if ($(this).attr('rel').indexOf('previewNome') > -1) {
			$(this).removeAttr('style');
			var preview = $(this).attr('rel').replace('previewNome', '');
			var box_preview = $(this).parent().parent().attr('data-ancora');
			var lado_manequim = $(this).parent().parent().attr('data-angulo');

			if ($('#lista_lados div[class^="manequim"].ativo .'+box_preview).length == 0 || $('#lista_lados div[class^="manequim"].ativo .'+box_preview).css('display') == 'none')
				girarManequim(lado_manequim);

			var ipt_texto = $(this).val().toUpperCase();	
			if (preview != '')
				$('.'+box_preview+' .previewNome[id="'+preview+'"]').html(ipt_texto);
			else
				$('.'+box_preview+' .previewNome').html(ipt_texto);
		}
		else if ($(this).attr('rel').indexOf('previewNum') > -1) {
			var ipt_texto = $(this).val();
			$('#lista_lados .previewNumero').html(ipt_texto);
		}
		else {
			var ipt_texto = $(this).val();
			var id_drag = $(this).parent().parent().attr('data-ancora');
			$('#'+id_drag+' .texto').html(ipt_texto);
			$('#ancora--'+id_drag).html(ipt_texto);
			$('.lista_textos li[rel="'+id_drag+'"] .texto').html(ipt_texto);

			if ($('#'+id_drag).width() < $('#'+id_drag+' .texto').width())
				$('#'+id_drag).css('width', $('#'+id_drag+' .texto').width()+'px');
		}
	});
	$('.edicao_texto').on('change', '.ipt-texto, .ipt-textNum', function (){
		if (Object.keys(arrayStatus).length >= 1 && preenchimento_modelo == 0 && mostrar_textos == 0)
			$('#voltar').removeClass('desativado');

		if ($(this).attr('rel').indexOf('previewNome') > -1) {
			var box_preview = $(this).attr('rel');
			var ipt_texto = $(this).val().toUpperCase();
			var texto_ancora = $(this).closest('.flex').attr('data-ancora');

			if (ipt_texto.trim() != '') {
				texto = 1;
			}
			else {
				var i_ipt_texto = 0;
				$('.ipt-texto').each(function(x){
					var tot_ipt_texto = $(this).parent().find('.ipt-texto').length;

					if ($(this).val().trim() == '')
						i_ipt_texto++;
					if (i_ipt_texto == tot_ipt_texto)
						texto = 0;
				});
			}
			
			if (esporte != 'bone') {
				if (box_preview == 'previewNome')
					preencheAtributo('superior',texto_ancora+'_texto',ipt_texto,1);
				else if (box_preview == 'previewNome_1')
					preencheAtributo('superior',texto_ancora+'_texto_1',ipt_texto,1);
				else if (box_preview == 'previewNome_2')
					preencheAtributo('superior',texto_ancora+'_texto_2',ipt_texto,1);
				else if (box_preview == 'previewNome_3')
					preencheAtributo('superior',texto_ancora+'_texto_3',ipt_texto,1);
			}
			else {
				preencheAtributo('superior',texto_ancora+'_texto',ipt_texto,1);
			}
		}
		else if ($(this).attr('rel').indexOf('previewNum') > -1) {
			var ipt_texto = $(this).val();
			$('#lista_lados .previewNumero').html(ipt_texto);
			preencheAtributo('superior','numero',ipt_texto,1);
			preencheAtributo('inferior','numero',ipt_texto,0);
		}
		else {
			var ipt_texto = $(this).val();
			var id_drag = $(this).parent().parent().attr('data-ancora');

			if (preenchimento_habilitado == 1 && $('.texto_drag').length > 0) {
				var i_texto = $('.fundos #'+id_drag).attr('rel');
				preencheAtributo('superior','texto_'+i_texto, ipt_texto, 0);
			}
		}
	});
	$('.ipt-tamNum').on('change', function() {
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
	$('.edicao_texto').on('click', 'input[name^="posicao"]', function(){
		var lado = $(this).val();
		var lado_manequim = $(this).closest('.personalizar_posicao').attr('data-angulo');
		var ancora = $(this).closest('.personalizar_posicao').attr('data-ancora');

		if (lado_manequim == 'frente') {
			if ($('#lista_lados .manequim g[class="nome_frente"]').length > 1) {
				$('.manequim .'+ancora).attr('text-anchor', 'middle');
				var ang = eval('nome_frente_'+lado+'_angulo');
				var x = eval('nome_frente_'+lado+'_cima_x');
				var y_cima = eval('nome_frente_'+lado+'_cima_y');
				var y_meio = eval('nome_frente_'+lado+'_meio_y');
				var y_baixo = eval('nome_frente_'+lado+'_baixo_y');
				$('.manequim .nome_frente .previewNome[id="_1"]').attr('transform','matrix(1 '+ang+' 0 1 '+x+' '+y_cima+')');
				$('.manequim .nome_frente .previewNome[id="_2"]').attr('transform','matrix(1 '+ang+' 0 1 '+x+' '+y_meio+')');
				$('.manequim .nome_frente .previewNome[id="_3"]').attr('transform','matrix(1 '+ang+' 0 1 '+x+' '+y_baixo+')');
			}
			else {
				(lado == 'esquerda') ? $('.manequim .'+ancora).attr('text-anchor','end') : $('.manequim .'+ancora).attr('text-anchor','start');
				var x_frente = eval('nome_frente_'+lado+'_x');
				var y_frente = eval('nome_frente_'+lado+'_y');
				$('.manequim .previewNome').attr('transform','matrix(1 0 0 1 '+x_frente+' '+y_frente+')');
			}

			if (lado == 'esquerda') {
				$('.manequim_direita .'+ancora).hide();
				$('.manequim_esquerda .'+ancora).show();
			}
			else {
				$('.manequim_esquerda .'+ancora).hide();
				$('.manequim_direita .'+ancora).show();
			}
		}
		else if (lado_manequim == 'verso') {
			$('.manequim_verso .'+ancora+' text').hide();

			if (lado == 'esquerda') {
				$('.manequim_verso .previewNome[href="#curva_verso"]').parent().show();
				$('.manequim_verso .'+ancora).attr('text-anchor', 'end');
				$('.manequim_direita .'+ancora).hide();
				$('.manequim_esquerda .'+ancora).show();
			}
			else {
				$('.manequim_verso .previewNome[href="#curva_verso_2"]').parent().show();
				$('.manequim_verso .'+ancora).attr('text-anchor', 'end');
				$('.manequim_esquerda .'+ancora).hide();
				$('.manequim_direita .'+ancora).show();
			}
		}

		if (preenchimento_modelo == 0 && 
			($('#lista_lados .ativo .engloba_'+peca_superior+' .'+ancora).length == 0 || $('#lista_lados .ativo .engloba_'+peca_superior+' .'+ancora).css('display') == 'none')) {
			girarManequim(lado);
		}

		if (preenchimento_habilitado == 1) {
			if (texto == 1) 
				preencheAtributo('superior',ancora+'_posicao',lado,1);
			else
				preencheAtributo('superior',ancora+'_posicao',lado,0);
		}
	});
	$('input').bind('input[type="text"]', function() {
		var c = this.selectionStart,
			r = /[^a-z0-9 .]/gi,
			v = $(this).val();
		if (r.test(v)) {
			$(this).val(v.replace(r, ''));
			c--;
		}
		this.setSelectionRange(c, c);
	});

	$('.bt-upload').on('click', function(){
		if (modelo_conjunto == 1 && (!peca_visivel || peca_visivel == '')) {
			var array_pecas = ['alcao', 'eiao', 'calca'];
			var array_nomes = ['alção', 'eião', 'calça'];
			var nome_superior = peca_superior; var nome_inferior = peca_inferior; var nome_acesssorio = peca_acessorio;
			array_pecas.forEach( (tag, i) => {
				var replace = tag; 
				nome_superior = nome_superior.replace(new RegExp(replace, 'gi'), array_nomes[i]); 
				nome_inferior = nome_inferior.replace(new RegExp(replace, 'gi'), array_nomes[i]); 
				nome_acesssorio = nome_acesssorio.replace(new RegExp(replace, 'gi'), array_nomes[i]);
			});

			swal({
				title: 'Escolha onde inserir upload',
				text: ' ',
				button: '',
				className: 'swal-modal-width',
				closeOnClickOutside: false,
				closeOnEsc: false
			});

			$('.swal-modal').css('min-width', 'fit-content').css('width', '20%');
			var html =  '<div id="lista-posicao_upload" class="opcoes">' +
							'<div class="opcao_lado" rel="'+peca_superior+'">'+nome_superior.charAt(0).toUpperCase() + nome_superior.slice(1)+'</div>';
				if (peca_inferior != '')
					html += '<div class="opcao_lado" rel="'+peca_inferior+'">'+nome_inferior.charAt(0).toUpperCase() + nome_inferior.slice(1)+'</div>';
				html +=	'</div>';
			$('.swal-text').html(html);
			$('.swal-button').hide();
		}
		else {
			posicao_upload = (peca_visivel != '' && peca_visivel) ? peca_visivel : peca_superior;
			if (modelo_rotacionar == 1 || modelo_verso == 1) {
				ladoUpload();
			}
			else {
				lado_upload = '';
				$('#upload_arquivo').trigger('click');
			}
		}
	});
	$(document).on('click', '#lista-posicao_upload .opcao_lado', function(e){
		e.stopPropagation();
		
		posicao_upload = $(this).attr('rel');
		ladoUpload();
	});
	$(document).on('click', '#lista-lado_upload .opcao_lado', function(e){
		e.stopPropagation();
		lado_upload = $(this).attr('rel');

		var medida_upload = Math.round($('.engloba_'+posicao_upload+' .fundos-svgs').width() * 0.9);
		$('#formImagem #l_padrao, #formImagem #h_padrao').val(medida_upload);
		$('#upload_arquivo').trigger('click');
	});
	$('#upload_arquivo').change(function() {
		$('#formImagem').attr('action', 'procedimentos/uploadimg.php');
		$('#formImagem').submit();
		$('#upload_arquivo').val('');
	});
	$(document).on('click', '.opcao_lado:not(.posicionar)', function(){
		swal.close();
		$('div[class^="manequim"]').removeClass('ativo');
		$('.manequim'+$(this).attr('rel')).addClass('ativo');

		var retorno = $(this).parent().attr('rel');
		if ((typeof eval(retorno) == 'function'))
			eval(retorno)($(this).parent().attr('data-i'));
		else
			$('#'+retorno).click();
	});
	$(document).on('click', '.posicionar', function(){
		swal.close();
		if ($(this).attr('rel') == 'true') {
			opcoesLado('carregarImagem', img_posicionar, true);
		} else {
			removerImagem();

			for (var i_lado=0; i_lado<2; i_lado++) {
				var lado_imagem = (i_lado == 0) ? '.manequim' : '.manequim_verso';
				var lado = (lado_imagem == '.manequim') ? '' : '_verso';
				var largura_manequim = $(lado_imagem + ' #molde_'+peca_superior+lado).width();
				var altura_manequim = $(lado_imagem + ' #molde_'+peca_superior+lado).height();
				imgGaleria = new Array();
				imgGaleria.sucesso = 1;
				imgGaleria.imagem = new Array();
				imgGaleria.imagem.arquivo = (lado_imagem == '.manequim') ? tema["imagem"][img_posicionar] : tema["imagem_verso"][img_posicionar];
				imgGaleria.imagem.largura = largura_manequim;
				imgGaleria.imagem.altura = altura_manequim;
				imgGaleria.imagem.info = '';
				imgGaleria.imagem.lado = (lado_imagem == '.manequim') ? '' : '_verso';
				imgGaleria.imagem.galeria = 1;
				imgGaleria.imagem.mensagem = '';
				
				carregarImagem(imgGaleria, '', false);
			}
		}
	});
	$('#formImagem').on('submit', function(e){
		e.preventDefault();
		var manequim = $('div[class^="manequim"].ativo').attr('class').split(' ');
		var manequim_ativo = manequim[0];
		var lado_manequim = (manequim[0].indexOf('_')) ? manequim[0].split('_') : '';
		var lado = (lado_upload == '') ? 'frente' : lado_upload;
		$('#formImagem #lado').val(lado);
		$('#aguarde').show();
		
		var url = $(this).attr('action');
		$.ajax({
			url: url,
			type: $(this).attr('method'),
			dataType: 'JSON',
			data: new FormData(this),
			processData: false,
			contentType: false,
			success: function (data, status) {
				$('#aguarde').hide();
				var idrag = $('div[id^="item_drag-"]').length;
				var imgPreload = new Image();
				$(imgPreload).attr({ src: data.imagem.arquivo });

				if (status == 'error') {
					mensagem('', 'Falha ao carregar imagem.\nTente novamente.', 'error');
				}
				else {
					var largura_upload = data.imagem.largura;
					var altura_upload = data.imagem.altura;
					var w_peca = $('#lista_lados .'+manequim_ativo+' .modelo').width();
					var h_peca = $('#lista_lados .'+manequim_ativo+' .engloba_'+posicao_upload+' .fundos-svgs').height();
					var left_upload = (w_peca - largura_upload) / 2;
					var top_upload = (h_peca - altura_upload) / 2;
					var style_upload = 'left:'+left_upload+'px; top:'+top_upload+'px; width:'+largura_upload+'px; height:'+altura_upload+'px;';
					if (esporte_dir == 'futebol_masculino_3')
						style_upload += (lado_upload == '') ? 'transform: rotateX(10deg) rotateY(20deg);' : 'transform: rotateX(10deg) rotateY(-20deg);';
					var item_drag = '<div id="item_drag-'+idrag+'" class="imagem_drag selecionado" style="'+style_upload+'" data-peca="'+posicao_upload+'" data-lado="'+lado_upload+'">' +
										'<img class="imagem_produto" draggable="false" src="'+data.imagem.arquivo+'">' +
										'<div class="ferramentas_edicao">' +
											'<div class="acima" title="Trazer para frente"></div>' +
											'<div class="abaixo" title="Trazer para trás"></div>' +
											'<div class="remover-drag"></div>' +
										'</div>' +
									'</div>';

					var parte_upload = (mostrar_pecas == 0) ? arrayPecas.find(item => item[1] === posicao_upload)[0] : posicao_upload;
					var icamada_ultimo;
					if ($('.'+manequim_ativo+' #mask_upload_'+posicao_upload+lado_upload+' div[id^="item_drag-"]').length > 0) {
						icamada_ultimo = $('#lista_lados .'+manequim_ativo+' #mask_upload_'+posicao_upload+lado_upload+' div[id^="item_drag-"]').last().css('z-index');
						$(item_drag).insertAfter($('#lista_lados .'+manequim_ativo+' #mask_upload_'+posicao_upload+lado_upload+' div[id^="item_drag-"]').last());
						$('#item_drag-'+idrag).css('z-index', icamada_ultimo).attr('data-camada', icamada_ultimo);
					} else {
						switch (esporte_dir) {
							case 'bone_6_gomos':	 
							case 'bone_trucker':
								var caminho_molde = '{PASTA_RAIZ_SIMULADOR}/img/manequim/svg/'+esporte_dir+lado_upload+'_mascara.svg'+versao_simu;
								break;
							default:
								var caminho_molde =  eval('link_molde_'+parte_upload+lado_upload);
						}
						var link_mask = caminho_molde;
						var config_drag = link_mask;
						var style_drag = 'position: absolute; width: 100%; height: '+h_peca+'px; left: 0; right: 0; margin: 0 auto; -webkit-mask-position: center center; -webkit-mask-repeat: no-repeat;';
							style_drag += (esporte_dir == 'futebol_masculino_3') ? 'z-index: 5; perspective: 800px;' : 'z-index: 3;';

						var html_mask = '<div id="mask_upload_'+posicao_upload+lado_upload+'" data-config="'+config_drag+'" style="'+style_drag+'"></div>';
						$('#lista_lados .'+manequim_ativo+' .engloba_'+posicao_upload).prepend(html_mask);
						$('#lista_lados .'+manequim_ativo+' .engloba_'+posicao_upload+' #mask_upload_'+posicao_upload+lado_upload).prepend(item_drag);
						$('#lista_lados #item_drag-'+idrag).css('z-index', icamada).attr('data-camada', icamada);
					}

					if (manequim_ativo.indexOf('direita') > -1 && esporte == 'mascara')
						$('#item_drag-'+idrag).css('transform', 'rotate(10deg)');
					else if (manequim_ativo.indexOf('esquerda') > -1 && esporte == 'mascara')
						$('#item_drag-'+idrag).css('transform', 'rotate(-10deg)');

					if ($(window).width() <= 640)
						$('#box_edicao .bt_fechar').click();

					if (data.imagem.galeria == 0)
						mensagem('Fique Tranquilo!', 'O seu desenho passará por especialistas em tratamento de imagem para garantir a qualidade de impressão no produto.');

					iniciaFerramentasDrag('imagem', idrag);

					$('#lista_edicao li').removeClass('ativo');

					setTimeout(function() {
						$('#box-imagens').removeAttr('style').prop('disabled', false);
						$('#box-imagens img').css('cursor', 'pointer');
					}, 1000);
				}
			}, error: function (xhr, desc, err) {
				$('#aguarde').hide();
				$('#site').css('pointer-events', 'auto');

				console.warn(xhr.responseText);
				console.log('retornou erro upload: '+err);
				console.log(xhr, desc, err);

				mensagem('', 'Ocorreu um erro ao inserir a imagem.\nTente novamente mais tarde.', 'error');

				setTimeout(function() {
					$('#box-imagens').removeAttr('style').prop('disabled', false);
					$('#box-imagens img').css('cursor', 'pointer');
				}, 1000);
			}
		});
	});
	$('div[class^="manequim"]').on('click', function(e){
		if ( $(e.target).attr('class') !== undefined && $(e.target).attr('class').indexOf('textura') == 0 && $('div[id^="item_drag-"][class*="selecionado"]').length ) {
			desabilitaFerramentasDrag();
			e.stopPropagation();
		}
	});
	document.addEventListener('keydown', function(event) {
		const key = event.key;
		if (key === 'Delete')
			$('div[id^="item_drag-"][class*="ativo"] .remover-drag').click();
		else if (key === 'ArrowUp')
			$('div[id^="item_drag-"][class*="ativo"] .acima').click();
		else if (key === 'ArrowDown')
			$('div[id^="item_drag-"][class*="ativo"] .abaixo').click();
	});
	$(document).on('click', '#add-texto', function(){
		if ($('.texto_drag').length == 0)
			$('.edicao_texto #info-texto').slideDown();

		opcoesLado('addTexto', '');
	});
	$('.bt_alinhamento').on('click', function(){
		var drag_selecionado = $('#info-texto').attr('data-ancora');
		if (!$(this).hasClass('ativo')) {
			$('.bt_alinhamento').removeClass('ativo');
			$(this).addClass('ativo');

			var align = $(this).attr('rel');
			if (align)
				$('#'+drag_selecionado).css('justify-content', align);
		}
	});
	$('.lista_textos').on('click', 'li', function(e){
		var id = $(this).attr('rel');
		var lado = $(this).attr('data-lado').replace('_','');
		if (e.target.className != 'remover') {
			if ($('#lista_lados .conteudo').css('flex-direction') != 'row')
				girarManequim(lado);

			$('.lista_textos .bt_selecionar').not($(this).find('.bt_selecionar')).removeClass('ativo');
			$('.lista_textos .bt_selecionar').not($(this).find('.bt_selecionar')).html('Selecione');
			$(this).find('.bt_selecionar').toggleClass('ativo');

			if ($(this).find('.bt_selecionar').hasClass('ativo')) {
				$(this).find('.bt_selecionar').html('Selecionado');
				habilitaFerramentasDrag(id);
			}
			else {
				$(this).find('.bt_selecionar').html('Selecione');
				desabilitaFerramentasDrag();
			}

			atualizaInfoTexto(id);
		}
		else {
			$(this).find('.remover').addClass('ativo');
			$('#'+id).find('.remover-drag').click();
		}
	});
	$('div[class^="manequim"]').on('click touchstart', '.imagem_drag, .texto_drag', function(e){
		if (!$(this).hasClass('ativo')) {
			habilitaFerramentasDrag($(this).attr('id'));

			if ($(this).hasClass('texto_drag')) {
				atualizaInfoTexto($(this).attr('id'));
				
				if ($('#lista_edicao .opcao[rel="edicao_texto"]').hasClass('ativo') == false && $(window).width() > 767)
					$('#lista_edicao .opcao[rel="edicao_texto"]').click();
			}	

			e.stopPropagation();
		}
	});
	$('div[class^="manequim"]').on('click touchstart', '.acima, .abaixo', function(e){
		var nome_class = $(this).attr('class');
		var tot_div = $(this).parent().parent().parent().find('div[id^="item_drag-"]').length - 1;
		var i_drag_atual = $(this).parent().attr('rel');
		var eq_atual = $('#item_drag-'+i_drag_atual).index();
		var div_anterior = $('#item_drag-'+i_drag_atual).prev().attr('id');
		var div_posterior = $('#item_drag-'+i_drag_atual).next().attr('id');

		if (nome_class == 'acima' && eq_atual < tot_div)
			$('#'+div_posterior).after($('#item_drag-'+i_drag_atual).detach());
		else if (nome_class == 'abaixo' && eq_atual > 0)
			$('#'+div_anterior).before($('#item_drag-'+i_drag_atual).detach());
	});
	$('div[class^="manequim"]').on('click touchstart', '.remover-drag', function(e) {
		var drag_selecionado = $(this).parent().attr('rel');
		var item = $(this).parent().parent().attr('class');
		var item_excluido = 0;
		
		mensagem('', 'Tem certeza que deseja excluir?', '', function(r) {
			if (r) { 
				if (item.indexOf('imagem_drag') > -1) {
					if (item.indexOf('galeria') > -1) {
						mensagem('', 'Imagem foi excluída.', 'success');
						$('#item_drag-'+drag_selecionado).remove();
						item_excluido = 1;
						$(this).parent().hide();
					}
					else {	
						if (typeof arr_simulacao != 'undefined') {
							mensagem('','Imagem foi excluída.','success');
							$('#item_drag-'+drag_selecionado).remove();
							item_excluido = 1;
						}
						else {
							mensagem('','Imagem foi excluída.','success');
							$('#item_drag-'+drag_selecionado).remove();
							item_excluido = 1;
						}		
					}	
				}
				else {
					mensagem('','Texto foi excluído.','success');

					if (mostrar_textos == 1)
						alterarArrayAtual(0,'texto_','superior');

					$('.lista_textos li[rel="item_drag-'+drag_selecionado+'"]').remove();
					$('#item_drag-'+drag_selecionado).remove();
					
					if ($('.texto_drag').length > 0) {
						$('.texto_drag').each(function(index, element) {
							var i_atual = $(this).attr('rel');
							// info
							var texto = $('div[id^="item_drag-"][rel="'+i_atual+'"] .texto').html();
							var cor = $('div[id^="item_drag-"][rel="'+i_atual+'"] .texto').attr('data-idcor');
							var fonte = $('div[id^="item_drag-"][rel="'+i_atual+'"] .texto').css('font-family');
							var fonte_tam = $('div[id^="item_drag-"][rel="'+i_atual+'"] .texto').css('font-size').replace('px','');
							var i_novo = (Number(index)+1);
							$(this).attr('rel', i_novo);
							preencheAtributo('superior','texto_'+i_novo,texto,0);
							preencheAtributo('superior','texto_'+i_novo+'_cor',cor,0);
							preencheAtributo('superior','texto_'+i_novo+'_fonte',fonte,0);
							preencheAtributo('superior','texto_'+i_novo+'_fonte_tamanho',fonte_tam,0);
						});
						tot_textos = $('.texto_drag').length;
						$('.lista_textos li').eq(0).click();
					}
					else {
						$('#info-texto, #select-texto_frente').hide();
						$('.ipt-texto').val('');
					}

					item_excluido = 1;
				}		

				var verifica_exclusao = setInterval(function(){
					if (item_excluido == 1) {
						clearInterval(verifica_exclusao);

						if (typeof arrayStatus[iStatus]['upload_'+drag_selecionado] != 'undefined') {
							delete arrayStatus[iStatus]['upload_'+drag_selecionado];
							arrayPartes = arrayClone(arrayStatus[iStatus]);
						}
		
						if ($('div[id^="mask_upload_"]').length) {
							$('div[id^="mask_upload_"]').each(function(i){
								if ($(this)[0].children.length == 0)
									$(this).remove();
							});
						}

						var n_drag = $('div[id^="item_drag-"]').length;
						if (n_drag < 2)
							$('.ferramentas_edicao .acima, .ferramentas_edicao .abaixo').hide();
						
						$('div[id^="item_drag-"]').each(function(index, element) {
							var id_atual = $(element).attr('id');
							var tipo = $(element).attr('class');

							$(element).attr('id', 'item_drag-'+index).find('.ferramentas_edicao').attr('rel', index);

							$(this).draggable('destroy');
							if (tipo.indexOf('imagem_') > -1)
								iniciaFerramentasDrag('imagem', index);
							else
								iniciaFerramentasDrag('texto', index);

							$('.lista_textos li[rel="'+id_atual+'"]').attr('rel', 'item_drag-'+index);
						});	

						desabilitaFerramentasDrag();
					}
				}, 500);
			} 
			else { 
				$('.lista_textos li div[class*="remover"]').removeClass('ativo');
				return false;
			}
		});
	});
	$('.edicao_texto').on('click', '.ipt-texto, #box_alinhamento, .lista-fontes, .tamNum, .cor_camada[rel="texto"]', function(){
		if ($('div[class^="item_drag-"][class*="ativo"]').length == 0) {
			var drag_selecionado = $(this).closest('#info-texto').attr('data-ancora');
			if (drag_selecionado)
				habilitaFerramentasDrag(drag_selecionado);
		}
	});

	$('.menu_oculto').click(function(e){
		e.stopPropagation();
	});
	$('.bt_zoom').on('click', function(){
		if ($(this).attr('id') == 'mais')
			zoomManequim('+');
		else if ($(this).attr('id') == 'menos')
			zoomManequim('-');
	});
	$('#voltar').on('click', function (){
		esperando_desenhos = 0;
		if (iStatus > 0) {
			iStatus = parseInt(iStatus) - parseInt(1);
			if (iStatus > 0) 
				$(this).removeClass('desativado');
			else 
				$(this).addClass('desativado');

			$('#avancar').removeClass('desativado');
			carregarStatus(arrayStatus[iStatus]);
		} 
		else {
			$(this).addClass('desativado');
		}

		aux_parte = '';
		aux_chave = '';
		aux_valor = '';
	});
	$('#avancar').on('click', function (){
		esperando_desenhos = 0;
		if (iStatus < Object.keys(arrayStatus).length-1) {
			iStatus = parseInt(iStatus) + parseInt(1);
			if (iStatus < Object.keys(arrayStatus).length-1) 
				$(this).removeClass('desativado');
			else 
				$(this).addClass('desativado');

			$('#voltar').removeClass('desativado');
			carregarStatus(arrayStatus[iStatus]);
		}
		else {
			$(this).addClass('desativado');
		}
	});
	$('#menu_mobile, #ico-menu').on('click', function(e){
		e.stopPropagation();
		$(this).toggleClass('ativo');
		$(this).find('.menu_oculto').toggle();
	});
	$('#bt_salvar').on('click', function(e){
		e.stopPropagation();
		if ($(this).find('.menu_oculto .opcao').length > 1) {
			$(this).toggleClass('ativo');
			$(this).find('.menu_oculto').toggle();
		}
		else {
			$('#site').css('pointer-events','none');

			$('#aguarde h2').html('Salvando...');
			$('#aguarde img').hide();

			desabilitaFerramentasDrag();
			$('#bt_salvar').removeClass('ativo');
			$('.menu_oculto').hide();

			$('#aguarde').css('background-color','#666').show('fast', function() {
				setTimeout(function(){
					salvarImagem(0, 0, 1);
				},500);
			});
		}
	});
	$('.salvar-computador').on('click', function(e){
		e.preventDefault();
		$('#site').css('pointer-events','none');

		$('#aguarde h2').html('Salvando...');
		$('#aguarde img').hide();

		desabilitaFerramentasDrag();
		$('#bt_salvar').removeClass('ativo');
		$('.menu_oculto').hide();

		$('#aguarde').css('background-color','#666').show('fast', function() {
			setTimeout(function(){
				salvarImagem(0, 0, 1);
			},500);
		});
	});
	$('#bt_visualizar').on('click', function(e){
		e.preventDefault();
		if (clicado != 1) {
			clicado = 1;
			abrirVisualizacao();
		}
	});
	$('.bt_fechar-visualizar').on('click', function(e){
		e.preventDefault();
		clicado = 0;
		$('#box_visualizar .simulacao div').remove();
		$('#site').show();
		$('#box_visualizar').hide();
		$('body').css('background-color', 'unset');
		window.history.replaceState('', '', url_inicial);

		if ($('.box_contatos_whatsapp').length) {
			$('.box_contatos_whatsapp .bt_atendimento').each(function(){
				var link_atual = $(this).attr('href').split('&text=');
				var link_compartilhar = link_atual[0];
				$(this).attr('href', link_compartilhar);
			});
		}
	});
	$('#bt_orcamento, #bt_orcamento_2').on('click', function(e){
		e.preventDefault();
		$('#site').css('pointer-events','none');

		if ($('.cor_camada[rel="pele"]').length)
			alterarArrayAtual(0,'cor_pele');

		desabilitaFerramentasDrag();
		$('#bt_salvar').removeClass('ativo');
		$('.menu_oculto').hide();

		$('#aguarde').css('background-color','#666').show('fast', function() {
			setTimeout(function(){
				salvarImagem(1, 0, 0);
			}, 500);
		});
	});

	$('.modalidades li').css('order', '2');
	$('.modalidades li a[rel="'+esporte+'"]').parent().css('order', '1');
	$('.modalidades li a[rel="'+esporte+'"]').addClass('escolhido').addClass('ativo');
	$('#opcoes_modalidades a[class="'+esporte+'"]').attr('href','javascript:void(0);');
	$('.modalidades li a[rel="'+esporte+'"]').removeAttr('href');
	$('.outros_simulador').click(function (){
		$('#bt-trocar_modalidade').click();
	});
	$('#bt-trocar_modalidade').on('click', function(e){
		e.preventDefault();
		mudaQuadro(1);
		abrirMensagem('<div id="trocar_modalidade" style="width:'+parseInt($(document).width()*0.75)+'px">'+$('#trocar_modalidade').html()+'</div>');
		$('.swal-button').remove();
	});
	var lastScrollLeft = 0;
	$('.lista_modalidades').scroll(function(element) {
		var documentScrollLeft = $(this).scrollLeft();
		var totalScrollLeft = documentScrollLeft + $(this)[0].clientWidth;
		
		if (lastScrollLeft != documentScrollLeft)
			lastScrollLeft = documentScrollLeft;

		if (totalScrollLeft >= $(this)[0].scrollWidth)
			$('#lista_modalidades .seta_direita, .modalidades .seta_direita').addClass('inativo');
		else
			$('#lista_modalidades .seta_direita, .modalidades .seta_direita').removeClass('inativo');

		if (lastScrollLeft > 0)
			$('#lista_modalidades .seta_esquerda, .modalidades .seta_esquerda').removeClass('inativo');	
		else 
			$('#lista_modalidades .seta_esquerda, .modalidades .seta_esquerda').addClass('inativo');
	});
	$('#lista_modalidades .seta_esquerda, .modalidades .seta_esquerda').click(function (){
		$('.lista_modalidades').animate( { scrollLeft: '-=135' }, 1000, 'easeOutQuad' );	
	});
	$('#lista_modalidades .seta_direita, .modalidades .seta_direita').click(function (){
		$('.lista_modalidades').animate( { scrollLeft: '+=135' }, 1000, 'easeOutQuad' );	
	});
	$('.modalidades li a').hover(function() {
		$(this).addClass('ativo'); 	
	}, function() {
		if (!$(this).hasClass('escolhido')) 
			$(this).removeClass('ativo'); 
	});
	$('.modalidade-icone, .modalidades li div').click(function(e){
		e.stopPropagation();
	});

	$('#img_goleiro').on('click', function(e){
		e.preventDefault();
		swal.close();
	});
	$('#box_goleiro button').on('click', function(e){
		e.preventDefault();
		swal.close();
	});
});
$(window).on('load', function(){
	var carrega = setInterval(function() {
		if ( permitir == 1 && (tot_golas == tot_golas_carregadas && tot_golas == tot_golas_verso_carregadas) ) {
			clearInterval(carrega);
			personalizaUniforme();
		}
	}, 400);
});