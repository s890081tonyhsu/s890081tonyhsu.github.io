function ShowList(data){
	console.log(data)
	$('#tumblr #posts').text("");
	var end = 5;
	for(var i=0; i<end; i++){
		var post = data.posts[i];
		$('#posts').append('<div id='+post.id+'></div><br><hr>');
		$('#'+ post.id).append('<h3>' + post.title + '</h3>');
		$('#'+ post.id).append('<h6>Posted at: ' + post.date + '</h6>');
		$('#'+ post.id).append($(post.body).filter('p')[0]);
		$('#'+ post.id).append('<a href="' + post.post_url + '" target="_blank"><h4 class="more">Read More →</h4></a>');
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
				ShowList(msg.response);
		},
	});
}

var run = GetData();
