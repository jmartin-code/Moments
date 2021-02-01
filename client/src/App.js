import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth={false}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Auth" component={Auth} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
