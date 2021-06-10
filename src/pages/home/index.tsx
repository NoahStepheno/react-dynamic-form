import { Grid } from "@material-ui/core";
import React from "react";
import { Design } from "../../components/Design";
import { LeftView } from "../../components/LeftView";
import { Modifier } from "../../components/Modifier";

const Home: React.FC = () => {
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={3}>
        <LeftView />
      </Grid>
      <Grid item xs>
        <Design />
      </Grid>
      <Grid item xs={3}>
        <Modifier />
      </Grid>
    </Grid>
  );
};

export default Home;
