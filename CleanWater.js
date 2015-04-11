if (Meteor.isClient) {
	
	Session.set("formOpened", false);
	Session.set("addOpened", false);
	
	Template.body.helpers({
		formOpened: function () {
			return Session.get("formOpened");
		},
		addOpened: function () {
			return Session.get("addOpened");
		}
	});

	Template.body.events({
		'click #openform': function () {
			Session.set("formOpened", !Session.get("formOpened"))
		},
		'click #buttonadd': function () {
			console.log(Session.get("addOpened"));
			Session.set("addOpened", !Session.get("addOpened"))
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
