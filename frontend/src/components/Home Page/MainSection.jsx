import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const MainSection = () => {
  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "primary.main",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          TC Generator App
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9, maxWidth: "600px" }}>
          Easily create and download Transfer Certificates in a few clicks.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 4,
            backgroundColor: "#ff9800", // High-contrast orange
            color: "white",
            fontSize: "1.1rem",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#e68900",
              transform: "scale(1.05)",
            },
          }}
          component={Link}
          to="/create"
        >
          Generate Transfer Certificate
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={3} sx={{ mt: 6, px: 3, justifyContent: "center" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
              }}
            >
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Features Data
const features = [
  {
    icon: <DescriptionIcon fontSize="large" color="primary" />,
    title: "Quick TC Generation",
    description: "Create and generate Transfer Certificates instantly.",
  },
  {
    icon: <CloudDoneIcon fontSize="large" color="primary" />,
    title: "Secure Storage",
    description: "All your TC data is securely stored and easily accessible.",
  },
  {
    icon: <PictureAsPdfIcon fontSize="large" color="primary" />,
    title: "PDF Download",
    description: "Download your TC as a PDF for easy printing and sharing.",
  },
];

export default MainSection;
