$(document).ready(function(){

  $('#readMoreBtn').click(function(event){
    event.preventDefault();
    $('.hiring__details').toggleClass('short');
  });

  $('#readLessBtn').click(function(event){
    event.preventDefault();
    $('.hiring__details').toggleClass('short');
  });

  $('.values__points__item').click(function(){
    $('.values__points__item').each(function(){
      $(this).removeClass('active');
    });

    $(this).addClass('active');
  });

  // $("#sticker").sticky({topSpacing:0});

  function resetNavHeight() {
    var widthViewPort = $( window ).width();
    if (widthViewPort <= 767) {
      $("#sticker-sticky-wrapper").animate({
        height: 100
      }, 100 );
    }
    else {
      $("#sticker-sticky-wrapper").animate({
        height: 140
      }, 100 );
    }
  }

  $('.logo a').click(function(){
    event.preventDefault();

    $('html, body, .content-wrapper').animate({
      scrollTop: 0
    }, 500, 'linear', function() {
      $('.navigation__nav__item').each(function() {
        $(this).removeClass('current');
      });
    });
  });

  // $('#nav').onePageNav({
  // 	filter: ':not(.external)',
  // 	scrollThreshold: 0.25,
	// });

  $(function(){
		var lastScrollTop = 0, delta = 5;
		$('html, body, .content-wrapper').scroll(function(event){
			var st = $(this).scrollTop();

			if (Math.abs(lastScrollTop - st) <= delta) {
				return;
      }

      if (st <= delta) {
        // resetNavHeight();
        $('.navigation__nav__item').each(function() {
          $(this).removeClass('current');
        });
        $(".navigation-wrapper").removeClass("is-sticky");
      }
      else {
        $(".navigation-wrapper").addClass("is-sticky");
      }

			if (st > lastScrollTop){
				// downscroll code
				$(".navigation-wrapper.is-sticky").removeClass("scrolltop").addClass("scrolldown");
			} else {
				// upscroll code
				$(".navigation-wrapper.is-sticky").removeClass("scrolldown").addClass("scrolltop");
			}
			lastScrollTop = st;
		});
	});

});
