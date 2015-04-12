if (Meteor.isClient) {
	Session.set("newLocationConfirmed", false);
	Session.set("noGeoloc", false);

	Template.addpoint.helpers({
		newLocationConfirmed: function () {
			return Session.get("newLocationConfirmed");
		},

		noGeoloc: function () {
			return Session.get("noGeoloc");
		},
		newLocationTag: function () {
			return Session.get("newLocationTag");
		}
	});

	Template.addpoint.events({
		'click #cancel-new-location': function () {
			Session.set("addOpened", false);
			Session.set("newLocationConfirmed", false);
			Session.set("noGeoloc", false);
		},
		'click #add-new-location': function () {
			if (Session.get("newLocationConfirmed")) {
				return;
			}

			var loc = Geolocation.currentLocation();

			if (loc === null) {
				Session.set("noGeoloc", true);
				return;
			}

			var newLocationTag = Locations.insert({ location: { type: 'Point', coordinates: [loc.coords.latitude, loc.coords.longitude] }});

			Session.set("newLocationTag", newLocationTag);
			Session.set("newLocationConfirmed", true);
		}
	});
}
