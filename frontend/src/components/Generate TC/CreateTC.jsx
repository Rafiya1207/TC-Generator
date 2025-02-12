import PreviewTC from './PreviewTC';
import TCForm from './TCForm.jsx';
import { useState, useContext } from 'react';
import TCDataConfirmationPopUp from './TCDataConfirmationPopUp.jsx';
import { UserDataContext } from '../../context/UserDataContext.jsx';
const CreateTC = ({ navigate }) => {
	const { userData } = useContext(UserDataContext);

	const [ isTCSubmitted, setIsTCSubmitted ] = useState(false);
	const handleOpen = () => {
    setIsTCSubmitted(true);
  };

  const handleClose = () => {
    setIsTCSubmitted(false);
  };

  const handleConfirm = ( status ) => {
    setIsTCSubmitted(false);
		navigate('/downloadTC', { state: status });
  };

	return (
		<div style={{display: 'flex'}}>
			<TCForm navigate={ navigate } open={ handleOpen }/>
			<PreviewTC const userData={userData}/>
			{ isTCSubmitted && <TCDataConfirmationPopUp close={handleClose} confirm={handleConfirm} isTCSubmitted={isTCSubmitted}/> }
		</div>
	);
};

export default CreateTC