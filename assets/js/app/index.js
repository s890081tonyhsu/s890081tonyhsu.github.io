function IndexUtils(url_sub){
	this.url = {
		"json": {},
		"regex": /([^?&=#]+)=([^&#]*)/g,
		"source": location.search,
		"params": {},
		"page": null,
		"currentPage": $('meta[name=page]')
	};
	this.InitPage = function(){
		this.LoadUrl();
		setTimeout(function(){
			$('body > div').each(function(){
				$(this).fadeToggle('slow');
			});
		},500);
	}
	this.LoadUrl = function(){
		var temp = this.url.source.match(this.url.regex);
		for(var key in temp) {
			var data = temp[key].split("=");
				this.url.params[data[0]] = data[1];
		}
		this.url.page = this.url.params.page || '';
		if(location.search === '') this.url.page = 'home';
		this.url.json = url_sub[this.url.page] || url_sub['blank'];
		this.url.currentPage.attr('content', this.url.page);
	}
	this.ShowPage = function(){
		if(location.search !== ''){
			$("#cover").fadeOut().queue(function(){
				$("#content").fadeIn().dequeue();
			});
		}
	}
}

var SubUtilsDep = function(url){
	this.prototype.data = {};
	this.prototype.PreLoad = function(url){
		// Load static data and return to rvc
	}
	this.prototype.Run = function(){
		// Run other code after loaded.
	}
}

var inherit = function(C,P){
	var F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
}
