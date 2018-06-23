import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homeLanding">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ARIES AND FRIENDS</h1>
                <p className="lead">
                  {" "}
                  More than just a connection. It's a relationship.
                </p>
                <hr />
                <a className="btn btn-lg btn-info mr-2" href="/Register">
                  Sign Up
                </a>
                <a className="btn btn-lg btn-light" href="/Login">
                  Login
                </a>
                <hr />
               
                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Page Views (For Devs Only)
                     </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/Admin">Admin Page</a>
                      <a className="dropdown-item" href="/Representative">Representative Page</a>
                      <a className="dropdown-item" href="/Buyer">Buyer Page</a>
                      <a className="dropdown-item" href="/Seller">Seller Page</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
