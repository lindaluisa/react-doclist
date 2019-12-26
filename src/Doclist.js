import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Doclist.css';

class Doclist extends Component {
  static PropTypes = {
    name: PropTypes.string.isRequired,
    specialities: PropTypes.arrayOf(PropTypes.string).isRequired,
    contact: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  render() {
    /* short form for const title = this.props.title*/
    const {name, img, contact} = this.props; 
    const specialities = this.props.specialities.map((spec, index) => (
      <li key={index}>{spec}</li>
    ));
    return (
      <div className="doclist__card">
        <div className="doclist__card--img">
          <img src={img} alt={name} />
        </div> 
        <div className="doclist__card--content"> 
          <h3 className="name">{name} </h3>
          <h4>Specialities:</h4>
          <ul>
            {specialities}
          </ul>
          <h4>Contact:</h4>
          <p> {contact} </p>
        </div>
      </div>
    );
  }
}


export default Doclist; 