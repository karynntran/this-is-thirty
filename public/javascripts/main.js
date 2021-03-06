var navigation = [
	{
	    "month":"home",
	    "shortDescription":"Welcome to my photo diary of Year 30!"
  	},
	{
	    "month":"january",
	    "shortDescription":"I turned the big 30 this month, went on an awesome cabin trip with my General Assembly Lemurs!"
  	},
	{
	    "month":"february",
	    "shortDescription":"I started my first developer job working at TD Ameritrade, with some seriously awesome colleagues"
  	},
	{
	    "month":"march",
	    "shortDescription":"My hubby turns 30 and I become an auntie!"
  	},
	{
	    "month":"april",
	    "shortDescription":"We celebrated our first wedding anniversary."
  	},
	{
	    "month":"may",
	    "shortDescription":"We checked Japan off our travel bucket list."
  	},
	{
	    "month":"june",
	    "shortDescription":"We moved into our second NYC home"
  	},
	{
	    "month":"july",
	    "shortDescription":"The best is yet to come!"
  	},
	{
	    "month":"august",
	    "shortDescription":"The best is yet to come!"
  	},
	{
	    "month":"september",
	    "shortDescription":"The best is yet to come!"
  	},
	{
	    "month":"october",
	    "shortDescription":"The best is yet to come!"
  	},
	{
	    "month":"november",
	    "shortDescription":"The best is yet to come!"
  	},
	{
	    "month":"december",
	    "shortDescription":"The best is yet to come!"
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
	defaultPosition();

	for (var i = 0; i < navigation.length; i++){
		var month = document.getElementById(navigation[i].month + 'Nav');
		var shortDescription = navigation[i].shortDescription;

		if (i > 6 ) {
			month.setAttribute("style",  "color: lightgray; font-weight: normal");
		}

		month.onclick = (function(shortDescription){
			return function(){
				var marker = document.getElementById('marker');
				var monthWidth = this.offsetWidth/4;
				var monthLeftPosition = this.offsetLeft;
				var descriptionText = document.getElementById('quickDescriptionText');

				marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';

				descriptionText.innerHTML = shortDescription;
			};
		})(shortDescription);
	};

});