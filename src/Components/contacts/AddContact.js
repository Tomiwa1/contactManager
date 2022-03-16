import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'Name is Required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }
    const newContact = {
      // id: uuidv4(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      'http://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className=" card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}
                </form>
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-outline-success btn-lg btn-block "
                onClick={this.onSubmit.bind(this, dispatch)}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
