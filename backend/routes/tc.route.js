import TC from "../models/tc.model.js";
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const tcs = await TC.find({});
		res.status(200).json({ success: true, data: tcs });
	} catch (error) {
		res.status(500).json({ success: false, message: "server error" });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const tc = await TC.findById(id);
		if (!tc) {
			return res.status(404).json({ success: false, message: "TC not found" });
		}
		res.status(200).json({ success: true, data: tc });
	} catch (error) {
		res.status(500).json({ success: false, message: "server error" });
	}
});

router.post('/', async (req, res) => {
	const tc = req.body;
	console.tc(tc);

	if (!tc.certificateNumber && !tc.admissionNumber && !tc.fullname && !tc.fatherName && !tc.nationality && !tc.religion && !tc.caste && !tc.dob && !tc.doa && !tc.dol && !tc.doiTC && !tc.yearSem && !tc.course && !tc.pin && !tc.isPromoted && !tc.isPaidFee && !tc.isApplied) {
		return res.status(400).json({ success: false, message: "provide fields" });
	}

	const newTC = new TC(tc);
	try {
		await newTC.save();
		res.status(201).json({ success: true, data: newTC })
	} catch (error) {
		res.status(500).json({ success: false, message: 'server error' })
	}
});

export default router;