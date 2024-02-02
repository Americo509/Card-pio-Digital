import hashtaurante from './assets/hashtaurante.webp'
import { useState } from 'react';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import {pratosPrincipais, sobremesas, bebidas} from './cardapio';

export function App () {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={hashtaurante} alt="" className="capa"/>
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(prato => 
          <ItemCardapio
              key={''}
              nome={prato.nome} 
              descricao={prato.descricao} 
              preco={prato.preco} 
              imagem={prato.imagem}  
          />
        )}
      </div>
    </>
  )
} 