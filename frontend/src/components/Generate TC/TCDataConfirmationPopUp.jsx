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
				confirm(res.ok)
			} catch (error) {
				console.error("Error posting TC:", error);
			}
		};

		postTC();
	}, [isSubmitted]);

	const isAnyValueEmpty = (userData) => {
		for (const key in userData) {
			if (userData[key] === '') return true;
		}
		return false;
	};

	return (
		<div>
			{
				!isAnyValueEmpty(userData) ? (
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
							<Button onClick={() => { setIsSubmitted(true) }} color="primary" variant="contained">
								Confirm & Submit
							</Button>
						</DialogActions>
					</Dialog>) : (
					<Dialog open={isTCSubmitted} onClose={close}>
						<DialogTitle>Please Fill Out All the fields to continue....</DialogTitle>
						<DialogActions>
							<Button onClick={close} color="secondary">
								Back
							</Button>
						</DialogActions>
					</Dialog>
				)
			}

		</div>
	);
}

export default TCDataConfirmationPopUp;
