if (Meteor.isClient) {
	Template.body.events({
		'click #openform': function () {
			console.log("Must open form.");
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
