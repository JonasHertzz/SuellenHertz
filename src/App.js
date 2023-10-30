
import { FaComputer } from 'react-icons/fa6'
import imagemCabeçalho from './imagens/pexels-photo.jpeg'
import './style.css';
import imagemArte1 from './imagens/img1.jpeg'
import imagemArte2 from './imagens/img4.jpeg'
import imagemArte3 from './imagens/img6.jpeg'
import imagemArte4 from './imagens/img7.jpeg'



function App() {
  return (
    <div className="App">
      <main>
        <header>
          <img src={imagemCabeçalho} alt='imagemCabeçalho' title='imagemCabeçalho'/>
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
          <a href="#"><img src={imagemArte1} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'/>
          </a>
          <a href="#"><img src={imagemArte2} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'/></a>
          <a href="#"><img src={imagemArte3} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'/></a>
          <a href="#"><img src={imagemArte4} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'/></a>
        </div>
      </main>

    </div>
  );
}

export default App;
