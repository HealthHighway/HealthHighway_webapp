  
const seemorebtns = document.querySelectorAll(".seemore");
const seelessbtns = document.querySelectorAll(".seeless");
const grpcontainers = document.querySelectorAll(".grp-card-container");
const selectbtns = document.querySelectorAll(".select-btn");
const cancelbtns = document.querySelectorAll(".filter-top span");
const filters = document.querySelectorAll(".filter");
const filteroptions = document.querySelectorAll(".filter-options ul li");

const filterhandler = (element) => {
  alert(element.target.outerText);
};

const seehandler = (e) => {
  seebtns = e.target.parentElement;
  seemore = seebtns.firstElementChild;
  seeless = seebtns.lastElementChild;
  grpcontainer = seebtns.parentElement.nextElementSibling;
  seemore.classList.toggle("see-active");
  seeless.classList.toggle("see-active");
  grpcontainer.classList.toggle("grp-active-container");
};

const selecthandler = (e) => {
  const filter = e.target.parentElement.parentElement.parentElement;
  filters.forEach((element) => {
    element.classList.remove("active-filter");
  });
  filter.classList.add("active-filter");
};
const cancelhandler = (e) => {
  const filter = e.target.parentElement.parentElement;
  filter.classList.remove("active-filter");
};
seemorebtns.forEach((element) => {
  element.addEventListener("click", seehandler);
});
seelessbtns.forEach((element) => {
  element.addEventListener("click", seehandler);
});

selectbtns.forEach((element) => {
  element.addEventListener("click", selecthandler);
});

cancelbtns.forEach((element) => {
  element.addEventListener("click", cancelhandler);
});
filteroptions.forEach((element) => {
  element.addEventListener("click", filterhandler);
});