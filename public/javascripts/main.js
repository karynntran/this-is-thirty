var months = [
	"january", 
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december"
]

document.addEventListener("DOMContentLoaded", function(event) {

    var marker = document.getElementById('marker');
    var month = document.getElementById('mayNav');
    var monthWidth = month.offsetWidth/4;
    var monthLeftPosition = month.offsetLeft;

    marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
});