import TC from "../models/tc.model";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
	const tc = req.body;

	const newTC = new TC(tc);
	try {
		await newTC.save();
		res.status(201).json({success: true, data: newTC})
	} catch (error) {
		res.status(500).json({success: false, message: 'server error'})
	}
});

export default router;