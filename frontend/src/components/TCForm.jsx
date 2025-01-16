import React from "react";
import '../App.css';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import useUserData from "../hooks/useUserData";

const MaterialTextField = ({ label, name, value, addUserData, inputLabelProps, type }) => {
	return (
		<TextField
			label={label}
			name={name}
			value={value}
			margin="normal"
			sx={{ width: "600px" }}
			required
			onChange={addUserData}
			InputLabelProps={inputLabelProps}
			type={type}
		/>
	);
};

const MaterialRadioField = ({ label, name, value, addUserData }) => {
	return (
		<>
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup
				row
				name={name}
				value={value}
			>
				<FormControlLabel value="Yes" control={<Radio required onChange={addUserData} />} label="Yes" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
				<FormControlLabel value="No" control={<Radio required onChange={addUserData} />} label="No" sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
			</RadioGroup>
		</>
	);
};

const TCForm = () => {
	const [userData, addUserData] = useUserData();

	return (
		<form className="tc-form">
			<h1 className="tc-form-heading">Fill Transfer Certificate Form</h1>
			<MaterialTextField
				label="Certificate Number"
				name="certificateNumber"
				value={userData.certificateNumber}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Admission Number"
				name="admissionNumber"
				value={userData.admissionNumber}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Fullname"
				name="fullname"
				value={userData.fullname}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Father's Full Name"
				name="fatherName"
				value={userData.fatherName}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Nationality"
				name="nationality"
				value={userData.nationality}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Religion"
				name="religion"
				value={userData.religion}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Caste"
				name="caste"
				value={userData.caste}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Date of Birth"
				name="dob"
				value={userData.dob}
				type="date"
				inputLabelProps={{ shrink: true }}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Date of Admission"
				name="doa"
				value={userData.doa}
				type="date"
				inputLabelProps={{ shrink: true }}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Date of Leaving"
				name="dol"
				value={userData.dol}
				type="date"
				inputLabelProps={{ shrink: true }}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Date of Issuing Transfer Certificate"
				name="doiTC"
				value={userData.doiTC}
				type="date"
				inputLabelProps={{ shrink: true }}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Year/Semester"
				name="yearSem"
				value={userData.yearSem}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="Course"
				name="course"
				value={userData.course}
				addUserData={addUserData}
			/>
			<MaterialTextField
				label="PIN"
				name="pin"
				value={userData.pin}
				addUserData={addUserData}
			/>
			<div className="tc-form-radios">
				<MaterialRadioField 
					label="Are you promoted to higher class?"
					name="isPromoted"
					value={userData.isPromoted}
					addUserData={addUserData}
				/>
				<MaterialRadioField 
					label="Have you paid all college fee?"
					name="isPaidFee"
					value={userData.isPaidFee}
					addUserData={addUserData}
				/>
				<MaterialRadioField 
					label="Whether you have applied for this certificate or it is being given Sumoto?"
					name="isApplied"
					value={userData.isApplied}
					addUserData={addUserData}
				/>
			</div>
			<Button type="button" variant="contained" color="primary" className="tc-form-btn">
				Preview
			</Button>
		</form>
	);
};

export default TCForm;