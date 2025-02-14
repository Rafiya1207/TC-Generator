import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MaterialTextField from '../Material Form Elements/MaterialTextField.jsx';
import { useState } from "react";

const LogInCredentialsPopup = ({isClickedLogin, close}) => {
	const [userPassword, setUserPassword] = useState('');
	const changePassword = (e) => setUserPassword(e.target.value);

	return (
		<Dialog open={isClickedLogin} onClose={close}>
			<DialogTitle>Log In</DialogTitle>
			<DialogContent>
			<MaterialTextField
					label="Password"
					name="password"
					type="password"
					value={userPassword}
					listener={changePassword}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={close} color="secondary">
					Cancel
				</Button>
				<Button onClick={() => checkPassword(userPassword)} color="primary" variant="contained">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LogInCredentialsPopup;