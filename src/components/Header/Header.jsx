import React from 'react'
import  "./style.css"
const Header = () => {

  return (
    <header className='header'>
        <nav class="navegação">
            <ul class="listagem">
                <li>
                    <a class="caminho" href="#">Início</a>
                </li>
                <li>
                    <a class="caminho" href="#">Produtos</a>
                </li>
                <li>
                    <a class="caminho" href="#">Contato</a>
                </li>
                <li>
                    <a class="caminho" href="#">Sobre nós</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
