import React from 'react'
import styled from 'styled-components'
import MovieCard from '../DesignSystem/MovieCard'

const MovieList = props => {
    return (
        <MovieListContainer>
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

`