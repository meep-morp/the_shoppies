import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
	const [voted, setVoted] = useState([]);

	const [movies, setMovies] = useState([
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
		},
	]);

	const hasVoted = movieTitle => {
		movies.some(movie => movie.Title === movieTitle);
	};

	return (
		<AppContext.Provider
			value={{
				voted,
				setVoted,
				movies,
				setMovies,
				hasVoted,
			}}>
			{props.children}
		</AppContext.Provider>
	);
};
