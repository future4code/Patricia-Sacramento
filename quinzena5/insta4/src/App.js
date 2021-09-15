import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/id/1016/200/150'}
        />
        <Post
          nomeUsuario={'patricia'}
          fotoUsuario={'https://picsum.photos/id/102/50/50'}
          fotoPost={'https://picsum.photos/id/1000/200/150'}
        />
        <Post
          nomeUsuario={'claudia'}
          fotoUsuario={'https://picsum.photos/id/1025/50/50'}
          fotoPost={'https://picsum.photos/id/1003/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
