function GetData(response){
		var detail = response.data;
		console.log(detail);
		detail.forEach(function(repo){
			$('#repo').append('<div id="'+repo.id+'" onclick="window.open(\''+repo.html_url+'\',\'_blank\');" style="cursor:pointer;"></div>');
			$('#'+repo.id).append('<h4>'+repo.full_name.replace("s890081tonyhsu/","")+'</h4></a>');
			$('#'+repo.id).append('<p>'+repo.language+'</p>');
			if(repo.fork == true){
				$('#'+repo.id).addClass('forked');
			}	
		});
		checkXY(true);
	}
	
var script = document.createElement('script');
script.src = 'https://api.github.com/users/s890081tonyhsu/repos?callback=GetData';

document.getElementsByTagName('head')[0].appendChild(script);
