$.index.open();

$.openWriteBtn.addEventListener('click', function(e) {
	var writeC = Alloy.createController("write", {
	});
	
	writeC.getView().open();
});






