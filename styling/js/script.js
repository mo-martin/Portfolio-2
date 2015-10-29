/* Smooth Scroll */
jQuery(document).ready(function(){
   
    jQuery('a[href^="#"]').click(function(e) {

        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);

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