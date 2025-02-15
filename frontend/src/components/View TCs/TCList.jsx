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

const TCList = ({ data, navigate }) => {

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 4 }}>
      <TableContainer component={Paper} sx={{ borderRadius: "12px", boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={headerStyle}>PIN</TableCell>
              <TableCell sx={headerStyle}>Student Name</TableCell>
              <TableCell sx={headerStyle}>Date of Issue</TableCell>
              <TableCell sx={headerStyle}>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((tc, index) => (
                <TableRow key={index} hover onClick={() => { navigate(`/saved/${tc.fullname}`, {state:tc._id})}}>
                  <TableCell>{tc.pin}</TableCell>
                  <TableCell>{tc.fullname}</TableCell>
                  <TableCell>{tc.doiTC}</TableCell>
                  <TableCell>{tc.course}</TableCell>
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
