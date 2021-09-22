import React from "react";
import styled from "styled-components";



class Etapa1 extends React.Component{
    render (){
        return(
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p> 1. Qual o seu nome?</p>
                <input name = {'nome'} />
                <p> 2. Qual a sua idade? </p>
                <input name = {'idade'} />
                <p> 3. Qual o seu e-mail? </p>
                <input name = {'email'} />
                <p> 4. Qual sua escolaridade? </p>
                <select>
                    <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                    <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                    <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                    <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                </select>
                
                <button>Próxima Etapa</button>
            </div>
        )
    }
}

export default Etapa1