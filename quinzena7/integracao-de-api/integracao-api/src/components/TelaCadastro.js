import React from "react";
import styled from "styled-components";
import axios from "axios";
import ListadeUsuarios from "./ListadeUsuarios";

const ContainerCadastro = styled.div` 

`

const InputInfos = styled.div ` 
`

class TelaCadastro extends React.Component{
    state = {
        valorNome: "",
        valorEmail: "",
    };

    alteraNome = (event) => {
        this.setState({valorNome: event.target.value})
    }

    alteraEmail = (event) => {
        this.setState({valorEmail: event.target.value})
    }

    criaUsuario = () => {
        const body = {
            name: this.state.valorNome,
            email: this.state.valorEmail,
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
                headers: {
                    Authorization: "patricia-sacramento-banu"
                }
            }
        ).then(() => {alert("Usuário cadastrado com sucesso!")
        }).catch(()=> {alert ("Erro! Não foi possível cadastrar o usuário.")});;

        this.setState({valorNome: ''})
        this.setState({valorEmail: ''})

    };



    render(){
        return(

            <ContainerCadastro>
                
                <h1>CADASTRO</h1>
                <InputInfos>
                <h2>Digite os seus dados: </h2>
                <input 
                value={this.state.valorNome} 
                placeholder='Nome' 
                onChange={this.alteraNome}/>

                <input 
                value={this.state.valorEmail} 
                placeholder='E-mail' 
                onChange={this.alteraEmail}/>
                
                </InputInfos>

                <button onClick={this.criaUsuario}>Enviar</button>
                



            </ContainerCadastro>

        )
    }
}

export default TelaCadastro