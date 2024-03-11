function $ (str){
    if (str[0] ==='#'){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}

$('#nav-menu-btn').addEventListener('click', (ev)=>{
    $('nav ul')[0].classList.toggle('showMenu')
})
