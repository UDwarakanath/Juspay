import React from "react";
import { Card, Typography, Box, useTheme } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const StatsCard = ({ title, value, change, positive }) => {
  const theme = useTheme();

  return (
    <Card
      role="status"
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: positive
          ? theme.palette.customStatsCard?.positive ||
            theme.palette.success.light
          : theme.palette.customStatsCard?.negative ||
            theme.palette.error.light,
        boxShadow: 2,
        color: theme.palette.text.primary,
        height: "112px",
        width: { xs: "100%", sm: "220px" },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            color: positive
              ? theme.palette.success.main
              : theme.palette.error.main,
          }}
        >
          {change}
          {positive ? (
            <TrendingUp fontSize="small" sx={{ ml: 0.5 }} />
          ) : (
            <TrendingDown fontSize="small" sx={{ ml: 0.5 }} />
          )}
        </Typography>
      </Box>
    </Card>
  );
};

export default StatsCard;
