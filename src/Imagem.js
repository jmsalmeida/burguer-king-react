import React, { Component } from 'react';

class Imagem extends Component {
    render() {
        let imagem = this.props.imagem;
        let titulo = this.props.titulo;
        return (
            <div>
                <img className="imagemComponent" src={imagem} />
                <p>{titulo}</p>
            </div>

        );
    }
}

export default Imagem;