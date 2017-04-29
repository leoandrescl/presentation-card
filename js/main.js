$(document).ready(function(){
    var banner = {
        father: $('#banner'),
        nroSlides: $('#banner').children('.slide').length,
        position: 1
    }
    
    var info = {
        father: $('#info'),
        nroSlides: $('#info').children('.slide').length,
        position: 1
    }
    
    banner.father.children('.slide').first().css({
        'left': 0
    });
    
    info.father.children('.slide').first().css({
        'left': 0
    });
    
    
    var heightContainer = function(){
        var heightWindow = $(window).height();

        if(heightWindow <= $('#container').outerHeight() + 200){
            $('#container').css({
                'height' : ''
            });
        } else {
            $('#container').css({
                'height' : heightWindow + 'px'
            });
        }
    }
    
    var heightBanner = function(){
        var height = banner.father.children('.slide').outerHeight();
        
        banner.father.css({
           'height' : height + 'px' 
        });
    }
    
    var heightInfo = function(){
        var height = info.father.children('.active').outerHeight();
        
        info.father.animate({
           'height' : height + 'px' 
        });
    }

    
    heightBanner();
    heightInfo();
    heightContainer();
    
    $(window).resize(function(){
        heightBanner(); 
        heightInfo();
        heightContainer();
    });
    /* cantidad de span automaticos */
    $('#info').children('.slide').each(function(){
       $('#buttons').append('<span>');
    });
    $('#buttons').children('span').first().addClass('active');
    
    /* -- banner -- */
    
    /* next arrow */
    $('#banner-next').on('click', function(e){
       e.preventDefault();

        if(banner.position < banner.nroSlides){
            // nos aseguramos que las demas slides comiencen desde la derecha
            banner.father.children().not('.active').css({
                'left' : '100%'
            });
            // removemos la clase active y se la asignamos al siguiente elemento, también lo animamos
            $('#banner .active').removeClass('active').next().addClass('active').animate({
               'left': '0' 
            });
            // animamos el slide anterior para que se deslize hacia la izquierda
            $('#banner .active').prev().animate({
                'left' : '-100%'
            });
            
            banner.position = banner.position + 1;
            
        } else {
            // hacemos que el slide activo (el último) se anime hacia la derecha
            $('#banner .active').animate({
               'left' : '-100%'
            });
            // seleccionamos todos los slides que NO tengan la clase active
            // y los posicionamos a la derecha
            banner.father.children().not('.active').css({
                'left' : '100%'
            });
            // eliminamos la clase active y se la asignamos al primer elemento
            // posteriormente se anima
            $('#banner .active').removeClass('active');
            banner.father.children('.slide').first().addClass('active').animate({
                'left': '0'
            });
            // reseteamos la posicion a 1
            banner.position = 1;
        }
        
    });
    
    /* previous arrow */
    $('#banner-prev').on('click', function(e){
        e.preventDefault();
        
        if(banner.position > 1){
            banner.father.children().not('.active').css({
               'left' : '-100%' 
            });

            $('#banner .active').animate({
               'left' : '100%' 
            });
            
            $('#banner .active').removeClass('active').prev().addClass('active').animate({
               'left' : 0 
            });
            
            banner.position = banner.position - 1;
        } else {
            banner.father.children().not('.active').css({
               'left' : '-100%'  
            });
            
            $('#banner .active').animate({
                'left' : '100%'
            })
            
            $('#banner .active').removeClass('active');
            banner.father.children().last().addClass('active').animate({
                'left' : 0
            });
            
            banner.position = banner.nroSlides;
        }
        
        
    });
    
    /* -- info -- */
    
    /* next arrow */
    /* reutilizacion de codigo, seleccionar "banner" y presionar "ctrl + B" para seleccionar todos los "banner" y luego escribir "info" */
    $('#info-next').on('click', function(e){
       e.preventDefault();

        if(info.position < info.nroSlides){
            // nos aseguramos que las demas slides comiencen desde la derecha
            info.father.children().not('.active').css({
                'left' : '100%'
            });
            // removemos la clase active y se la asignamos al siguiente elemento, también lo animamos
            $('#info .active').removeClass('active').next().addClass('active').animate({
               'left': '0' 
            });
            // animamos el slide anterior para que se deslize hacia la izquierda
            $('#info .active').prev().animate({
                'left' : '-100%'
            });
            
            /* buscamos elemento que tenga clase active, la eliminamos, y se la agregamos al siguiente elemento*/
            $('#buttons').children('.active').removeClass('active').next().addClass('active');
            
            info.position = info.position + 1;
            
        } else {
            // hacemos que el slide activo (el último) se anime hacia la derecha
            $('#info .active').animate({
               'left' : '-100%'
            });
            // seleccionamos todos los slides que NO tengan la clase active
            // y los posicionamos a la derecha
            info.father.children().not('.active').css({
                'left' : '100%'
            });
            // eliminamos la clase active y se la asignamos al primer elemento
            // posteriormente se anima
            $('#info .active').removeClass('active');
            info.father.children('.slide').first().addClass('active').animate({
                'left': '0'
            });
            
            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').first().addClass('active');
            
            // reseteamos la posicion a 1
            info.position = 1;
        }
        
        heightInfo();
        
    });
    
    /* previous arrow */
    $('#info-prev').on('click', function(e){
        e.preventDefault();
        
        if(info.position > 1){
            info.father.children().not('.active').css({
               'left' : '-100%' 
            });

            $('#info .active').animate({
               'left' : '100%' 
            });
            
            $('#info .active').removeClass('active').prev().addClass('active').animate({
               'left' : 0 
            });
            
            $('#buttons').children('.active').removeClass('active').prev().addClass('active');
            
            info.position = info.position - 1;
        } else {
            info.father.children().not('.active').css({
               'left' : '-100%'  
            });
            
            $('#info .active').animate({
                'left' : '100%'
            })
            
            $('#info .active').removeClass('active');
            info.father.children().last().addClass('active').animate({
                'left' : 0
            });
            
            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').last().addClass('active');
            
            info.position = info.nroSlides;
        }
        
        heightInfo();
    });
});