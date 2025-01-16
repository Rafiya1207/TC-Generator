import React from 'react';
import TCForm from './components/TCForm';
import Preview from './components/Preview';
import { Routes, Route } from 'react-router-dom';
import useUserData from "./hooks/useUserData";

function App() {
	const [userData, addUserData] = useUserData();

	return (
		<>
			<Routes>
				<Route path='/' element={<TCForm userData={userData} addUserData={addUserData}/>} />
				<Route path='/preview' element={<Preview userData={userData}/>} />
			</Routes>
		</>
	)
}

export default App
