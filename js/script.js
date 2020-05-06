$(document).scroll(function(){     //.scroll() = quando rolo a página

    var topoPagina = $(window).scrollTop();  //.scrollTop() = valor da distância da página referente ao topo.

    if(topoPagina > 600){
        $("nav").addClass("nav-fixed"); //adiciona a classe que deixa o menu fixo no topo
    }
    else{
        $("nav").removeClass("nav-fixed"); // remove a classe
    }

    });