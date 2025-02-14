import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MaterialTextField from '../Material Form Elements/MaterialTextField.jsx';

const LogInCredentialsPopup = ({isClickedLogin, close}) => {
	
	return (
		<Dialog open={isClickedLogin} onClose={close}>
			<DialogTitle>Log In</DialogTitle>
			<DialogContent>
			<MaterialTextField
					label="Password"
					name="password"
					type='password'
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