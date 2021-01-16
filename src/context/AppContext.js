import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
	const [voted, setVoted] = useState([]);
	const [votedFull, setVotedFull] = useState(false);

	const [movies, setMovies] = useState([
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
			voted: false,
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
			voted: false,
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
			voted: false,
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
			voted: false,
		},
		{
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYmZjM2UyYWEtMGI3Yi00MGI4LTllNGEtZDAyYjdkYjYyODFiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
			Title: "Come te movi, te fulmino!",
			Type: "movie",
			Year: "1958",
			voted: false,
		},
	]);

	const hasVoted = movieTitle => {
		voted.some(movie => movie.Title === movieTitle);
	};

	const addMovie = movie => {
		if (voted.length < 5) {
			setVoted([...voted, movie]);
			setMovies(
				movies.map(item => {
					if (movie.Title === item.Title) return { ...item, voted: true };
					else return item;
				})
			);
			console.log(movies);
			console.log(voted);
		} else setVotedFull(true);
	};

	const removeMovie = movie => {
		console.log(movies);
		setMovies(
			movies.map(item => {
				if (movie.Title === item.Title) return { ...item, voted: false };
				else return item;
			})
		);
		setVoted(voted.filter(item => movie.Title !== item.Title));
		setVotedFull(false);
	};

	return (
		<AppContext.Provider
			value={{
				voted,
				setVoted,
				movies,
				setMovies,
				hasVoted,
				addMovie,
				removeMovie,
				votedFull,
			}}>
			{props.children}
		</AppContext.Provider>
	);
};
