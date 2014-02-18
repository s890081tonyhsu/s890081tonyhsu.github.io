$('section').click(function(){
		var key = $(this).attr('name');
		var visible = $('div[name]:visible');
		$(this).siblings().fadeOut();
		if($(visible).attr("name") != key){
				$('div[name]').fadeOut().queue(function(){
						$('div[name='+key+']').fadeIn().dequeue();
				});
		}else return;
});

$('div.return').click(function(){
	$('section').each(function(){$(this).fadeIn();});
	$('div[name]:visible').fadeOut();
});
$(document).ready(checkXY(true));
