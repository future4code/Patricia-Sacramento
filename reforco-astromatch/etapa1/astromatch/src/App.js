import react, { useState } from "react";
import styled from "styled-components";
import Matches from "./components/pages/Matches";
import Perfil from "./components/pages/Perfil";

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


/*   const mudaPagina = () => {
    if(paginaRenderizada === "perfil") {
      setPaginaRenderizada("matches");
    } else {
      setPaginaRenderizada("home");
    }
  } */


  return (
    <ContainerPrincipal>

      {pegaPagina()}

      <BotoesMatches>
          <button value="matches" onClick={renderizaPagina}>{paginaRenderizada === "perfil" ? "Ir para Matches" : "Ir para Home"}</button>
          <button value="limpa-matches">Limpa Matches</button>
      </BotoesMatches>
     
    </ContainerPrincipal> 
  );
}

export default App;
