import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const TCList = ({ data }) => {
	console.log(data);
	console.log(data.length);
  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 4 }}>
      <TableContainer component={Paper} sx={{ borderRadius: "12px", boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={headerStyle}>Student Name</TableCell>
              <TableCell sx={headerStyle}>Date of Issue</TableCell>
              <TableCell sx={headerStyle}>Course</TableCell>
              <TableCell sx={headerStyle} align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((tc, index) => (
                <TableRow key={index} hover>
                  <TableCell>{tc.fullname}</TableCell>
                  <TableCell>{tc.doiTC}</TableCell>
                  <TableCell>{tc.course}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary" onClick={() => alert("Downloading...")}>
                      <DownloadIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 3, color: "gray" }}>
                  No Transfer Certificates Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Table Header Styling
const headerStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",
};

export default TCList;
