import Axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../DesignSystem/SearchBar";
import CTA from "./CTA";
import MovieList from "./MovieList";

const Home = () => {
	const { movies, setMovies, votedFull } = useContext(AppContext);

	const searchMovie = e =>
		Axios.get(
			`https://www.omdbapi.com/?s=${e.target.value}&page=1-10&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
		)
			.then(res => {
				setMovies(res.data.Search.map(movie => (movie.voted = false)));
				console.log(movies);
			})
			.catch(err => {
				console.log(err);
				setMovies("No Results Found.");
			});

	return (
		<HomeContainer>
			<CTA />
			<SearchBar /*onChange={searchMovie}*/ placeholder="Search..." />
			{votedFull && (
				<h3
					style={{
						margin: "0 auto",
						fontSize: "1.5rem",
						fontWeight: "bold",
						marginTop: "2%",
					}}>
					5 Nominees Selected, Thanks for Voting!
				</h3>
			)}
			<MovieList data={movies} />
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
