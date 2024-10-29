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
import RightSidebar from "./components/RightSideBar";
import Sidebar from "./components/SideBar";
import AppBarComponent from "./components/Navabar";
import OrderList from "./pages/OrderList";

// Custom hook to toggle theme
const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);
  return { isDarkMode, toggleTheme };
};

// Custom hook to manage notification drawer state
const useNotificationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, toggleDrawer };
};

// Custom hook to manage sidebar state
const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, toggleSidebar };
};

// Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <Typography variant="h6">Something went wrong.</Typography>;
    }

    return this.props.children;
  }
}

function App() {
  const { isDarkMode, toggleTheme } = useThemeToggle();
  const { isOpen: isNotificationOpen, toggleDrawer: toggleNotificationDrawer } =
    useNotificationDrawer();
  const { isOpen: isSidebarOpen, toggleSidebar } = useSidebarToggle();

  const isMobile = useMediaQuery("(max-width: 600px)");

  // Define routes
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/ecommerce/orders", element: <OrderList /> },
    { path: "*", element: <Typography variant="h6">404 Not Found</Typography> },
  ];

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" height="100vh">
          {/* Sidebar */}
          {isSidebarOpen && (
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}

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
              handleThemeChange={toggleTheme}
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
                  <ErrorBoundary>
                    <Routes>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Routes>
                  </ErrorBoundary>
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
                width: isMobile ? "100%" : "400px",
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
