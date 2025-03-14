import mongoose from "mongoose";

const tcSchema = mongoose.Schema({
	certificateNumber: {
		type: String,
		required: true
	},
	admissionNumber: {
		type: String,
		required: true
	},
	fullname: {
		type: String,
		required: true
	},
	fatherName: {
		type: String,
		required: true
	},
	nationality: {
		type: String,
		required: true
	},
	religion: {
		type: String,
		required: true
	},
	caste: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	doa: {
		type: String,
		required: true
	},
	dol: {
		type: String,
		required: true
	},
	doiTC: {
		type: String,
		required: true
	},
	yearSem: {
		type: String,
		required: true
	},
	course: {
		type: String,
		required: true
	},
	pin: {
		type: String,
		required: true
	},
	isPromoted: {
		type: String,
		required: true
	},
	isPaidFee: {
		type: String,
		required: true
	},
	isApplied: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

const certificateSchema = mongoose.Schema({
	certificateNumber: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

export const TC = mongoose.model('TC', tcSchema);
export const Certificate = mongoose.model('Certificate', certificateSchema);