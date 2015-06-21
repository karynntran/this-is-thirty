var months = [
	{
	    "month":"january",
	    "shortDescription":"This is what happened in January"
  	},
	{
	    "month":"february",
	    "shortDescription":"februaryyyoooo"
  	},
	{
	    "month":"march",
	    "shortDescription":"marchy march"
  	}
]

// var months = [
// 	"january", 
// 	"february",
// 	"march",
// 	"april",
// 	"may",
// 	"june",
// 	"july",
// 	"august",
// 	"september",
// 	"october",
// 	"november",
// 	"december"
// ];


defaultPosition = function () {
    var defaultMonth = document.getElementById('januaryNav');
	var marker = document.getElementById('marker');
	var monthWidth = marker.offsetWidth/4;
	var monthLeftPosition = marker.offsetLeft;

	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
};