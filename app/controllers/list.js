var args = arguments[0] || {};

var postC = Alloy.Collections.instance('post');
// postC.create({
	// username:'여러분의 이름'
// });
postC.on('reset add',function(){
	var items = [];	
	
	
	postC.each(function(model){

		items.push({
			template : 'template',
			usernameLabel : {
				text : model.get('user').username
			},
			dateLabel : {
				text : moment(model.get('created_at')).fromNow()
			},
			contentLabel : {
				text : model.get('content')
			},
			pic : {
				image : 'http://pds27.egloos.com/pds/201301/27/91/b0075091_51050fb5687fa.jpg'
			},
			properties: {
				height : 80,
				itemId : model.id
			}
		});	
	});
	$.section.items = items;
});

postC.fetch();

$.listView.addEventListener('itemclick', function(e) {
	var clickModel = postC.get(e.itemId);
	
	var detailCtrl = Alloy.createController('detail',{
		model : clickModel
	});
	var win = detailCtrl.getView();
	
	Alloy.Globals.mainTabGroup.activeTab.open(win);
	
});














