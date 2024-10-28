import React, { useState, useCallback } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Drawer,
  Typography,
  Divider,
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
              maxWidth: "100%",
              width: `calc(100% - ${isNotificationOpen ? "400px" : "0px"} - ${
                isSidebarOpen ? "240px" : "0px"
              })`,
              transition: "width 0.3s ease",
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
            <Box sx={{ p: 3, overflowY: "auto" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ecommerce/orders" element={<OrderList />} />
                <Route path="/statistics" element={<Statistics />} />
                {/* Fallback route for unmatched paths */}
                <Route
                  path="*"
                  element={<Typography variant="h6">404 Not Found</Typography>}
                />
              </Routes>
            </Box>
          </Box>

          {/* Notification Drawer */}
          <Drawer
            anchor="right"
            open={isNotificationOpen}
            onClose={toggleNotificationDrawer}
          >
            <Box
              sx={{ width: 400 }}
              role="presentation"
              onClick={toggleNotificationDrawer}
              onKeyDown={(e) => {
                if (e.key === "Escape") toggleNotificationDrawer();
              }}
            >
              <Typography variant="h6" sx={{ p: 2 }}>
                Notifications
              </Typography>
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
