var args = arguments[0] || {};

var postC = Alloy.Collections.instance('post');
// postC.create({
	// username:'여러분의 이름'
// });
postC.on('reset add',function(){
	var items = [];	
	
	
	postC.each(function(model){
		Ti.API.info(model.attributes);
		items.push({
			template : 'template',
			usernameLabel : {
				text : model.get('username')
			},
			dateLabel : {
				text : '2014.6.25'
			},
			contentLabel : {
				text : model.get('content')
			},
			pic : {
				image : 'http://pds27.egloos.com/pds/201301/27/91/b0075091_51050fb5687fa.jpg'
			},
			properties: {
				height : 80
			}
		});	
	});
	$.section.items = items;
});

postC.fetch({
	success: function(){
		alert('succ');
	},
	error : function(){
		alert('err');
	}
});

