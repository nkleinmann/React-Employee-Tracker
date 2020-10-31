// destructuring component and able to use Component in class component versus React.Component
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { API } from './utils/API';
// import SortNames from "./components/sort/Sort";

function SortNames(employee) {
  console.log("This worked!");
  employee.sort();
  console.log(`This is the sorted version ${employee}`);
  // resource: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/


  // const myData = [].concat(this.state.employees)
  // .sort((a, b) => a.itemM > b.itemM ? 1: -1)
  // .map((item, i) =>
  // <div key={i}> {item.matchID} {item.timeM}{item.description} </div>
  // );
  // https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
}

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
            <button className="btn btn-primary searchBtn" onClick={SortNames}>Search</button>
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
                    <tbody>
                    <tr >
                    {/* key={employee.id.value.toString()} */}
                      <td><img src={employee.picture.thumbnail}></img></td>
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

// sort function
// function ProductTable(props) {
//   const { products } = props;
//   let sortedProducts = [...products];
//   sortedProducts.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   return (
//     <Table>
//       {/* as before */}
//     </Table>
//   );
// }
// https://www.smashingmagazine.com/2020/03/sortable-tables-react/



export default App;
