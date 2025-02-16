import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PreviewTC from "../Generate TC/PreviewTC";

const ViewTC = () => {
	const [TCData, setTCData] = useState({});
		const location = useLocation();
		
		useEffect(() => {
			const getTC = async () => {
				const res = await fetch(`http://localhost:5000/tc/${location.state}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include',
				});
				const result = await res.json();
				setTCData(result.data);
			};
			getTC();
		}, []);
	return(
		<PreviewTC userData={TCData} />
	);
};

export default ViewTC;