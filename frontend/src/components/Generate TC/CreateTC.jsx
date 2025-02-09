import PreviewTC from './PreviewTC';
import TCForm from './TCForm.jsx';
const CreateTC = () => {
	return (
		<div style={{display: 'flex'}}>
			<TCForm/>
			<PreviewTC/>
		</div>
	);
};

export default CreateTC