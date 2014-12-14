var SubUtils = function(){}
inherit(SubUtils, SubUtilsDep);
SubUtils.prototype.PreLoad = function(){
	return {'visible': 3, 'contact': ''};
}
SubUtils.prototype.Run = function(){
	console.log('Hello, world!');
	window.content.on({
		show: function(event, page){
			this.set('visible', page);
		},
		contactDetail: function(event, contact){
			var targetDiv = this;
			require(['json!jsonFolder/contact.json'], function(contactData){
				targetDiv.set('contact', contactData[contact]);
			});
		}
	});
}
