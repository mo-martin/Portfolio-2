 $("#link1").click(function (e) {
     $('html, body').animate({
         scrollTop: $("#top-page").offset().top
     }, 2000);
     e.preventDefault();
 });
 $("#link2").click(function (e) {
     $('html, body').animate({
         scrollTop: $("#about").offset().top
     }, 2000);
     e.preventDefault();
 });
 $("#link3").click(function (e) {
     $('html, body').animate({
         scrollTop: $("#contact").offset().top
     }, 2000);
     e.preventDefault();
 });