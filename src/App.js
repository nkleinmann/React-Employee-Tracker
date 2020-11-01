// destructuring component and able to use Component in class component versus React.Component
import React, { Component, useState } from 'react';
// import axios from 'axios';
import './App.css';
import { API } from './utils/API';
// import { Table } from '@material-ui/core';
import EnhancedTable from './components/employeeInfo/Employee';
// import SortNames from "./components/sort/Sort";

// class component
class App extends Component {
  constructor() {
    super();
    this.state = { 
      employees: [],
      currentSearchArray: []
     };
  }
  // api calls in this function (life cycle method)
  componentDidMount() {
    API.getEmployees()
    .then((response) => {
      console.log(response);
      let employeeDetails = response.data.results.map(employeeInfo => {
        return {
          id: employeeInfo.id.value,
          first: employeeInfo.name.first,
          last: employeeInfo.name.last,
          email: employeeInfo.email,
          phone: employeeInfo.phone,
          photo: employeeInfo.picture.thumbnail
        }
      })
      this.setState({ 
        employees: employeeDetails,
        currentSearchArray: employeeDetails
        // response.data.results 
      });
      
    })
    .catch(err => console.log(err));
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
            </div>
          </div>
          <br />
          <EnhancedTable rows={this.state.currentSearchArray}/>
          {/* <div className="row">
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

            </div> */}
          {/* </div> */}
        </div>

      </div>
    )
  }
}

export default App;

