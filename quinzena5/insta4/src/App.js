import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

const FormularioNovoPost = styled.div`
  display: flex;
  flex-direction: column;
`

class App extends React.Component {

  state = {
    postagem: [
      {
        id:0,
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/id/1016/200/150',
      },
      {
        id:1,
        nomeUsuario: 'patricia',
        fotoUsuario: 'https://picsum.photos/id/102/50/50',
        fotoPost: 'https://picsum.photos/id/1000/200/150',
      },
      {
        id:2,
        nomeUsuario: 'claudia',
        fotoUsuario: 'https://picsum.photos/id/1025/50/50',
        fotoPost: 'https://picsum.photos/id/1003/200/150'
      }
      ],
           
      id: '',
      valorNomeUsuario: '',
      valorFotoUsuario: '',
      valorFotoPost: ''      
  }

  
  usuarioNovoPost = (event) => {
    this.setState({valorNomeUsuario: event.target.value})
  }

  fotoUsuarioNovoPost = (event) => {
    this.setState({valorFotoUsuario: event.target.value})
  }

  fotoNovoPost = (event) =>{
    this.setState({valorFotoPost: event.target.value})
  }

  criarNovoPost = () => {
    this.setState({id: this.state.postagem.length});
    let novoPost = {
      id: this.state.id, 
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };
    
    this.setState(this.state.postagem.push(novoPost))
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

      

        <FormularioNovoPost>
          <input value={this.state.valorNomeUsuario} onChange={this.usuarioNovoPost} placeholder="Nome do Usuário"/>
          <input value={this.state.valorFotoUsuario} onChange={this.fotoUsuarioNovoPost} placeholder="Foto do Usuário"/>
          <input value={this.state.valorFotoUsuario} onChange={this.fotoNovoPost} placeholder="Foto do Post"/>
          <button onClick={this.criarNovoPost}>Criar</button>
        </FormularioNovoPost>
        
      </MainContainer>
    );
  }
}

export default App;
