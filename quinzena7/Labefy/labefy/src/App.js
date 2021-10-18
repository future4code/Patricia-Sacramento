import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriaPlaylists from "./Componentes/CriaPlaylists";
import ListaPlaylists from "./Componentes/ListaPlaylists";


const PaginaContainer = styled.div ` 
  text-align: center;
  background-color: #FFCCBD;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;

`
const LinksPaginas = styled.div` 
  display: flex;
  justify-content: space-evenly;
  margin-top: 10%;

  >button{
    border: none;
    background-color: #FFCCBD;
    font-size: large;
    font-weight: 500;
    border-bottom: 2px solid black;

  }
`
const Header = styled.header` 
  background-color: black;
  color: #FA6C5F;
  margin: 0;
  max-width: 100vw;
  height: 10%;
  max-height: 10%;

  >h1{
    margin: 0;
    padding: 1%
  }
`

const InputNome = styled.div`
  margin-top: 5%;

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
    return (
  
      <PaginaContainer>

        <Header>
          <h1>LABEFY</h1>
        </Header>

        <LinksPaginas>
          <button value="criar-playlist" onClick={this.mudaPagina}>Criar Playlist</button>
          <button value="lista-playlists" onClick={this.mudaPagina}>Lista de Playlists</button>
        </LinksPaginas>
        
        <InputNome>
          {this.paginaRenderizada()}
        </InputNome>

      </PaginaContainer>
    )
  }
 
}

export default App;
