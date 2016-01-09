/* Smooth Scroll */
jQuery(document).ready(function(){
	var current_width = $(window).width();
    jQuery('a[href^="#"]').click(function(e) {
		if(current_width < 768) {
		jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - 50}, 1000);
		}
		else {
			jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - 70}, 1000);
		}
        return false;
        e.preventDefault();
    });
});

/* Responsive Nav - */
$(document).ready(function(){
    $("button.navtoggle").click(function(){
        $(".mainlinks").slideToggle();
    });
});

(function($){
  $(document).ready(function(){
    var current_width = $(window).width();
    if(current_width < 768){
      $(".mainlinks").css("display","");
    }
  });
  $(window).resize(function(){
    var current_width = $(window).width();
    if(current_width > 768){
      $(".mainlinks").css("display","table");
    }
	else {
		$(".mainlinks").css("display","");
	}
  });
})(jQuery);

(function($){  
  $(document).ready(function(){
	var targetOffset = $("#contentstart").offset().top - 100;
    var current_width = $(window).width();
	var $w = $(window).scroll(function(){
    if(current_width < 768 && $w.scrollTop() > targetOffset){
      $(".mainlinks").css("background","#a2a2a2");
    }
	else {
		$(".mainlinks").css("background","");
	}
  });
  });
  $(window).resize(function(){
	var targetOffset = $("#contentstart").offset().top - 100;
    var current_width = $(window).width();
	var $w = $(window).scroll(function(){
		if(current_width < 768 && $w.scrollTop() > targetOffset){
		  $(".mainlinks").css("background","#a2a2a2");
		}
		else {
			$(".mainlinks").css("background","");
		}
		});
  });
})(jQuery);

/* change element on scroll */
/*
var targetOffset = $("#contentstart").offset().top - 100;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('.mainnav').css({"background":"#767676"});
        $('.mainnav').css({"height":"50px"});
        $('button.navtoggle').css({"margin":"5px auto"});
        $('ul.mainlinks a').css({"color":"#FFC330"});
		$('ul.mainlinks a:hover').css({"color":"#000000"})
    } else {
      $('.mainnav').css({"background":""});
	  $('ul.mainlinks a').css({"color":""});
		$('ul.mainlinks a:hover').css({"color":""});
		$('.mainnav').css({"height":""});
        $('button.navtoggle').css({"margin":""});
    }
});*/
var targetOffset = $("#contentstart").offset().top - 100;
var targetOffset2 = $("#skillset").offset().top;
var targetOffset3 = $("#contentstart").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('.mainnav').css({"background":"#767676"});
        $('.mainnav').css({"height":"50px"});
        $('button.navtoggle').css({"margin":"5px auto"});
        $('ul.mainlinks a').css({"color":"#FFC330"});
		$('ul.mainlinks a:hover').css({"color":"#000000"})
    } 
	else if($w.scrollTop() > targetOffset2){
		$('.mainnav').css({"background":"#fff"});
        $('.mainnav').css({"height":"50px"});
        $('button.navtoggle').css({"margin":"5px auto"});
        $('ul.mainlinks a').css({"color":"#000"});
		$('ul.mainlinks a:hover').css({"color":"#000000"})
	}
	else if($w.scrollTop() > targetOffset3){
		$('.mainnav').css({"background":"#666"});
        $('.mainnav').css({"height":"50px"});
        $('button.navtoggle').css({"margin":"5px auto"});
        $('ul.mainlinks a').css({"color":"#000"});
		$('ul.mainlinks a:hover').css({"color":"#000000"})
	}else {
      $('.mainnav').css({"background":""});
	  $('ul.mainlinks a').css({"color":""});
		$('ul.mainlinks a:hover').css({"color":""});
		$('.mainnav').css({"height":""});
        $('button.navtoggle').css({"margin":""});
    }
});

/* Blog posts */ 

$(document).ready(function(){
    $("#gridsetblog").click(function(){
        $('#blogpost1').show();
    });
    $("#portfolioblog").click(function(){
        $('#blogpost2').show();
    });
    $("#amendmentsblog").click(function(){
        $('#blogpost3').show();
    });
    $(".popupclose").click(function(){
        $('.blogpost').hide();
    });
});
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('.blogpost').hide();
    }
});