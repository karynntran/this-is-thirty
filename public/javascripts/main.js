document.addEventListener("DOMContentLoaded", function(event) {
    console.log("tell me this is working!");

    var marker = document.getElementById('marker');
    var january = document.getElementById('januaryNav')
    var januaryWidth = january.offsetWidth/2 - 20;
    var firstPosition = january.offsetLeft;
    var both = parseFloat(januaryWidth) + parseFloat(firstPosition)

    console.log(both)

    marker.style.left=both + 'px';
});