import { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FolderOpen, Description } from "@mui/icons-material";

export default function TCDashboard() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Main Content Section - Centered with Fixed Background */}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to the Transfer Certificate Manager
          </Typography>
          <Typography variant="h6" color="white" sx={{ opacity: 0.8, mb: 3 }}>
            Simplify your institution’s TC process with this seamless, secure, and efficient App.
          </Typography>
        </motion.div>

        {/* Quick Actions */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="contained" color="primary" startIcon={<FolderOpen />}>Create New TC</Button>
          <Button variant="contained" sx={{ backgroundColor: "#f50057", color: "white" }} startIcon={<Description />}>View Saved TC’s</Button>
        </Box>
      </Box>
    </Box>
  );
}
