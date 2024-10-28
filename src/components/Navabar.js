import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from "@mui/material";
import {
  StarBorder,
  BrightnessHigh,
  BrightnessLow,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const AppBarComponent = ({
  isDarkMode,
  handleThemeChange,
  toggleNotificationDrawer,
  toggleSidebar,
  unreadNotifications,
}) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Extract and format the route path to display
  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean) // Remove empty parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" / ");
  };

  const currentRoute = formatPath(location.pathname);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: isDarkMode ? "#555" : "#e0e0e0",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="body2"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: isDarkMode ? "#ccc" : "#666",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="favorites"
              sx={{ mr: 1 }}
            >
              <StarBorder />
            </IconButton>
            {currentRoute || "dashboard / default"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#555" : "#f5f5f5",
            borderRadius: "8px",
            padding: "4px 10px",
            flexGrow: 1,
            maxWidth: "300px",
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <SearchIcon
            fontSize="small"
            sx={{ color: isDarkMode ? "#ccc" : "#999" }}
          />
          <InputBase
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "14px",
              color: isDarkMode ? "#ccc" : "#666",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {isDarkMode ? (
              <BrightnessHigh fontSize="small" />
            ) : (
              <BrightnessLow fontSize="small" />
            )}
          </IconButton>
          <IconButton color="inherit" onClick={toggleNotificationDrawer}>
            <Badge badgeContent={unreadNotifications} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
