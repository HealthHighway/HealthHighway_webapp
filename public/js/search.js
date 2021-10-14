const focusedSearch = () => {
    if (document.activeElement === a) {
        searchcontainer.style.boxShadow = " 0px 4px 25px rgba(76, 168, 238, 0.445)";
        suggestions.style.display = "inline-block";
        a.style.width = "80%";
    }
};
const filterFunction = () => {
    var input, filter, sButton, i;
    input = document.querySelector(".search-box input");
    filter = input.value.toUpperCase();
    sButton = document.querySelectorAll(".search-suggestions button");
    for (i = 0; i < sButton.length; i++) {
        txtValue = sButton[i].textContent || sButton[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            sButton[i].style.display = "";
        } else {
            sButton[i].style.display = "none";
        }
    }
};

const sessionfilterhandler = (e) => {
    const topFilter = e.target.parentElement.parentElement.parentElement;
    const listoptions = topFilter.querySelector(".list-options");
    const cancelbtn = topFilter.querySelector("span");
    topFilter.classList.toggle("active-filter");
    listoptions.classList.toggle("active-option");
    cancelbtn.classList.toggle("active-cancel");
    console.log(topFilter);
    console.log(listoptions);
};
const a = document.querySelector(".search-box input");
const searchcontainer = document.querySelector(".input-area");
const suggestions = document.querySelector(".suggestion-con");
const searchoptions = document.querySelectorAll(".search-suggestions button");
searchoptions.forEach((element) => {
    element.addEventListener("click", () => {
        // console.log(element.innerText);
        a.value = element.innerText.trim();
        console.log(element.getAttribute("data-filter"));
        const threefilters = document.querySelector(".session-filter");
        threefilters.style.display = "flex";
        const filterCatogery = element.getAttribute("data-filter");
        trending.classList.add("hidden");
        fitnesscon.classList.add("hidden");
        for (let i = 0; i < filteredresult.length; i++) {
            filteredresult[i].style.display = "none";
        }
        filteredresult.forEach((element) => {
            console.log(element.getAttribute("data-category"));
            if (filterCatogery == element.getAttribute("data-category"))
                element.style.display = "flex";
        });
    });
});
const filterCancelHandler = (e) => {
    console.log(e.target.parentElement);
    const timeFilter = e.target.parentElement.parentElement;
    const listoptions = timeFilter.querySelector(".list-options");
    const cancelbtn = e.target;
    timeFilter.classList.toggle("active-filter");
    listoptions.classList.toggle("active-option");
    cancelbtn.classList.toggle("active-cancel");
};
const cancelbtn = document.querySelector(".top-filter span");
const listoptions = document.querySelector(".list-options");
const trending = document.querySelector(".trending-classes-container");
const fitnesscon = document.querySelector(".fitness-yoga-con");
const filteredresult = document.querySelectorAll(".filtered-result .grp-card");
window.addEventListener("mouseup", (event) => {
    if (
        event.target != a &&
        event.target.parentElement != searchoptions.parentElement
    ) {
        searchcontainer.style.boxShadow = "unset";
        suggestions.style.display = "none";
    }
});
const sessionfilters = document.querySelectorAll(".top-filter a");

sessionfilters.forEach((session) => {
    session.addEventListener("click", sessionfilterhandler);
});

const filterCancelbtns = document.querySelectorAll(".top-filter span");
filterCancelbtns.forEach((element) => {
    element.addEventListener("click", filterCancelHandler);
});