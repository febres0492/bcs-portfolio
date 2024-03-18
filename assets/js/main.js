// element selector function
function $ (str){
    if (str[0] ==='#'){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

$('#nav-menu-btn').addEventListener('click', ()=>{
    $('nav ul')[0].classList.toggle('showMenu')
})

// displaying project image
$('#project-box').addEventListener('click',(ev)=>{

    $('#image-viewer').classList.add('show-image-viewer')


    $('#image-viewer-title').innerText = capitalize(ev.target.name)

    console.log(ev.target)
})

$('#close-btn').addEventListener('click',()=>{
    $('#image-viewer').classList.remove('show-image-viewer')
})

// managing contact form event
$('#contactForm').addEventListener('submit', ev =>{ev.preventDefault()})
