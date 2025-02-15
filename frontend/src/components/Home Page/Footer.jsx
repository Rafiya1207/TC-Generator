import { Padding } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        backgroundColor: "#1976d2", // Solid Blue Color
        color: "white",
      }}
    >
      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        © {new Date().getFullYear()} TC Generator App | Version 1.0
      </Typography>
    </Box>
  );
};

// Common Styling for Links
const footerLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "0.3s",
  "&:hover": {
		textDecoration: 'underline'
  },
};

export default Footer;
