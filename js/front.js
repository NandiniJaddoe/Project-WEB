(function() {
	var carousel = {}; // Maakt een leeg object
	var links = document.querySelectorAll('.header-img a'); // Maakt een variabele van alle links
	var headerImg = document.querySelectorAll('.header-img img'); // Maakt een variabele van alle opgegeven images

	// Zegt wat bij welke varibele hoort 
	carousel.links = links; // Voegt object toe met data van het links var
	carousel.images = headerImg; // Voegt object toe met data van het images var

	// Voegt image object toe aan link object
	carousel.links.forEach(function(obj, index) {
		carousel.links[index].image = carousel.images[index];
	});

	// Zorgt ervoor dat wanner je op een link klikt de carouselClasses functie wordt uitgevoerd
	carousel.links.forEach(function(obj) {
		obj.addEventListener('click', clickOnLink);
	});

	function clickOnLink() {
		var className = 'active';

		links.forEach(function(obj) {
			if (obj.classList)
			  obj.classList.remove(className);
			else
			  obj.className = obj.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		});
		if (this.classList) {
			this.classList.add(className);
		}
		else {
			this.className += ' ' + className;
		}
		turnCarousel(this.image);
	}

	function turnCarousel(image) {
		var className = 'active';

		headerImg.forEach(function(obj) {
			if (obj.classList)
			  obj.classList.remove(className);
			else
			  obj.className = obj.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		});
		if (image.classList) {
			image.classList.add(className);
		}
		else {
			image.className += ' ' + className;
		}
	}

})();