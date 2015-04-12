if (Meteor.isClient) {
	var testId = "12345";
	
	Template.infoBox.helpers({
		infos: function () {
			return Data.findOne({locationId : testId});
		},
		momentFormat: function (date) {
			return moment(date).fromNow();
		},
		opinions: function () {
			return Opinions.find({locationId : testId});
		}
	});
	
	Template.addOpinion.helpers({
		locationId: function () {
			return testId;
		}
	});
}