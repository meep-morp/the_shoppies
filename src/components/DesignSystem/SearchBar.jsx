import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const SearchBar = ({ onChange, onSubmit, placeholder, ...props }) => {
    return (
        <SearchForm {...props}>
            <span><input type="text" placeholder={placeholder} onChange={onChange} /><button>🔎</button></span>
        </SearchForm>
    )
}

export default SearchBar

const SearchForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

span {
    height: 40px;
    width: 50%;
    display: flex;
    align-items: baseline;
    justify-content: center;

    button {
        background-color: #d8d8d8;
        color: black;
        line-height: 1.3px;

        &:hover {
            background-color: #f0f0f0;
            transition: 0.3s ease;
        }
    }

    input {
        padding: 4px;
        height: 100%;
        width: 60%;
        border: 1px solid #d8d8d8;
        outline: none;
    }

    input::placeholder {
        text-transform: uppercase;
        color: gray;
        letter-spacing: 1px;
    }
}

`