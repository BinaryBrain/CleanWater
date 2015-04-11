Data = new Mongo.Collection("data");
Data.attachSchema(new SimpleSchema({
	locationId: {
		type: String,
		label: "LocationID"
	},
	note: {
		type: Number,
		label: "Note",
		max: 10,
		max: 0
	},
	labName: {
		type: String,
		label: "Lab Name",
		max: 200
	},
	labName: {
		type: Date,
		label: "Date of measure",
		defaultValue: function () {
			return new Date();
		}
	},
	"measure.$.name" : {
		type: String,
		label: "Name"
	},
	"measure.$.value" : {
		type: String,
		label: "Value"
	},
	"measure.$.unit" : {
		type: Boolean,
		label: "Unit"
	}
}));
