function mm_includejs (jsFile){
	document .write('<script type="text/javascript" src="data/js/' +jsFile + '"></script>');
}

mm_includejs("jquery.jscrollpane.min.js");
mm_includejs("jquery.mousewheel.js");
mm_includejs("mwheelIntent.js");

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
	$(window).load(function(){
		$("body > div").each(function(){
			$(this).fadeToggle("slow");
		});
	});
}

function LoadPage(Detail){
	if(Detail == "return"){
		$("#content").fadeOut();
		$(".jspPane").text("");
		return;
	}
	if($("#content").css("display")=="block"){
		$(".jspPane").fadeOut();
		$(".jspPane").text("");
	}
	$.get("views/"+Detail+".html",function(data){
		$(".jspPane").append(data);
		$("#content").css("background-color","rgba(20,20,20,0.5)");
	});
		$("#content").fadeIn();
		$(".jspPane").fadeIn();
}

$(document).ready(InitPage);
$(window).resize(checkXY);
