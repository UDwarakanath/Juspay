import React, { useState, useCallback } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Drawer,
  Typography,
  Divider,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import RightSidebar from "./components/RightSideBar";
import Sidebar from "./components/SideBar";
import AppBarComponent from "./components/Navabar";
import OrderList from "./pages/OrderList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  const handleThemeChange = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const toggleNotificationDrawer = useCallback(() => {
    setIsNotificationOpen((prev) => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" height="100vh">
          {/* Sidebar (Left) */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              transition: "width 0.3s ease",
              width: `calc(100% - ${
                isNotificationOpen ? (isMobile ? "100%" : "400px") : "0px"
              } - ${isSidebarOpen ? (isMobile ? "100%" : "240px") : "0px"})`,
              maxWidth: "100%",
            }}
          >
            {/* Top Navigation Bar */}
            <AppBarComponent
              isDarkMode={isDarkMode}
              handleThemeChange={handleThemeChange}
              toggleNotificationDrawer={toggleNotificationDrawer}
              toggleSidebar={toggleSidebar}
            />

            {/* Main Content */}
            <Box
              sx={{
                p: 3,
                overflowY: "auto",
                padding: isMobile ? "16px 8px" : "24px",
                flexGrow: 1,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ecommerce/orders" element={<OrderList />} />
                    <Route path="/statistics" element={<Statistics />} />
                    {/* Fallback route for unmatched paths */}
                    <Route
                      path="*"
                      element={
                        <Typography variant="h6">404 Not Found</Typography>
                      }
                    />
                  </Routes>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Notification Drawer */}
          <Drawer
            anchor="right"
            open={isNotificationOpen}
            onClose={toggleNotificationDrawer}
            PaperProps={{
              sx: {
                width: isMobile ? "100%" : "400px", // Full width on mobile
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "auto",
                p: isMobile ? 2 : 3,
              }}
              role="presentation"
              onClick={toggleNotificationDrawer}
              onKeyDown={(e) => {
                if (e.key === "Escape") toggleNotificationDrawer();
              }}
            >
              <Typography variant="h6">Notifications</Typography>
              <Divider />
              <RightSidebar />
            </Box>
          </Drawer>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
