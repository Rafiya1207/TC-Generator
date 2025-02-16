import { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SearchBar = ({ data, setData }) => {
	const [userInput, setUserInput] = useState("");

	const handleSearch = () => {
		const search = userInput.toLowerCase();
		const filteredData = data.filter((item) =>
			Object.values(item).some((value) =>
				value.toString().toLowerCase().includes(search)
			)
		);
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
				onKeyDown={(event) => (event.key === "Enter") && handleSearch()}
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
