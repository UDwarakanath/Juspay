import React, { Suspense } from "react";
import { Container, CircularProgress, Grid, Box } from "@mui/material";

// Lazy load the Statistics component
const Statistics = React.lazy(() => import("./Statistics"));

function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}
    >
      <Grid container spacing={2}>
        {/* Main Content Area */}
        <Grid item xs={12}>
          <Suspense fallback={<CircularProgress />}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Statistics />
            </Box>
          </Suspense>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
