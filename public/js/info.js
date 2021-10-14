function infoShow(IMG, TITLE){
    alert("called")
    var modalBg = document.querySelector(".info-modal-bg");
    console.log(modalBg);
    document.getElementById("infoIMG").src=IMG;
    document.getElementById("infoTITLE").innerText=TITLE;
    modalBg.classList.add("bg-active");
    navbar.style.zIndex = "0";
    document.querySelector(".closeSend").addEventListener("click", function() {
        modalBg.classList.remove("bg-active");
    });
}