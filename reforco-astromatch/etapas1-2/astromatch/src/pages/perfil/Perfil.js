import react, { useEffect, useState } from "react";
import axios from "axios";
import {PerfilContainer, Botoes} from "./style";



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

