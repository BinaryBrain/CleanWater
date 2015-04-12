if (Meteor.isClient) {
	Geolocation.currentLocation(); // Ask the user to share location

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
			Session.set("addOpened", true);
		},
		'click #pin': function () {
			Session.set("infoBoxOpened", true);
		}, 
		'click #map': function () {
			Session.set("infoBoxOpened", false);
		}, 
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
