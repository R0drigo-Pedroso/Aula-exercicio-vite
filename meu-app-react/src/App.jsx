/* Importando a modalidade assycrona */
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Importação de components */
import Cabecalho from "./components/cabecalho/Cabecalho";
import Rodape from "./components/rodape/Rodape";

/* Importação de Pages */
import Home from "./pages/Home";
import Mpb from "./pages/Mpb";
import Rock from "./pages/Rock";

/* Importando App css */
import estilo from "./App.css";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Cabecalho></Cabecalho>

          <section className="d-flex">
            <section>
              <Menu></Menu>
            </section>

            <section>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/mpb">
                  <Mpb />
                </Route>

                <Route path="/rock">
                  <Rock />
                </Route>
              </Switch>
            </section>
          </section>
          <Rodape></Rodape>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
