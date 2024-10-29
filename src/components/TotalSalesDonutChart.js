import React from "react";
import { Paper, Box, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { styled } from "@mui/system";

const salesData = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

// Styled components for the legend container and items
const LegendContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: 16,
  color: theme.palette.text.primary,
}));

const LegendItem = styled("div")(({ color, theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontFamily: '"Inter", sans-serif',
  "&::before": {
    content: '""',
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: color,
    marginRight: 8,
  },
}));

const TotalSalesDonutChart = () => {
  const theme = useTheme();
  const colors = theme.palette.customChartColors || [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#d0ed57",
  ];

  // Calculate the total for dynamic percentage
  const totalSales = salesData.reduce((acc, data) => acc + data.value, 0);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        minWidth: 300,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "600", color: theme.palette.text.primary }}
      >
        Total Sales
      </Typography>
      <Box
        sx={{
          height: 160,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={3}
            >
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [
                `${((value / totalSales) * 100).toFixed(1)}%`,
                `${name}: $${value.toFixed(2)}`,
              ]}
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontSize: "12px",
                fontFamily: '"Inter", sans-serif',
                borderRadius: "4px",
                boxShadow: theme.shadows[1],
              }}
              itemStyle={{ color: theme.palette.text.primary }}
              cursor={{ fill: theme.palette.action.hover }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <LegendContainer>
        {salesData.map((entry, index) => (
          <LegendItem key={entry.name} color={colors[index % colors.length]}>
            <span>{entry.name}</span>
            <span style={{ marginLeft: "auto" }}>
              ${entry.value.toFixed(2)}
            </span>
          </LegendItem>
        ))}
      </LegendContainer>
    </Paper>
  );
};

export default TotalSalesDonutChart;
