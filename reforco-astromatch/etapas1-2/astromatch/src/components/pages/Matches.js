import axios from "axios";
import React, { useEffect, useState } from "react";
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

    const [matches, setMatches] = useState([])

    const pegaMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/matches")
        .then((resposta) => {
            setMatches(resposta.data.matches)
        })
        .catch((erro) => {
            console.log (erro.message)
        })
    }

    useEffect(() =>{
        pegaMatches()
    }, [])

    const MapMatches = () => {
       const listaMatches = matches.map((match) => {
            return <MatchContainer>
                <img src={match.photo} />
                <h2>{match.name}</h2>
            </MatchContainer>
        })
        return listaMatches
    }
    return(
        <PerfilContainer>
             {matches.length ? <MapMatches/> : <p> Nada para ver aqui </p>}
           
        </PerfilContainer>
    )
}

export default Matches;