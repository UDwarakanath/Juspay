import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    lineHeight: 1.43,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffff",
      paper: "#f5f7fa",
    },
    customBar: {
      actuals: "#A8C5DA",
      projections: "#a6c5da",
    },
    customStatsCard: {
      positive: "#e3f2fd",
      negative: "#f0f0f0",
    },
    customRevenue: {
      chartLine: "#1976d2",
      locationMarker: "#1976d2",
      mapFill: "#e0e0e0",
      mapStroke: "#bdbdbd",
    },
    customChartColors: ["#66bb6a", "#42a5f5", "#90caf9", "#333"],
    customTable: {
      headerBackground: "#e0e0e0",
      headerText: grey[800],
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    lineHeight: 1.43,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    customBar: {
      actuals: "#A8C5DA",
      projections: "#a6c5da",
    },
    customStatsCard: {
      positive: "#2c3e50",
      negative: "#424242",
    },
    customRevenue: {
      chartLine: "#90caf9",
      locationMarker: "#90caf9",
      mapFill: grey[700],
      mapStroke: grey[600],
    },
    customChartColors: ["#66bb6a", "#42a5f5", "#ffa726", "#ef5350"],
    customTable: {
      headerBackground: grey[700],
      headerText: grey[100],
    },
  },
});
