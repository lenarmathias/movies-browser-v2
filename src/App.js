import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./common/NavigationBar";
import MovieList from "./features/MovieList";
import People from "./features/People";
import Profile from "./features/Profile";
import MovieDetails from "./features/MovieDetails";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        <NavigationBar />

        <Switch>
          <Route path="/people/:personId">
            <Profile />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/movies">
            <MovieList />
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