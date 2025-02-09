import React, { useContext, useEffect, useState } from "react";
import MaterialButton from "./Material Form Elements/MaterialButton.jsx";
import MaterialTextField from "./Material Form Elements/MaterialTextField.jsx";
import linkToPath from "../functions/linkToPath.js";
import { UserDataContext } from "../context/UserDataContext.jsx";
import ConfirmationPopUp from "./ConfirmationPopUp.jsx";

const CredentialsForm = ({ navigate }) => {
	const { userData, addUserData } = useContext(UserDataContext);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [doesGotResponse, setDoesGotResponse] = useState(false);
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
				setStatus(res.ok);
			} catch (error) {
				console.error("Error posting TC:", error);
				setStatus(false);
			} finally {
				setDoesGotResponse(true);
			}
		};

		postTC();
	}, [isSubmitted]);


	return (
		<div>

			<form
				className="tc-form"
				onSubmit={(event) => {
					event.preventDefault();
					// linkToPath(event, '/credentials', navigate)
					setIsSubmitted(!isSubmitted)
				}}>
				<h1 className="tc-form-heading">Add Credentials</h1>
				<MaterialTextField
					label="Email"
					name="email"
					value={userData.email}
					addUserData={addUserData}
					type='email'
				/>
				<MaterialTextField
					label="Password"
					name="password"
					value={userData.password}
					addUserData={addUserData}
					type='password'
				/>
				<MaterialButton type='submit' label='Submit' className='align-right' />
			</form>
			{
				doesGotResponse && <ConfirmationPopUp status={status} setDoesGotResponse={setDoesGotResponse} />
			}
		</div>
	);
};

export default CredentialsForm;
