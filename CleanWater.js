if (Meteor.isClient) {
	
	// events
	Session.set("formOpened", false);
	Session.set("addOpened", false);
	Session.set("infoBoxOpened", false);
	
	Template.body.helpers({
		formOpened: function () {
			return Session.get("formOpened");
		},
		addOpened: function () {
			return Session.get("addOpened");
		},
		infoBoxOpened: function () {
			return Session.get("infoBoxOpened");
		}
	});

	Template.body.events({
		'click #openform': function () {
			Session.set("formOpened", !Session.get("formOpened"));
		},
		'click #buttonadd': function () {
			Session.set("addOpened", !Session.get("addOpened"));
		},
		'click #pin': function () {
			Session.set("infoBoxOpened", !Session.get("infoBoxOpened"));
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
