import React, { createContext, useContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
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
    isApplied: '',
    email: '',
    password: ''
  });

  const addUserData = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <UserDataContext.Provider value={{ userData, addUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
