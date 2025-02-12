import TCList from "./TCList.jsx";
import SearchBar from "./SearchBar.jsx";
import { useEffect } from "react";

const ViewTCsPage = () => {
	let data = [];
	useEffect(() => {
		const getTCs = async () => {
			const res = await fetch('http://localhost:5000/tc/',{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
			});
			data = await res.json();
			console.log(data);
		};
		getTCs();
	}, []);
	return (
		<>
			<SearchBar/>
			<TCList data = {data.data} />
		</>
	);
};

export default ViewTCsPage;