import React from 'react';


class LogIn extends React.Component {
    render() {
        return (
            <div className="container">

            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">Ingresa tu usuario</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1 "/>
    <label class="form-check-label" for="exampleCheck1">No soy un robot</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
            </div>
        )
    }
}

export default LogIn