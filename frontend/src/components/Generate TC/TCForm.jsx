import React, { useContext } from "react";
import '../../App.css';
import MaterialRadioField from "../Material Form Elements/MaterialRadioField";
import MaterialTextField from "../Material Form Elements/MaterialTextField";
import MaterialButton from "../Material Form Elements/MaterialButton";
import linkToPath from "../../functions/linkToPath.js";
import { UserDataContext } from "../../context/UserDataContext.jsx";

const TCForm = ({ navigate }) => {
  const { userData, addUserData, removeUserData } = useContext(UserDataContext);

  return (
    <form className="tc-form" onSubmit={(event) => linkToPath(event, '/preview', navigate)}>
      <h1 className="tc-form-heading">Fill Transfer Certificate Form</h1>
      <MaterialTextField
        label="Certificate Number"
        name="certificateNumber"
        value={userData.certificateNumber}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Admission Number"
        name="admissionNumber"
        value={userData.admissionNumber}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Fullname"
        name="fullname"
        value={userData.fullname}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Father's Full Name"
        name="fatherName"
        value={userData.fatherName}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Nationality"
        name="nationality"
        value={userData.nationality}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Religion"
        name="religion"
        value={userData.religion}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Caste"
        name="caste"
        value={userData.caste}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Date of Birth"
        name="dob"
        value={userData.dob}
        type="date"
        inputLabelProps={{ shrink: true }}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Date of Admission"
        name="doa"
        value={userData.doa}
        type="date"
        inputLabelProps={{ shrink: true }}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Date of Leaving"
        name="dol"
        value={userData.dol}
        type="date"
        inputLabelProps={{ shrink: true }}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Date of Issuing Transfer Certificate"
        name="doiTC"
        value={userData.doiTC}
        type="date"
        inputLabelProps={{ shrink: true }}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Year/Semester"
        name="yearSem"
        value={userData.yearSem}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="Course"
        name="course"
        value={userData.course}
        addUserData={addUserData}
      />
      <MaterialTextField
        label="PIN"
        name="pin"
        value={userData.pin}
        addUserData={addUserData}
      />
      <div className="tc-form-radios">
        <MaterialRadioField
          label="Are you promoted to higher class?"
          name="isPromoted"
          value={userData.isPromoted}
          addUserData={addUserData}
        />
        <MaterialRadioField
          label="Have you paid all college fee?"
          name="isPaidFee"
          value={userData.isPaidFee}
          addUserData={addUserData}
        />
        <MaterialRadioField
          label="Whether you have applied for this certificate or it is being given Sumoto?"
          name="isApplied"
          value={userData.isApplied}
          addUserData={addUserData}
        />
      </div>
			<div className='align-right'>
				<MaterialButton label='reset' type='reset' onClick={removeUserData} />
				<MaterialButton label='submit' type='submit' />
			</div>
    </form>
  );
};

export default TCForm;