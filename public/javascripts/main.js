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

var defaultPosition = function(){
	var defaultMonth = document.getElementById('januaryNav');
	var marker = document.getElementById('marker');
	var monthWidth = marker.offsetWidth/4;
	var monthLeftPosition = marker.offsetLeft;

	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
};

document.addEventListener("DOMContentLoaded", function(event) {

	defaultPosition();

	for (var i=0; i < months.length; i++){
		var month = document.getElementById(months[i] + 'Nav');
		console.log(month);
		month.addEventListener("click", function(){
			var marker = document.getElementById('marker');
			var monthWidth = this.offsetWidth/4;
			var monthLeftPosition = this.offsetLeft;

			marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
		});
	}

});