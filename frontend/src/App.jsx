import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserDataProvider } from './context/UserDataContext.jsx';
import CreateTC from './components/Generate TC/CreateTC.jsx';
import TCDownloadPage from './components/TCDownloadPage.jsx';
import ViewTCsPage from './components/View TCs/ViewTCsPage.jsx';
import ViewTC from './components/View TCs/viewTC.jsx';
import WelcomePage from './components/Authentication/WelcomePage.jsx';
import Home from './components/Home Page/Home.jsx';
import { useState } from 'react';
function App() {
	const navigate = useNavigate();
	const [isUnMounted, setIsUnMounted] = useState(false);
	
	return (
		<UserDataProvider>
			<Routes>
				<Route path='/' element={<WelcomePage navigate={navigate} />} />
				<Route path='/dashboard' element={<Home />} />
				<Route path='/create' element={<CreateTC navigate={navigate} isUnMounted={isUnMounted}/>} />
				<Route path='/saved/:id' element={<ViewTC/>} />
				<Route path='/saved' element={<ViewTCsPage navigate={navigate} />} />
				<Route path='/downloadTC' element={<TCDownloadPage setIsUnMounted={setIsUnMounted} />} />
			</Routes>
		</UserDataProvider>
	)
}

export default App
