const pvt_ssn = document.querySelector('.private-session')
const grp_ssn = document.querySelector('.group-session')
const grp_svg = document.querySelector('.after-hover-grp')
const pvt_svg = document.querySelector('.after-hover-pvt')
const mediaQuery = window.matchMedia('(min-width: 768px)')

pvt_ssn.addEventListener('mouseover', () => {
    if (mediaQuery.matches) {
        pvt_ssn.classList.add('hovered')
        grp_ssn.style.display = "none"
        pvt_svg.style.display = "unset"
    }
})
pvt_ssn.addEventListener('mouseleave', () => {
    if (mediaQuery.matches) {

        pvt_ssn.classList.remove('hovered');
        grp_ssn.style.display = "grid"
        pvt_svg.style.display = "none"
    }
})
grp_ssn.addEventListener('mouseover', () => {
    if (mediaQuery.matches) {

        grp_ssn.classList.add('hovered')
        pvt_ssn.style.display = "none"
        grp_svg.style.display = "unset"
    }
})
grp_ssn.addEventListener('mouseleave', () => {
    if (mediaQuery.matches) {

        grp_ssn.classList.remove('hovered');
        pvt_ssn.style.display = "grid"

        grp_svg.style.display = "none"
    }
})