import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <Link to='/' className='navbar-brand'>
          Todos Filmes
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' smooth to='#default'>
              Explicação
            </Link>
          </li>
          <li>
            <Link className='nav-link' smooth to='#listing'>
              Listagem
            </Link>
          </li>
          <li>
            <Link className='nav-link' smooth to='#sobre'>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
