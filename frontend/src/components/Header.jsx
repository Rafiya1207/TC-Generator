import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          TC Generator
        </Typography>

        {/* Navigation Links */}
        <div>
          <Button
            component={Link}
            to="/create"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Create New TC
          </Button>
          <Button
            component={Link}
            to="/saved"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            View Saved TCs
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
