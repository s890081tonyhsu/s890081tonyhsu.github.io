function RequireSub(url){
	var page = url.json;
	var name = page.template;
	var dependency = ['rvc!ui/' + name, 'app/page/' + name].concat(page.dependency);
	require(dependency, function(ContentPage){
		var sub_utils = new SubUtils(url);
		var data = sub_utils.PreLoad(url);
		console.log(sub_utils);
		console.log(data);
		window.content = new ContentPage({
			el: '#content',
			data: data
		});
		sub_utils.Run();
	});
}

requirejs.config({
	'baseUrl': 'assets/js/lib',
	'paths': {
		'app': '../app',
		'ractive': 'ractive/ractive.min',
		'ret': 'ractive/ractive-events-tap.min',
		'rtf': 'ractive/ractive-transitions-fade.min',
		'rvc': 'ractive/rvc.min',
		'ui': '../../../views'
	},
	'shim': {
		'app/borderMenu': ['jquery/jquery.min', 'other/modernizr.custom'],
		'app/index': ['jquery/jquery.min', 'ractive', 'ret', 'rtf']
	}
});

// Refer this to https://gist.github.com/maestrow/9c9fced15d24021dd495

// Require menu
require(['app/borderMenu']);
// Require index
require(['app/url_sub', 'app/index'], function(){
	var utils = new IndexUtils(url_sub);
	utils.InitPage();
	var _url = utils.url;
	console.log(_url);
	if(_url.json.template !== ''){
		console.log('Not in index.');
		RequireSub(_url);
		utils.ShowPage();
	}
});
