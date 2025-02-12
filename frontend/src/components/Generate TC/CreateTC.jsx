import PreviewTC from './PreviewTC';
import TCForm from './TCForm.jsx';
import { useState } from 'react';
import TCDataConfirmationPopUp from './TCDataConfirmationPopUp.jsx';
const CreateTC = ({ navigate }) => {
	const [ isTCSubmitted, setIsTCSubmitted ] = useState(false);
	const handleOpen = () => {
    setIsTCSubmitted(true);
  };

  const handleClose = () => {
    setIsTCSubmitted(false);
  };

  const handleConfirm = () => {
    setIsTCSubmitted(false);
  };

	return (
		<div style={{display: 'flex'}}>
			<TCForm navigate={ navigate } open={ handleOpen }/>
			<PreviewTC/>
			{ isTCSubmitted && <TCDataConfirmationPopUp close={handleClose} confirm={handleConfirm} isTCSubmitted={isTCSubmitted}/> }
		</div>
	);
};

export default CreateTC