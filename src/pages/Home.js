// src/pages/Home.js
import React from "react";
import { Container, Grid } from "@mui/material";
import Statistics from "./Statistics";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Statistics />
    </Container>
  );
}

export default Home;
