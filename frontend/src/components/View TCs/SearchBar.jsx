import { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TopSection = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value); // Pass search value to parent component
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
        value={search}
        onChange={handleSearch}
        sx={{
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "white",
          borderRadius: "50px", // More rounded corners
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
        }}
      />
    </Box>
  );
};

export default TopSection;
