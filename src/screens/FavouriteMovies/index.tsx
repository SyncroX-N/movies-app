import * as React from "react";
import MoviesList from "../../components/MoviesList";
import { FavouriteMoviesContainer } from "./style";

interface FavouriteMoviesProps {}

const FavouriteMovies: React.FunctionComponent<FavouriteMoviesProps> = () => {
  return (
    <FavouriteMoviesContainer>
      <MoviesList showFavourite />
    </FavouriteMoviesContainer>
  );
};

export default FavouriteMovies;
