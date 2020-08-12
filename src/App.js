import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'; 
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state={
         monstors:[],
         searchfeild:""
         };
     
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monstors:users}));
  }
  handleChange=(e)=>{
     this.setState({searchfeild:e.target.value});
  }
  
  render() {
    const {monstors,searchfeild}=this.state;
    const filteredmonstor=monstors.filter(monstor=>monstor.name.toLowerCase().includes(searchfeild.toLowerCase()));
    return (
      <div className="App">
        <h1>Monstor rolodex</h1>
        <SearchBox  placeholder='serch monstor' handleChange=
        {this.handleChange}
       ></SearchBox>
       <CardList monstors={filteredmonstor} >
           </CardList> 
      </div>
    );
  
}}

export default App;
