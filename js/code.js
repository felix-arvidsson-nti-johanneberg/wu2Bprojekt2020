//skript som ska öka opacity när man scrollar
/*window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        $('header').fadeOut();
    }
    else {
        $('header').fadeIn();
    }
},false);
*/
$(document).ready(function(){
    $(window).scroll(function(){
        $('#headerbackground').css("opacity", 0 + $(window).scrollTop() / 300)
    })
})