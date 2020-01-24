function apareceScroll(){
	var html = document.getElementsByTagName("html")[0];
	var elementoAparece = document.getElementsByClassName("aparece");

	document.addEventListener('wheel',function(){
		var topVent = html.scrollTop;
		for(i=0; i < elementoAparece.length; i++){
			var topelemAparece = elementoAparece[i].offsetTop;
			if(topVent > topelemAparece - 400){
				elementoAparece[i].style.opacity = 1;
			}
		}
	});
};
apareceScroll();

$(document).ready(function(){
	$('.ecirculo').hide().fadeIn(600);
});


function iniciarMap(){
    var coord = {lat:-27.6849696 ,lng:-67.6589818};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
