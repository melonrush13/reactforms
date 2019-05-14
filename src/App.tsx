import React, { Component } from 'react';
import './App.css';

interface MyState {
  nameValue: string,
}
class App extends React.Component {

  state: MyState;
  constructor(props: any) {
    super(props);

    this.state = {
      nameValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({nameValue: event.currentTarget.value});
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
