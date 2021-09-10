import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img1 from './img/img1.jpg'
import img2 from './img/img2.png'
import cat from './img/cat.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import imgemail from './img/email.png'
import imgendereco from './img/endereco-residencial.png'




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={img1} 
          nome="Patrícia" 
          descricao="Oi, eu sou a Patrícia. Sou professora de História de Educação Básica e Desenvolvedora Front-End em formação. Adoro ler e ver séries. Amo meus gatos, Jorge Ricardo e Sebastião Augusto, e minha cachorra, Lola. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={imgemail}
        titulo="E-mail: "
        info="patriciargsacramento@gmail.com"
        /> 
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={imgendereco}
        titulo="Endereço: "
        info="Rua São Luiz, 730 - Belo Horizonte"
        /> 
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={img2} 
          nome="Governo do Estado de Minas Gerais" 
          descricao="Professora de História de Educação Básica" 
        />
        
        <CardGrande 
          imagem={cat} 
          nome="VIDA" 
          descricao="Vivendo ou apenas existindo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
