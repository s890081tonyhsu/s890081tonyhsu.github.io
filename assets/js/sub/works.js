function GetData(Detail){
	return $.ajax({
		type: 'GET',
		dataType: 'jsonp',
		data: {},
		url: "https://api.github.com/users/s890081tonyhsu/"+Detail+"?access_token=70b8535d3f4022a39aa9859d5d79e7c1de40df73",
		error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
		},
		success: function (msg) {
				console.log(msg);
		},
	});
}

function ShowList(data){
	var langStat = {};
	data.data.forEach(function(repo){
		$('#repo').append('<div id="'+repo.id+'"></div>');
		$('#'+repo.id).append('<h4>'+repo.name+'</h4>');
		if(repo.fork == true){
			$('#'+repo.id+' h4').prepend('<i class="fa fa-code-fork"></i>&nbsp;');
		}else{
			$('#'+repo.id+' h4').prepend('<i class="fa fa-book"></i>&nbsp;');
		}
		var lang = repo.language || "Text"
		$('#'+repo.id).append('<p class="lang '+ lang.toLowerCase() +'">'+ lang +'</p>');
		if(langStat[lang] == null) langStat[lang] = 1;
		else langStat[lang]++;
		var description = repo.description || "This repo has no description to tell you something.";
		$('#'+repo.id).append('<h6>'+description+'</h6>');
		$('#'+repo.id).append('<a href="' + repo.html_url + '"><i class="link"></a>');
	});
	var chartData = [];
	for (var key in langStat) {
		var percentage = Math.floor((langStat[key]/data.data.length)*100)
		chartData.push([key,percentage]);
	};
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

	$('#StatChart').highcharts({
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
            name: 'Browser share',
            data: chartData
        }]
    });
}

$(document).ready(GetData("repos").done(ShowList));
