import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
	const [isCertificateNumberUpdated, setIsCertificateNumberUpdated] = useState(false);
	useEffect(() => {
		const getCertificateNumber = async () => {
			const response = await fetch('http://localhost:5000/tc/certificate/certificateNumber');
			const data = await response.json();
			setUserData((prevData) => ({
				...prevData,
				certificateNumber: data.certificateNumber
			}));
		};
		getCertificateNumber();
	}, [isCertificateNumberUpdated]);

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
		<UserDataContext.Provider value={{ userData, addUserData, removeUserData, setIsCertificateNumberUpdated }}>
			{children}
		</UserDataContext.Provider>
	);
};

export const useUserData = () => useContext(UserDataContext);
