// select toogle btn 
let toogleBtn = document.querySelector(".toogle-icon"),
navlinks = document.querySelector(".navlinks");
toogleBtn.onclick = () => {
    navlinks.classList.toggle("active");
}