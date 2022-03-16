import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Contact</span> list
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
