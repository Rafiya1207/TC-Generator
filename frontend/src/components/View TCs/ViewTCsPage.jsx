import TCList from "./TCList.jsx";
import SearchBar from "./SearchBar.jsx";

const ViewTCsPage = () => {
	return (
		<>
			<SearchBar/>
			<TCList data = {data} />
		</>
	);
};

export default ViewTCsPage;