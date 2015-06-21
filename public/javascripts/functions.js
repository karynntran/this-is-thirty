defaultPosition = function () {
    var defaultMonth = document.getElementById('januaryNav');
	var marker = document.getElementById('marker');
	var monthWidth = marker.offsetWidth/4;
	var monthLeftPosition = marker.offsetLeft;

	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
};

// modules.exports = new defaultPosition();
