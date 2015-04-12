if (Meteor.isClient) {
	Session.set("tmpLocationID", "jDkSJwCnDcLrk2TkW");

	Template.infoBox.helpers({
		labs: function () {
			return Data.find({locationId : Session.get("tmpLocationID")});
		},
		momentFormat: function (date) {
			return moment(date).fromNow();
		},
		opinions: function () {
			return Opinions.find({locationId : Session.get("tmpLocationID")});
		}
	});
	
	Template.addOpinion.helpers({
		locationId: function () {
			return Session.get("tmpLocationID");
		}
	});
}