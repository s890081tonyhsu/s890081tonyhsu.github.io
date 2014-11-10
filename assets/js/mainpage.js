function mm_includejs (jsFile,className){
	$('#content').append('<script class="sub" language="text/javascript" src="assets/js/' +jsFile + '"></script>');
}

function LoadUrl(){
	var url = {
		"available": null,
		"regex": /([^?&=#]+)=([^&#]*)/g,
		"source": location.search,
		"params": {},
		"page": null,
		"detail": null
	};
	var temp = url["source"].match(url["regex"]);
	console.log(temp);
	for(var key in temp) {
		var data = temp[key].split("=");
    	url["params"][data[0]] = data[1];
	}
	url["page"] = url["params"]["page"];
	$.getJSON("url_sub.json", function(json) {
		url["available"] = json;
		if(url["available"]["status"][url["page"]] == true){
			$.get("views/"+ url["page"] +".html",function(buffer){
				url["detail"] = buffer;
			}).fail(function(){
				url["detail"] = "<p>There's nothing here, please wait for some days.</p>";
			});
			mm_includejs('sub/'+ url["page"] +'.js','sub');
		}else{
			url["detail"] = "<p>Maybe you get the wrong page. Please click the title to reload.</p>";
		}
		if(location.search != ""){
			$("#cover").fadeOut().queue(function(){
				$("#content").text("").dequeue();
				$("#content").append(url["detail"]).dequeue();
				$("#content").fadeIn().dequeue();
			});
		}
		console.log(url);
	});
}

function InitPage(){
	LoadUrl();
	$(window).load(function(){
		setTimeout(function(){
			$('body > div').each(function(){
				$(this).fadeToggle('slow');
			});
		},500);
	});
}

$(document).ready(InitPage);
