import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserDataContext";

function TCDataConfirmationPopUp({ isTCSubmitted, close, confirm }) {
	const { userData, addUserData } = useContext(UserDataContext);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [status, setStatus] = useState(false);
	
	
	useEffect(() => {
		if (!isSubmitted) return;

		const postTC = async () => {
			try {
				const res = await fetch('http://localhost:5000/tc/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
					body: JSON.stringify(userData)
				});

				console.log(res);
				// setStatus(res.ok);
				confirm(res.ok)
			} catch (error) {
				console.error("Error posting TC:", error);
				// setStatus(false);
			// } finally {
				// setDoesGotResponse(true);
			}
		};

		postTC();
	}, [isSubmitted]);
  return (
    <div>
      <Button variant="contained" color="primary" onClick={close}>
        Submit TC
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={isTCSubmitted} onClose={close}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to submit the TC data? <br />
            <strong>No edits will be possible after submission.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => { setIsSubmitted(true)}} color="primary" variant="contained">
            Confirm & Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TCDataConfirmationPopUp;
