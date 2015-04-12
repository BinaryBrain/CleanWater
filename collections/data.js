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
		min: 0
	},
	labName: {
		type: String,
		label: "Lab Name",
		max: 200
	},
	date: {
		type: Date,
		label: "Date of measure",
		defaultValue: new Date()
	},
	"measures.$.key" : {
		type: String,
		label: "Key"
	},
	"measures.$.value" : {
		type: String,
		label: "Value"
	},
	"measures.$.unit" : {
		type: String,
		label: "Unit"
	}
}));
