import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { TweenMax, Power3 } from "gsap";

import { AppContext } from '../context/AppContext';
import remove from '../assets/delete.svg'

const NominatedList = () => {
    const { voted, removeMovie } = useContext(AppContext)
    const [open, setOpen] = useState(false);
    let menu = useRef(null);

    const openMenu = e => {
        setOpen(!open)
        TweenMax.to(menu, .5, { ease: Power3.easeIn, display: "block", height: "700px", width: "600px" })
    }
    const closeMenu = e => {
        TweenMax.to(menu, .5, { ease: Power3.easeIn, display: "none", height: "10px", width: "10px" });
        setTimeout(() => {
            setOpen(!open)
        }, 500)
    }

    return <NominatedListContainer>
        <div style={{ display: `${open ? "block" : "none"}` }} ref={el => { menu = el }} className="nom-list">
            <span onClick={closeMenu} role="button">↘</span>
            <div className="movie-list">
                <h2>My Nominees</h2>
                {
                    voted.map(vote => (
                        <div className="movie">
                            <img className="poster" src={vote.Poster} alt="" />
                            <h3>{vote.Title}</h3>
                            <img className="remove-button" role="button" src={remove} alt="" onClick={() => removeMovie(vote)} />
                        </div>
                    ))
                }
            </div>
        </div>
        {!open && <div className="menu" onClick={openMenu}>📝</div>}
    </NominatedListContainer>
}

export default NominatedList;

const NominatedListContainer = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
    z-index: 5;

    h2 {
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
    }

    .movie {
        margin: 20px 5px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        position: relative;
        height: 100px;
        background-color: white;

        .poster {
            height: 100%;
            width: 100px;
            object-fit: cover;
            object-position: top;
            border-right: 2px solid black;
        }

        .remove-button {
            height: 40px;
            width: 40px;
            cursor: pointer;
            position: absolute;
            right: 20px;
        }

        h3 {
            font-size: 1.4rem;
            margin-left: 20px;
        }
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eab75c;
        height: 100px;
        width: 80px;
        font-size: 2.5rem;
        cursor: pointer;
        border-radius: 20px 0 0 0;

        &:hover {
            transition: ease-in .3s;
            width: 100px;
        }
    }

    .nom-list {
        background: #eab75c;
        padding: 20px;
        height: 10px;
        width: 50px;
        border-radius: 20px 0;


        span {
            cursor: pointer;
            color: black;
            font-size: 2.5rem;
        }
    }

`;