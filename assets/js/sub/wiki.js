WikiPrefix = 'http://nchusg.org/~otomesound/dokuwiki/doku.php?id=';
function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
}
function Console_Dir(path,data,div){
		var name = new Array();
		for(var i in data){
				if(isNumber(i))continue;
				else name.push(i);
		}
		for(var i in data){
				if(!isNumber(i))continue;
				else name.push(i);
		}
		for(var key in name){
				if(!isNumber(name[key])){
						$(div).append('<li><a href="#"><strong>'+name[key]+'</strong></a><ul id="'+name[key]+'" class="dl-submenu"></ul></li>');
						Console_Dir(path+name[key]+':',data[name[key]],'#'+name[key]);
				}else{
						output = data[name[key]].replace('.txt','');
						$(div).append('<li><a href="'+WikiPrefix+path+output+'" target="_blank" >'+output+'</a></li>');
				}
		}
}
function GetData(){
		return $.ajax({
				type: 'GET',
			   data: {},
			   url: "http://nchusg.org/~otomesound/dokuwiki/api/dir_test.php",
			   error: function (jqXHR, textStatus, errorThrown) {
					   console.log(jqXHR);
			   },
			   success: function (msg) {
					   var get = msg;
					   console.log(get);
					   Console_Dir('',get,'#index');
					   $( '#dl-menu' ).dlmenu();
					   $('button').click();
			   },
		});
}
function InitWiki(){
	var test = GetData();
}
$(document).ready(InitWiki);