import TCList from "./TCList.jsx";
import SearchBar from "./SearchBar.jsx";
import { useEffect, useState } from "react";

const ViewTCsPage = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getTCs = async () => {
			const res = await fetch('http://localhost:5000/tc/',{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
			});
			const result = await res.json();
			setData(result.data);
			console.log(result);
		};
		getTCs();
	}, []);
	console.log(data);
	
	return (
		<>
			<SearchBar/>
			<TCList data = {data} />
		</>
	);
};

export default ViewTCsPage;