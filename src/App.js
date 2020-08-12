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
  
  render() {
    const {monstors,searchfeild}=this.state;
    const filteredmonstor=monstors.filter(monstor=>monstor.name.toLowerCase().includes(searchfeild.toLowerCase()));
    return (
      <div className="App">
        <SearchBox  placeholder='serch monstor' handleChange={
        e=>{this.setState({searchfeild:e.target.value});
        }} ></SearchBox>
       <CardList monstors={filteredmonstor} >
           </CardList> 
      </div>
    );
  
}}

export default App;
