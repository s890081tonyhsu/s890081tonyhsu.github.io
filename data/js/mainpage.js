function mm_includejs (jsFile){
	document .write('<script type="text/javascript" src="data/js/' +jsFile + '"></script>');
}
mm_includejs('font.js');

function checkXY(){
	var y = $(window).height();
	var x = $(window).width();
	$("#background").css({"width":x-25,"height":y-25});
	if(x > y){
		$("#background").removeClass("yx");
		$("#background").addClass("xy");
	}else{
		$("#background").removeClass("xy");
		$("#background").addClass("yx");
	}
}

function InitPage(){
	checkXY();
	setTimeout(
		function() 
			{
				$("body > div").each(function(){
					$(this).fadeToggle("slow");
				});
			}, 1500);
}

$(document).ready(InitPage);
$(window).resize(checkXY);
