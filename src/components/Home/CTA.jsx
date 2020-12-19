import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../DesignSystem/Button';

const CTA = () => {
    return <CTAContainer>
        <div className="info">
            <h2><strong>2020</strong> SHOPPIES BEST IN SHOW</h2>
            <h3>PICK YOUR NOMINEES <strong>→</strong></h3>
            <div className="buttons">
                <Link to="/">
                    <Button type="primary" text="VOTE NOW" />
                </Link>
                <Link to="/about">
                    <Button type="secondary" text="ABOUT" />
                </Link>
            </div>
        </div>
    </CTAContainer>
}

export default CTA;

const CTAContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: space-between;
    height: 400px;
    background-image: url("https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80");
    padding-left: 50px;

    .info {
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        align-items: space-around;
    }

    h2 {
        font-size: 3.5rem;
        font-weight: bold;
        letter-spacing: 2px;
    }

    h3 {
        margin: 20px 0;
        font-style: italic;
        font-size: 2.5rem;

        strong {
            margin-left: 10px;
            font-weight: bold;
        }
    }

    strong {
        color: #EAB75C;
    }

`