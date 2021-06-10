import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import Home from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
