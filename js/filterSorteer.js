(function() {
	var $filterButton = $('#filter-button');
	var $filterCollapse = $('.collapse.filter');

	var $sorteerButton = $('#sorteer-button');
	var $sorteerCollapse = $('.collapse.sorteer');

	$filterButton.on('click', collapse);
	$sorteerButton.on('click', collapse);

	function collapse() {
		var $filterFormHeight = $filterCollapse.children('form').css('height');

		$(this).toggleClass('active');

		if ($(this).is($filterButton)) {
			if ($(this).hasClass('active')) {
				$filterCollapse.css({
					'height': $filterFormHeight,
				});
			} else {
				$filterCollapse.css({
					'height': 0,
				});
			}
		} else if ($(this).is($sorteerButton)) {
			if ($(this).hasClass('active')) {
				$sorteerCollapse.css({
					'height': $filterFormHeight,
				});
			} else {
				$sorteerCollapse.css({
					'height': 0,
				});
			}
		}
	}

})();