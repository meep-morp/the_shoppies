import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { TweenMax, Linear } from "gsap";

import spinner from "../assets/leaves-spinner.png";

const LoadSpinner = () => {
    let spinnerIcon = useRef(null);

    useEffect(() => {
        TweenMax.to(spinnerIcon, 3, { ease: Linear.easeNone, rotation: "360", repeat: -1 })
    }, [])

    return (
        <LoadSpinnerContainer>
            <img ref={el => { spinnerIcon = el }} src={spinner} alt="" />
        </LoadSpinnerContainer>
    )
}

const LoadSpinnerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    img {
        height: 300px;
        width: auto;
    }
`

export default LoadSpinner;