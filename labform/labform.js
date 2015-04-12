if (Meteor.isClient) {
	Template.body.events({
		'click #cancel-form': function () {
			Session.set("formOpened", false);
		}
	});
	
	AutoForm.addHooks(['labQuickForm'], {
		onSuccess: function(operation, result, template) {
			Session.set("formOpened", false);
		}
	});
}