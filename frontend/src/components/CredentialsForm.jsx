import React from "react";
import '../App.css';

import MaterialTextField from "./MaterialTextField";
import MaterialButton from "./MaterialButton";

const CredentialsForm = ({userData, addUserData, navigate}) => {
	return (
		<form className="tc-form" onSubmit={(event) => linkToPath(event, '/credentials', navigate)}>
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
			<MaterialButton type='submit' label='submit' className='align-right'/>
		</form>
	);
};

export default CredentialsForm;