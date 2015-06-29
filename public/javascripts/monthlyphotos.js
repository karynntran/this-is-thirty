function successCallback(data){
	obj = data;
	return obj;
}

function ajaxCall(){
	$.ajax({
		async: false,
		url: '/jsonData',
		success: function(data){
			successCallback(data);
		}
	});
}


defaultPosition = function () {
    var defaultMonth = document.getElementById('januaryNav');
	var marker = document.getElementById('marker');
	var monthWidth = marker.offsetWidth/4;
	var monthLeftPosition = marker.offsetLeft;

	marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
};

document.addEventListener("DOMContentLoaded", function(event) {
	ajaxCall();
	var months = obj.months;
	for (var i = 0; i < months.length; i++){
		var month = document.getElementById(months[i].month + 'Nav');

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