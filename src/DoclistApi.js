import React, { Component } from 'react';
import Doclist from './Doclist';
import PropTypes from 'prop-types';
import './DoclistApi.css';

class DoclistApi extends Component {
  static defaultProps = {
    doclist: [
      {
        name: "Max Müller",
        contact: "Mustermann Street 2",
        specialities: ["Pediatric surgeon","Surgeon", "Gastroentereologist"],
        img: "random-user3.jpg"
      },
      {
        name: "Lisa Rodenkirchen",
        contact: "Mustermann Street 1",
        specialities: ["Gereantrologist","General Physician","Researcher"],
        img: "random-user2.jpg"
      },
      {
        name: "Linda Nhu",
        contact: "Mustermann Street 3",
        specialities: ["Sports medicine","Orthopedic doctor","General MD"],
        img: "random-user.jpg"
      }
    ]
  }

  static propTypes = {
    doclist: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const doclist = this.props.doclist.map((d, index) => (
      <Doclist key={index} {...d} />
    ));
    
    return (
      <div className="doclist__list">
        {doclist}
      </div>
    )
  }
}

export default DoclistApi;