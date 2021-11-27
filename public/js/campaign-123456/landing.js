function scrolltofunc(id) {
    var scrollDiv = document.getElementById(id).offsetTop;
    window.scrollTo({ top: scrollDiv-100, behavior: 'smooth'});
}

var myNav = document.getElementById('navbar-landing');
var navCont = document.getElementById('navbar-container');
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        navCont.classList.add("navbar-container-scrolled");
        navCont.classList.remove("navbar-container-unscrolled");
        var cols = document.getElementsByClassName("nav-link");
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = '#4CA9EE';
        }
        document.getElementsByClassName("fa-bars")[0].style.color="#4CA9EE";
    } else {
            var cols = document.getElementsByClassName("nav-link");
            for(i = 0; i < cols.length; i++) {
                cols[i].style.color = '#fff';
            }
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
            navCont.classList.remove("navbar-container-scrolled");
            navCont.classList.add("navbar-container-unscrolled");
            document.getElementsByClassName("fa-bars")[0].style.color="#fff";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}