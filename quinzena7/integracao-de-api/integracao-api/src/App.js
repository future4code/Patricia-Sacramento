import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import axios from 'axios';
import ListadeUsuarios from './components/ListadeUsuarios';
import styled from 'styled-components';


const PaginaInicial = styled.div ` 

`



class App extends React.Component {

  state = {
    pagina: "tela-cadastro",
  };

  paginaRenderizada(){
    
    switch (this.state.pagina){
      case "lista-usuarios":
        return <ListadeUsuarios />
      case "tela-cadastro":
        return <TelaCadastro />
    }
  }

  mudaPagina = (event) => {
    this.setState({pagina: event.target.value})
  }

  render(){
    return (
      <PaginaInicial>
        <button value={"lista-usuarios"} onClick={this.mudaPagina}>Lista de Usuários</button>
        {this.paginaRenderizada()}

      </PaginaInicial>
    );
  }
 
}

export default App;
