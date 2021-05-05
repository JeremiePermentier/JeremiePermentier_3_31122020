let nav = document.getElementById("navBar");
let position = 0;

window.addEventListener('scroll', () => {

    position = window.scrollY;

    if (position > 0){
        nav.classList.add("fixed-top");
    } else {
        nav.classList.remove("fixed-top")
    }
})