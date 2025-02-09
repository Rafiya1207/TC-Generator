import { TextField } from "@mui/material";

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

export default MaterialTextField