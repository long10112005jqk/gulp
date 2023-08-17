window.addEventListener("load",function() {
  const toggle = document.querySelector(".fa-sliders-h");
  const menu = document.querySelector(".header-list");
  const sliderInner = document.querySelector(".header-slider-inner");
  
  toggle.addEventListener("click",function() {
    menu.classList.add("listshow");
  })
  this.document.addEventListener("click",function(e) {
    if (e.target.matches(".header-list") || e.target.matches(".fa-sliders-h")) {
      return;
    }
    menu.classList.remove("listshow");
  })
  const comment = document.querySelectorAll(".comment-desc");
  const arrowright = document.querySelector(".fa.fa-arrow-right");
  const arrowleft = document.querySelector(".fa.fa-arrow-left");
  arrowright.addEventListener("click",function() {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].classList[1] == "show") {
        if (i == comment.length-1) {
          comment[i].classList.remove("show");
          comment[0].classList.add("show");
          return;
        } else {
          comment[i].classList.remove("show");
          comment[i].nextElementSibling.classList.add("show");
          return;
        }
      }
    } 
  })
  arrowleft.addEventListener("click",function() {
    for (let i = 0; i < comment.length; i++) {
      if (comment[i].classList[1] == "show") {
        if (i == 0) {
          comment[i].classList.remove("show");
          comment[comment.length-1].classList.add("show");
          return;
        } else {
          comment[i].classList.remove("show");
          comment[i].previousElementSibling.classList.add("show");
          return;
        }
      }
    } 
  })
  
})
