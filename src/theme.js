import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Common typography configuration
const typography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  lineHeight: 1.43,
};

// Common colors
const commonColors = {
  primaryMain: "#1976d2",
  primaryLight: "#90caf9",
  backgroundDefault: "#ffff",
  backgroundPaper: "#f5f7fa",
  chartLine: "#1976d2",
  locationMarker: "#1976d2",
  headerBackground: "#e0e0e0",
  headerText: grey[800],
};

// Light Theme
export const lightTheme = createTheme({
  typography,
  palette: {
    mode: "light",
    primary: {
      main: commonColors.primaryMain,
    },
    background: {
      default: commonColors.backgroundDefault,
      paper: commonColors.backgroundPaper,
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
      chartLine: commonColors.chartLine,
      locationMarker: commonColors.locationMarker,
      mapFill: "#e0e0e0",
      mapStroke: "#bdbdbd",
    },
    customChartColors: ["#66bb6a", "#42a5f5", "#90caf9", "#333"],
    customTable: {
      headerBackground: commonColors.headerBackground,
      headerText: commonColors.headerText,
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  typography,
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
