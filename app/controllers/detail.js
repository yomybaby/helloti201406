var args = arguments[0] || {};

if(args.model){
	$.name.text = args.model.get('user').username;
	$.date.text = moment(args.model.get('created_at')).fromNow();
	$.content.text = args.model.get('content');
	
}
