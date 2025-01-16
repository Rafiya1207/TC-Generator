import { useState, useCallback } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState({
    certificateNumber: '',
    admissionNumber: '',
    fullname: '',
    fatherName: '',
    nationality: '',
    religion: '',
    caste: '',
    dob: '',
    doa: '',
    dol: '',
    doiTC: '',
    yearSem: '',
    course: '',
    pin: '',
		isPromoted: '',
		isPaidFee: '',
		isApplied: ''
  });

  const addUserData = useCallback((event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }, []);

  return [userData, addUserData];
};

export default useUserData;