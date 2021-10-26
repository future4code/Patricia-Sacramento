import react, { useState } from "react";
import styled from "styled-components";
import Matches from "./Components/Matches.js";
import Perfil from "./Components/Perfil.js";

const PaginaContainer = styled.div` 

`

const ContainerPrincipal = styled.div` 

`


const BotoesMatches = styled.div ` 
  text-align: center;
  margin-top: 2%;
`

function App() {
  const [paginaRenderizada, setPaginaRenderizada] = useState("perfil")

  const renderizaPagina = (event) =>{
   setPaginaRenderizada(event.target.value)

  }

  const mudaPagina = () => {
    switch (paginaRenderizada){
    case "perfil": 
      return <Perfil />
    case "matches": 
      return <Matches />
    default: 
      return <Perfil />
    }

  }


  


  return (
    <ContainerPrincipal>

      {mudaPagina()}

      <BotoesMatches>
          <button value="matches" onClick={renderizaPagina}>{paginaRenderizada === "perfil" ? "Ir para Matches" : "Ir para Home"}</button>
          <button value="limpa-matches">Limpa Matches</button>
      </BotoesMatches>
     
    </ContainerPrincipal> 
  );
}

export default App;
