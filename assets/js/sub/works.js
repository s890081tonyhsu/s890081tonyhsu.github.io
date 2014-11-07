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
		var langStat = {};
		data.data.forEach(function(repo){
			$('#repo').append('<div id="'+repo.id+'"></div>');
			$('#'+repo.id).append('<h4>'+repo.name+'</h4>');
			var lang = repo.language || "Text"
			$('#'+repo.id).append('<p class="lang '+ lang.toLowerCase() +'">'+ lang +'</p>');
			if(langStat[lang] == null) langStat[lang] = 1;
			else langStat[lang]++;
			if(repo.fork == true){
				$('#'+repo.id).addClass('forked');
				langStat[lang]--;
			}
			var description = repo.description || "This repo has no description to tell you something.";
			$('#'+repo.id).append('<h6>'+description+'</h6>');
			$('#'+repo.id).append('<a href="' + repo.html_url + '"><i class="link"></a>');
		});
		for (var key in langStat) {
			$('#stat').append(' <p><span class="stat ' + key.toLowerCase() + '">' + key + '</span> x ' + langStat[key] + '</p>');
		};
}

$(document).ready(GetData("repos").done(ShowList));
