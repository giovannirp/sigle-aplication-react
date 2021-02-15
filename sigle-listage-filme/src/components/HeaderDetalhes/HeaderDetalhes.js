import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function HeaderDetalhes() {
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <Link to='/' className='navbar-brand'>
          Todos Filmes
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' smooth to='/'>
              Voltar para Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDetalhes;
