import * as React from "react";
import MoviesList from "../../components/MoviesList";
import { MoviesListContainer } from "./style";

interface MoviesProps {}

const Movies: React.FunctionComponent<MoviesProps> = () => {
  return (
    <MoviesListContainer>
      <MoviesList />
    </MoviesListContainer>
  );
};

export default Movies;
