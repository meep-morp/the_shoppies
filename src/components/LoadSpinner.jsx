import styled from "styled-components";
import React from "react";

import spinner from "../assets/leaves-spinner.png";

const LoadSpinner = () => {
    return (
        <LoadSpinnerContainer>
            <img src={spinner} alt="" />
        </LoadSpinnerContainer>
    )
}

const LoadSpinnerContainer = styled.div`
    img {
        height: 100px;
        width: auto;
    }
`

export default LoadSpinner;