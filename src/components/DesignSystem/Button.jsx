import React from 'react';
import styled from 'styled-components';

const Button = ({ type, text }) => {
    if (type === "primary") return <PrimaryButton>{text}</PrimaryButton>;
    else if (type === "secondary") return <SecondaryButton>{text}</SecondaryButton>;
}

export default Button;

const PrimaryButton = styled.button`
    background-color: #EAB75C;
    color: black;
`;
const SecondaryButton = styled.button`
    background-color: #e9eaeb;
    color: black;
`;