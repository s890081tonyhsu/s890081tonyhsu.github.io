function RequireSub(url){
	var page = url.json;
	var name = page.template;
	var dependency = ['ractive', 'ret', 'rtf', 'text!ui/' + name + '.html', 'app/page/' + name].concat(page.dependency);
	require(dependency, function(Ractive, ret, rtf, template){
		var sub_utils = new SubUtils(url);
		var data = sub_utils.PreLoad(url);
		var partials = {};
		const partialRegex = /<!-- \{\{>(.*)\}\} -->(.*)<!-- \{\{\/\1\}\} -->/gs;
		console.log(sub_utils);
		console.log(data);
		var m;
		while ((m = partialRegex.exec(template)) !== null) {
			if (m.index === partialRegex.lastIndex) {
				partialRegex.lastIndex++;
			}
			
			partials[m[1]] = m[2];
		}
		window.content = Ractive({
			target: '#content',
			data: data,
			partials: partials,
			template: template,
			events: { tap: ret },
			transitions: { fade: rtf }
		});
		sub_utils.Run();
	});
}

requirejs.config({
	'baseUrl': 'assets/js/lib',
	'paths': {
		'app': '../app',
		'text': 'require/text',
		'json': 'require/json',
		'jsonFolder': '../../json',
		'ractive': 'ractive/ractive.min',
		'ret': 'ractive/ractive-events-tap.min',
		'rtf': 'ractive/ractive-transitions-fade.umd',
		'ui': '../../../views'
	},
	'shim': {
		'app/borderMenu': ['jquery/jquery.min', 'other/modernizr.custom'],
		'app/index': ['jquery/jquery.min', 'ractive', 'ret', 'rtf'],
		'highchart/highcharts-3d': ['highchart/highcharts'],
		'highchart/exporting': ['highchart/highcharts']
	}
});

// Refer this to https://gist.github.com/maestrow/9c9fced15d24021dd495

// Require menu
require(['app/borderMenu']);
// Require index
require(['json!jsonFolder/url_sub.json', 'app/index'], function(url_sub){
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
