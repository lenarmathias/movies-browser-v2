import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./core/NavigationBar";
import MovieList from "./features/MovieList";
import People from "./features/People";
import Profile from "./features/Profile";
import MovieDetails from "./features/MovieDetails";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar />

      <Routes>
        <Route
          path="/people/:personId"
          element={<Profile />}
        />

        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/people"
          element={<People />}
        />

        <Route
          path="/movies"
          element={<MovieList />}
        />

        <Route
          path="/"
          element={<Navigate to="/movies" />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;