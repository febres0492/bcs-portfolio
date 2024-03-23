// showing nav menu
S('#nav-menu-btn').addEventListener('click', ()=>{
    S('nav ul')[0].classList.toggle('showMenu')
})

// let imageArray = []
// let imgIdx = 0

// displaying image viewer
// S('#project-box').addEventListener('click',(ev)=>{
//     if(ev.target.id == 'project-box'){return} // return if target is parent div
//     imageArray = S('#project-box div') // updating image array
//     imgIdx = +ev.target.parentNode.getAttribute('idx') // getting current idx
//     S('#image-viewer').classList.add('show-image-viewer') // showing image viewer
//     showImage(imgIdx)
// })

// changing to previous image
// S('#previows-btn').addEventListener('click', showPreviousImg)

// changing to next image
// S('#next-btn').addEventListener('click', showNextImg)

// closing image viewer when clode btn is clicked
// S('#close-btn').addEventListener('click', ()=>{
//     S('#image-viewer').classList.remove('show-image-viewer')
//     imageArray = []
// })

// chandling key events
// S('body')[0].addEventListener('keydown',(ev)=>{
//     if(S('#image-viewer').classList.contains('show-image-viewer')){
//         if(ev.key === 'ArrowLeft'){ showPreviousImg()}
//         if(ev.key === 'ArrowRight'){ showNextImg()}

//         // closing image viewer when ESC is pressed
//         if(ev.key === 'Escape'){
//             S('#image-viewer').classList.remove('show-image-viewer')
//         }
//     }
// })

// managing contact form event
S('#contactForm').addEventListener('submit', ev =>{ev.preventDefault()})



function S (str){
    if (str[0] ==='#' && !str.includes(' ')){ return document.querySelector(str) }
    else { return document.querySelectorAll(str) }
}
// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }
// function showImage(idx) {
//     const imgDiv = imageArray[idx]
//     S('#image-div img')[0].setAttribute('src', imgDiv.children[0].getAttribute('src'))
//     S('#image-viewer-title').innerText = capitalize(imgDiv.children[0].getAttribute('name'))
// }
// function showPreviousImg() {
//     imgIdx = Math.max(imgIdx - 1, 0)
//     showImage(imgIdx)
// }

// function showNextImg() {
//     imgIdx = Math.min(imgIdx + 1, imageArray.length - 1)
//     showImage(imgIdx)
// }