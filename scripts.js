  

  // Regular map
  function regular_map() {
    var var_location = new google.maps.LatLng(24.757769, 90.399626);

    var var_mapoptions = {
      center: var_location,
      zoom: 15
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
      var_mapoptions);

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Boundary Road"
    });
  }


  google.maps.event.addDomListener(window, 'load', regular_map);




    (function($) {
  "use strict"; 

 
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 100)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu 
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy 
  $('body').scrollspy({
    target: '#mainNav',
    offset: 130
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); 