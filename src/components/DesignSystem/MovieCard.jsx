import React from 'react'
import styled from 'styled-components'

const MovieCard = props => {
    return (
        <MovieCardContainer>
            <img src={props.data.Poster} alt="" />
            <div className="info">
                <h3>{props.data.Title}</h3>
                <h4>{props.data.Year}</h4>
            </div>
        </MovieCardContainer>
    )
}

export default MovieCard


const MovieCardContainer = styled.div`
    width: 250px;
    height: 500px;
    position: relative;
    color: black;
    text-shadow: 0 0 5px white;
    background-position: center;
    margin: 5px 10px;
    background-color: white;

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    h4 {
        font-size: 1.3rem;
    }

    img {
        height: 80%;
        width: 100%;
        object-fit: cover;
    }

    .info {
        margin: 10px;
    }

    &::before {
        background-color: black;
        opacity: 0.5;
        z-index: 3;
    }
`