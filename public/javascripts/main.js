// var functions = require('./functions');


// var defaultPosition = function(){
// 	var defaultMonth = document.getElementById('januaryNav');
// 	var marker = document.getElementById('marker');
// 	var monthWidth = marker.offsetWidth/4;
// 	var monthLeftPosition = marker.offsetLeft;

// 	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
// };

document.addEventListener("DOMContentLoaded", function(event) {

	defaultPosition();

	// var shortDescription;

	// for (var i=0; i < months.length; i++){
	// 	var month = document.getElementById(months[i].month + 'Nav');
			
	// 	var eachMonth = months[i];
		
	// 	return (function(eachMonth){
	// 		month.addEventListener("click", function(){
	// 			console.log(months[i]);
	// 			var marker = document.getElementById('marker');
	// 			var monthWidth = this.offsetWidth/4;
	// 			var monthLeftPosition = this.offsetLeft;
	// 			var descriptionText = document.getElementById('quickDescriptionText');

	// 			marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';

	// 			// console.log(shortDescription);
	// 			// // descriptionText.innerHTML = eachMonth.shortDescription;
	// 		});
	// 	})(eachMonth);
	// }

	for (var i = 0; i < navigation.length; i++){
		var month = document.getElementById(navigation[i].month + 'Nav');
		var shortDescription = navigation[i].shortDescription;
		
		console.log(i);


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