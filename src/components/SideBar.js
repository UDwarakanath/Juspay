import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  Box,
  Collapse,
  Avatar,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FolderIcon from "@mui/icons-material/Folder";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;

const sidebarSections = [
  {
    subheader: "Favorites",
    items: [
      { text: "Overview", path: "/overview", submenu: [] },
      { text: "Projects", path: "/projects", submenu: [] },
    ],
  },
  {
    subheader: "Dashboards",
    items: [
      {
        text: "Default",
        path: "/",
        icon: <DashboardIcon />,
        submenu: [],
      },
      {
        text: "eCommerce",
        path: "/ecommerce",
        icon: <ShoppingCartIcon />,
        submenu: [
          { text: "Orders", path: "/ecommerce/orders" },
          { text: "Products", path: "/ecommerce/products" },
        ],
      },
      {
        text: "Projects",
        path: "/projects",
        icon: <FolderIcon />,
        submenu: [
          { text: "Active Projects", path: "/projects/active" },
          { text: "Archived Projects", path: "/projects/archived" },
        ],
      },
      {
        text: "Online Courses",
        path: "/online-courses",
        icon: <SchoolIcon />,
        submenu: [],
      },
    ],
  },
  {
    subheader: "Pages",
    items: [
      {
        text: "User Profile",
        path: "/user-profile",
        icon: <PersonIcon />,
        submenu: [],
      },
      {
        text: "Account",
        path: "/account",
        icon: <SettingsIcon />,
        submenu: [
          { text: "Settings", path: "/account/settings" },
          { text: "Billing", path: "/account/billing" },
        ],
      },
    ],
  },
];

const SidebarSection = ({ section }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const theme = useTheme();
  const navigate = useNavigate();
  const toggleSubmenu = (itemText) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  return (
    <List
      subheader={
        <ListSubheader
          component="div"
          sx={{
            backgroundColor: "inherit",
            color: theme.palette.mode === "light" ? "#1C1C1C66" : "#ffffff",
            fontSize: 14,
            fontWeight: "bold",
            paddingLeft: 2,
          }}
        >
          {section.subheader}
        </ListSubheader>
      }
    >
      {section.items.map((item) => (
        <React.Fragment key={item.text}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                if (Array.isArray(item.submenu) && item.submenu.length > 0) {
                  toggleSubmenu(item.text);
                } else {
                  navigate(item.path);
                }
              }}
              sx={{
                px: 2,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              {item.icon && (
                <Box component="span" sx={{ mr: 2 }}>
                  {item.icon}
                </Box>
              )}
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: 14 }}
              />
              {Array.isArray(item.submenu) &&
                item.submenu.length > 0 &&
                (openSubmenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          {Array.isArray(item.submenu) && item.submenu.length > 0 && (
            <Collapse in={openSubmenus[item.text]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                {item.submenu.map((subitem) => (
                  <ListItem disablePadding key={subitem.text}>
                    <ListItemButton
                      component={Link}
                      to={subitem.path}
                      sx={{
                        px: 2,
                        "&:hover": { backgroundColor: "action.hover" },
                      }}
                    >
                      <ListItemText
                        primary={subitem.text}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Avatar
          alt="ByeWind"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <Typography variant="body1" fontWeight="bold">
          ByeWind
        </Typography>
      </Box>
      {sidebarSections.map((section) => (
        <SidebarSection key={section.subheader} section={section} />
      ))}
    </Drawer>
  );
};

export default Sidebar;
