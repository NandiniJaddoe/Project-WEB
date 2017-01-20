(function() {

	// Variabelen voor de carousel
	var carousel = {}; // Maakt een leeg object
	var $links = $('.header-img a'); // Maakt een variabele van alle links
	var $headerImg = $('.header-img img'); // Maakt een variabele van alle opgegeven images

	// Zegt wat bij welke varibele hoort 
	carousel.links = $links; // Voegt object toe met data van het links var
	carousel.images = $headerImg; // Voegt object toe met data van het images var

	// Voegt image object toe aan link object
	carousel.links.each(function(obj) {
		carousel.links[obj].image = carousel.images[obj];
	});

	// Zorgt ervoor dat wanner je op een lik klikt de carouselClasses functie wordt uitgevoerd
	$links.on('click', carouselClasses);

	function carouselClasses() {
		var $clicked = $(this)[0]; // clicked is het zelfde als de link

		$(this).addClass('active'); // Zegt dat de link active is
		carousel.links.each(function(obj) { 
			var $image = $(carousel.links[obj].image);
			if ($clicked.innerHTML == carousel.links[obj].innerHTML) {
				if ($headerImg.hasClass('active')) {
					$headerImg.removeClass('active');
				} 
				$image.addClass('active');
			} else {
				// do nothing
			}
		});
	}

})();