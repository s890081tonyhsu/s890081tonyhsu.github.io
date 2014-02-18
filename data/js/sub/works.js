function GetData(Detail){
	return $.ajax({
		type: 'GET',
		dataType: 'jsonp',
		data: {},
		url: "https://api.github.com/users/s890081tonyhsu/"+Detail+"?access_token=70b8535d3f4022a39aa9859d5d79e7c1de40df73",
		error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
		},
		success: function (msg) {
				console.log(msg);
		},
	});
}

function ShowList(data){
		console.log(data);
		data.data.forEach(function(repo){
			$('#repo').append('<div id="'+repo.id+'" onclick="window.open(\''+repo.html_url+'\',\'_blank\');" style="cursor:pointer;"></div>');
			$('#'+repo.id).append('<h4>'+repo.name+'</h4></a>');
			$.ajax({
				type: 'GET',
				dataType: 'jsonp',
				data: {},
				url: repo.languages_url+"?access_token=70b8535d3f4022a39aa9859d5d79e7c1de40df73",
				error: function (jqXHR, textStatus, errorThrown) {
					console.log(jqXHR);
				},
				success: function (msg) {
					var str = [];
					console.log(msg);
					$.each(msg.data, function(idx){
						str.push(idx);
					});
					$('#'+repo.id).append('<p>'+str.join(", ")+'</p>');
				},
			});
			if(repo.fork == true){
				$('#'+repo.id).addClass('forked');
			}	
		});
		checkXY(true);
}

$(document).ready(GetData("repos").done(ShowList));
