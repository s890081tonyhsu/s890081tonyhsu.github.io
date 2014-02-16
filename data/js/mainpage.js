function mm_includejs (jsFile){
	document .write('<script type="text/javascript" src="data/js/' +jsFile + '"></script>');
}

function checkXY(){
	var y = $(window).height();
	var x = $(window).width();
	$("#background").css({"width":x-25,"height":y-25});
	if(x*3 > y*4){
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
		$("#content").fadeOut().queue(function(){
			$("#content").text("").dequeue();
			$("#cover").fadeIn().dequeue();
		});
		$("#content").attr("detail","");
		return;
	}
	if($("#content").attr("detail") == Detail){
		return;
	}else{
		$.get("views/"+Detail+".html",function(data){
			$("#content").append(data);
		});
		$("#content").attr("detail", Detail);
		if($("#cover").css("display") == "block")$("#cover").fadeOut().queue(function(){$("#content").fadeIn().dequeue();});
		else if($("#content").css("display") == "none")$("#content").fadeIn();
	}
}

$(document).ready(InitPage);
$(window).resize(checkXY);
