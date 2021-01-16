import Axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../DesignSystem/SearchBar";
import CTA from "./CTA";
import MovieList from "./MovieList";

const Home = () => {
	const { movies, setMovies } = useContext(AppContext);

	const searchMovie = e =>
		Axios.get(
			`https://www.omdbapi.com/?s=${e.target.value}&page=1-10&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
		)
			.then(res => {
				setMovies(res.data.Search);
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
			<MovieList data={movies} />
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
