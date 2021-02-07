import React, { Component, Fragment } from "react";
import HeaderDetalhes from "../HeaderDetalhes";
class Detalhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalhes: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    let urlDetalhes = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(urlDetalhes)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ detalhes: json });
        console.log(json);
      });
  }

  render() {
    return (
      <Fragment>
        <HeaderDetalhes />
        <div className='details mt-4 mb-4'>
          <h1>{this.state.detalhes.nome}</h1>
          <img src={this.state.detalhes.foto} className='img-rounded' />
          {this.state.detalhes.length !== 0 && (
            <h2 className='text-danger mt-3'>Detalhes do filme</h2>
          )}
          <p>{this.state.detalhes.sinopse}</p>
        </div>
      </Fragment>
    );
  }
}

export default Detalhe;
