//skript som ska öka opacity när man scrollar
$(document).ready(function(){
    $(window).scroll(function(){
        $('#headerbackground').css("opacity", 0 + $(window).scrollTop() / 300)
    })
})


function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
  if (!event.target.matches('.menubutton')) {
    var dropdowns = document.getElementsByClassName("hamburger-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}