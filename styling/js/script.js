/* Smooth Scroll */
jQuery(document).ready(function(){
   
    jQuery('a[href^="#"]').click(function(e) {

        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - 50}, 1000);

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

/* change element on scroll */
var targetOffset = $("#contentstart").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('.mainnav').css({"background":"#767676"});
        $('.mainnav').css({"height":"50px"});
        $('button.navtoggle').css({"margin":"10px auto"});
        $('ul.mainlinks a').css({"color":"#FFC330"});
		$('ul.mainlinks a:hover').css({"color":"#000000"})
    } else {
      $('.mainnav').css({"background":""});
	  $('ul.mainlinks a').css({"color":""});
		$('ul.mainlinks a:hover').css({"color":""});
		$('.mainnav').css({"height":""});
        $('button.navtoggle').css({"margin":""});
    }
});