import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PerfilContainer , MatchContainer } from "./style"


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