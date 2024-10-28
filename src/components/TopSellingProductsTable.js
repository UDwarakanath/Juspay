import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const TopSellingProductsTable = () => {
  const theme = useTheme();

  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "12px",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        Top Selling Products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontSize: "0.95rem" }}>
                  {product.name}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem" }}>
                  {product.price}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem" }}>
                  {product.quantity}
                </TableCell>
                <TableCell sx={{ fontSize: "0.95rem" }}>
                  {product.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopSellingProductsTable;
