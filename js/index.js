// set height of images base on device
const navHeight = document.querySelector('.navbar').offsetHeight
const svgHeight = window.innerHeight - navHeight
const images = document.querySelectorAll('.bd-placeholder-img')
images.forEach(function(svg) {
    svg.setAttribute('height', svgHeight);
})
document.querySelector('main').style.marginTop = navHeight + 'px';
//


// Back to the top
// $(function(){

//     $("#js-topBtn").hide();
//     $(window).on("scroll", function(){
//     if($(this).scrollTop() > 100) {
//       $("#js-topBtn").fadeIn(600);
//     } else {
//       $("#js-topBtn").fadeOut(600);
//     }
//   });
  
//     $("#js-topBtn").on("click", function(){
//       $("html, body").animate({ scrollTop:0}, 500);
//     });
  
//   })


document.addEventListener("DOMContentLoaded", function() {
    var topBtn = document.getElementById("js-topBtn");
    topBtn.style.display = "none";
    topBtn.style.transition = "opacity 0.6s";
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 2000) {
        topBtn.style.display = "block";
        setTimeout(function() {
          topBtn.style.opacity = "1";
        }, 10); // ボタンが表示される前にopacityを設定
      } else {
        topBtn.style.opacity = "0";
        setTimeout(function() {
          topBtn.style.display = "none";
        }, 600); // opacityが0になった後にdisplayをnoneに設定
      }
    });
  
    topBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  