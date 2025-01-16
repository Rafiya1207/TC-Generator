import React from 'react';
import TCForm from './components/TCForm';
import Preview from './components/Preview';
import { Routes, Route } from 'react-router-dom';
import useUserData from "./hooks/useUserData";
import CredentialsForm from './components/CredentialsForm';

function App() {
	const [userData, addUserData] = useUserData();

	return (
		<>
			<Routes>
				<Route path='/' element={<TCForm userData={userData} addUserData={addUserData}/>} />
				<Route path='/preview' element={<Preview userData={userData}/>} />
				<Route path='/credentials' element={<CredentialsForm userData={userData} addUserData={addUserData}/>} />
			</Routes>
		</>
	)
}

export default App
