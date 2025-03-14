import React, { useContext } from "react";
import '../../App.css';
import MaterialRadioField from "../Material Form Elements/MaterialRadioField";
import MaterialTextField from "../Material Form Elements/MaterialTextField";
import MaterialButton from "../Material Form Elements/MaterialButton";
import { UserDataContext } from "../../context/UserDataContext.jsx";

const TCForm = ({ open }) => {
  const { userData, addUserData, removeUserData } = useContext(UserDataContext);

  return (
    <form className="tc-form">
      <h1 className="tc-form-heading">Fill Transfer Certificate Form</h1>
      <MaterialTextField
        label="Admission Number"
        name="admissionNumber"
        value={userData.admissionNumber}
        listener={addUserData}
      />
      <MaterialTextField
        label="Fullname"
        name="fullname"
        value={userData.fullname}
        listener={addUserData}
      />
      <MaterialTextField
        label="Father's Full Name"
        name="fatherName"
        value={userData.fatherName}
        listener={addUserData}
      />
      <MaterialTextField
        label="Nationality"
        name="nationality"
        value={userData.nationality}
        listener={addUserData}
      />
      <MaterialTextField
        label="Religion"
        name="religion"
        value={userData.religion}
        listener={addUserData}
      />
      <MaterialTextField
        label="Caste"
        name="caste"
        value={userData.caste}
        listener={addUserData}
      />
      <MaterialTextField
        label="Date of Birth"
        name="dob"
        value={userData.dob}
        type="date"
        inputLabelProps={{ shrink: true }}
        listener={addUserData}
      />
      <MaterialTextField
        label="Date of Admission"
        name="doa"
        value={userData.doa}
        type="date"
        inputLabelProps={{ shrink: true }}
        listener={addUserData}
      />
      <MaterialTextField
        label="Date of Leaving"
        name="dol"
        value={userData.dol}
        type="date"
        inputLabelProps={{ shrink: true }}
        listener={addUserData}
      />
      <MaterialTextField
        label="Date of Issuing Transfer Certificate"
        name="doiTC"
        value={userData.doiTC}
        type="date"
        inputLabelProps={{ shrink: true }}
        listener={addUserData}
      />
      <MaterialTextField
        label="Year/Semester"
        name="yearSem"
        value={userData.yearSem}
        listener={addUserData}
      />
      <MaterialTextField
        label="Course"
        name="course"
        value={userData.course}
        listener={addUserData}
      />
      <MaterialTextField
        label="PIN"
        name="pin"
        value={userData.pin}
        listener={addUserData}
      />
      <div className="tc-form-radios">
        <MaterialRadioField
          label="Are you promoted to higher class?"
          name="isPromoted"
          value={userData.isPromoted}
          listener={addUserData}
        />
        <MaterialRadioField
          label="Have you paid all college fee?"
          name="isPaidFee"
          value={userData.isPaidFee}
          listener={addUserData}
        />
        <MaterialRadioField
          label="Is it being given Sumoto?"
          name="isApplied"
          value={userData.isApplied}
          listener={addUserData}
        />
      </div>
			<div className='align-right'>
				<MaterialButton label='back' path='/dashboard'/>
				<MaterialButton label='reset' type='reset' onClick={removeUserData} />
				<MaterialButton label='submit' type='button' onClick={ open }/>
			</div>
    </form>
  );
};

export default TCForm;