Opinions = new Mongo.Collection("opinions");
Opinions.attachSchema(new SimpleSchema({
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
	comment: {
		type: String,
		label: "Comment",
		optional: true
	}
}));
