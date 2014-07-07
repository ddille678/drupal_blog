(function ($){
$(document).ready(function(){
  $("#site-name a, #site-slogan, .region-header ul.menu li a:link").css({color: "#fff"});
  $("#header-wrapper").mouseenter(function() {
    $("#site-name a, #site-slogan, .region-header ul.menu li a:link").animate({ color: "#99BFE6"}, 1000);
  });
  $("#header-wrapper").mouseleave(function() {
    $("#site-name a, #site-slogan, .region-header ul.menu li a:link").animate({ color: "#fff"}, 1000);
  });
});
})(jQuery);