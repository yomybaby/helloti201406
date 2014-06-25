var args = arguments[0] || {};

$.saveBtn.addEventListener('click',function(){
	var postC = Alloy.Collections.instance('post');
	
	postC.create({
		content : $.ta.value,
		photo : $.preview.toBlob(),
		username : '이종은'		
	},{
		success:function(){
			$.ta.value = '';
			alert('저장완료');	
			$.ta.blur();
			Alloy.Globals.mainTabGroup.setActiveTab(0);
		},
		wait: true
	});
});

function onCancelClick(){
	Ti.Media.openPhotoGallery({
		success : function(event) {
			
			$.preview.image = event.media;
		},
		cancel : function() {
			
		},
		error : function(error) {
	
		},
		// allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
}





