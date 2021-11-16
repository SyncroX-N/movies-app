import NavBar from "./components/NavBar";
import Movies from "./screens/MoviesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouriteMovies from "./screens/FavouriteMovies";
import { GlobalStyle } from "./theme";
import MoviesProvider from "./context/Movies";

const App = () => {
  return (
    <MoviesProvider>
      <Router>
        <NavBar />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/favouritemovies" element={<FavouriteMovies />}></Route>
        </Routes>
      </Router>
    </MoviesProvider>
  );
};

export default App;
