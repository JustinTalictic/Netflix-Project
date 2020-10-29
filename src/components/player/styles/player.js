import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    margin: 0 20px;
`;

export const Close = styled.button`
    display: none;
    color: white;
    position: absolute;
    right: 5px;
    top: 12px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
        outline: none;
    }

    &:hover ${Close} {
        display: block;
    }
`;

export const Button = styled.button`
    background-color: white;
    border-radius: 5px;
    border-width: 0;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: #000;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        background: #e6e6e6;
        opacity: 0.75;
    }

    img {
        filter: brightness(0);
        width: 28px;
    }
`;
