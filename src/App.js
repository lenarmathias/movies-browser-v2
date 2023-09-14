import { ThemeProvider } from "styled-components";
import MovieDetails from "./features/movie details";
import { GlobalStyles } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MovieDetails />
    </ThemeProvider>
  );
}

export default App;
