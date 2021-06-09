import React from "react";
import Form from "@rjsf/material-ui";
import { Provider } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { store } from "./store/store";
import { LeftView } from "./components/LeftView";
import { Design } from "./components/Design";
import { Modifier } from "./components/Modifier";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
