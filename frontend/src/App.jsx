import React from 'react';
import TCForm from './components/Generate TC/TCForm.jsx';
import Preview from './components/Generate TC/Preview.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserDataProvider } from './context/UserDataContext.jsx';
import CredentialsForm from './components/CredentialsForm';
import CreateTC from './components/Generate TC/CreateTC.jsx';

function App() {
	const navigate = useNavigate();

	return (
		<UserDataProvider>
			<Routes>
				<Route path='/' element={<TCForm navigate={ navigate } />}  />
				<Route path='/create' element={<CreateTC navigate={ navigate }/>}  />
				<Route path='/preview' element={<Preview />} />
				<Route path='/credentials' element={<CredentialsForm navigate={ navigate } />} />
			</Routes>
		</UserDataProvider>
	)
}

export default App
