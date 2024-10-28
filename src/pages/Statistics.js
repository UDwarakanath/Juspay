import React, { useMemo } from "react";
import { Grid, Typography, Box } from "@mui/material";
import StatsCard from "../components/StatsCard";
import ProjectionsBarChart from "../components/BarChart";
import RevenueChart from "../components/RevenueChart";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProductsTable from "../components/TopSellingProductsTable";
import TotalSalesDonutChart from "../components/TotalSalesDonutChart";

const Statistics = () => {
  const statsData = useMemo(
    () => [
      { title: "Customers", value: "3,781", change: "+11.01%", positive: true },
      { title: "Orders", value: "1,219", change: "-0.03%", positive: false },
      { title: "Revenue", value: "$695", change: "+15.03%", positive: true },
      { title: "Growth", value: "30.1%", change: "+6.08%", positive: true },
    ],
    []
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Typography variant="h6" gutterBottom>
        eCommerce Statistics
      </Typography>

      {/* Stats Cards Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {statsData.map((stat, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <StatsCard
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  positive={stat.positive}
                  sx={{ height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Projections Bar Chart */}
        <Grid item xs={12} md={6}>
          <ProjectionsBarChart />
        </Grid>
      </Grid>

      {/* Revenue Chart and Revenue by Location */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <RevenueByLocation />
        </Grid>
      </Grid>

      {/* Top Selling Products and Total Sales Donut Chart */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <TopSellingProductsTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TotalSalesDonutChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Statistics);
