// set height of images base on device
const navHeight = document.querySelector('.navbar').offsetHeight
const svgHeight = window.innerHeight - navHeight
const images = document.querySelectorAll('.bd-placeholder-img')
images.forEach(function(svg) {
    svg.setAttribute('height', svgHeight);
})
document.querySelector('main').style.marginTop = navHeight + 'px';
//