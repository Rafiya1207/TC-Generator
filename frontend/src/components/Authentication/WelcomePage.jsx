import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(25, 118, 210)",
        }}
      ></Box>
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
          TC Generator
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: "600px", mb: 4, color: "white" }}>
          Easily generate and manage Transfer Certificates with a few clicks.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#1976d2",
            fontWeight: "bold",
            borderRadius: "12px",
            padding: "12px 24px",
            fontSize: "1.2rem",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
