      // Code slideshow
      let slideIndexMobile = 1;
      auToSlidesMobile()
      showSlides(slideIndexMobile);

      
      function currentSlideMobile(n) {
        showSlidesMobile(slideIndexMobile = n);
      }
      
      function showSlidesMobile(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides-mobile");
        let dots = document.getElementsByClassName("dot-mobile");
        if (n > slides.length) {slideIndexMobile = 1}    
        if (n < 1) {slideIndexMobile = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active-mobile", "");
        }
        slides[slideIndexMobile-1].style.display = "block";  
        dots[slideIndexMobile-1].className += " active-mobile";
      }

      function auToSlidesMobile() {
      let i;
      let slides = document.getElementsByClassName("mySlides-mobile");
      let dots = document.getElementsByClassName("dot-mobile");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndexMobile++;
      if (slideIndexMobile > slides.length) {slideIndexMobile = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active-mobile", "");
      }
      slides[slideIndexMobile-1].style.display = "block";  
      dots[slideIndexMobile-1].className += " active-mobile";
      setTimeout(auToSlidesMobile, 2000); // Change image every 2 seconds
      }   

      // End code slideshow


      // Start code scroll bar
    





      // End code scroll bar
