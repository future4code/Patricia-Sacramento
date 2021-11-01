import axios from "axios";
import react, { useState } from "react";
import styled from "styled-components";
import Matches from "./pages/matches/Matches";
import Perfil from "./pages/perfil/Perfil";




const ContainerPrincipal = styled.div` 

`


const BotoesMatches = styled.div ` 
  text-align: center;
  margin-top: 1%;
  
  >button{
    background-color: #6B7ADB;
    color: black;
    font-size: large;
    font-weight: 400;
    height: 30px;
    margin: 0 3px;
  }
`

function App() {
  const [paginaRenderizada, setPaginaRenderizada] = useState("perfil")

  const renderizaPagina = (event) =>{
   setPaginaRenderizada(event.target.value)

    if(paginaRenderizada === "perfil") {
      setPaginaRenderizada("matches");
    } else {
      setPaginaRenderizada("perfil");
    }

  }

  const pegaPagina = () => {
    switch (paginaRenderizada){
    case "perfil": 
      return <Perfil />
    case "matches": 
      return <Matches />
    default: 
      return <Perfil />
    }

  }

  const LimpaMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/clear")
    .then((resposta) =>{
      alert("Matches limpados com sucesso!")
      setPaginaRenderizada("perfil")
    })
    .catch((erro) => {
      alert("Algo deu errado! Tente novamente")
    })
  }


  return (
    <ContainerPrincipal>

      {pegaPagina()}

      <BotoesMatches >
          <button value="matches" onClick={renderizaPagina}>{paginaRenderizada === "perfil" ? "Ir para Matches" : "Ir para Home"}</button>
          <button onClick={LimpaMatches}>Limpa Matches</button>
      </BotoesMatches>
     
    </ContainerPrincipal> 
  );
}

export default App;
