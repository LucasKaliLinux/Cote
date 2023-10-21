$(function(){
    
    $('.icone-seta').click(function(){

        var elOff = $('.mosaico').offset().top;

        $('html,body').animate({
            "scrollTop":elOff
        });
    });

})