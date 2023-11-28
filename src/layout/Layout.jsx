import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Navbar from "../pages/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    // secondary: green,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default function Layout() {
  // layout zoom
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    // Change zoom level on mount
    document.body.style.zoom = "150%";
    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Sidebar />
        {/* pages */}
        <Box sx={{ backgroundColor: "#f9f9f9", width: "100%", padding: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
