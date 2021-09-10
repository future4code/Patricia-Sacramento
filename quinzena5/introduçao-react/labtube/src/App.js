
import React from 'react';
import './App.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';


function App() {
  const titulo = 'Título do Vídeo'

  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>
      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src={img1} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src={img2} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src={img3} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
            <img src={img4} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
            <img src={img5} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
            <img src={img6} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media7" onClick={reproduzVideo}>
            <img src={img7} />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
            <img src={img8} />
            <h4>{titulo}</h4>
          </div>
        </section>

        </main>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
