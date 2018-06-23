import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'
import Footer from "./Footer/Footer"



let statusMessage = ""

class AppRouter extends Component {

  state = {
    statusMessage
  }

  render () {
    return (
      <Router>
        <div>
          <Navbar 
          statusMessage = {this.state.statusMessage}
          />
          <Route exact path='/' component={Home} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
