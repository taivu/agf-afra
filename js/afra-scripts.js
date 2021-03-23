jQuery(document).ready(function($){

	// Menu plus icons
	$('.mainNavigation li ul').siblings('a').addClass('hasChildren').before('<a class="plus" href="#" />');
	$('.plus').on('click', function(e){
		var plus = $(this);
	    plus.toggleClass('plusOpen').siblings('ul').slideToggle('fast');
	    plus.parent('li').toggleClass('open');
	    e.preventDefault();
	});

	// Open links with rel="external" in new window
  $('a[rel="external"]').on('click',function(e){
    window.open($(this).attr('href'));
    e.preventDefault();
  });

  // hider
  /*$('.hider__toggle').on('click', function (e) {
    e.preventDefault();
    toggleHider();
  });

  $(window).resize(function() {
    fixHider();
  });

  $(window).scroll(function() {
    fixHider();
  });

  $('.btn--register').on('click', function(e) {
    e.preventDefault();
    toggleHider();
    $('html, body').animate({
        scrollTop: $('.form').offset().top
    }, 1000);
  });*/


  // currently pulling in scgssm flickr feed to test...will need to be updated to agfirst's feed
  //Flickr Photosets 
  if ($('.flickrRibbon')) {
    // Add Flickr feed content
    var myImageURL;
    var photocount = 90;
    var user_id = "152714642@N07";
    var api_key = "f9345a8f3d78660e5c3c3ab6938b9a9a";

    var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos" +
      "&api_key=" + api_key +
      "&user_id=" + user_id +
      "&per_page=" + photocount +
      "&format=json&nojsoncallback=1";

    //console.log(flickrURL);

    $.getJSON(flickrURL, function (data) {
      $.each(data.photos.photo, function (i, item) {
        myImageURL = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
        $('.flickrRibbon__feed').slick('slickAdd', '<li class="flickr"><a href="https://www.flickr.com/photos/' + user_id + '/' + item.id + '" style="background-image:url(' + myImageURL + ');" target="_blank"></a></li>');
      });
    });
  }

  //flickr slider
  $('.flickrRibbon__feed').slick({
    speed: 800,
    infinite: false,
    mobileFirst: true,
    appendArrows: $('.flickrRibbon__nav'),
    slide: '.flickr',
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          variableWidth: false
        }
      }
    ]
  });

});

function toggleHider() {
  $('.hider__toggle').toggleClass('is-active');
  var hiderContent = document.getElementsByClassName('hider-content')[0];

  if (hiderContent.style.maxHeight) {
    hiderContent.style.maxHeight = null;
    hiderContent.classList.remove('is-open');
  } else {
    hiderContent.style.maxHeight = hiderContent.scrollHeight + 'px';
    hiderContent.classList.add('is-open');
  }
}

function fixHider() {
  var hiderContent = document.getElementsByClassName('hider-content')[0];

  if (hiderContent !== undefined) {
    if (hiderContent.classList.contains('is-open')) {
      hiderContent.style.maxHeight = hiderContent.scrollHeight + 'px';
    }
  }
}