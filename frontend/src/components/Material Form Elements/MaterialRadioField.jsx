import {Radio, RadioGroup, FormControlLabel, FormLabel} from '@mui/material'

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

export default MaterialRadioField