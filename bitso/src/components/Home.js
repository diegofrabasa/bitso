import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Hola *USUARIO*</h1>
            <br />
                <div className="container">
                    <div className="row moneda">
                        <div className="card col-4" >
                            <div className="card-body">
                                <h5 className="card-title">BTC</h5>
                                <p className="card-text">Cantidad de BTH:</p>
                                <p className="card-text">- # -</p>
                                <p className="card-text">Valor en MXN:</p>
                                <p className="card-text">- $ -</p>
                                <a href="/" className="btn btn-primary">Actualizar</a>
                            </div>
                        </div>

                        <div className="card col-4" >
                            <div className="card-body">
                                <h5 className="card-title">ETH</h5>
                                <p className="card-text">Cantidad de ETH:</p>
                                <p className="card-text">- # -</p>
                                <p className="card-text">Valor en MXN:</p>
                                <p className="card-text">- $ -</p>
                                <a href="/" className="btn btn-primary">Actualizar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home