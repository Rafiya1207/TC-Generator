import { TextField } from "@mui/material";

const MaterialTextField = ({ label, name, value, addUserData, inputLabelProps, type }) => {
	return (
		<TextField
			label={label}
			name={name}
			value={value}
			margin="normal"
			sx={{ width: "40vw" }}
			required
			onChange={addUserData}
			InputLabelProps={inputLabelProps}
			type={type}
		/>
	);
};

export default MaterialTextField