import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TweenMax, Bounce } from "gsap";

import icon from "../assets/list-icon.svg";

const NominatedList = () => {
    const [open, setOpen] = useState(false);
    let menu = useRef(null);

    useEffect(() => {
        console.log("menu opened");
        TweenMax.to(menu, 3, { ease: Bounce.easeOut, bottom: 40, right: 40, })
    }, [open])

    return <NominatedListContainer>
        <div style={{ display: `${open ? "block" : "none"}` }} ref={el => { menu = el }} className="nom-list">
            <span onClick={() => setOpen(!open)} role="button">X</span>
        </div>
        {!open && <div className="hover"><img onClick={() => setOpen(!open)} src={icon} alt="" role="button" /></div>}
    </NominatedListContainer>
}

export default NominatedList;

const NominatedListContainer = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;

    img {
        bottom: 40px;
        right: 40px;
        cursor: pointer;
        height: 80px;
        width: auto;
    }

    .hover{
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: #eab75c;
            transition: ease-in 0.4s;
            border-radius: 100px;
            height: 100px;
            width: 100px;
        }
    }

    .nom-list {
        background: #eab75c;
        padding: 20px;
        height: 800px;
        width: 500px;
        border-radius: 10px;
        bottom: -100px;
        right: -600px;

        span {
            cursor: pointer;
            color: red;
        }
    }

`;