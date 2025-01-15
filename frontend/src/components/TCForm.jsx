import React, { useState } from "react";
import '../App.css';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";

const addUserData = (event, setUserData) => {
	setUserData((prevData) => ({
		...prevData,
		[event.target.name] :event.target.value
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
				value={userData.certificateNumber}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Admission Number"
				name="admissionNumber"
				value={userData.admissionNumber}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Fullname"
				name="fullname"
				value={userData.fullname}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Father's Full Name"
				name="fatherName"
				value={userData.fatherName}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Nationality"
				name="nationality"
				value={userData.nationality}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Religion"
				name="religion"
				value={userData.religion}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Caste"
				name="caste"
				value={userData.caste}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Date of Birth"
				name="dob"
				value={userData.dob}
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Date of Admission"
				name="doa"
				value={userData.doa}
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Date of Leaving"
				name="dol"
				value={userData.dol}
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Date of Issuing Transfer Certificate"
				name="doiTC"
				value={userData.doiTC}
				margin="normal"
				sx={{ width: "600px" }}
				type="date"
				InputLabelProps={{ shrink: true }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Year/Semester"
				name="yearSem"
				value={userData.yearSem}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="Course"
				name="course"
				value={userData.course}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<TextField
				label="PIN"
				name="pin"
				value={userData.pin}
				margin="normal"
				sx={{ width: "600px" }}
				required
				onChange = {(event) => addUserData(event, setUserData)}
			/>
			<div className="tc-form-radios">
				<FormLabel component="legend">Are you promoted to higher class?</FormLabel>
				<RadioGroup
					row
					name="promoted"
					value={userData.promoted}
				>
					<FormControlLabel value="Yes" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>

				<FormLabel component="legend">Have you paid all college fee?</FormLabel>
				<RadioGroup
					row
					name="feePaid"
					value={userData.feePaid}
				>
					<FormControlLabel value="Yes" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>

				<FormLabel component="legend">Whether you have applied for this certificate or it is being given Sumoto?</FormLabel>
				<RadioGroup
					row
					name="appliedSumoto"
					value={userData.appliedSumoto}
				>
					<FormControlLabel value="Yes" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
					<FormControlLabel value="No" control={<Radio required onChange = {(event) => addUserData(event, setUserData)}/>} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				</RadioGroup>
			</div>
			<Button type="button" variant="contained" color="primary" className="tc-form-btn">
				Preview
			</Button>
		</form>
	);
};

export default TCForm;