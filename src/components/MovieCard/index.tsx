import * as React from "react";
import useMovies from "../../hooks/useMovies";
import { Movie } from "../../types/Movie";
import Text from "../Text";
import {
  MovieCardContainer,
  CardImage,
  MovieInfoContainer,
  ImageContainer,
  HeartFull,
  HeartEmpty,
} from "./style";

interface MovieCardProps {
  onLike?: () => void;
  onDelete?: () => void;
  item: Movie;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  onLike,
  onDelete,
  item,
}) => {
  const { favMovies } = useMovies();

  const isLiked = favMovies.some((movie) => movie.id === item.id);

  return (
    <MovieCardContainer>
      <ImageContainer>
        <CardImage src={"http://image.tmdb.org/t/p/w500/" + item.poster_path} />
        {isLiked ? (
          <HeartFull onClick={onDelete} />
        ) : (
          <HeartEmpty onClick={onLike} />
        )}
      </ImageContainer>
      <MovieInfoContainer>
        <Text fontSize={18} bold>
          {item.original_title}
        </Text>
      </MovieInfoContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;
