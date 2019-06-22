import React from 'react';
import axios from 'axios';

const URL = 'https://rest.coinapi.io/v1/exchangerate/BTC/MXN';
const URL2 = 'https://rest.coinapi.io/v1/exchangerate/ETH/MXN';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            ETH: '',
            BTC: '',
            in1: '',
            in2: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        },  () => {
          console.log(this.state)
        });
      }

      
    userBTC = (btcUsario) => {
        axios.get(URL, {
            headers: {
                "X-CoinAPI-Key": "5AA5F742-BD42-4C5B-919D-257016F401F3"
            }
        })
            .then((response) => {
                // response.data
                let resultado = response.data.rate * (btcUsario)
                let fecha = new Date
                this.setState({
                    BTC : `Tienes ${btcUsario} BTC lo cual equivale a $MXN ${resultado.toFixed(2)} a las ${fecha}`,
                })
            });
    }
    
     userETH = (ethUsario) => {
         console.log('me ejuctox')
        axios.get(URL2, {
            headers: {
                "X-CoinAPI-Key": "5AA5F742-BD42-4C5B-919D-257016F401F3"
            }
        })
            .then((response) => {
                // response.data
                let resultado = response.data.rate * (ethUsario)
                let fecha = new Date;
                this.setState({
                    ETH: `Tienes ${ethUsario} ETH lo cual equivale a $MXN ${resultado.toFixed(2)} a las ${fecha}`,
                })
            });
    }
    
    handleClick = (value, type) => {
        const cantidad = parseInt(value);
        if(type === 1) {
            this.userBTC(cantidad);
        } else {
            this.userETH(cantidad);
        }
    }
    render() {
        return (
            <div>
                <h1>BIENVENIDO A CRYPTOCAL</h1>
                <br />
                <div className="container">
                    <div className="row moneda">
                        <div className="card col-4" >
                            <div className="card-body">
                                <h5 className="card-title">BTC</h5>
                                <p className="card-text">Cantidad de BTH:</p>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BTH"
                                    name="in1"
                                    value={this.state.in1}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <p className="card-text">Valor en MXN:</p>
                                <p className="card-text">{this.state.BTC}</p>
                                <button onClick={() => this.handleClick(this.state.in1, 1)}>Actualizar</button>
                            </div>
                        </div>

                        <div className="card col-4" >
                            <div className="card-body">
                                <h5 className="card-title">ETH</h5>
                                <p className="card-text">Cantidad de ETH:</p>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BTH"
                                    name="in2"
                                    value={this.state.in2}
                                    onChange={this.handleInputChange}
                                /><br />
                                <p className="card-text">Valor en MXN:</p>
                                <p className="card-text">{this.state.ETH}</p>
                                <button onClick={() => this.handleClick(this.state.in2, 2)}>Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home