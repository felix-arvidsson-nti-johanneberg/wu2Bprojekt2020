//Hej
$(document).ready(function(){
    $(window).scroll(function(){
        $('#headerbackground').css("opacity", 0 + $(window).scrollTop() / 300)
    })
})