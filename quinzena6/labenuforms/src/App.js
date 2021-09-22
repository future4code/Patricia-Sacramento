
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components.js/Etapa1';
import Etapa2 from './components.js/Etapa2';
import Etapa3 from './components.js/Etapa3';
import Fim from './components.js/Fim';

const PaginaInicial = styled.div `
  text-align: center;
`

const BotaoProximaPagina = styled.button ` 
  margin-top: 2%;
`
class App extends React.Component{

  state = {
    etapa: 1,
  }

  selecionaEtapa = () => {
    if (this.state.etapa === 1){
      return <Etapa1 />
    } else if (this.state.etapa === 2){
      return <Etapa2 />
    } else if (this.state.etapa === 3){
      return <Etapa3 />
    } else if (this.state.etapa >= 4){
      return <Fim />
    } 
  }

  alteraEtapa = () => {
    this.setState({etapa: (this.state.etapa + 1)})
  }
  

  render() {
 
    return (
      <PaginaInicial>
        <h1>LABENUFORMS</h1>

        {this.selecionaEtapa()}

        <BotaoProximaPagina onClick={this.alteraEtapa} >Próxima Etapa</BotaoProximaPagina>
      </PaginaInicial>
    );
  }
}

export default App;
