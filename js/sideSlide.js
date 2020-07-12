$(document).ready(function() {
    $(window).scroll( function(){
        $('.slide').each( function(i){
            
            var bottom_of_element = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height() / 1.15;
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 

        $('.slideDown').each( function(i){
            
            var bottom_of_element = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height() / 1.12;
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px'},1000);
            }
            
        }); 

    });
});