import PreviewTC from './PreviewTC';
import TCForm from './TCForm.jsx';
import { useState, useContext, useEffect } from 'react';
import TCDataConfirmationPopUp from './TCDataConfirmationPopUp.jsx';
import { UserDataContext } from '../../context/UserDataContext.jsx';

const CreateTC = ({ navigate, isUnMounted }) => {
	const [isTCSubmitted, setIsTCSubmitted] = useState(false);
	const { setUserData } = useContext(UserDataContext);
	
	const handleOpen = () => {
		setIsTCSubmitted(true);
	};

	const handleClose = () => {
		setIsTCSubmitted(false);
	};

	const handleConfirm = (status) => {
		setIsTCSubmitted(false);
		navigate('/downloadTC', { state: status });
	};

	useEffect(() => {
		const getTCs = async () => {
			const res = await fetch('http://localhost:5000/tc/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
			});
			const result = await res.json();
			setUserData((prevData) => ({
				...prevData,
				certificateNumber: result.data.length + 1
			}));
		};
		getTCs();
	}, [isUnMounted]);

	return (
		<div style={{ display: 'flex' }}>
			<TCForm navigate={navigate} open={handleOpen} />
			<PreviewTC/>
			{isTCSubmitted && <TCDataConfirmationPopUp close={handleClose} confirm={handleConfirm} isTCSubmitted={isTCSubmitted} />}
		</div>
	);
};

export default CreateTC