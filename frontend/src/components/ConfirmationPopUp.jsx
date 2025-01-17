import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
const ConfirmationPopUp = ({ status }) => {

	const [open, setOpen] = useState(false);
	const message = 'Your TC is Successfully Created';
	const buttonLabel = 'Download TC';
	// const buttonListener = downloadPDF;
	const buttonListener = handleClose;

	if (!status) {
		message = 'OPPS! Server Issue, Unable to send Data';
		buttonLabel = 'close';
		buttonListener = handleClose;
	}

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{message}</DialogTitle>
				<DialogActions>
					<Button onClick={buttonListener} color="primary">
						{buttonLabel}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ConfirmationPopUp;
