import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerCadastro = styled.div` 

`

const InputNome = styled.div ` 
`

class TelaCadastro extends React.Component{
    state = {
        valorUsuario: '',
    };

    alteraUsuario(){

    }


    render(){
        return(

            <ContainerCadastro>
                <h1>CADASTRO</h1>
                
                <InputNome>
                <h2>Digite os seus dados: </h2>
                <input type='text' placeholder='nome' onChange={this.alteraUsuario()}/>
                <input type='text' placeholder='e-mail' onChange={this.alteraUsuario()}/>
                <button onClick={this.criaUsuario()}>Enviar</button>
                </InputNome>



            </ContainerCadastro>

        )
    }
}

export default TelaCadastro