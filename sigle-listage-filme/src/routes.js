import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detalhe from "./components/Detalhe";
import Header from "./components/Header";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalhe/:id' component={Detalhe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
