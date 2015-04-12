if (Meteor.isClient) {
	Session.set("newLocationConfirmed", false);
	Session.set("noGeoloc", false);

	Template.addpoint.helpers({
		newLocationConfirmed: function () {
			return Session.get("newLocationConfirmed");
		},

		noGeoloc: function () {
			return Session.get("noGeoloc");
		}
	});

	Template.addpoint.events({
		'click #cancel-new-location': function () {
			if (!Session.get("newLocationConfirmed")) {
				Session.set("addOpened", false);
			}
		},
		'click #add-new-location': function () {
			var loc = Geolocation.currentLocation();

			if (loc === null) {
				Session.set("noGeoloc", true);
				return;
			}

			newLocationTag = Locations.insert({ type: 'Point', coordinates: [loc.latitude, loc.longitude]});

			Session.set("newLocationConfirmed", true);
		}
	});
}
