import react from "react";
import styled from "styled-components";
import axios from "axios";
import React from "react";

const PaginaContainer = styled.div ` 
  text-align: center;
  background-color: #FFCCBD;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;

`
const InputNome = styled.input ` 
    max-width: 20%;
    height: 3%;
    width: 30%;
`
const BotaoNome = styled.button ` 
    max-width: 5%;
    height: 4%;
    margin-left: 1%;
    background-color:#FF5F48 ;
    outline: none;
    border: none;
    width: 5%;
    font-weight: bold;

    &:active {
        background-color: #FF907E;
    }
`

class CriaPlaylists extends React.Component{
    state = {
        playlist: "",
    }


    nomePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

    criaPlaylist = () => {
        const body = {
            name: this.state.playlist
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "patricia-sacramento-banu"
            }
        }).then(() => {alert(`A playlist foi criada com sucesso!`)
        }).catch(() => {alert("Erro! Uma playlist com esse nome já existe")})
    };

    render(){
        return(
            <PaginaContainer> 
                <InputNome value={this.state.playlist} placeholder="Nome da Playlist" onChange={this.nomePlaylist} />
                <BotaoNome onClick={this.criaPlaylist}>Criar</BotaoNome>
            </PaginaContainer>
        )
    }
}

export default CriaPlaylists