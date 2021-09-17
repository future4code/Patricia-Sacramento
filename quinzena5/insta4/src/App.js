import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

class App extends React.Component {

  state = {
    postagem: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/id/1016/200/150',
      },
      {
        nomeUsuario: 'patricia',
        fotoUsuario: 'https://picsum.photos/id/102/50/50',
        fotoPost: 'https://picsum.photos/id/1000/200/150',
      },
      {
        nomeUsuario: 'claudia',
        fotoUsuario: 'https://picsum.photos/id/1025/50/50',
        fotoPost: 'https://picsum.photos/id/1003/200/150'
      },
      {
        valorNomeUsuario: '',
        valorFotoUsuario: '',
        valorFotoPost: ''
      }
    ]
  }

  




  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={this.state.postagem[0].nomeUsuario}
          fotoUsuario={this.state.postagem[0].fotoUsuario}
          fotoPost={this.state.postagem[0].fotoPost}
        />
        <Post
           nomeUsuario={this.state.postagem[1].nomeUsuario}
           fotoUsuario={this.state.postagem[1].fotoUsuario}
           fotoPost={this.state.postagem[1].fotoPost}
        />
        <Post
          nomeUsuario={this.state.postagem[2].nomeUsuario}
          fotoUsuario={this.state.postagem[2].fotoUsuario}
          fotoPost={this.state.postagem[2].fotoPost}
        />

        
        <input value={this.state.postagem[3].valorNomeUsuario}>NomeUsuario</input>
        <input>FotoUsuario</input>
        <input>FotoPost</input>
        <button>Enviar</button>
        
      </MainContainer>
    );
  }
}

export default App;
