import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../context/AppContext'

import add from '../../assets/add.svg'
import remove from '../../assets/delete.svg'

const MovieCardMenu = ({ movie }) => {
    const { addMovie, removeMovie } = useContext(AppContext)
    return (
        <MovieCardMenuContainer>
            {
                !movie.voted && <img className="icon" role="button" alt="" onClick={() => {
                    addMovie(movie)

                }} src={add} />
            }
            {
                movie.voted && <img className="icon" role="button" alt="" onClick={() => {
                    removeMovie(movie)

                }} src={remove} />
            }
        </MovieCardMenuContainer>
    )
}

export default MovieCardMenu


const MovieCardMenuContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    .icon {
        height: 100px;
        width: 100px;
        cursor: pointer;
        z-index: 3;
    }

    &::after {
        background-color: black;
        content: "";
        height: 100%;
        width: 100%;
        z-index: 2;
        position: absolute;
        opacity: 0.3;
    }
`