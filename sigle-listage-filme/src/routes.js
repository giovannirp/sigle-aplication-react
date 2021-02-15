import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detalhe from "./components/Detalhe";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalhe/:id' component={Detalhe} />
      </Switch>
      <Footer name='© 2021 Company, Inc.' explic='Explicação do sistema' link='https://www.uol.com.br/' />
    </BrowserRouter>
  );
};

export default Routes;
