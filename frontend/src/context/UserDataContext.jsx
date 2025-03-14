import React, { createContext, useContext, useEffect, useState } from 'react';

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
	});

	const addUserData = (event) => {
		setUserData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value
		}));
	};

	const removeUserData = () => {
		setUserData((prevData) => ({
			...prevData,
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
		}));
	};

	return (
		<UserDataContext.Provider value={{ userData, addUserData, removeUserData, setUserData }}>
			{children}
		</UserDataContext.Provider>
	);
};

export const useUserData = () => useContext(UserDataContext);
