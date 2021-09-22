import React from "react";
import styled from "styled-components";
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';

const PrimeiraEtapa = styled.div ` 
    text-align: center;
`



class Etapa1 extends React.Component{
    state ={
        escolaridade: 'Ensino Médio Incompleto',
        nome: '', 
        idade: '',
        email: '', 

    }
    
    dadosEducacionais = (event) => {
        if (event.target.value === 'Ensino Médio Incompleto' 
            || event.target.value === 'Ensino Médio Completo'){
            this.setState({escolaridade: event.target.value})      
                        
        } else if (event.target.value === 'Ensino Superior Incompleto' 
            || event.target.value === 'Ensino Superior Completo'){
            this.setState({escolaridade: event.target.value})              
        }    
    }

   armazenaNome = (event) => {
    this.setState({nome: event.target.value})
   }
   armazenaIdade = (event) => {
    this.setState({idade: event.target.value})
   }
   armazenaEmail = (event) => {
    this.setState({email: event.target.value})
   }
   
    render (){
        return(
            <PrimeiraEtapa> 
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p> 1. Qual o seu nome?</p>
                <input name = {'nome'} onChange={this.armazenaNome} value={this.state.nome}/>
                <p> 2. Qual a sua idade? </p>
                <input name = {'idade'} onChange={this.armazenaIdade} value={this.state.idade}/>
                <p> 3. Qual o seu e-mail? </p>
                <input name = {'email'} onChange={this.armazenaEmail} value={this.state.email}/>
                <p> 4. Qual sua escolaridade? </p>
                <select value={this.state.value} onChange={this.dadosEducacionais}>
                    <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                    <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                    <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                    <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                </select>
                
          </PrimeiraEtapa>
        )
    }
}

export default Etapa1