import React from "react";
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";

const notifications = [
  {
    icon: <BugReportIcon />,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    icon: <PersonAddIcon />,
    text: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <BugReportIcon />,
    text: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    icon: <SubscriptionIcon />,
    text: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Released a new version",
    time: "59 minutes ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contacts = [
  {
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Natali Craig",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Drew Cano",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Orlando Diggs",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Andi Lane",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Kate Morrison",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Koray Okumus",
  },
];
const ListSection = ({ title, items, isContactList = false }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
      {title}
    </Typography>
    <List>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            {isContactList ? (
              <ListItemAvatar>
                <Avatar src={item.avatar} />
              </ListItemAvatar>
            ) : (
              <ListItemAvatar>
                {item.avatar ? <Avatar src={item.avatar} /> : item.icon}
              </ListItemAvatar>
            )}
            <ListItemText
              primary={isContactList ? item.name : item.text}
              secondary={!isContactList && item.time}
            />
          </ListItem>
          {index < items.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  </Box>
);

const RightSidebar = () => (
  <Box
    sx={{ width: 500, p: 2, borderLeft: "1px solid #ddd", overflowY: "auto" }}
  >
    <ListSection title="Notifications" items={notifications} />
    <ListSection title="Activities" items={activities} />
    <ListSection title="Contacts" items={contacts} isContactList />
  </Box>
);

export default RightSidebar;
