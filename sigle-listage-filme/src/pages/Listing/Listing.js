import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Card.css'
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };

    this.loadingListing = this.loadingListing.bind(this);
  }

  componentDidMount() {
    this.loadingListing();
  }

  loadingListing() {
    let url = "https://sujeitoprogramador.com/r-api/?api=filmes";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ filmes: json });
        console.log(json);
      });
  }

  render() {
    return (
      <div className='containerListing' id='listing'>
        <h1 className='mt-4'>
          <strong>Listagem</strong>
        </h1>
        <div className='d-flex flex-wrap mt-4'>
          {this.state.filmes.map((filmes) => {
            return (
              <div className='col-4 mb-4' key={filmes.id}>
                <div className='card'>
                  <img className='card-img-top w-100' src={filmes.foto} />
                  <div className='card-body'>
                    <h3 className='card-title tit-card'>{filmes.nome}</h3>
                    <p className='card-text text-card'>
                      {filmes.sinopse}
                    </p>
                    <Link to={`/detalhe/${filmes.id}`}>Acessar</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <hr />
      </div>
    );
  }
}

export default Listing;
