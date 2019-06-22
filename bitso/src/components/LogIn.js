import React from 'react';
import axios from 'axios';
import Home from './Home';
// import "/Users/fernandoantoniozepedabermudez/Desktop/cintaRoja/proyectoFinal/cintaRojaBackendBitso/index";

const HOST = 'http://localhost:8000';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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

  render() {
    return (
      <div className="container">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('me ejecute')
            axios.post(`${HOST}/user/login`,{...this.state})
            .then(function (response) {
                window.open("/", "_self")
            })
            .catch(function (error) {
                console.log('error', error);
            });
          }}
        >
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">Ingresa tu usuario</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1 " />
            <label className="form-check-label" for="exampleCheck1">No soy un robot</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

export default LogIn