var SubUtils = function(){
	this.GithubAPI = function(xpath){
		return JSON.parse($.ajax({
			type: 'GET',
			url: 'https://api.github.com/'+xpath+'?access_token=70b8535d3f4022a39aa9859d5d79e7c1de40df73',
			async: false
		}).responseText);
	}
	this.CollectRepos = function(data){
		var temp = {
			'repo': [],
			'langStat': {}
		};
		data.forEach(function(repo){
			temp.repo.push({
				'id': repo.id,
				'name': repo.name,
				'fork': repo.fork,
				'language': repo.language || 'Text',
				'description': repo.description || "This repo has no description to tell you something.",
				'html_url': repo.html_url
			});
			if(temp.langStat.hasOwnProperty(repo.language) === false) temp.langStat[repo.language] = 1;
			else temp.langStat[repo.language]++;
		});
		return temp;
	}
	this.DrawCharts = function(){
		var chartData = [];
		for (var key in this.data.langStat) {
			var percentage = Math.floor((this.data.langStat[key]/this.data.repo.length)*100);
			chartData.push([key,percentage]);
		}
		Highcharts.getOptions().colors = ['#701516', '#f1e05a', '#3581ba', '#4F5D95', '#563d7c', '#89e051', '#199c4b', '#FFFFFF'];
		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
			return {
				radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
				stops: [
					[0, color],
					[1, Highcharts.Color(color).brighten(-0.5).get('rgb')] // darken
				]
			};
		});

		$('#RepoChart').highcharts({
			exporting: {
				enabled: false
			},
					chart: {
							backgroundColor: 'rgba(255, 255, 255, 0)',
							plotBackgroundColor: null,
							plotBorderWidth: null,
							plotShadow: false
					},
					title: {
							text: 'Repositories types. (Since Account created)',
							style: {'color': '#FFFFFF', 'font-family': 'Gotham, Lucida Grande, Arial'}
					},
					legend: {
						itemStyle: {'color': '#FFFFFF', 'font-family': 'Gotham, Lucida Grande, Arial'}
					},
					tooltip: {
							pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
							pie: {
									allowPointSelect: true,
									borderColor: 'rgba(0, 0, 0, 0)',
									cursor: 'pointer',
									dataLabels: {
											enabled: false
									},
									showInLegend: true,
							}
					},
					series: [{
							type: 'pie',
							name: 'Language Percentage',
							data: chartData
					}]
			});
	}
}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	var receive = this.GithubAPI('users/s890081tonyhsu/repos');
	this.data = this.CollectRepos(receive);
	return this.data;
}
SubUtils.prototype.Run = function(){
	this.DrawCharts();
}
