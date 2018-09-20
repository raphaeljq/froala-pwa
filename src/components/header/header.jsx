//importacao do React
import React from 'react'
//importando o componente de links
import { NavLink} from 'react-router-dom'

const Header = () => (

    <header className="bg-dark" data-block-type="headers" data-id="2">
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="https://www.froala.com">
                <img src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_logo.png" height="30" alt="image"/>
              </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

            <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12">
              <ul class="navbar-nav justify-content-center">
                <li class="nav-item active">
                  <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.froala.com">Team</a>
                </li>
              </ul>
            </div>

            <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li class="nav-item active">
                <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>      
    
)
{/*Fim do menu de navegacao*/}  
export default Header