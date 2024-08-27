var passo = 1 ;

$(document).ready(function() {
	if(telefone) $('.telefone').show();
	if(celular) $('.celular').show();
	if(url_facebook) $('.facebook').show();
	if(url_instagram) $('.instagram').show();
	
	$("#bt_menu-mobile").click(function() {
		if($(this).hasClass("fechar")){
			$("#lista_menu").animate({left: "-100%", right: "100%"}, 500);
			$("body").removeClass("prevent-scroll");
			$(this).removeClass("fechar");
		} else {
			$("#lista_menu").animate({left: "0", right: "40px"}, 500 );
			$("body").addClass("prevent-scroll");
			$(this).addClass("fechar");
		}	
	});
	
	$("#bt_filtrar-mobile").click(function(){
		$("#filtro-categorias").toggle();
		$(this).toggleClass("ativo");
	});

	$('.bt_ver-mais').click(function() {
		$('.outras').show();
		$('.bt_ver-mais').hide();
	});
	
	$("#telContato").mask("(00) 0000-00009");
	
	$("#contatoForm").on('submit', function(){
		if ($("#nomeContato").val().trim() == '' || $("#emailContato").val().trim() == '' || $("#msgContato").val().trim() == '') {
			mensagem("", "Preencha os campos obrigatórios.", "info");
			$("#nomeContato, #emailContato, #msgContato").css('box-shadow', '0px 0px 4px 2px #000');
			return false;
		}
	});
	
	$("#nomeContato, #emailContato, #msgContato").keyup(function(){
		$(this).css('box-shadow','none');	
	});
	
	$("#formContato").submit(function() {
		// submit more than once return false
		$(this).submit(function() {
			return false;
		});
		// submit once return true
		return true;
	});
	
	$('.link_email').each(function(index, element) {
		$(element).attr('href', $(element).attr('href').replace('/', ''));
	});
	if ($(window).width() <= 670) {
		$('#links a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
					return false;
				}
			}
		});
		
		$("#lista_menu .link").click(function(){
			$("#menu_mobile .fechar").click();
		});
	} else {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
					  scrollTop: target.offset().top
				}, 1000);
					return false;
				}
			}
		});
	}	
	
	$(window).scroll(function () { 	
		if ($(this).scrollTop() > 400) { 
			$('#bt_topo').css('opacity','1'); 
		} else $('#bt_topo').css('opacity','0'); 
	});
	
	$('#bt_topo').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow');	
	});

});

function recaptchaCallback() {
	$(".g-recaptcha div:first").css("border", "none");
}
function recaptchaResponse() {
	if (grecaptcha.getResponse() == "") {
		$(".g-recaptcha div:first").css("border", "2px solid red");
		return false;
	}
	else {
		$("#formContato #bt_enviar").attr("value","AGUARDE...");
	}
}

function mensagem(titulo,msg,tipo,callback) {
	if (tipo != "") {
		swal({
		  title: titulo,
		  text: msg,
		  icon: tipo,
		  button: "Ok",
		});
	} 
	else if (callback) {
		swal({
		  title: titulo,
		  text: msg,
		  icon: "warning",
		  buttons: ["Cancelar", "Sim"],
		  dangerMode: true,
		})
		.then((willDelete) => {
		 if (willDelete) {
			 callback(true);
		  }
		});
	}
	else {
		if (titulo != "") swal(titulo, msg);
		else swal(msg);
	}
}