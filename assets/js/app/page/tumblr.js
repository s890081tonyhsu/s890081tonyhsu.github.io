var SubUtils = function(){
	this.data = {};
	this.TumblrAPI = function(xpath){
		return $.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20tumblr.posts%20where%20username%3D\'blackenangel\'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
			async: false
		}).responseJSON.query.results.posts;
	}
	this.CollectPosts = function(data){
		var temp = {
			'posts': []
		}
		data.post.forEach(function(post){
			temp.posts.push({
				'id': post.id,
				'title': post['regular-title'],
				'date': post.date,
				'body': post['regular-body'].match(/^(.*)$/m)[0],
				'post_url': post.url
			});
		});
		return temp;
	}
	this.GetPost = function(url, data){
		var temp;
		var postid = url.params.postid;
		data.post.forEach(function(post){
			if(post.id == postid)
				temp =  { 
					'post':{
						'id': post.id,
						'title': post['regular-title'],
						'date': post.date,
						'body': post['regular-body'],
						'post_url': post.url
					}
				};
		});
		if(typeof temp === 'undefined') temp = this.CollectPosts(data);
		return temp;
	}
}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(url){
	this.data = this.TumblrAPI('posts');
	if(typeof url.params.postid !== 'undefined'){
		console.log(url.params.postid);
		this.data = this.GetPost(url, this.data);
	}else{
		this.data = this.CollectPosts(this.data);
	}
	return this.data;
}
SubUtils.prototype.Run = function(){
}

