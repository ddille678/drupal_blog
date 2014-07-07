(function ($){
$(document).ready(function() {
  $('.region-header ul.menu li a').append('<div></div>');
  $('.region-header ul.menu li div').addClass( "tell1 tell2" );
  $('.region-header ul.menu li a')
    .mouseenter(function(){
        $(this).children().switchClass( "tell2", "tell-active", 300 );
    })
    .mouseleave(function(){
        $(this).children().switchClass( "tell-active", "tell2", 300 );
    });
});
})(jQuery);