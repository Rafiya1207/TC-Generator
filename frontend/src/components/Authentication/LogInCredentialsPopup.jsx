import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MaterialTextField from '../Material Form Elements/MaterialTextField.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isPassword from "../../functions/checkPassword.js";

const LogInCredentialsPopup = ({ isClickedLogin, close }) => {
	const [userPassword, setUserPassword] = useState('');
	const changePassword = (e) => setUserPassword(e.target.value);
	const [dialogTitle, setDialogTitle] = useState(true);
	const navigate = useNavigate();
	const verifyPassword = () => {
		if (isPassword(userPassword)) navigate('/dashboard');
		setDialogTitle(false);
	}
	return (
		<Dialog open={isClickedLogin} onClose={close}>
			{
				dialogTitle
					? <DialogTitle>Log In</DialogTitle>
					: <DialogTitle color="red">Log In Failed, Try Again</DialogTitle>
			}
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
				<Button onClick={verifyPassword} color="primary" variant="contained">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LogInCredentialsPopup;