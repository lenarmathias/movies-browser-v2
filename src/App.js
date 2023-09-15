import { ThemeProvider } from "styled-components";
import MoviesTiles from "./MoviesTiles";
import MovieDetails from "./features/movie details";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MoviesTiles />
      <MovieDetails />
    </ThemeProvider>
  );
}

export default App;
