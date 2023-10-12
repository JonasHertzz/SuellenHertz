import React, { useState } from 'react';
import './style.css'
import imagemArte1 from './imagens/img1.jpeg'
import imagemArte2 from './imagens/img4.jpeg'
import imagemArte3 from './imagens/img6.jpeg'
import imagemArte4 from './imagens/img7.jpeg'

const ImagemComDescricao = ({ imagemArte1, descricao }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`imagem-com-descricao ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#">
        <img src={imagemArte1} alt="Imagem" />
        {hovered && <p className="descricao">{descricao}</p>}
      </a>

      <a href="#"><img src={imagemArte1} alt='imagemCabeçalho' title='imagemArte' className='imagemArte'/>
          </a>
    </div>
  );
};

export default ImagemComDescricao;
