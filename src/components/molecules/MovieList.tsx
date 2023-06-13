import React, { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../atoms/MovieItem";

const movieListStyles: CSSProperties = {
  backgroundColor: "lightblue",
  height: "90%",
  paddingLeft: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  border: "solid"
};

const MovieList: FC<{
  movieItemList: Omit<MovieItemProps, "onMovieSelected">[] | undefined;
  selectedMovieId: string;
  onMovieSelected: (id: string) => void;
}> = ({ movieItemList, selectedMovieId, onMovieSelected }) => {
  return (
    <div style={movieListStyles}>
      <h3>Movie Title</h3>
      {movieItemList?.map(({ id, title }) => (
        <MovieItem
          key={id}
          id={id}
          title={title}
          selected={id === selectedMovieId}
          onMovieSelected={onMovieSelected}
        />
      ))}
    </div>
  );
};

export default MovieList;
