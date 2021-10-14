var btns = document.getElementsByClassName("navbar-option");
var overview = document.getElementById("overview-div");
var about = document.getElementById("about-mobile-div");
var benefits = document.getElementById("benefits-mobile-div");
var element = "overview-div";

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-option");
    var id = this.id;
    //console.log(id);
    current[0].className = current[0].className.replace(" active-option", "");
    this.className += " active-option";
    element = id + "-div";
    displayDiv(element);
  });
}

function displayDiv(element) {
  if (element === "overview-div") {
    overview.style.display = "block";
    about.style.display = "none";
    benefits.style.display = "none";
  } else if (element === "about-div") {
    overview.style.display = "none";
    about.style.display = "block";
    benefits.style.display = "none";
  } else {
    overview.style.display = "none";
    about.style.display = "none";
    benefits.style.display = "block";
  }
}

window.addEventListener('resize', function () {
  if (screen.width > 480) {
    overview.style.display = "none";
    about.style.display = "none";
    benefits.style.display = "none";
  } else {
    displayDiv(element);
    console.log("resize");
  }
});

window.addEventListener('load', function () {
  if (screen.width <= 480) {
    displayDiv(element);
    console.log("load");
  }
} );