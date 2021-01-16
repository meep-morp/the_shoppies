import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
	const [voted, setVoted] = useState([]);
	const [votedFull, setVotedFull] = useState(false);

	const [movies, setMovies] = useState([]);

	const hasVoted = movieTitle => {
		voted.some(movie => movie.Title === movieTitle);
	};

	const addMovie = movie => {
		if (voted.length < 5) {
			setVoted([...voted, movie]);
			setMovies(
				movies.map(item => {
					if (movie.id === item.id) return { ...item, voted: true };
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
				if (movie.id === item.id) return { ...item, voted: false };
				else return item;
			})
		);
		setVoted(voted.filter(item => movie.id !== item.id));
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
