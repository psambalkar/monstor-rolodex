import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
         monstors:[]
         };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monstors:users}));
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monstors.map(monstor=>(<h1 key={monstor.id}>{monstor.name}</h1>))
        }
         
      </div>
    );
  
}}

export default App;
