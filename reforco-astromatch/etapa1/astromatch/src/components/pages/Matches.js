import React from "react";
import styled from "styled-components";


const PerfilContainer = styled.div` 
  text-align: center;
  margin: 0 auto;
  margin-top: 2%;
  border: 1px solid black;
  max-height: 100vh;
  max-width: 50vw;
  height: 85vh;
  width: 40vw;
 
` 
const MatchContainer = styled.div `
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5%;

    >img{
        border-radius: 100%;
        height: 12%;
        width: 12%;
    }
`
function Matches (){
    return(
        <PerfilContainer>
            <MatchContainer>
                <img src="https://picsum.photos/200" />
                <h2>Nome da Pessoa</h2>
            </MatchContainer>
            <MatchContainer>
                <img src="https://picsum.photos/200" />
                <h2>Nome da Pessoa</h2>
            </MatchContainer>
            <MatchContainer>
                <img src="https://picsum.photos/200" />
                <h2>Nome da Pessoa</h2>
            </MatchContainer>
            <MatchContainer>
                <img src="https://picsum.photos/200" />
                <h2>Nome da Pessoa</h2>
            </MatchContainer>
        </PerfilContainer>
    )
}

export default Matches;