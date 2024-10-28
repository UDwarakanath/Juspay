import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  IconButton,
  Typography,
  Box,
  TablePagination,
  TableSortLabel,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { MoreVert, Search, CalendarToday } from "@mui/icons-material";
import { styled } from "@mui/system";

const ordersData = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: "#CM9806",
    user: "John Smith",
    project: "Marketing Website",
    address: "Main St. Austin",
    date: "1 day ago",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: "#CM9807",
    user: "Emma Watson",
    project: "E-commerce App",
    address: "Harvard St. Boston",
    date: "2 hours ago",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "#CM9808",
    user: "George Baker",
    project: "HR System",
    address: "Cedar Lane Denver",
    date: "4 days ago",
    status: "Complete",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: "#CM9809",
    user: "Lily Thompson",
    project: "Mobile App",
    address: "Broadway New York",
    date: "2 weeks ago",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "#CM9810",
    user: "Sophia Turner",
    project: "Social Media Campaign",
    address: "Maple St. Seattle",
    date: "3 days ago",
    status: "Rejected",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    id: "#CM9811",
    user: "Ethan Parker",
    project: "Blog Website",
    address: "Park Avenue Miami",
    date: "Just now",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    id: "#CM9812",
    user: "Liam Nelson",
    project: "Event Management App",
    address: "Spruce St. Los Angeles",
    date: "2 minutes ago",
    status: "Complete",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "#CM9813",
    user: "Olivia Green",
    project: "Portfolio Website",
    address: "Pine St. Chicago",
    date: "Yesterday",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: "#CM9814",
    user: "Michael Brown",
    project: "Inventory System",
    address: "Jackson St. Phoenix",
    date: "1 hour ago",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: "#CM9815",
    user: "Isabella Carter",
    project: "Data Analysis App",
    address: "Cherry St. Atlanta",
    date: "3 days ago",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "#CM9816",
    user: "Mason Davis",
    project: "Website Redesign",
    address: "5th Ave. New York",
    date: "1 week ago",
    status: "Complete",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "#CM9817",
    user: "Ava Johnson",
    project: "Landing Page Redesign",
    address: "Pine St. Chicago",
    date: "2 weeks ago",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    id: "#CM9818",
    user: "Jackson Lee",
    project: "User Interface Update",
    address: "Maple St. Seattle",
    date: "5 days ago",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    id: "#CM9819",
    user: "Aiden Martinez",
    project: "New Feature Development",
    address: "Sunset Blvd. Los Angeles",
    date: "1 day ago",
    status: "Rejected",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: "#CM9820",
    user: "Sofia White",
    project: "E-commerce Website",
    address: "Baker St. London",
    date: "4 days ago",
    status: "In Progress",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const statusOptions = [
  "In Progress",
  "Complete",
  "Pending",
  "Approved",
  "Rejected",
];

const statusColors = {
  "In Progress": "#8A8CD9",
  Complete: "#4AA785",
  Pending: "#59A8D4",
  Approved: "#FFC555",
  Rejected: "#1C1C1C66",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
}));

function OrderList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [orderBy, setOrderBy] = useState("date");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting handler
  const handleSortRequest = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Row selection handler
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = ordersData.map((order) => order.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }
    setSelectedRows(newSelected);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredOrders = ordersData
    .filter((order) => order.status.includes(filterStatus))
    .filter((order) =>
      Object.values(order)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (orderDirection === "asc") {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
      >
        <Typography variant="h6">Order List</Typography>
        <Box display="flex" gap={2} alignItems="center">
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            InputProps={{
              startAdornment: <Search />,
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FormControl size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label="Status"
              displayEmpty
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < ordersData.length
                  }
                  checked={
                    ordersData.length > 0 &&
                    selectedRows.length === ordersData.length
                  }
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderDirection}
                  onClick={() => handleSortRequest("id")}
                >
                  Order ID
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "project"}
                  direction={orderDirection}
                  onClick={() => handleSortRequest("project")}
                >
                  Project
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "date"}
                  direction={orderDirection}
                  onClick={() => handleSortRequest("date")}
                >
                  Date
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell padding="checkbox">
                <IconButton>
                  <MoreVert />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                const isItemSelected = isSelected(order.id);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order.id}
                    selected={isItemSelected}
                    onClick={() => handleClick(order.id)}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox color="primary" checked={isItemSelected} />
                    </StyledTableCell>
                    <StyledTableCell>{order.id}</StyledTableCell>
                    <StyledTableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar src={order.avatar} sx={{ mr: 2 }} />
                        {order.user}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>{order.project}</StyledTableCell>
                    <StyledTableCell>{order.address}</StyledTableCell>
                    <StyledTableCell>
                      <Box display="flex" alignItems="center">
                        <CalendarToday sx={{ mr: 1, fontSize: 18 }} />
                        {order.date}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography style={{ color: statusColors[order.status] }}>
                        {order.status}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell padding="checkbox">
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default OrderList;
