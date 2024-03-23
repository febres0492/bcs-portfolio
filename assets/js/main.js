// showing nav menu
S('#nav-menu-btn').addEventListener('click', ()=>{
    S('nav ul')[0].classList.toggle('showMenu')
})

// managing contact form event
S('#contactForm').addEventListener('submit', ev =>{ev.preventDefault()})

function S (str){
    if (str[0] ==='#' && !str.includes(' ')){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}















