import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";

import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pelicula/:id" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
