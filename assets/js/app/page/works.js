var SubUtils = function(){
  this.myrepos = null;
	this.CollectRepos = function(data){
		var temp = {
			'repo': [],
			'langStat': {}
		};
		for(var i in data){
      var repo = data[i];
			var lang = (repo.language || 'Text');
			var langcss = lang.replace("#", "sharp");
			temp.repo.push({
				'id': repo.id,
				'name': repo.name,
				'fork': repo.fork,
				'language': lang,
				'langcss': langcss,
				'description': repo.description || "This repo has no description to tell you something.",
				'html_url': repo.html_url
			});
			if(temp.langStat.hasOwnProperty(lang) === false) temp.langStat[lang] = 1;
			else temp.langStat[lang]++;
		}
		return temp;
	}
	this.DrawCharts = function(){
		var colorlist = {'ruby': '#701516','php': '#4F5D95','javascript': '#f1e05a','css': '#563d7c','viml': '#199c4b','python': '#3581ba','shell': '#89e051','csharp': '#178600','verilog': '#b2b7f8','livescript': '#499886', 'ASP': '#6a40fd'};
		var chartData = [];
		for (var key in this.data.langStat) {
			var percentage = Math.floor((this.data.langStat[key]/this.data.repo.length)*100);
			chartData.push({
				name: key,
				y: percentage,
				color: colorlist[key.replace("#", "sharp").toLowerCase()]
			});
		}

		Highcharts.chart('RepoChart', {
			chart: {
				type: 'pie',
				backgroundColor: 'rgba(255, 255, 255, 0)',
				options3d: {
					enabled: true,
					alpha: 45,
					beta: 0
				}
			},
			title: {
					text: 'Repositories types. (Since Account created)',
					style: {'color': '#FFFFFF', 'font-family': 'Gotham, Lucida Grande, Arial'}
			},
			tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					borderColor: 'rgba(0, 0, 0, 0)',
					cursor: 'pointer',
					depth: 35,
	                dataLabels: {
	                    enabled: true,
	                    backgroundColor: 'rgba(255, 255, 255, 0)',
	                    color: 'white',
	                    borderWidth: 0,
	                    format: '{point.name}'
	                }
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
  this.user = new Gh3.User('s890081tonyhsu')
  this.repos = new Gh3.Repositories(this.user);
	return {
		'repo': [],
		'langStat': {}
  };
}
SubUtils.prototype.Run = function(){
	var _this = this;
  var repos = this.repos;
  repos.fetch({page:1, per_page:500, direction : "desc"}, "first", function(err, res){
      _this.data = _this.CollectRepos(res.raw.data); // I modified the Gh3 api.
      window.content.set('repo', _this.data.repo);
      window.content.set('langStat', _this.data.langStat);
      _this.DrawCharts();
  });
}
