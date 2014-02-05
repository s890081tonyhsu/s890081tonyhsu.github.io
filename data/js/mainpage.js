function mm_includejs (jsFile){
	document .write('<script type="text/javascript" src="data/js/' +jsFile + '"></script>');
}
mm_includejs('font.js');

function checkXY(){
	var y = $(window).height();
	var x = $(window).width();
	if(x > y){
		$("body").addClass("xy");
	}else{
		$("body").addClass("yx");
	}
}

$(document).ready(checkXY);
$(window).resize(checkXY);
