import * as React from "react";
import { FavouriteMoviesContainer } from "./style";
import MoviesList from "../MoviesList";
interface FavouriteMoviesProps {}

const FavouriteMovies: React.FunctionComponent<FavouriteMoviesProps> = ({}) => {
  return (
    <FavouriteMoviesContainer>
      <MoviesList />
    </FavouriteMoviesContainer>
  );
};

export default FavouriteMovies;
