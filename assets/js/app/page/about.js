var SubUtils = function(){}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	return {'name': 'Tony Hsu'};
}
SubUtils.prototype.Run = function(){
	console.log('Hello, world!');
}
