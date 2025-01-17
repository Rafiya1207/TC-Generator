import React, { useContext, useEffect, useState } from "react";
import MaterialButton from "./MaterialButton";
import MaterialTextField from "./MaterialTextField";
import linkToPath from "../functions/linkToPath.js";
import { UserDataContext } from "../context/UserDataContext.jsx";

const CredentialsForm = ({ navigate }) => {
	const { userData, addUserData } = useContext(UserDataContext);
	const { isSubmitted, setIsSubmitted } = useState(false);

	useEffect(() => {
		const postTC = async () => {
			const res = await fetch('http://localhost:5000/tc', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(userData)
			})
		};

		postTC();
	}, [isSubmitted])

	return (
		<form
			className="tc-form"
			onSubmit={(event) => {
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
	);
};

export default CredentialsForm;
