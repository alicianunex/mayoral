import React from 'react';

import json from './camisetas.json';

let camisetas = json;

class Camisetas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buscarString: '',
      camisetas: [],
    };
    this.manejarBusqueda = this.manejarBusqueda.bind(this);
    this.search = React.createRef();
  }

  componentDidMount() {
    this.setState({
      camisetas: camisetas,
    });
    this.search.current.focus();
  }

  manejarBusqueda() {
    this.setState({
      buscarString: this.search.current.value,
    });
  }

  render() {
    let camis = this.state.camisetas;
    let search = this.state.buscarString.trim().toLowerCase();

    if (search.length > 0) {
      camis = camis.filter(function (camiseta) {
        return camiseta.name.toLowerCase().match(search);
      });
    }

    return (
      <div className="container cont">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">Mayoral sample</h1>

            <input
              type="text"
              className="form-control"
              value={this.state.buscarString}
              ref={this.search}
              onChange={this.manejarBusqueda}
              placeholder="Busca una camiseta"
            />
          </div>
        </div>

        <div className="row mt-3">
          {camis.map((p) => {
            return (
              <div className="col-md-4" key={p.id}>
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={`${process.env.PUBLIC_URL}/img/${p.img}`}
                    alt={p.name}
                  />

                  <div className="card-body">
                    <h3 className="card-title mb-3">{p.name}</h3>

                    <p className="card-price">
                      <strong>Precio</strong> {p.price}
                    </p>

                    <p className="card-text">
                      <strong></strong> {p.info}
                    </p>
                  </div>
                  <button className="add">añadir</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Camisetas;
