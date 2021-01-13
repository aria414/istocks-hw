import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Nav from "./components/nav";
import stocksArr from "./stock-data.js";
import Dashboard from "./pages/dasbord";
import Stock from "./pages/stock";

function App() {
  console.log("stock data: ", stocksArr);

  return (
    <div className="App">
      <Nav />

      <Switch>
        <div className="container">
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/stocks">
            <Dashboard stockdata={stocksArr} />
          </Route>
          <Route
            path="/stock/:symbol"
            render={(routerProps) => (
              <Stock {...routerProps} stockdata={stocksArr} />
            )}
          />
          <Route path="/about">
            <About />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
