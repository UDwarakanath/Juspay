import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

const data = [
  { name: "Jan", current: 10, previous: 15 },
  { name: "Feb", current: 15, previous: 10 },
  { name: "Mar", current: 12, previous: 13 },
  { name: "Apr", current: 17, previous: 14 },
  { name: "May", current: 19, previous: 16 },
  { name: "Jun", current: 21, previous: 18 },
];

const calculateChange = (current, previous) => {
  if (previous === 0) return 0;
  return (((current - previous) / previous) * 100).toFixed(2);
};

const RevenueChart = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        p: 2,
        paddingBottom: 4,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: "18px",
            mr: 1,
          }}
        >
          Revenue
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: theme.palette.customRevenue.chartLine,
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, fontSize: "14px" }}
          >
            Current Week: <span style={{ fontWeight: 500 }}>$58,211</span>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: theme.palette.customBar.actuals,
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, fontSize: "14px" }}
          >
            Previous Week: <span style={{ fontWeight: 500 }}>$68,768</span>
          </Typography>
        </Box>
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{
              fill: theme.palette.text.secondary,
              fontSize: 12,
              fontFamily: theme.typography.fontFamily,
            }}
            axisLine={{
              stroke: theme.palette.customTable.headerBackground,
              strokeWidth: 0.5,
            }}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: theme.palette.text.secondary,
              fontSize: 12,
              fontFamily: theme.typography.fontFamily,
            }}
            tickFormatter={(value) =>
              value >= 1000 ? `${value / 1000}K` : `${value}M`
            }
            axisLine={{
              stroke: theme.palette.customTable.headerBackground,
              strokeWidth: 0.5,
            }}
            tickLine={false}
          />
          <CartesianGrid stroke="transparent" strokeDasharray="0" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, current, previous } = payload[0].payload;
                const change = calculateChange(current, previous);
                return (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.paper,
                      padding: "10px",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                      fontFamily: theme.typography.fontFamily,
                      fontSize: "13px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.customRevenue.chartLine }}
                    >
                      Current: ${current}M
                    </Typography>
                    <Typography sx={{ color: theme.palette.customBar.actuals }}>
                      Previous: ${previous}M
                    </Typography>
                    <Typography
                      sx={{
                        color: change < 0 ? "#f44336" : "#66bb6a",
                        fontWeight: 500,
                      }}
                    >
                      Change: {change}% {change >= 0 ? "↑" : "↓"}
                    </Typography>
                  </Box>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={theme.palette.customRevenue.chartLine}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke={theme.palette.customBar.actuals}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RevenueChart;
