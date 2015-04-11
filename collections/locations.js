Locations = new Mongo.Collection("locations");

PositionSchema = new SimpleSchema({
	type: {
		type: String,
		allowedValues: ['Point']
	},
	coordinates: {
		type: [Number],
		decimal: true,
		minCount: 2,
		maxCount: 2,
		label: "Coordinates",
	}
});

Locations.attachSchema(new SimpleSchema({
	location: {
		type: PositionSchema,
		index: '2dsphere'
	}
}));
