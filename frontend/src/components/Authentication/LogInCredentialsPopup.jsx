import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MaterialTextField from '../Material Form Elements/MaterialTextField.jsx';

const CredentialsPopup = () => {
	return (
		<Dialog open={isTCSubmitted} onClose={close}>
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
				<Button onClick={() => { setIsSubmitted(true) }} color="primary" variant="contained">
					Confirm & Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CredentialsPopup;