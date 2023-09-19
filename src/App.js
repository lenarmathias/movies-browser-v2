import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./NavigationBar";
import MoviesTiles from "./MoviesTiles";
import MovieDetails from "./features/movie details";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        <NavigationBar />

        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people">

          </Route>
          <Route path="/movies">
            <MoviesTiles />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
