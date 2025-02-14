import { TextField } from "@mui/material";

const MaterialTextField = ({ label, name, value, listener, inputLabelProps, type }) => {
	return (
		<TextField
			label={label}
			name={name}
			value={value}
			margin="normal"
			sx={{ width: "40vw" }}
			required
			onChange={listener}
			InputLabelProps={inputLabelProps}
			type={type}
		/>
	);
};

export default MaterialTextField