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
				'body': $(post['regular-body']).filter('p')[0].outerHTML,
				'post_url': post.url
			});
		});
		return temp;
	}
}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(url){
	this.data = this.TumblrAPI('posts');
	console.log(this.data);
	this.data = this.CollectPosts(this.data);
	return this.data;
}
SubUtils.prototype.Run = function(){
}

