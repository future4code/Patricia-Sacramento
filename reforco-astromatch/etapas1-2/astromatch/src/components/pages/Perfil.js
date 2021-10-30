import react, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


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
  const [perfis, setPerfis] = useState({})

  const pegaPerfis = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/person')
    .then((resposta) => {
      setPerfis(resposta.data.profile)
    }).catch((erro) =>{
      console.log("Algo deu errado! Tente novamente.")
    })
  }


  const EscolhePessoa = (boolean) => {
    const body = {
      "id": perfis.id,
      "choice": boolean
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/choose-person", body)
    .then((resposta) =>{
      pegaPerfis()
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }

  useEffect(() => {
    pegaPerfis()
  }, [])

  console.log (perfis)
  return (
   
       <PerfilContainer value="perfil">
        <img src={perfis.photo} />
        <h2>{perfis.name}, {perfis.age}</h2>
        <p>{perfis.bio}</p>
        <Botoes>
          <button onClick={() => EscolhePessoa(false)}>Deslike</button>
          <button onClick={() => EscolhePessoa(true)}>Like</button>
        </Botoes>
      </PerfilContainer>     
 
  );
}

export default Perfil;

