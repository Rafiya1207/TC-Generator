import { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SearchBar = ({ data, setData }) => {
	const [userInput, setUserInput] = useState("");

	const handleSearch = () => {
		const filteredData = [];
		const search = userInput.toLowerCase();
		data.forEach((item) => {
			for (const key in item) {
				if (item[key].toString().toLowerCase().includes(search)) {
					filteredData.push(item);
					break;
				}
			}
		});
		setData(filteredData);
	};

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "20px",
				backgroundColor: "#1976d2", // Solid blue background
			}}
		>
			<TextField
				variant="outlined"
				placeholder="Search by Name, Date, Admission No..."
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
				sx={{
					width: "80%",
					maxWidth: "600px",
					backgroundColor: "white",
					borderRadius: "50px",
					"& .MuiOutlinedInput-root": {
						borderRadius: "50px",
					},
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon color="primary" />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							<ArrowForwardIcon
								color="primary"
								sx={{ cursor: "pointer" }}
								onClick={handleSearch}
							/>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};

export default SearchBar;
