document.addEventListener("DOMContentLoaded", function(event) {

	defaultPosition();

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