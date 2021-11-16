import * as React from "react";
import axios from "axios";
import { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard";
import {
  SliderContainer,
  SliderWrapper,
  MoviesListContainer,
  TitleContainer,
  SearchContainer,
  SearchBoxContainer,
  MovieBox,
  inputStyle,
  Arrow,
} from "./style";
import Text from "../Text";
import useMovies from "../../hooks/useMovies";
import { Input } from "@mui/material";

interface MoviesListProps {
  showFavourite?: boolean;
}

const MoviesList: React.FunctionComponent<MoviesListProps> = ({
  showFavourite,
}) => {
  const { favMovies, apiMovies, addMovieToFav, deleteMovieFromFav } =
    useMovies();

  const [movieToSearch, setMovieToSearch] = React.useState<String>();
  const [movieListToSearch, SetMoviesList] = React.useState<Movie[]>();

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const scaleX = { transform: `scaleX(-1)`, right: 0 };
  const listRef = React.useRef<HTMLDivElement>(null);
  const [movieIndex, setMovieIndex] = React.useState(0);

  //fetch movie to search
  const searchMovie = async (movie?: String) => {
    const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=020f628313deb6a2599a34d98aba48fe&language=en-US&query=${movie}&page=1&include_adult=false`;
    if (movie) {
      const queryResult = await axios.get(API_URL_SEARCH);
      const result = queryResult.data;
      SetMoviesList(result.results);
    }
    if (movie === "") {
      SetMoviesList(undefined);
    }
  };
  React.useEffect(() => {
    searchMovie(movieToSearch);
  }, [movieToSearch]);

  //slider translate
  const translate = (direction: string) => {
    if (listRef.current) {
      let distance = listRef.current?.getBoundingClientRect().x;

      if (direction === "left") {
        setMovieIndex(movieIndex - 1);
        listRef.current.style.transform = `translate(${204 + distance}px)`;
      }
      if (direction === "right") {
        setMovieIndex(movieIndex + 1);
        listRef.current.style.transform = `translate(${-204 + distance}px)`;
      }
    }
  };

  const updateText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const textToUpdate = e.target.value;
    setMovieToSearch(textToUpdate);
  };
  return (
    <>
      <MoviesListContainer>
        {!showFavourite ? (
          <>
            <SearchContainer>
              <Input
                placeholder="Search Movie"
                style={inputStyle}
                onChange={updateText}
              />
            </SearchContainer>
            {!movieListToSearch ? (
              <>
                <TitleContainer>
                  <Text fontSize={24}>Popular</Text>
                </TitleContainer>
                <SliderWrapper>
                  {movieIndex !== 0 && (
                    <button
                      onClick={() => {
                        translate("left");
                        setButtonDisabled(true);
                        setTimeout(() => {
                          setButtonDisabled(false);
                        }, 300);
                      }}
                      style={{
                        background: "transparent",
                        border: "none",
                        fontSize: 0,
                      }}
                      disabled={buttonDisabled}
                    >
                      <Arrow style={{ left: 0 }} />
                    </button>
                  )}
                  {movieIndex !== apiMovies.length && (
                    <button
                      onClick={() => {
                        translate("right");
                        setButtonDisabled(true);
                        setTimeout(() => {
                          setButtonDisabled(false);
                        }, 300);
                      }}
                      disabled={buttonDisabled}
                      style={{
                        background: "transparent",
                        border: "none",
                        fontSize: 0,
                      }}
                    >
                      <Arrow style={scaleX} />
                    </button>
                  )}
                  <SliderContainer ref={listRef}>
                    {apiMovies &&
                      apiMovies.map((movie) => (
                        <MovieCard
                          onLike={() => {
                            addMovieToFav(movie);
                          }}
                          onDelete={() => deleteMovieFromFav(movie.id)}
                          item={movie}
                          key={movie.id}
                        />
                      ))}
                  </SliderContainer>
                </SliderWrapper>
              </>
            ) : (
              <SearchBoxContainer>
                {movieListToSearch &&
                  movieListToSearch.map((movie) => (
                    <MovieCard
                      onLike={() => addMovieToFav(movie)}
                      onDelete={() => deleteMovieFromFav(movie.id)}
                      item={movie}
                      key={movie.id}
                    />
                  ))}
              </SearchBoxContainer>
            )}
          </>
        ) : (
          <MovieBox>
            {favMovies &&
              favMovies.map((movie: Movie) => (
                <MovieCard
                  onDelete={() => deleteMovieFromFav(movie.id)}
                  item={movie}
                  key={movie.id}
                />
              ))}
          </MovieBox>
        )}
      </MoviesListContainer>
    </>
  );
};

export default MoviesList;
