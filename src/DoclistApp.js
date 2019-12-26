import React, { Component } from 'react';
import Doclist from './Doclist';
import Navbar from './Navbar';
import DoclistApi from './DoclistApi'; 
import './DoclistApp.css';

class DoclistApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <DoclistApi />
      </div>
    )
  }
}


export default DoclistApp; 