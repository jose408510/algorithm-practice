import React, { Component } from 'react';
import Project from './Projects/Projects';


class App extends Component {
   state = {
    persons: [
      { name: 'Max' , Age: "23"},
      { name: 'Jose' , Age: "25"}
    ],
      otherState: 'Some other value '
  }

  switchNameHandler = (newName) => {
    // editing state
    this.setState({
      persons: [
      { name: newName , Age: "30"},
      { name: 'Tim' , Age: "25"}
    ]})
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: event.target.value, Age: "1000"},
      { name: 'new_name2' , Age: "5000"}
    ]})
  }
    togglePersonHandler = () => {
      const doesShow = this.state.showsPersons;
      this.setState({showsPersons: !doesShow})
    }

  render() {
    return (
      <div className="App">
        <h1>hello {this.state.persons[0].name} {console.log(this.state.persons[0].name)}</h1>
      {/* one way to do this...<button onClick={this.switchNameHandler.bind(this, "MAXIMILION")}>Switch Name</button> */}
      <button onClick={ () => this.switchNameHandler("Bob")}>Switch Name</button> 
        <Project 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "JOSe")}
        changed={this.nameChangedHandler}
        >Hello my name is Jose </Project>
      {
        this.state.showsPersons === true ?
         <Person onClick={this.togglePersonHandler}>
      </Person>  :null
      }
      </div>
    );
  }
}

export default App;
