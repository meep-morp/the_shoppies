import React from 'react'
import styled from 'styled-components'
import MovieCard from '../DesignSystem/MovieCard'

const MovieList = props => {
    return (
        <MovieListContainer>
            {!props.data && <h2 style={{ margin: "0 auto", fontSize: "2rem", fontWeight: "bold", opacity: 0.4 }}>Search for a Movie to see Results...</h2>}
            {
                props.data && props.data.map(movie => (
                    <MovieCard data={movie} />
                ))
            }
        </MovieListContainer>
    )
}

export default MovieList


const MovieListContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 3%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 100px;
`