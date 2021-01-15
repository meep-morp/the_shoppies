import React from 'react'
import styled from 'styled-components'

const MovieCard = props => {
    return (
        <MovieCardContainer style={{ backgroundImage: `url(${props.data.Poster})` }}>
            <h3>{props.data.Title}</h3>
            <h4>{props.data.Year}</h4>
        </MovieCardContainer>
    )
}

export default MovieCard


const MovieCardContainer = styled.div`
    width: 300px;
    height: 200px;

    h3 {
        font-size: 2rem;
        font-weight: bold;
    }
`