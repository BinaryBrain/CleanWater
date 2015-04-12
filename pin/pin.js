if (Meteor.isClient) {
	Session.set("tmpLocationID", "jDkSJwCnDcLrk2TkW");
	
	Template.infoBox.helpers({
		infos: function () {
			return Data.findOne({locationId : Session.get("tmpLocationID")});
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