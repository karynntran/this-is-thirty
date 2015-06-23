var navigation = [
	{
	    "month":"home"

  	},
	{
	    "month":"january",
	    "images": 
	    	[
	    		{'image':'01janBirthday.jpg', 'description': 'My 30th Birthday'},
	    		{'image':'01janBirthday2.jpg', 'description': 'More Birthday'}
	    	]
  	},
	{
	    "month":"february",
    	"images": 
	    	['02febKatrinaBabyShower.jpg',
	    	'02febLunarNewYear.jpg',
	    	'02febMauBabyShower',
	    	'02febStartTD.jpg',
	    	'02febValentines.jpg',
	    	'02febValentines2.jpg'
	    	]
  	},
	{
	    "month":"march",
    	"images": 
	    	['03marAlexPamie.jpg',
	    	'03marBensBirthday.jpg',
	    	'03marBensBirthday2.jpg',
	    	'03marGalTech.jpg',
	    	'03marLearningNode.jpg',
	    	'03marNicoBorn.jpg',
	    	'03marStPete.jpg'
	    	]
  	},
	{
	    "month":"april"
  	},
	{
	    "month":"may"
  	},
	{
	    "month":"june"
  	},
	{
	    "month":"july"
  	},
	{
	    "month":"august"
  	},
	{
	    "month":"september"
  	},
	{
	    "month":"october"
  	},
	{
	    "month":"november"
  	},
	{
	    "month":"december"
  	}
]

defaultPosition = function () {
    var defaultMonth = document.getElementById('januaryNav');
	var marker = document.getElementById('marker');
	var monthWidth = marker.offsetWidth/4;
	var monthLeftPosition = marker.offsetLeft;

	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
};

document.addEventListener("DOMContentLoaded", function(event) {

	for (var i = 0; i < navigation.length; i++){
		var month = document.getElementById(navigation[i].month + 'Nav');

		month.onclick = (function(){
			return function(){
				var marker = document.getElementById('marker');
				var monthWidth = this.offsetWidth/4;
				var monthLeftPosition = this.offsetLeft;

				marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
			};
		})();
	};
});