function mm_includejs (jsFile,className){
	$('#content').append('<script class="sub" language="text/javascript" src="data/js/' +jsFile + '"></script>');
}

var data, PageStatus;

function LoadPage(Detail, Active){
	Active = Active || "";
	if(Detail == ""){
		$("#menu a").removeClass("active");
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
		$(Active).siblings().removeClass("active");
		$('script.sub').remove();
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
				mm_includejs('sub/'+Detail+'.js','sub');
				$("#content").fadeIn().dequeue();
			});
		}else{
			$("#content").fadeOut().queue(function(){
				$("#content").text("").dequeue();
				$("#content").append(data).dequeue();
				mm_includejs('sub/'+Detail+'.js','sub');
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
	}else{
		LoadPage('')
	}
}

function changeURL(target){
	if(typeof history.replaceState == 'function'){
		history.replaceState({page: location.search},'',"?"+target);
		DetectURL();
	}else{
		location.search = target;
	}
}

function InitPage(){
	DetectURL();
	$(window).load(function(){
		setTimeout(function(){
			$('body > div').each(function(){
				$(this).fadeToggle('slow');
			});
		},500);
	});
}

$(document).ready(InitPage);
onscroll = function() {
  var scrollTop = window.scrollY;
  if (scrollTop > 50) {
    if (!$('#bar').is(':hidden')) {
      $('#bar').slideUp();
    }
  } else {
    if ($('#bar').is(':hidden')) {
      $("#bar").slideDown();
    }
  }
};
