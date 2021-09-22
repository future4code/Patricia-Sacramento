import React from "react";
import styled from "styled-components";



class Etapa3 extends React.Component{
    render (){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS</h2>
                <p>Caso tenha marcado Ensino Médio Incompleto ou Ensino Médio Completo: </p>
                <p> 1. Por que você não terminou um curso de graduação?</p>
                <input name={'porque não terminou curso'} />
                <p> 2. Você fez algum curso complementar?</p>
                <select>
                    <option value='Curso Técnico'>Curso Técnico</option>
                    <option value='Curso de Inglês'>Curso de Inglês</option>
                    <option value='Não fiz curso complementar'>Não fiz curso complementar</option>
                </select>
            </div>
        )
    }
}

export default Etapa3