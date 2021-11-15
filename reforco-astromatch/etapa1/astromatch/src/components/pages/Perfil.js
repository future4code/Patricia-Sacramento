import react, { useState } from "react";
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
  >img{
    width: 50%;
    height: 60%;
    margin-top: 5%;
  }
`

const Botoes = styled.div` 

`

function Perfil () {

  return (
   
       <PerfilContainer value="perfil">
        <img src="https://picsum.photos/200/300" />
        <h2>Patrícia</h2>
        <p>Oi! Eu sou a Patrícia. No futuro, aqui teremos dados que virão da API</p>
        <Botoes>
          <button>Deslike</button>
          <button>Like</button>
        </Botoes>
      </PerfilContainer>     
 
  );
}

export default Perfil;

