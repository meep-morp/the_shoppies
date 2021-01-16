import React from 'react';
import styled from 'styled-components';

const Button = ({ type = "secondary", text }) => {
    if (type === "primary") return <PrimaryButton>{text}</PrimaryButton>;
    else if (type === "secondary") return <SecondaryButton>{text}</SecondaryButton>;
}

export default Button;

const PrimaryButton = styled.button`
    background-color: #EAB75C;
    color: black;

    &:hover {
        background-color: #f8c368;
        transition: ease 0.3s;
    }
`;
const SecondaryButton = styled.button`
    background-color: #e9eaeb;
    color: black;

    &:hover {
        background-color: #f0f0f0;
        transition: 0.3s ease;
    }
`;