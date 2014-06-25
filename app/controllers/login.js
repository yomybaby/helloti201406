var args = arguments[0] || {};


$.loginBtn.addEventListener('click', function(e) {
	Cloud.Users.login({
	    login: $.username.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        alert('Success:\n' +
	            'id: ' + user.id + '\n' +
	            'sessionId: ' + Cloud.sessionId + '\n' +
	            'first name: ' + user.first_name + '\n' +
	            'last name: ' + user.last_name);
	       Ti.App.Properties.setString('sessionId',Cloud.sessionId);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});


