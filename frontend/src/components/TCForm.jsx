import React, { useState } from "react";
import '../App.css';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";

const addUserData = (event, setUserData) => {
	setUserData((prevData) => ({
		...prevData,
		[event.target.name] :event.taget.value
	}
	))
};

const TCForm = () => {
	const [ userData, setUserData ] = useState({
		certificateNumber: '',
		admissionNumber: '',
		fullname: '',
		fatherName: '',
		nationality: '',
		religion: '',
		caste: '',
		dob: '',
		doa: '',
		dol: '',
		doiTC: '',
		yearSem: '',
		course: '',
		pin: '',
		promoted: '',
		feePaid: '',
		appliedSumoto: '',
	});

	return (
		<form className="tc-form">
			<h1 className="tc-form-heading">Fill Transfer Certificate Form</h1>
			<TextField
				label="Certificate Number"
				name="certificateNumber"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Admission Number"
				name="admissionNumber"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Fullname"
				name="fullname"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Father's Full Name"
				name="fatherName"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Nationality"
				name="nationality"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Religion"
				name="religion"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Caste"
				name="caste"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Date of Birth"
				name="dob"
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
			/>
			<TextField
				label="Date of Admission"
				name="doa"
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
			/>
			<TextField
				label="Date of Leaving"
				name="dol"
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
			/>
			<TextField
				label="Date of Issuing Transfer Certificate"
				name="doiTC"
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
			/>
			<TextField
				label="Year/Semester"
				name="yearSem"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="Course"
				name="course"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<TextField
				label="PIN"
				name="pin"
				margin="normal"
				sx={{ width: "600px" }}
				required
			/>
			<div className="tc-form-radios">
				<FormLabel component="legend">Are you promoted to higher class?</FormLabel>
				<RadioGroup
					row
					name="promoted"
				>
					<FormControlLabel value="Yes" control={<Radio required/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>

				<FormLabel component="legend">Have you paid all college fee?</FormLabel>
				<RadioGroup
					row
					name="feePaid"
				>
					<FormControlLabel value="Yes" control={<Radio required/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>

				<FormLabel component="legend">Whether you have applied for this certificate or it is being given Sumoto?</FormLabel>
				<RadioGroup
					row
					name="appliedSumoto"
				>
					<FormControlLabel value="Yes" control={<Radio required/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>
			</div>
			<Button type="button" variant="contained" color="primary" className="tc-form-btn">
				Preview
			</Button>
		</form>
	);
};

export default TCForm;