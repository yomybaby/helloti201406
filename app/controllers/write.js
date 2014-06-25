var args = arguments[0] || {};

$.saveBtn.addEventListener('click',function(){
	var postC = Alloy.Collections.instance('post');
	
	postC.create({
		content : $.ta.value,
		username : '이종은'		
	},{
		success:function(){
			$.ta.value = '';
			alert('저장완료');	
			$.ta.blur();
			Alloy.Globals.mainTabGroup.setActiveTab(0);
		}
	});
});

function onCancelClick(){
	
}
