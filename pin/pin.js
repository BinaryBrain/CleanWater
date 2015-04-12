if (Meteor.isClient) {
	var testId = "TestLoc";
	
	Template.infoBox.helpers({
		infos: function () {
			return Data.findOne({locationId : testId});
		},
		momentFormat: function (date) {
			return moment(date).fromNow();
		}
	});
}