function ShowList(data){
		$('#tumblr').text("");
		console.log(data.total_posts);
		var end = data.total_posts;
		for(var i=0; i<end; i++){
			var post = data.posts[i];
			$('#tumblr').append('<a href='+post.post_url+'><p id='+post.id+'>'+post.title+'</p></a>');
		}
}

function GetData(){
	return $.ajax({
		type: 'GET',
		dataType: 'jsonp',
		data: {},
		url: "http://api.tumblr.com/v2/blog/blackenangel.tumblr.com/posts?api_key=4bKj8Pffs8OnPVRtg2jhKdjNc0gPwx0HmxhHS1FlSRTDRxemU4",
		error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
		},
		success: function (msg){
				console.log(msg);
				ShowList(msg.response);
		},
	});
}

var run = GetData();
