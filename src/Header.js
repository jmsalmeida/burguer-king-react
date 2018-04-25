import React, {Component} from 'react';
import './App.css';
import logo from './images/bk.png';

class Header extends Component{
    render() {
        return(
            <header>
                <nav className="menu-desktop">
                    <img src={logo}/>
                    <ul>
                        <a>Inicio</a>
                        <a>Sobre</a>
                        <a>Contato</a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;