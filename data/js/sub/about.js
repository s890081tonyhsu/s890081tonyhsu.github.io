$('section').click(function(){
		var key = $(this).attr('name');
		var visible = $('div[name]:visible');
		if($(visible).attr("name") != key){
				$('div[name]:visible').fadeOut().queue(function(){
						$('div[name='+key+']').fadeIn().dequeue();
				});
		}else return;
});
