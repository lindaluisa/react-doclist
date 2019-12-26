import React, { Component } from 'react';
import logo from './logo.svg';
import Doclist from './Doclist';
import Navbar from './Navbar';
import './DoclistApp.css';

class DoclistApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Doclist 
          name="Linda Nhu" 
          specialities={['Orthopaedic surgeons','Sports medicine']}
          contact="Mustermann Street"
          img="random-user.jpg"
          />
      </div>
    )
  }
}


export default DoclistApp; 