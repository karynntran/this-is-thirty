
function ajaxCall(){
	$.ajax({
		url: '/jsonData',
		success: function (data) {
		  var obj = JSON.parse(data);
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
	// for (var i = 0; i < navigation.length; i++){
	// 	var month = document.getElementById(navigation[i].month + 'Nav');

	// 	month.onclick = (function(){
	// 		return function(){
	// 			var marker = document.getElementById('marker');
	// 			var monthWidth = this.offsetWidth/4;
	// 			var monthLeftPosition = this.offsetLeft;

	// 			marker.style.left=parseFloat(monthLeftPosition) + parseFloat(monthWidth) + 'px';
	// 		};
	// 	})();
	// };
});