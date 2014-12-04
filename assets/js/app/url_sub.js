var url_sub = {
	'home': {
		'status': true,
		'template': '',
		'dependency': [],
		'params': []
	},
	'about': {
		'status': true,
		'template': 'about',
		'dependency': [],
		'params': []
	},
	'works': {
		'status': true,
		'template': 'works',
		'dependency': ['highchart/highcharts', 'highchart/exporting'],
		'params': ['repoid']
	},
	'wiki': {
		'status': true,
		'template': 'wiki',
		'dependency': ['jquery/jquery.dlmenu'],
		'params': ['page']
	},
	'tumblr': {
		'status': true,
		'template': 'tumblr',
		'dependency': [],
		'params': ['postid']
	},
	// Blank Page
	'blank': {
		'status': true,
		'template': 'blank',
		'dependency': [],
		'params': []
	}
};
