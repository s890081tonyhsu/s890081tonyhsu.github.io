var SubUtils = function(){
	this.data = {};
	this.DirAPI = function(){
		return JSON.parse($.ajax({
			type: 'GET',
			url: 'http://nchusg.org/~otomesound/dokuwiki/api/dir_test.php',
			async: false
		}).responseText);
	}
}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	var receive = this.DirAPI();
	this.data = {'root': receive};
	return this.data;
}
SubUtils.prototype.Run = function(){
	$( '#dl-menu' ).dlmenu();
	$('button').click();
}
// WikiPrefix = 'http://nchusg.org/~otomesound/dokuwiki/doku.php?id=';
// function isNumber(n) {
// 		return !isNaN(parseFloat(n)) && isFinite(n);
// }
// function Console_Dir(path,data,div){
// 		var name = [];
// 		for(var i in data){
// 				if(isNumber(i))continue;
// 				else name.push(i);
// 		}
// 		for(var j in data){
// 				if(!isNumber(j))continue;
// 				else name.push(j);
// 		}
// 		for(var key in name){
// 				if(!isNumber(name[key])){
// 						$(div).append('<li><a href="#"><strong>'+name[key]+'</strong></a><ul id="'+name[key]+'" class="dl-submenu"></ul></li>');
// 						Console_Dir(path+name[key]+':',data[name[key]],'#'+name[key]);
// 				}else{
// 						output = data[name[key]].replace('.txt','');
// 						$(div).append('<li><a href="'+WikiPrefix+path+output+'" target="_blank" >'+output+'</a></li>');
// 				}
// 		}
// }
// function GetData(){
// 		return $.ajax({
// 				type: 'GET',
// 			   data: {},
// 			   url: "http://nchusg.org/~otomesound/dokuwiki/api/dir_test.php",
// 			   error: function (jqXHR, textStatus, errorThrown) {
// 					   console.log(jqXHR);
// 			   },
// 			   success: function (msg) {
// 			   },
// 		});
// }
// function InitWiki(data){
//   Console_Dir('',data,'#index');
//   $( '#dl-menu' ).dlmenu();
//   $('button').click();
// }
// $(document).ready(GetData().done(InitWiki));
