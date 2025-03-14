import { UserDataContext } from '../../context/UserDataContext.jsx';
import { useContext } from 'react';

const PreviewField = ({ fieldNumber, heading, value }) => {
	return (
		<div className="preview-field">
			<h3>{fieldNumber}. {heading} : </h3>
			<p>{value}</p>
		</div>
	);
}

const PreviewTC = ({ printRef }) => {
	const { userData } = useContext(UserDataContext);

	return (
		<div ref={printRef} className="preview-document">
			<h1 className="preview-template-headings">GOVERNMENT POLYTECHNIC - KALYANDURG-515 761</h1>
			<h4>ORIGINAL</h4>
			<h2 className="preview-template-headings">TRANSFER CERTIFICATE</h2>
			<div className="preview-field">
				<span><strong>No. </strong>{userData.certificateNumber}</span>
				<span><strong>Admn. </strong>{userData.admissionNumber}</span>
			</div>
			<PreviewField
				fieldNumber='1'
				heading="Name of the student (Full)"
				value={userData.fullname}
			/>
			<PreviewField
				fieldNumber='2'
				heading="Name of the father's name"
				value={userData.fatherName}
			/>
			<PreviewField
				fieldNumber='3'
				heading="Nationality, Religion & Caste"
				value={userData.nationality + '-' + userData.religion + '-' + userData.caste}
			/>
			<PreviewField
				fieldNumber='4'
				heading="Date of Birth as entered in the Admission Register"
				value={userData.dob}
			/>
			<PreviewField
				fieldNumber='5'
				heading="Date of Admission"
				value={userData.doa}
			/>
			<PreviewField
				fieldNumber='6'
				heading="Date of Leaving"
				value={userData.dol}
			/>
			<PreviewField
				fieldNumber='7'
				heading="Course/Class and Pin No. in which the student was studying at the time of leaving"
				value={userData.course + '-' + userData.yearSem + '-' + userData.pin}
			/>
			<PreviewField
				fieldNumber='8'
				heading="Whether qualified for promotion to the higher class"
				value={userData.isPromoted}
			/>
			<PreviewField
				fieldNumber='9'
				heading="Whether all fees due to the college have been paid"
				value={userData.isPaidFee}
			/>
			<PreviewField
				fieldNumber='10'
				heading="Date on which the pupil actually left the college"
				value={userData.dol}
			/>
			<PreviewField
				fieldNumber='11'
				heading="Conduct & Progress of the student"
				value=''
			/>
			<PreviewField
				fieldNumber='12'
				heading="Whether the student has applied for this certificate or it is being given su-moto"
				value={userData.isApplied}
			/>
			<PreviewField
				fieldNumber='13'
				heading="Date of issuing the Transfer Certificate"
				value={userData.doiTC}
			/>
			<div className="bottom-field"><strong>Date : </strong></div>
			<div className="bottom-field"><strong>Office Seal : </strong></div>
			<h3 className="principal-sign">PRINCIPAL</h3>
		</div>
	);
};

export default PreviewTC;