// destructuring component and able to use Component in class component versus React.Component
import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// functional component
// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

// class component
class App extends Component {
  constructor() {
    super();
    this.state = { employees: [] };
  }
  // api calls in this function (life cycle method)
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
      this.setState({ employees: response.data.results });
    });
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.employees)}
        <table>
          <tr>
            <th>Profile Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {this.state.employees.map((employee) => {
            return (
              <tr>
                <td><img src={employee.picture.thumbnail}></img></td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}


export default App;
