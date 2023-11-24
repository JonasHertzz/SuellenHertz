
import { FaComputer } from 'react-icons/fa6'
import imagemCabeçalho from './imagens/design.jpg'
import './style.css';
import imagemArte1 from './imagens/img1.jpeg'
import imagemArte2 from './imagens/img4.jpeg'
import imagemArte3 from './imagens/img6.jpeg'
import imagemArte4 from './imagens/img7.jpeg'

function mostrarDescricao() {
  const imagem = document.getElementById('imagem1')
  const descricao = document.getElementById('descricao1')

  imagem.style.filter = 'blue(100%) brightness(0.5) sepial(1)';

  descricao.style.opacity = '1';
}

function esconderDescricao() {
  const img = document.getElementById('imagem1');
  const descriçao = document.getElementById('descricao1');

img.style.filter = 'none';
descriçao.style.opacity = '0';
}

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <img src={imagemCabeçalho} alt='imagemCabeçalho' title='imagemCabeçalho' id='imgCabecalho'/>
        </header>
        <nav className='nav'> 
          <a href='#'>Inicio</a>
          <a href='#'>Sobre</a>
          <a href='#'>Atuação</a>
          <a href='#'>Portifólio</a>
          
        </nav>
        <div>
          <h1>
            sobre
          </h1>
          <p id='sobre'>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h1>atuação</h1>
          <FaComputer size={80} className='icone'/>
          <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h2>Design Digital</h2>
          <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h2>Design Gráfico</h2>
          <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h2>identidade visual</h2>
          <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h2>apresentações</h2>
          <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.
          </p>
          <h1>Portifólio</h1>

          <div className='descricao' onMouseOver={mostrarDescricao} onMouseOut={esconderDescricao}>
          <a href="#"><img src={imagemArte1} alt='imagemCabeçalho' title='imagemArte' className='imagemArte' id='imagem1'/>
          <p id='descricao1'>Essa é a descricao da 1º img</p>
          </a>

          <a href="#"><img src={imagemArte2} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'id='imagem2'/></a>
          <a href="#"><img src={imagemArte3} alt='imagemCabeçalho' title='imagemArte' className='imagemArte' id='imagem3'/></a>
          <a href="#"><img src={imagemArte4} alt='imagemCabeçalho' title='imagemArte' className='imagemArte' id='imagem4'/></a>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
