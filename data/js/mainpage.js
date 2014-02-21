function mm_includejs (jsFile){
	document .write('<script type="text/javascript" src="data/js/' +jsFile + '"></script>');
}

function checkXY(bool){
	var y = $(document).height();
	var x = $(document).width();
	$('#background').css({'width':x-25,'height':y-25});
	if(x*3 > y*4){
		$('#background').removeClass('yx');
		$('#background').addClass('xy');
	}else{
		$('#background').removeClass('xy');
		$('#background').addClass('yx');
	}
}

var data;

function LoadPage(Detail, Active){
	if(Detail == "return"){
		$("#menu a").removeClass("active");
		$("#content").fadeOut().queue(function(){
			$("#content").text("").dequeue();
			$("#cover").fadeIn().dequeue();
		});
		$("#content").attr("detail","");
		checkXY(true);
		return;
	}
	if($("#content").attr("detail") == Detail){
		return;
	}else{
		$(Active).siblings().removeClass("active");
		$(Active).addClass("active");
		$("#content").attr("detail", Detail);
		$.get("views/"+Detail+".html",function(buffer){
			data = buffer;
		}).fail(function(){
			data = "<p>There's nothing here, please wait for some days.</p>";
		});
		if($("#cover").css("display") == "block"){
			$("#cover").fadeOut().queue(function(){
				$("#content").text("").dequeue();
				$("#content").append(data).dequeue();
				$("#content").fadeIn().dequeue();
			});
		}else{
			$("#content").fadeOut().queue(function(){
				$("#content").text("").dequeue();
				$("#content").append(data).dequeue();
				$("#content").fadeIn().dequeue();
			});
		}
		checkXY(true);
	}
}

function DetectURL(){
	var page = location.search.replace('\?','');
	if(page != "" && $('#menu a[page='+page+']').length >0){
		LoadPage(page,$('#menu a[page='+page+']'));
	}else if(page != ""){
		data = "<p>Maybe you get the wrong page. Please click the title to reload.</p>";
		$("#cover").fadeOut().queue(function(){
				$("#content").text("").dequeue();
				$("#content").append(data).dequeue();
				$("#content").fadeIn().dequeue();
		});
	}
}

function InitPage(){
	checkXY(true);
	$(window).load(function(){
		$('body > div').each(function(){
			$(this).fadeToggle('slow');
		});
	});
	DetectURL();
}


$(document).ready(InitPage);
$(window).resize(checkXY(true));
