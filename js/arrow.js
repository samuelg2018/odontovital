// ===== Scroll to Top =====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {       // If page is scrolled more than 300px
        $('#arrow-top').fadeIn(200);    // Fade in the "go to top" arrow
    } else {
        $('#arrow-top').fadeOut(200);   // Else fade out the "go to top" arrow
    }
});

$('#arrow-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#arrow-down').fadeOut(200);      // Fade out the down arrow
    } else {
        $('#arrow-down').fadeIn(200);       // Else fade in the down arrow
    }
});

