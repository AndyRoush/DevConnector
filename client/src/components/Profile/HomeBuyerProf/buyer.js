import React, { Component } from "react";

class Buyer extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">BUYER PAGE</h1>
                                    <p className="lead">
                                        {" "}
                                        Text Here
                                    </p>
                                    <hr />
                                    <a className="btn btn-lg btn-info mr-2" href="#">
                                        View Matched Houses</a>
                                    <br />
                                    <br />
                                    <a className="btn btn-lg btn-light" href="#">
                                        Favorite Homes (Sellers)</a>
                                    <br />
                                    <br />

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


            </div>
        )
    }
}

export default Buyer;