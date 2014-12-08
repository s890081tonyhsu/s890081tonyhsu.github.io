var SubUtils = function(){
	this.data = {};
	this.TumblrAPI = function(url, Loaded){
		var xpath, params;
		if(typeof url.params.postid === 'undefined'){
			xpath = 'posts';
			params = 'offset='+(url.params.list*5)+'&limit=5';
		}else{
			xpath = 'posts';
			params = 'id='+url.params.postid;
		}
		$.ajax({
			method: 'GET',
			url: 'http://api.tumblr.com/v2/blog/blackenangel.tumblr.com/'+xpath+'?api_key=4bKj8Pffs8OnPVRtg2jhKdjNc0gPwx0HmxhHS1FlSRTDRxemU4&'+params,
			dataType: 'JSONP',
			data: {},
			error: function (jqXHR, textStatus, errorThrown) {
				window.content.set({'error': true});
			},
			success: function (data){
				var loaded = new Loaded();
				loaded.setData(url, data);
			}
		});
	}
	this.loaded = function(){
		this.data = {};
		this.setData = function(url, data){
			if(typeof url.params.postid !== 'undefined'){
				this.data = this.GetPost(url, data);
			}else{
				this.data = this.CollectPosts(data);
				this.data.offset = {};
				if((url.params.list+1) > 0)this.data.offset.PagePrev = url.params.list;
				if((url.params.list+1) < Math.floor(data.response.total_posts/5))this.data.offset.PageNext = url.params.list + 2;
			}
			this.data.loading = false;
			window.content.set(this.data);
		}
		this.CollectPosts = function(data){
			var temp = {
				'posts': []
			}
			data.response.posts.forEach(function(post){
				temp.posts.push({
					'id': post.id,
					'title': post.title,
					'date': post.date,
					'body': post.body.match(/^(.*)$/m)[0],
					'post_url': post.url
				});
			});
			return temp;
		}
		this.GetPost = function(url, data){
			var temp;
			var post = data.response.posts[0];
			temp =  { 
				'post':{
					'id': post.id,
					'title': post.title,
					'date': post.date,
					'body': post.body,
					'post_url': post.url
				}
			};
			return temp;
		}
	}
}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(url){
	url.params.list = (url.params.list - 1) || 0;
	this.TumblrAPI(url, this.loaded);
	return {'loading': true};
}
SubUtils.prototype.Run = function(){
}

