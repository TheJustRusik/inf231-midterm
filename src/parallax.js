document.addEventListener("DOMContentLoaded", function() {
    let parallaxBg = document.querySelector(".parallax-bg");
  
    window.addEventListener("scroll", function() {
      let offset = window.pageYOffset;
      parallaxBg.style.transform = "translate3d(0, " + offset * 0.5 + "px, 0)";
    });
  });
  