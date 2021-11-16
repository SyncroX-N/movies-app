import axios from "axios";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Movie } from "../../types/Movie";

interface MoviesContextProps {
  favMovies: Movie[];
  apiMovies: Movie[];
  addMovieToFav: (movie: Movie) => void;
  deleteMovieFromFav: (movie: number) => void;
}

export const MoviesContext = React.createContext<MoviesContextProps>({
  favMovies: [],
  apiMovies: [],
  addMovieToFav: () => {},
  deleteMovieFromFav: () => {},
});

interface MovieProviderProps {}

const MoviesProvider: React.FunctionComponent<MovieProviderProps> = ({
  children,
}) => {
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const [apiMovies, setApiMovies] = useState<Movie[]>([]);

  //add to fav
  const addMovieToFav = (movie: Movie) => {
    db.collection("movies").add(movie);
    setFavMovies([...favMovies, movie]);
  };

  //delete from fav
  const deleteMovieFromFav = (movieId: number) => {
    db.collection("movies")
      .where("id", "==", movieId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
    setFavMovies((oldMovies) =>
      oldMovies.filter((item) => item.id !== movieId)
    );
  };

  //get movies (apiMovies & favMovies)
  useEffect(() => {
    //apiMovies
    const API_URL_POPULAR =
      "https://api.themoviedb.org/3/movie/popular?api_key=2a1a3e7652a8ebc53fb2869de524f63c&language=en-US&page=1";
    const fetchApiMovies = async () => {
      const queryResult = await axios.get(API_URL_POPULAR);
      const result = queryResult.data;
      setApiMovies(result.results);
    };
    fetchApiMovies();
    //favMovies
    db.collection("movies")
      .get()
      .then((querySnapshot) => {
        let arr: Movie[] = [];
        querySnapshot.docs.map((doc) => arr.push(doc.data() as Movie));
        setFavMovies(arr);
      });
  }, []);

  return (
    <MoviesContext.Provider
      value={{ favMovies, apiMovies, addMovieToFav, deleteMovieFromFav }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
