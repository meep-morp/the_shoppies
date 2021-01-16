import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TweenMax, Power3 } from "gsap";

const NominatedList = () => {
    const [open, setOpen] = useState(false);
    let menu = useRef(null);

    const openMenu = e => {
        setOpen(!open)
        TweenMax.to(menu, .5, { ease: Power3.easeIn, display: "block", height: "600px", width: "600px" })
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

    .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eab75c;
        height: 100px;
        width: 80px;
        border-radius: 30px 0 0 50%;
        font-size: 2.5rem;
        cursor: pointer;

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
        border-radius: 30px 0 0 50%;

        span {
            cursor: pointer;
            color: black;
            font-size: 2.5rem;
        }
    }

`;