import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriaPlaylists from "./Componentes/CriaPlaylists";
import ListaPlaylists from "./Componentes/ListaPlaylists";


const PaginaContainer = styled.div ` 
  text-align: center;
`
const LinksPaginas = styled.div` 
  display: flex;
  justify-content: space-evenly;
`
class App extends React.Component {

  state = {
    pagina: 'criar-playlist',
  }

  mudaPagina = (event) => {
    this.setState({pagina: event.target.value})
  }

  paginaRenderizada (){
    switch (this.state.pagina){
      case "lista-playlists":
        return <ListaPlaylists />
      case "criar-playlist":
        return <CriaPlaylists />
    }
  }

  render (){
    console.log(this.state.pagina)
    return (
      <PaginaContainer>
        <header>
          <h1>LABEFY</h1>
        </header>
        <LinksPaginas>
          <button value="criar-playlist" onClick={this.mudaPagina}>Criar Playlist</button>
          <button value="lista-playlists" onClick={this.mudaPagina}>Lista de Playlists</button>
        </LinksPaginas>

        {this.paginaRenderizada()}

      </PaginaContainer>
    )
  }
 
}

export default App;
