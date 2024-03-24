// showing nav menu
S('#nav-menu-btn').addEventListener('click', ()=>{
    S('nav ul')[0].classList.toggle('showMenu')
})

function S (str){
    if (str[0] ==='#' && !str.includes(' ')){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}















