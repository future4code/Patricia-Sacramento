import styled from "styled-components"

export const PerfilContainer = styled.div` 
    text-align: center;
    margin: 0 auto;
    margin-top: 2%;
    border: 1px solid black;
    border-radius: 10%;
    max-height: 100vh;
    max-width: 50vw;
    height: 85vh;
    width: 40vw;
    box-shadow: 0 0 10px black;

`

export const MatchContainer = styled.div `
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5%;

    >img{
        border-radius: 100%;
        max-height: 60px;
        max-width: 60px;
    }
`