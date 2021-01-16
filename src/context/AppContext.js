import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
	const [voted, setVoted] = useState(
		JSON.parse(localStorage.getItem("voted")) || []
	);
	const [votedFull, setVotedFull] = useState(false);

	const [movies, setMovies] = useState([]);

	const addMovie = movie => {
		if (voted.length < 5) {
			setVoted([...voted, movie]);
			setMovies(
				movies.map(item => {
					if (movie.imdbID === item.imdbID) return { ...item, voted: true };
					else return item;
				})
			);
			console.log(movies);
			console.log(voted);
		} else setVotedFull(true);

		localStorage.setItem("voted", JSON.stringify(voted));
	};

	const removeMovie = movie => {
		console.log(movies);
		setMovies(
			movies.map(item => {
				if (movie.imdbID === item.imdbID) return { ...item, voted: false };
				else return item;
			})
		);
		setVoted(voted.filter(item => movie.imdbID !== item.imdbID));
		setVotedFull(false);

		localStorage.setItem("voted", JSON.stringify(voted));
	};

	return (
		<AppContext.Provider
			value={{
				voted,
				setVoted,
				movies,
				setMovies,
				addMovie,
				removeMovie,
				votedFull,
			}}>
			{props.children}
		</AppContext.Provider>
	);
};
