var SubUtils = function(){}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	return {'visible': 3};
}
SubUtils.prototype.Run = function(){
	console.log('Hello, world!');
	window.content.on({
		show: function(event, page){
			this.set('visible', page);
		}
	});
}
