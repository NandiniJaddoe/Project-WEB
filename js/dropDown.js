(function () {

    var toggleElement = document.querySelectorAll('.toggle');

    toggleElement.forEach(function(obj) {
        obj.addEventListener('click', toggle);
    });

    function toggle() {
    	var content = this.nextSibling.nextSibling;
    	var contentChildren = content.children;
    	var contentHeight = 0;

    	for (var i = 0; i < contentChildren.length; i++) {
    		contentHeight += outerHeight(contentChildren[i]);
    	}

    	if (outerHeight(content) === contentHeight) {
    		content.style.height = '0px';
    	} else {
    		content.style.height = contentHeight + 'px';
    	}
    }

})();
