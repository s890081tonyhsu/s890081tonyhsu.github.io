function ShowList(data){
		$('#tumblr #front_post').text("");
		$('#tumblr #other_posts').text("");
		$('#tumblr #other_posts').append('<h3>Other Posts:</h3><hr>');
		console.log(data.total_posts);
		var end = data.total_posts;
		for(var i=0; i<end; i++){
			if(i == 0){
				var post = data.posts[i];
				$('#tumblr #front_post').append('<a href='+post.post_url+'><h3>'+post.title+'</h3></a><hr>');
				$('#tumblr #front_post').append(post.body);
			}else{
				var post = data.posts[i];
				$('#tumblr #other_posts').append('<a href='+post.post_url+'><p id='+post.id+'>'+post.title+'</p></a>');
			}
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
