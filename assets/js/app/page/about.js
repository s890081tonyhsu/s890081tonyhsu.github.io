var SubUtils = function(){}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	return {'visible': 3, 'contact': ''};
}
SubUtils.prototype.Run = function(){
	console.log('Hello, world!');
	window.content.show = function(page){
		window.content.set('visible', page);
	};
	window.content.contactDetail = function(contact){
		var targetDiv = window.content;
		require(['json!jsonFolder/contact.json'], function(contactData){
			targetDiv.set('contact', contactData[contact]);
		});
	};
}
