//importacao do React
import React from 'react'
//importando o componente de links
import { NavLink} from 'react-router-dom'
//importando imagem de logo
import logo from '../../imgs/logo.png'

const Header = () => (

    <header class="transparent" data-block-type="headers" data-id="2" >
        <div className="container">
        <nav class="navbar" data-toggle="sticky-onscroll">
          <a class="navbar-brand" href="#"><img src={logo} /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainnavbar" aria-controls="mainnavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainnavbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                
              </li>
            </ul>
            
          </div>
        </nav>
        </div>
        
      </header>  
          
    
)
{/*Fim do menu de navegacao*/}  
export default Header