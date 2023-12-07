$(document).ready(function() {
    let currentSlide = 0;
    const slideCount = $('.slide').length;
    const slideWidth = $('.slide').width();
  
    $('#nextBtn').click(function() {
      if (currentSlide < slideCount - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      updateSlider();
    });
  
    $('#prevBtn').click(function() {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = slideCount - 1;
      }
      updateSlider();
    });
  
    function updateSlider() {
      const translateValue = -currentSlide * slideWidth;
      $('#slider-images').css('transform', 'translateX(' + translateValue + 'px)');
    }
  });
  