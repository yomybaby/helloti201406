var args = arguments[0] || {};

$.saveBtn.addEventListener('click',function(){
	Alloy.createWidget("com.mcongrove.toast", null, {
	    text: "저장이 완료되었습니다.",
	    duration: 2000,
	    view: $.write
	});
});

function onCancelClick(){
	if(OS_ANDROID){
		alert('Android cancel');
	}else{
		alert('cancel');
	}
}
