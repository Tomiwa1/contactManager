import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContactInfo: false
    };
  }
  Toggle = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="  card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fas fa-sort-down"
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.Toggle.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
