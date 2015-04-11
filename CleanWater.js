if (Meteor.isClient) {
	
	Session.set("formopened", false);
	
	Template.body.helpers({
		formOpened: function () {
			return Session.get("formopened");
		}
	});

	Template.body.events({
		'click #openform': function () {
			Session.set("formopened", !Session.get("formopened"))
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
