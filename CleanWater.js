if (Meteor.isClient) {
	
	// events
	Session.set("formOpened", false);
	Session.set("addOpened", false);
	Session.set("infoPinOpened", false);
	
	Template.body.helpers({
		formOpened: function () {
			return Session.get("formOpened");
		},
		addOpened: function () {
			return Session.get("addOpened");
		},
		infoPinOpened: function () {
			return Session.get("infoPinOpened");
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
			console.log(Session.get("infoPinOpened"));
			Session.set("infoPinOpened", !Session.get("infoPinOpened"));
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
