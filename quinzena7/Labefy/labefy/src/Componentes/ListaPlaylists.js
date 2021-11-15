import react from "react";
import styled from "styled-components";
import axios, { Axios } from "axios";
import React from "react";

const PaginaContainer = styled.div ` 
  text-align: center;
  background-color: #FFCCBD;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center; 

`

const ListadePlaylists = styled.ul` 
    
`
const ItensPlaylists = styled.li` 
    display: flex;
    width: 20vw;
    margin: 3%;
    font-size: large;
    align-items: center;
    
    >button { 
        margin-left: 10%;
        padding: 3%;
        background-color:#FF5F48 ;
        outline: none;
        border: none;
        font-weight: bold;

        &:active {
            background-color: #FF907E;
        }
    }

`

class ListaPlaylists extends React.Component{
    state ={
        playlists: [],
        playlistsDetalhadas: [],
    }

    componentDidMount = () => {
        this.pegaPlaylists()
    };
    
    componentDidUpdate = () => {
        this.pegaPlaylists()
    };

    pegaPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "patricia-sacramento-banu" 
            }
        }).then((resposta) => {
            this.setState({playlists: resposta.data.result.list})
        })
    }

    deletaPlaylist = (event) => {
        const idPlaylist = event.target.value

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, {
            headers: {
                Authorization: "patricia-sacramento-banu"
            }
        }).then(() => {alert("Playlist removida com sucesso!")
        }).catch(() => {alert("Playlist não removida. Tente novamente!")})

    }


    verDetalhesPlaylist = (event) => {
        const idPlaylist = event.target.value

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, {
            headers: {
                Authorization: "patricia-sacramento-banu"
            }
        }).then((resposta) => {
            this.setState({playlistsDetalhadas: resposta.data.result.tracks})
        })

    }

    render(){
        const renderPlaylists = this.state.playlists.map((playlist) => {
            return <ItensPlaylists>{playlist.name}
            <button value={playlist.id} onClick={this.deletaPlaylist}>Deletar</button>
            <button value={playlist.id} onClick={this.verDetalhesPlaylist}>Ver mais</button>
            </ItensPlaylists>
        }) 

          



        return(
            <PaginaContainer>
                <ListadePlaylists>
                    {renderPlaylists}   
                </ListadePlaylists> 

            </PaginaContainer>
        )
    }
}

export default ListaPlaylists