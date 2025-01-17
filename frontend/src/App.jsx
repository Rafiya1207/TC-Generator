import React from 'react';
import TCForm from './components/TCForm';
import Preview from './components/Preview';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserDataProvider } from './context/UserDataContext.jsx';
import CredentialsForm from './components/CredentialsForm';

function App() {
	const navigate = useNavigate();

	return (
		<UserDataProvider>
			<Routes>
				<Route path='/' element={<TCForm navigate={navigate} />}  />
				<Route path='/preview' element={<Preview />} />
				<Route path='/credentials' element={<CredentialsForm navigate={navigate} />} />
			</Routes>
		</UserDataProvider>
	)
}

export default App
