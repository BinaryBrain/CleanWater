Opinions = new Mongo.Collection("opinions");
Opinions.attachSchema(new SimpleSchema({
	locationId: {
		type: String,
		label: " "
	},
	note: {
		type: Number,
		label: "Note",
		min: 0,
		max: 10
	},
	comment: {
		type: String,
		label: "Comment",
		optional: true
	}
}));
