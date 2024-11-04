import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useTheme,
  Tooltip,
} from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const locations = [
  { name: "New York", revenue: 72000, coordinates: [-74.006, 40.7128] },
  { name: "San Francisco", revenue: 39000, coordinates: [-122.4194, 37.7749] },
  { name: "Sydney", revenue: 25000, coordinates: [151.2093, -33.8688] },
  { name: "Singapore", revenue: 61000, coordinates: [103.8198, 1.3521] },
];

const REVENUE_CAP = 100000;
const geoUrl =
  "https://naturalearth.s3.amazonaws.com/110m_cultural/ne_110m_admin_0_countries.geojson";

const RevenueByLocation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Revenue by Location
      </Typography>
      <Box sx={{ height: 170, mb: 2 }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 150 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={theme.palette.customRevenue.mapFill}
                  stroke={theme.palette.customRevenue.mapStroke}
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, revenue, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <Tooltip title={`${name}: $${revenue.toLocaleString()}K`} arrow>
                <circle
                  r={5}
                  fill={theme.palette.customRevenue.locationMarker}
                />
              </Tooltip>
              <text
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize={12}
                dy={-10}
                style={{ pointerEvents: "none" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </Box>
      {locations.map((location) => (
        <Box key={location.name} sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {location.name} - {location.revenue.toLocaleString()}K
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(location.revenue / REVENUE_CAP) * 100}
            sx={{
              backgroundColor: theme.palette.customStatsCard.negative,
              "& .MuiLinearProgress-bar": {
                backgroundColor: theme.palette.customRevenue.chartLine,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default RevenueByLocation;
