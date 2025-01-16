import React from 'react';
import TCForm from './components/TCForm';
import Preview from './components/Preview';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<TCForm/>} />
				<Route path='/preview' element={<Preview/>} />
			</Routes>
		</>
	)
}

export default App
