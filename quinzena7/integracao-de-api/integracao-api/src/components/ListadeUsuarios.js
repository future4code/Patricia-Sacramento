import React from "react";
import styled from "styled-components";
import axios from "axios";

const ListaUsuarios = styled.div ` 

`


class ListadeUsuarios extends React.Component{

    state = {
        usuarios: [],
    }


    componentDidMount(){
        this.buscaUsuarios()
    }

    componentDidUpdate(){
        this.buscaUsuarios()
    }

    buscaUsuarios = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "patricia-sacramento-banu"
            }
        }).then((resposta) =>{
            this.setState({usuarios: resposta.data})
        })
    }

    deletaUsuario = (event) => {
        const idUsuario = event.target.value

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, {
            headers: {
                Authorization: "patricia-sacramento-banu"
            }
        }).then(() => {alert("Usuário removido com sucesso!")
        }).catch(() => {alert("Usuário não foi removido. Tente novamente!")})

    }

    render(){

        const lista = this.state.usuarios.map((usuario) => {
            return <li>
                {usuario.name}
                <button 
                value={usuario.id}
                onClick={this.deletaUsuario}
                >Deletar</button>
                </li>
        });

        return(
            <ListaUsuarios>
                <h1>LISTA DE USUÁRIOS</h1>
 {/*                <button onClick={}>Voltar</button> */}
                <ul>
                    {lista}
                </ul>
            
            </ListaUsuarios>
        )
    }
}

export default ListadeUsuarios