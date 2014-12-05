var SubUtils = function(){
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
