import PreviewTC from './PreviewTC';
import TCForm from './TCForm.jsx';
const CreateTC = ({ navigate }) => {
	return (
		<div style={{display: 'flex'}}>
			<TCForm navigate={ navigate }/>
			<PreviewTC/>
		</div>
	);
};

export default CreateTC