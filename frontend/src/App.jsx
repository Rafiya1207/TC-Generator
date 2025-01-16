import React from 'react';
import TCForm from './components/TCForm';
import Preview from './components/Preview';
import { Routes, Route } from 'react-router-dom';
import useUserData from "./hooks/useUserData";
import CredentialsForm from './components/CredentialsForm';
import { useNavigate } from "react-router-dom"

function App() {
	const [userData, addUserData] = useUserData();
	const navigate = useNavigate();

	return (
		<>
			<Routes>
				<Route path='/' element={<TCForm userData={userData} addUserData={addUserData} navigate={navigate} />}  />
				<Route path='/preview' element={<Preview userData={userData}/>} />
				<Route path='/credentials' element={<CredentialsForm userData={userData} addUserData={addUserData} navigate={navigate} />} />
			</Routes>
		</>
	)
}

export default App
