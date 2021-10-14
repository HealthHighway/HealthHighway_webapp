function scrolltofunc(id) {
    var scrollDiv = document.getElementById(id).offsetTop;
    window.scrollTo({ top: scrollDiv-100, behavior: 'smooth'});
}
function scrollEase(timing, href){
    // e.preventDefault();
    var position = document.getElementById(href).offsetTop;
    $("body, html").animate({
        scrollTop: position
    }, timing, 'linear');
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var nav = document.querySelector("nav");
    if (scroll <= 32) {
        nav.style.backgroundColor = "white";    
    } else {
        nav.style.backgroundColor = "white";
    }
});
