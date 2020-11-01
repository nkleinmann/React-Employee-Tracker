// destructuring component and able to use Component in class component versus React.Component
import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';
import { API } from './utils/API';
import { Table } from '@material-ui/core';
// import SortNames from "./components/sort/Sort";

// class component
class App extends Component {
  constructor() {
    super();
    this.state = { employees: [] };
  }
  // api calls in this function (life cycle method)
  componentDidMount() {
    API.getEmployees()
    .then((response) => {
      this.setState({ 
        employees: response.data.results 
      });
    });
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.employees)}
        <div className="container">
          <div className="row header">
            <div className="col-12 d-flex justify-content-center">
              <h1>Employee Tracker</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <input className="searchBar" type="text" placeholder="Search.."></input>
            </div>
            <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-primary searchBtn">Search</button>
            {/* onClick={SortNames} */}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <table>
                <thead>
                <tr>
                  <th>Profile Image</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
                </thead>
                {this.state.employees.map((employee) => {
                  return (
                    <tbody key={employee.id.value}>
                    <tr>
                      <td ><img src={employee.picture.thumbnail}></img></td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.email}</td>
                      <td>{employee.cell}</td>
                    </tr>
                    </tbody>
                  )
                })}
              </table>

            </div>
          </div>
        </div>

      </div>
    )
  }
}



export default App;

