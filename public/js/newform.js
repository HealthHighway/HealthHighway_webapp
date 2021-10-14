const timing_div = document.querySelector(".timing-slots")
const routine_div = document.querySelector(".day-slots")
const date = document.querySelector("#date")



timing_div.addEventListener('click', () => {
    document.querySelector(".time-grid").classList.toggle('disabled')
    document.querySelector(".day-grid").classList.add('disabled')
})
routine_div.addEventListener('click', () => {
    document.querySelector(".day-grid").classList.toggle('disabled')
    document.querySelector(".time-grid").classList.add('disabled')
})
date.addEventListener('click', () => {
    document.querySelector(".day-grid").classList.add('disabled')
})