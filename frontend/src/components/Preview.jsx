import PreviewTC from './PreviewTC.jsx'
import MaterialButton from "./MaterialButton";

const Preview = () => {

  return (
    <>
			<PreviewTC />
      <div className='align-right'>
        <MaterialButton path='/' label='back'/>
        <MaterialButton path='' label='cancel'/>
        <MaterialButton path='/credentials' label='confirm'/>
      </div>
    </>
  );
};

export default Preview;