// element selector function
function $ (str){
    if (str[0] ==='#'){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}

$('#nav-menu-btn').addEventListener('click', ()=>{
    $('nav ul')[0].classList.toggle('showMenu')
})

// displaying project image
$('#project-box').addEventListener('click',(ev)=>{
    console.log(ev.target)
})

// managing contact form event
$('#contactForm').addEventListener('submit', ev =>{ev.preventDefault()})
