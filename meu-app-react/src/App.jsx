/* Importando a modalidade assycrona */
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Importação de components */
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

/* Importação de Pages */
import Home from "./pages/Home";
import Rock from "./pages/Rock";
import Jazz from "./pages/Jazz";

/* Importando App css */
import "./App.css";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho></Cabecalho>

        <section className="d-flex">
          <Menu></Menu>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/rock">
              <Rock />
            </Route>

            <Route path="/jazz">
              <Jazz />
            </Route>
          </Switch>
        </section>
        <Rodape></Rodape>
      </BrowserRouter>
    </>
  );
};

export default App;
