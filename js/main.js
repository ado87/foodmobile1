
$(document).ready( function(){
   $(window).scroll(function(){
    if($(this).scrollTop() > 900) {
        $('.link').fadeIn();
    } else {
        $('.link').fadeOut();
    }
    });

    $('.link').click(function() {
        $('html, body').animate( {scrollTop : 0 }, 600);
        return false;
    }); 
});
