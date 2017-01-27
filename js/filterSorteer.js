(function() {
	var filterButton = document.getElementById('filter-button');
	var filterCollapse = document.getElementsByClassName('collapse filter')[0];

	var sorteerButton = document.getElementById('sorteer-button')
	var sorteerCollapse = document.getElementsByClassName('collapse sorteer')[0];

	filterButton.addEventListener("click", function() {
		collapse(filterCollapse);
	});

	sorteerButton.addEventListener("click", function() {
		collapse(sorteerCollapse);
	});

	function collapse(filter) {
		var filterFormHeight = outerHeight(filter.children[0]);
    	var filterHeight = outerHeight(filter);

    	if (filterFormHeight === filterHeight) {
    		filter.style.height = "0px";
    	} else {
    		filter.style.height = filterFormHeight + "px";
    	}		
	}

})();
