$('.section li').each(function(){
	var overlay = $(this).find('.overlay');
	$(this).bind('click', function(){
		overlay.css({"opacity": 1, "z-index": 9999, "pointer-events": "auto"});
	});
	$(this).find('.fa-times').bind('click', function(){
		overlay.css({"opacity": 0, "z-index": -1, "pointer-events": "none"});
	});
});