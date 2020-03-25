//skript som ska öka opacity när man scrollar
$(document).ready(function(){
    $(window).scroll(function(){
        $('#headerbackground').css("opacity", 0 + $(window).scrollTop() / 300)
    })
})


function toggleMenu(){
    let overflow_hidden = document.querySelector("body")
    overflow_hidden.classList.toggle("overflow-hidden")

    let show = document.querySelector(".hamburger-menu")
    show.classList.toggle("show")

    let fade = document.querySelector(".fade-layer")
    fade.classList.toggle("fade")
}