// src/components/ProjectionsBarChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";

const data = [
  { name: "Jan", actuals: 10000000, projections: 20000000 },
  { name: "Feb", actuals: 12000000, projections: 22000000 },
  { name: "Mar", actuals: 14000000, projections: 23000000 },
  { name: "Apr", actuals: 17000000, projections: 25000000 },
  { name: "May", actuals: 13000000, projections: 21000000 },
  { name: "Jun", actuals: 15000000, projections: 22000000 },
];

function ProjectionsBarChart() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom color="textPrimary">
          Projections vs Actuals
        </Typography>
        <Box sx={{ height: 160, mt: 2 }}>
          {" "}
          {/* Reduced height to 200 */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 14, fill: theme.palette.text.secondary }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                tick={{ fontSize: 12, fill: theme.palette.text.secondary }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value) => `${(value / 1000000).toFixed(2)}M`}
              />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill={theme.palette.customBar.actuals}
                barSize={25}
              />
              <Bar
                dataKey="projections"
                stackId="a"
                fill={theme.palette.customBar.projections}
                opacity={0.7}
                barSize={25} // Ensure both bars have the same width of 25 pixels
                radius={[5, 5, 0, 0]} // Add rounded corners
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectionsBarChart;
